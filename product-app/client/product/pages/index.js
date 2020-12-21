import Link from 'next/link'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
const Header = dynamic(import('../components/Header'))

const GET_TOPPRODUCTS = gql`
query  {
  topProducts{
    name
    price
    inStock
    upc
  	}
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_TOPPRODUCTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return ( 
      <div>
      <Header/>
        <h3>This is our product list</h3>
        <ul>
        {data.topProducts.map(product => (
          <li>
            <Link href={ "/" + product.upc}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
        </ul>
        <a href="/">Home</a>
      </div>
  )
}
export default Products

