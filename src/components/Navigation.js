import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation({ id }) {
  return (
    <Navbar
      variant='dark'
      id={id}
      expand='lg'
      style={{ fontFamily: 'League Spartan' }}
    >
      <Container>
        <Navbar.Brand href='/' className='fw-bold' style={{ fontSize: '30px' }}>
          HCI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home' style={{ color: '#eee' }}>
              Home
            </Nav.Link>
            <Nav.Link href='#about' style={{ color: '#eee' }}>
              About
            </Nav.Link>
            <Nav.Link href='#products' style={{ color: '#eee' }}>
              Our Products
            </Nav.Link>
            <Nav.Link href='#contactus' style={{ color: '#eee' }}>
              Contact Us
            </Nav.Link>
            <NavDropdown title='Social Media' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.2'>
                <i className='fa-brands fa-instagram fa-lg'></i>&nbsp;
                &#64;_instagram
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                <i className='fa-brands fa-whatsapp fa-lg'></i>&nbsp; +62
                89607192900
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
