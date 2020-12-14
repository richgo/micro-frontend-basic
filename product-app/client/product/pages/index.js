import Link from 'next/link'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client'

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
export default Products

