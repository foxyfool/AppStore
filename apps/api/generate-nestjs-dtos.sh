#!/bin/bash

# Array of model names
models=(
  "User"
  "Address"
  "Order"
  "Invoice"
  "InvoiceItem"
  "ShippingDetails"
  "OrderItem"
  "Product"
  "Category"
  "Payment"
  "Cart"
  "CartItem"
  "Review"
  "Image"
)

# Function to generate DTO file content
generate_dto_content() {
  local model_name=$1
  local dto_name="${model_name}Dto"
  
  echo "import { IsString, IsNumber, IsDate, IsOptional, IsEnum } from 'class-validator';"
  echo "import { Expose, Transform } from 'class-transformer';"
  echo ""
  echo "export class $dto_name {"
  echo "  @IsString()"
  echo "  @Expose()"
  echo "  id: string;"
  echo ""
  echo "  // TODO: Add more fields here based on your $model_name model"
  echo "  // Example:"
  echo "  // @IsString()"
  echo "  // @Expose()"
  echo "  // name: string;"
  echo ""
  echo "  @IsDate()"
  echo "  @Expose()"
  echo "  @Transform(({ value }) => new Date(value))"
  echo "  createdAt: Date;"
  echo ""
  echo "  @IsDate()"
  echo "  @Expose()"
  echo "  @Transform(({ value }) => new Date(value))"
  echo "  updatedAt: Date;"
  echo "}"
}

# Loop through each model and generate DTOs
for model in "${models[@]}"; do
  # Convert model name to kebab-case
  kebab_case=$(echo $model | sed 's/[A-Z]/-&/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')

  echo "Generating DTO for $model..."

  # Generate DTO
  dto_dir="src/${kebab_case}/dto"
  mkdir -p $dto_dir
  dto_file="${dto_dir}/${kebab_case}.dto.ts"
  generate_dto_content $model > $dto_file

  echo "Generated DTO for $model"
  echo "-----------------------------------"
done

# Install necessary packages
npm install --save class-validator class-transformer

echo "All DTOs have been generated successfully!"
echo "class-validator and class-transformer have been installed."
echo "Remember to customize the DTOs with the appropriate fields and validators for each model."