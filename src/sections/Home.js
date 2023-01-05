import Heading from '../components/Heading';
import MainCarousel from '../components/Carousel';
import image from '../img/image1.jpeg'

function Home({id}) {
    return (
        <div>
            <MainCarousel/>
            <div className='container'>
                <div style={{marginTop: '120px'}} id='main-heading'>
                    <Heading title='Welcome To HCI!'/>
                </div>
                <div className="row" id={id}>
                    <div className="col-md-6 mt-5 col-sm-12">
                        <p className='text-md-end'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                            accusantium voluptatem ipsa incidunt enim sequi soluta reiciendis
                            distinctio laborum animi. Cum exercitationem voluptatem corrupti
                            similique, fugiat, officiis veniam voluptas vel voluptatibus aliquam
                            minus perspiciatis consectetur veritatis eius magni ea, perferendis
                            natus consequuntur! Commodi saepe voluptate velit ipsam cupiditate
                            cum. Recusandae a alias minus, in ipsam nam tempore, aliquam
                            aspernatur, consectetur porro vel maxime velit! Tempora reprehenderit,
                            inventore neque itaque amet et nesciunt nobis quos tempore quia libero
                            mollitia repudiandae debitis non, quae exercitationem ratione atque!
                            Aperiam, tempore. Quis sint numquam hic odit est laboriosam quidem.
                            Voluptas tempore quae blanditiis provident?
                        </p>
                        <p className='text-md-end'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                            accusantium voluptatem ipsa incidunt enim sequi soluta reiciendis
                            distinctio laborum animi. Cum exercitationem voluptatem corrupti
                            similique, fugiat, officiis veniam voluptas vel voluptatibus aliquam
                            minus perspiciatis consectetur veritatis eius magni ea, perferendis
                            natus consequuntur! Commodi saepe voluptate velit ipsam cupiditate
                            cum. Recusandae a alias minus, in ipsam nam tempore, aliquam
                            aspernatur, consectetur porro vel maxime velit! Tempora reprehenderit,
                            inventore neque itaque amet et nesciunt nobis quos tempore quia libero
                            mollitia repudiandae debitis non, quae exercitationem ratione atque!
                            Aperiam, tempore. Quis sint numquam hic odit est laboriosam quidem.
                            Voluptas tempore quae blanditiis provident?
                        </p>
                    </div>
                    <div className="col-md-6 mt-5 col-sm-12">
                        <img src={image} className={'rounded shadow-lg ms-3 img-fluid'} alt="HCI Product"/>
                    </div>
                </div>
                <div className="row" style={{marginTop: '100px'}}>
                    <div className="gridContainer">
                        <div className="row spaced-cols text-center">
                            <div className="col-xs-12 col-sm-4 col-padding"><i
                                className="fa fa-universal-access mb-5" style={{fontSize: '4rem'}}></i>
                                <div>
                                    <h5>INTERGRITY</h5>
                                    <p>Our company holds the values of honesty, trust and hard work. with
                                        the
                                        values we hold we believe that our company and our customers can grow and
                                        progress
                                        together
                                    </p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-padding">
                                <i className="fa fa-asl-interpreting mb-5" style={{fontSize: '4rem'}}></i>
                                <div>
                                    <h5>COMMITMENT</h5>
                                    <p>Providing our customer with the best quality, service and value have
                                        always been our commitment</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-padding">
                                <i className="fa fa-duotone mb-5 fa-check" style={{fontSize: '4rem'}}></i>
                                <div>
                                    <h5>QUALITY</h5>
                                    <p>Providing the best quality exhibited through Internationally
                                        accepted
                                        certifications that delight our respected clients, and delivering financial
                                        results
                                        that meets the investors expectation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
