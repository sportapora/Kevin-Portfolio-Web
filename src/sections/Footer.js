function myFunction({ children }) {
  children.select();
  children.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(children);

  alert('Copied the text: ' + children);
}

function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#292524', color: '#f0f0f0' }}
      className='p-5'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-6 mb-4'>
            <h5 className='fw-bold'>HCI</h5>
            <small
              className='text-disabled mt-3 d-block'
              style={{ fontSize: '12px' }}
            >
              HCI is a trademark Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Mollitia asperiores tenetur soluta, rerum
              aliquam porro delectus saepe modi dolorum explicabo pariatur sequi
              repellat magnam totam dolorem deserunt velit culpa accusamus illo.
              Quod eveniet sint saepe.
            </small>
          </div>
          <div className='col-sm-12 col-lg-6 mb-4'>
            <h5 className='fw-bold'>Follow Us For More Information</h5>
            <span className='d-block mt-3 fw-bold'>
              <a href='#about' className='text-decoration-none link'>
                <i className='fa-brands fa-instagram fa-sm'></i>&nbsp;
                &#64;_instagram
              </a>
            </span>
            <span className='d-block fw-bold'>
              <i className='fa-brands fa-whatsapp fa-sm'></i>&nbsp;{' '}
              <span onClick={myFunction}>+62 89607192900</span>
            </span>
          </div>
        </div>
        <small className='text-disabled d-block mt-4 text-center'>
          Copyright &copy; 2022 HCI. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
