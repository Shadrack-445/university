import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Academics() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/lab.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>MasterMind University is ranked 5th in the country</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/campus.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>It is the largest campus in the country</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/graduation.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>83% of students who enroll in MasterMind University end up graduating</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <div>
        <h2>Below are some of the courses one can pursue in MasterMind University!</h2>
    <DropdownButton id="dropdown-basic-button" title="Engineering">
      <Dropdown.Item href="#/action-1">Chemical</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Civil</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Mechanical</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Business">
      <Dropdown.Item href="#/action-1">B-Commerce</Dropdown.Item>
      <Dropdown.Item href="#/action-2">B-Administration</Dropdown.Item>
      <Dropdown.Item href="#/action-3">B-Management</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Medicine">
      <Dropdown.Item href="#/action-1">Surgery</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Internal Medicine</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Pediatrics</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Education">
      <Dropdown.Item href="#/action-1">Arts</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Science</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Language</Dropdown.Item>
    </DropdownButton>
    </div>
    </>
  );
}

export default Academics
