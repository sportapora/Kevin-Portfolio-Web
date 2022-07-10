import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Products from './Products';

function AccordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <Button id='product-btn' onClick={decoratedOnClick} className='py-2'>
      {children}
    </Button>
  );
}

function ProductCards() {
  return (
    <div>
      <div className='row mt-5 pt-5'>
        {Products.map(({ src, label, caption, description }, index) => {
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

                  <Accordion defaultActiveKey='0'>
                    <AccordionToggle eventKey='1'>Read More</AccordionToggle>
                    <Accordion.Collapse eventKey='1'>
                      <Card.Body>{description}</Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
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
