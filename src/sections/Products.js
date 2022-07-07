import Heading from '../components/Heading';
import ProductCards from '../components/Product Cards';

function Products({ id }) {
  return (
    <div id={id} className='container' style={{ marginTop: '140px' }}>
      <Heading title='Our Products' />
      <ProductCards />
    </div>
  );
}
export default Products;
