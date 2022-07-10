import Heading from '../components/Heading';
import ProductCards from '../components/Product Cards';

function Products({ id }) {
  return (
    <div id={id} className='container' style={{ marginTop: '140px' }}>
      <div className='pt-5'>
        <Heading title='Our Products' />
        <ProductCards />
      </div>
    </div>
  );
}
export default Products;
