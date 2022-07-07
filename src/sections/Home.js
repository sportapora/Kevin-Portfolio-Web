import Heading from '../components/Heading';
import MainCarousel from '../components/Carousel';

function Home({ id }) {
  return (
    <div>
      <MainCarousel />
      <div className='container'>
        <div style={{ marginTop: '120px' }} id='main-heading'>
          <Heading title='Welcome To HCI!' />
        </div>
        <p className='mt-5' id={id}>
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
    </div>
  );
}

export default Home;
