// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import Avatar from '@/pages/Avatar'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Link href="/Avatar">Avatar</Link>
      <Link href="/Card">Card</Link>
    </main>
  )
}
