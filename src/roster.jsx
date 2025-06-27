import React, { useEffect, useState } from "react";

function Roster() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        const limitedData = data.slice(0, 10);
        const extractedNames = limitedData.map((comment) => comment.name);
        setNames(extractedNames);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Team Roster</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Roster;
