import University from "./University.jpeg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Home(){

    
    return(
        <>
        <h1>Mastermind University</h1>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Badge variant="secondary">MU</Badge></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Academics.jsx">Academics</Nav.Link>
            <Nav.Link href="/Athletics.jsx">Athletics</Nav.Link>
            <Nav.Link href="/Application.jsx">Apply</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <img src={University} alt="University"/>
      <p>The ultimate place to be</p>
      <br />
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/students.jpeg" />
      <Card.Body>
        <Card.Title>Academics</Card.Title>
        <Card.Text>
          Explore some of the courses and programs the university has to offer aswell as other academic activities that might be coming up.
        </Card.Text>
        <Button variant="primary">View Academics</Button>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/gymnasium.jpeg" />
      <Card.Body>
        <Card.Title>Athletics</Card.Title>
        <Card.Text>
          Have a quick view into "The Spartans" our very on Mastermind University athletes,and the prowess in the various sports. 
        </Card.Text>
        <Button variant="primary">View Athletics</Button>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/apply.jpeg" />
      <Card.Body>
        <Card.Title>Apply</Card.Title>
        <Card.Text>
          Interested? Don't waste any time. Click the button below to apply now.
        </Card.Text>
        <Button variant="primary">Apply Now</Button>
      </Card.Body>
      </Card>
       </div>
        </>


    )

}
export default Home 