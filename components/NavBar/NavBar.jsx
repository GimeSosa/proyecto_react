import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import CartWidget from '../assets/cart.svg';
import './Navbar.css'

const NavBar = () => {
  return (
    <div>
 
    <Navbar  bg="light" expand="lg">
      <Container>
        <Navbar.Brand  class= "navbar" href="#home">AmbarJEANS </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link class= "navbar" href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nosotras</Nav.Link>
            <NavDropdown title="For you" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Basics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">T-shirts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                To party
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>1
        {/* <img src={CartWidget} alt="imagen"/> */}
      </Container>
    </Navbar>


</div>
  )
}

export default NavBar