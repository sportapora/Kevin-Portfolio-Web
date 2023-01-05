import Carousel from 'react-bootstrap/Carousel';
import Images from './Images';

function MainCarousel() {
    const scrollDown = () => {
        document.getElementById('home').scrollIntoView();
    }

    return (
        <div>
            <Carousel variant='dark'>
                {Images.map(({src, alt, label, caption}, index) => {
                    return (
                        <Carousel.Item key={index} interval={2500}>
                                <img
                                    className='d-block w-100 rounded carousel-image'
                                    src={require('../img/' + src + '.jpeg')}
                                    alt={alt}
                                />
                            <Carousel.Caption>
                                <div>
                                    <h1
                                        style={{
                                            color: '#e89c43',
                                            backgroundColor: 'rgba(255, 226, 191, 0.8)',
                                            // fontSize: '3rem',
                                            fontWeight: 600
                                        }} className={'shadow py-4 px-3 rounded fs-1'}>
                                        The leading supplier of <span
                                        className="fst-italic fw-bold">high-quality</span> bamboo
                                        products {' '}
                                    </h1>
                                    <a
                                        href={"#home"}
                                        onClick={scrollDown}
                                        style={{fontSize: '4rem', color: '#eee', textDecoration: "none"}}
                                    >
                                        <i className="fa-solid fa-angle-down"></i>
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default MainCarousel;
