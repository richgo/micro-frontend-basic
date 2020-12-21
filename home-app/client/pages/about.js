import Link from 'next/link'
import dynamic from 'next/dynamic'
const Header = dynamic(import('../components/Header'))

const About = () => (
  <div>
    <Header />
    <p>This is the about page.</p>
    <div>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </div>
  </div>
)

export default About
