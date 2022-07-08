import Heading from '../components/Heading';
import image2 from '../img/image2.jpeg';

function About({ id }) {
  return (
    <div
      className='container'
      style={{
        marginTop: '120px',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div id={id}>
        <Heading title='About Us' />
        <div className='row mt-5 pt-4'>
          <div className='col-lg-6 col-sm-12'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium delectus eius in nobis illum numquam dolores porro
              unde modi sint, quasi doloremque, aliquid reprehenderit commodi
              harum iste voluptate asperiores voluptas maxime! Deleniti
              recusandae labore excepturi qui! Magnam consequatur deserunt
              aspernatur quis quibusdam, itaque, beatae, quae quas fugit
              eligendi quidem sed tempora? Incidunt, cum? Eaque itaque, dicta
              suscipit recusandae unde laudantium minima quaerat. Aliquid
              excepturi molestias aliquam sunt qui voluptas officia nulla
              sapiente doloremque vero tenetur, eos architecto rem eius
              necessitatibus dolorum ratione neque repudiandae modi consectetur
              illo. Asperiores voluptates sint consectetur maiores, eveniet ut
              rerum commodi necessitatibus veniam aliquid aspernatur.
            </p>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <img src={image2} className='w-75 rounded' alt='Product 2' />
          </div>
        </div>
        <div className='row' style={{ marginTop: '100px' }}>
          <div className='col-lg-6 col-sm-12'>
            <img src={image2} className='w-75 rounded' alt='Product 2' />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium delectus eius in nobis illum numquam dolores porro
              unde modi sint, quasi doloremque, aliquid reprehenderit commodi
              harum iste voluptate asperiores voluptas maxime! Deleniti
              recusandae labore excepturi qui! Magnam consequatur deserunt
              aspernatur quis quibusdam, itaque, beatae, quae quas fugit
              eligendi quidem sed tempora? Incidunt, cum? Eaque itaque, dicta
              suscipit recusandae unde laudantium minima quaerat. Aliquid
              excepturi molestias aliquam sunt qui voluptas officia nulla
              sapiente doloremque vero tenetur, eos architecto rem eius
              necessitatibus dolorum ratione neque repudiandae modi consectetur
              illo. Asperiores voluptates sint consectetur maiores, eveniet ut
              rerum commodi necessitatibus veniam aliquid aspernatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
