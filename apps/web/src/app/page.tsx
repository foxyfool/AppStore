import { substraction } from '@foundation/sample-lib'

export default function Home() {
  const a = 9

  console.log('Substraction:', substraction(11, 5))
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello Mars!
    </main>
  )
}
