import Link from 'next/link'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client'

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
        <div>
          <Image
            src="/public/nextjs.png"
            alt="Next.js logo"
            width={200}
            height={160}
          />
        </div>
      </div>
  )
}
export default Account