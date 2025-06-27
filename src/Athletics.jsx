import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Athletics() {
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
          src="/football.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>MU offers D1 Athletics</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/basketball.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>We are the current division champions in Basketball</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/athletics.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>MU has both men and women sports for all the available sports</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <div>
    <DropdownButton id="dropdown-basic-button" title="Football">
      <Dropdown.Item href="/roster.jsx">Roster</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Schedule</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Basketball">
      <Dropdown.Item href="/roster.jsx">Roster</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Schedule</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Soccer">
      <Dropdown.Item href="/roster.jsx">Roster</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Schedule</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Track">
      <Dropdown.Item href="/roster.jsx">Roster</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Schedule</Dropdown.Item>
    </DropdownButton>
    </div>
    </>
  );
}

export default Athletics
