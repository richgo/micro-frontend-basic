import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Header = dynamic(import('../components/Header'))

const Home = () => {
  return (
    <div>
      <Header />
      <p>This is our homepage</p>
      <div>
        <a href="/account">Accounts</a>
      </div>
      <div>
        <a href="/products">Products</a>
      </div>
      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
      <Image
        src="/static/nextjs.png"
        alt="Next.js logo"
        width={200}
        height={160}
      />
    </div>
  )
}
export default Home