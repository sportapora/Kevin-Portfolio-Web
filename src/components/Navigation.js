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
        <Navbar.Brand href='/' className='fw-bold'>
          HCI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#products'>Our Products</Nav.Link>
            <Nav.Link href='#contactus'>Contact Us</Nav.Link>
            <NavDropdown title='Social Media' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                <i className='fa-brands fa-facebook'></i>&nbsp; Facebook
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                <i className='fa-brands fa-instagram'></i>&nbsp; Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                <i className='fa-brands fa-twitter'></i>&nbsp; Twitter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
