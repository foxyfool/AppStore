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

# Loop through each model and generate NestJS components
for model in "${models[@]}"; do
  # Convert model name to kebab-case
  kebab_case=$(echo $model | sed 's/[A-Z]/-&/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')

  echo "Generating components for $model..."

  # Generate module
  nest generate module $kebab_case

  # Generate controller
  nest generate controller $kebab_case

  # Generate service
  nest generate service $kebab_case

  echo "Generated components for $model"
  echo "-----------------------------------"
done

echo "All components have been generated successfully!"