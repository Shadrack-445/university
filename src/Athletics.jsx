import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import footballImage from './football.png';
import basketballImage from './basketball.png';
import athleticsImage from './athletics.png';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


function Athletics() {
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
      src={footballImage}
      alt="Football slide"
      style={{ height: "400px", objectFit: "cover" , borderRadius: "12px"}}
    />
    <Carousel.Caption>
      <h3 style={{ color: "white", fontFamily: "Georgia, 'Times New Roman', serif" }}>
        MU offers D1 Athletics
      </h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={basketballImage}
      alt="Basketball slide"
      style={{ height: "400px", objectFit: "cover" , borderRadius: "12px"}}
    />
    <Carousel.Caption>
      <h3 style={{ color: "white", fontFamily: "Georgia, 'Times New Roman', serif" }}>
        We are the current division champions in Basketball
      </h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={athleticsImage}
      alt="Athletics slide"
      style={{ height: "400px", objectFit: "cover" , borderRadius: "12px"}}
    />
    <Carousel.Caption>
      <h3 style={{ color: "white", fontFamily: "Georgia, 'Times New Roman', serif" }}>
        MU has both men and women sports for all available sports
      </h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    <br />
    <div>
    <DropdownButton id="dropdown-basic-button" title="Football" className="mb-2">
      <Dropdown.Item href="/roster">Roster</Dropdown.Item>
      <Dropdown.Item href="/schedule">Schedule</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Basketball"className="mb-2" >
      <Dropdown.Item href="/roster">Roster</Dropdown.Item>
      <Dropdown.Item href="/schedule">Schedule</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Soccer" className="mb-2">
      <Dropdown.Item href="/roster">Roster</Dropdown.Item>
      <Dropdown.Item href="/schedule">Schedule</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Track" className="mb-2">
      <Dropdown.Item href="/roster">Roster</Dropdown.Item>
      <Dropdown.Item href="/schedule">Schedule</Dropdown.Item>
    </DropdownButton>
    </div>
    <Outlet/>
    </>
  );
}

export default Athletics
