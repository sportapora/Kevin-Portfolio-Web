import Carousel from 'react-bootstrap/Carousel';
import Images from './Images';

function MainCarousel() {
  return (
    <div>
      <Carousel variant='dark'>
        {Images.map(({ src, alt, label, caption }, index) => {
          return (
            <Carousel.Item key={index} interval={2500}>
              <img
                className='d-block w-100 rounded carousel-image'
                src={require('../img/' + src + '.jpeg')}
                alt={alt}
              />
              <Carousel.Caption className='my-carousel-caption px-1'>
                <h3 className='fw-bold' style={{ color: '#f0f0f0' }}>
                  {label}
                </h3>
                <p style={{ color: '#292524' }}>{caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default MainCarousel;
