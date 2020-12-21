import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
const Header = dynamic(import('../components/Header'))

const Product = () => {
  const router = useRouter()

  const GET_PRODUCT = gql`
    query {
      getProduct(upc:"${router.query.id}") {
      name
      price
      inStock
      upc 
      weight
      shippingEstimate
      reviews {
        body
        author {
          name
          username
          id
          }
        }
      }
    }
`;

    console.log(GET_PRODUCT);
  
  const { loading, error, data } = useQuery(GET_PRODUCT)
 
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <div>
    <Header/>
      <h3>Product {data.getProduct.name}</h3>
      <p>upc {data.getProduct.upc}</p>
      <p>price {data.getProduct.price}</p>
      <p>In Stock {data.getProduct.inStock}</p>
      <h4>Reviews</h4>
      <ul>
        {data.getProduct.reviews.map(review => (
          <li>
              <h5>{review.author.name}</h5>
              <p>{review.body}</p>
          </li>
        ))}
        </ul>
      <Link href="/">
        <a>Back to products</a>
      </Link>
    </div>
  )
}
export default Product