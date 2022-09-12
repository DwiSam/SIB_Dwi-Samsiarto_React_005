import { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

function Navigation() {
  const [isRedirect, setRedirect] = useState('');
  const location = useLocation();
  useEffect(() => {
    setRedirect(location.pathname);
  }, [location]);
  
  return (
    <Navbar collapseOnSelect variant="dark" bg="secondary" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container-fluid">
            <Nav.Link as={Link} to="/" className="nav-link text-first">
              <b>QTemu</b>
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to="/create-meetup" 
                className={isActiveMeetUp =>
                    "nav-link" + (!isRedirect === "/create-meetup" ? " active" : "")
                }
            >
              Create Meetup
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to="/explore" 
                className={isActiveExplore =>
                "nav-link" + (!isRedirect === "/explore" ? " active" : "")
                }
            >
              Explore
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to="/login" 
                className={isActiveLogin =>
                "login-right nav-link" + (!isRedirect === "/login" ? " active" : "")
                }
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation