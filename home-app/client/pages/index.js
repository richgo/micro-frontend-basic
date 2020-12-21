import Link from 'next/link'
import dynamic from 'next/dynamic'
const Header = dynamic(import('../components/Header'))

const Home = () => {
  return (
    <div>
    <Header/>
    <h2>For all your fake furniture needs</h2>
    <p>
      Doubloon reef heave down loot prow brigantine me main sheet swab splice the main brace. Come about black spot chase guns doubloon jury mast list grog blossom Davy Jones' Locker bounty hang the jib. Line snow log matey starboard Sink me Spanish Main Nelsons folly wench square-rigged.
    </p>
    <p>
      Cable Gold Road tack snow line dance the hempen jig port loot blow the man down parrel. Pieces of Eight Sea Legs jack Buccaneer aft nipperkin wench Nelsons folly fire in the hole red ensign. Pressgang keelhaul splice the main brace Admiral of the Black bilge rat Buccaneer mutiny scuppers strike colors Jolly Roger. 
    </p>
  </div>
  )
}
export default Home