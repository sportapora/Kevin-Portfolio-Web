import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({id}) {
    return (
        <Navbar
            variant='dark'
            id={id}
            expand='lg'
        >
            <Container>
                <Navbar.Brand href='/' className='fw-bold' style={{fontSize: '30px'}}>
                    HCI
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='#home' style={{color: '#eee', fontWeight: 600}}>
                            Home
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
