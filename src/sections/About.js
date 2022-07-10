import Heading from '../components/Heading';
import image2 from '../img/image2.jpeg';
import image3 from '../img/image3.jpeg';

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
            <p className='mb-4'>
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
            <figure className='d-block text-center'>
              <img
                src={image2}
                className='w-75 rounded mx-auto'
                alt='Product 2'
              />
              <figcaption
                className='text-disabled mt-2'
                style={{ fontSize: '13px' }}
              >
                Caption for image
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='row' style={{ marginTop: '50px' }}>
          <div className='col-lg-6 col-sm-12 mb-4'>
            <figure className='d-block text-center'>
              <img src={image3} className='w-75 rounded' alt='Product 2' />
              <figcaption
                className='text-disabled mt-2'
                style={{ fontSize: '13px' }}
              >
                Caption for image
              </figcaption>
            </figure>
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
