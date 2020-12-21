import Link from 'next/link'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
const Header = dynamic(import('../components/Header'))

const GET_ME = gql`
query {
  me {
    name
    username
    reviews {
      body
      product {
        name
        upc
      }
    }
  }
}
`;

const Account = () => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return ( 
      <div>
      <Header/>
        <h3>Hello {data.me.name}</h3>
        <ul>
        {data.me.reviews.map(review => (
          <li>
            <h4>{review.product.name}</h4>
            <p>
              {review.body}
            </p>
          </li>
        ))}
        </ul>
        <a href="/">Home</a>
      </div>
  )
}
export default Account