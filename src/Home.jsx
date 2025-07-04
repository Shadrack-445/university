import University from "./University.jpeg";
import Students from "./students.jpeg";
import Gymnasium from "./gymnasium.jpeg";
import Apply from "./apply.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <br /> 
      <br />   
      <h1 style={{color:"brown"}}>Mastermind University</h1>
      <br />
      <img src={University} alt="University" style={{ maxWidth: "100%" }} />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            src={Students}
            variant="top"
            style={{
              height: "200px",
              objectFit: "cover"
            }}
          />
          <Card.Body>
            <Card.Title>Academics</Card.Title>
            <Card.Text>
              Explore some of the courses and programs the university has to offer as well as other academic activities that might be coming up.
            </Card.Text>
            <Button as={Link} to="/academics" variant="primary">
              View Academics
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={Gymnasium}
            style={{
              height: "200px",
              objectFit: "cover"
            }}
          />
          <Card.Body>
            <Card.Title>Athletics</Card.Title>
            <Card.Text>
              Have a quick view into "The Spartans," our very own Mastermind University athletes and their prowess in various sports.
            </Card.Text>
            <Button as={Link} to="/athletics" variant="primary">
              View Athletics
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={Apply}
            style={{
              height: "200px",
              objectFit: "cover"
            }}
          />
          <Card.Body>
            <Card.Title>Apply</Card.Title>
            <Card.Text>
              Interested? Don't waste any time. Click the button below to apply now.
            </Card.Text>
            <Button as={Link} to="/application" variant="primary">
              Apply Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;
