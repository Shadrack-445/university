import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Lab from "./lab.png";
import Campus from "./campus.png";
import Graduation from "./graduation.png";

function Academics() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <br />
     <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Lab}
      alt="First slide"
      style={{ height: "400px", objectFit: "cover" , borderRadius: "12px"}}
    />
    <Carousel.Caption>
      <h3
        style={{
          color: "blue",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 500
        }}
      >
        MasterMind University is ranked 5th in the country
      </h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Campus}
      alt="Second slide"
      style={{ height: "400px", objectFit: "cover" , borderRadius: "12px"}}
    />
    <Carousel.Caption>
      <h3
        style={{
          color: "blue",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 500
        }}
      >
        It is the largest campus in the country
      </h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Graduation}
      alt="Third slide"
      style={{ height: "400px", objectFit: "cover" , borderRadius: "12px"}}
    />
    <Carousel.Caption>
      <h3
        style={{
          color: "blue",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 500
        }}
      >
        83% of students who enroll in MasterMind University end up graduating
      </h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      <br />
      <div>
        <h2>
          Below are some of the courses one can pursue in MasterMind
          University!
        </h2>
         
        <DropdownButton id="dropdown-engineering" title="Engineering" className="mb-2">
          <Dropdown.Item href="#/engineering/chemical">Chemical</Dropdown.Item>
          <Dropdown.Item href="#/engineering/civil">Civil</Dropdown.Item>
          <Dropdown.Item href="#/engineering/mechanical">Mechanical</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-business" title="Business" className="mb-2">
          <Dropdown.Item href="#/business/commerce">B-Commerce</Dropdown.Item>
          <Dropdown.Item href="#/business/administration">B-Administration</Dropdown.Item>
          <Dropdown.Item href="#/business/management">B-Management</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-medicine" title="Medicine" className="mb-2">
          <Dropdown.Item href="#/medicine/surgery">Surgery</Dropdown.Item>
          <Dropdown.Item href="#/medicine/internal">Internal Medicine</Dropdown.Item>
          <Dropdown.Item href="#/medicine/pediatrics">Pediatrics</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-education" title="Education" className="mb-2">
          <Dropdown.Item href="#/education/arts">Arts</Dropdown.Item>
          <Dropdown.Item href="#/education/science">Science</Dropdown.Item>
          <Dropdown.Item href="#/education/language">Language</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default Academics;
