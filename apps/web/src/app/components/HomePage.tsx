import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import Image from 'next/image'
import React from 'react'

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <SmartphoneIcon className="h-6 w-6" />
          <span className="sr-only">Store App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Phones
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* <Image
                src="/placeholder.svg"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                width="550"
                height="550"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Refurbished Phones at Unbeatable Prices
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover top-quality refurbished phones from leading brands,
                    backed by our comprehensive warranty. Upgrade your device
                    without breaking the bank.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Our Latest Deals
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of top-quality refurbished phones, each
                  meticulously inspected and backed by our warranty. Find the
                  perfect device to upgrade your experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  {/* <Image
                    src="/placeholder.svg"
                    alt="iPhone 12"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    width="200"
                    height="200"
                  /> */}
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-semibold">iPhone 12</h3>
                    <p className="text-muted-foreground">Excellent Condition</p>
                    <p className="text-lg font-bold">₹29,999</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Buy Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  {/* <Image
                    src="/placeholder.svg"
                    alt="Samsung Galaxy S21"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    width="200"
                    height="200"
                  /> */}
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-semibold">
                      Samsung Galaxy S21
                    </h3>
                    <p className="text-muted-foreground">Good Condition</p>
                    <p className="text-lg font-bold">₹24,999</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Buy Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  {/* <Image
                    src="/placeholder.svg"
                    alt="OnePlus 9 Pro"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    width="200"
                    height="200"
                  /> */}
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-semibold">OnePlus 9 Pro</h3>
                    <p className="text-muted-foreground">Excellent Condition</p>
                    <p className="text-lg font-bold">₹34,999</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Buy Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  {/* <Image
                    src="/placeholder.svg"
                    alt="Google Pixel 6 Pro"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    width="200"
                    height="200"
                  /> */}
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-semibold">
                      Google Pixel 6 Pro
                    </h3>
                    <p className="text-muted-foreground">Good Condition</p>
                    <p className="text-lg font-bold">₹39,999</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Buy Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers who have experienced the
                  quality and value of our refurbished phones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-start justify-center gap-4">
                  <div className="flex items-center gap-2">
                    {/* <Image
                      src="/placeholder.svg"
                      alt="Customer Avatar"
                      className="h-12 w-12 rounded-full"
                    /> */}
                    <div>
                      <h3 className="text-lg font-semibold">Anita Sharma</h3>
                      <p className="text-muted-foreground">Verified Buyer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Im so impressed with the quality of the refurbished phone I
                    purchased. It looks and performs like new, and the price was
                    unbeatable. Highly recommend!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-center gap-4">
                  <div className="flex items-center gap-2">
                    {/* <Image
                      src="/placeholder.svg"
                      alt="Customer Avatar"
                      className="h-12 w-12 rounded-full"
                    /> */}
                    <div>
                      <h3 className="text-lg font-semibold">Raj Kumar</h3>
                      <p className="text-muted-foreground">Verified Buyer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    I was hesitant to buy a refurbished phone, but the process
                    was so easy and the phone is in fantastic condition. The
                    warranty gives me peace of mind. Highly recommended!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-center gap-4">
                  <div className="flex items-center gap-2">
                    {/* <Image
                      src="/placeholder.svg"
                      alt="Customer Avatar"
                      className="h-12 w-12 rounded-full"
                    /> */}
                    <div>
                      <h3 className="text-lg font-semibold">Priya Gupta</h3>
                      <p className="text-muted-foreground">Verified Buyer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Im so glad I found this refurbished phone store. The
                    selection is great, the prices are unbeatable, and the
                    customer service has been fantastic. Highly recommend!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to the most common questions about our refurbished
                  phones and the buying process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-background px-4 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  <h3 className="text-lg">
                    What is the warranty on refurbished phones?
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="rounded-md border bg-background px-4 py-3 text-muted-foreground">
                  All our refurbished phones come with a 12-month warranty,
                  covering any manufacturing defects or issues. If you
                  experience any problems, simply contact our customer support
                  team and well be happy to assist you.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-background px-4 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  <h3 className="text-lg">How are the phones refurbished?</h3>
                  <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="rounded-md border bg-background px-4 py-3 text-muted-foreground">
                  Our refurbishment process involves a thorough inspection,
                  cleaning, and replacement of any worn or damaged components.
                  The phones are then tested to ensure they meet our
                  high-quality standards before being made available for sale.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-background px-4 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  <h3 className="text-lg">Do you offer financing options?</h3>
                  <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="rounded-md border bg-background px-4 py-3 text-muted-foreground">
                  Yes, we offer flexible financing options to make it easier for
                  you to purchase a refurbished phone. You can choose from a
                  range of payment plans to suit your budget and needs.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-background px-4 " />
              </Collapsible>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}
