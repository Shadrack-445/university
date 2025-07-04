import { Link,useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { useAuthContext } from "./AuthContext";
import { Button } from "react-bootstrap";

function Navigation(){
  const {user, logout} = useAuthContext()
  const navigate = useNavigate()

  const handlelogout = async() => {
    try {
      await logout();
      navigate("/login"); // redirect after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }


    return(
        <div >
            <Navbar bg="dark" data-bs-theme="dark" style={{sticky:"top" , width:1000}}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Badge bg="secondary">MU</Badge>
          </Navbar.Brand>
          <Nav className="me-auto" style={{justifyContent:"left"}}>
            <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
            <Nav.Link as={Link} to="/athletics">Athletics</Nav.Link>
            <Nav.Link as={Link} to="/application">Apply</Nav.Link>
          </Nav>
           <Nav className="ms-auto">
          {user ? (
            <>
              <Nav.Link disabled>{user.email}</Nav.Link>
              <Button variant="outline-light" size="sm" onClick={handlelogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
          )}
        </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
export default Navigation