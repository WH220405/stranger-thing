import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Stranger's Things</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/posts">POSTS</Nav.Link>
            <Nav.Link href="/profile">PROFILE</Nav.Link>
            <Nav.Link href="/loginform">LOG IN</Nav.Link>
            <Nav.Link href="/logout">LOG OUT</Nav.Link>
            <Nav.Link
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Authentication
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
