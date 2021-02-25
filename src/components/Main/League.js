import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const generateID = () => {
  const id = uuidv4();
  console.log(id)
  return id
}

function League(id) {

  return (
    <div className="Main League">
      <h1>League Page</h1>
      <button onClick={() => generateID()}>Generate ID</button>
    </div>
  );
}

export default League;