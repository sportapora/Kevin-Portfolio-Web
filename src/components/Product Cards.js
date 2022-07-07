import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Images from './Images';

function ProductCards() {
  return (
    <div>
      <div className='row mt-5 pt-5'>
        {Images.map(({ src, label, caption }, index) => {
          return (
            <div className='col-sm-6 col-lg-4' key={index}>
              <Card className='mb-5'>
                <Card.Img
                  variant='top'
                  src={require('../img/' + src + '.jpeg')}
                />
                <Card.Body>
                  <Card.Title>{label}</Card.Title>
                  <Card.Text>{caption}</Card.Text>
                  <Button id='product-btn' className='py-2'>
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCards;
