import Heading from '../components/Heading';

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
        <div className='row mt-5'>
          <p className='col-lg-6 col-sm-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            delectus eius in nobis illum numquam dolores porro unde modi sint,
            quasi doloremque, aliquid reprehenderit commodi harum iste voluptate
            asperiores voluptas maxime! Deleniti recusandae labore excepturi
            qui! Magnam consequatur deserunt aspernatur quis quibusdam, itaque,
            beatae, quae quas fugit eligendi quidem sed tempora? Incidunt, cum?
            Eaque itaque, dicta suscipit recusandae unde laudantium minima
            quaerat. Aliquid excepturi molestias aliquam sunt qui voluptas
            officia nulla sapiente doloremque vero tenetur, eos architecto rem
            eius necessitatibus dolorum ratione neque repudiandae modi
            consectetur illo. Asperiores voluptates sint consectetur maiores,
            eveniet ut rerum commodi necessitatibus veniam aliquid aspernatur.
          </p>
          <p className='col-lg-6 col-sm-12'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur beatae est at qui blanditiis numquam quibusdam? Earum
            ipsa inventore nam, rem nulla possimus! Expedita ullam deleniti
            eligendi assumenda quaerat distinctio praesentium mollitia. Dolore
            provident, iure quasi sit aliquid natus velit incidunt sed
            repudiandae illo quam quidem sunt possimus perferendis magnam,
            asperiores nam consequuntur tempore recusandae harum quia assumenda
            enim at qui. Aliquid odio nemo esse voluptatem sit eveniet iure
            numquam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
