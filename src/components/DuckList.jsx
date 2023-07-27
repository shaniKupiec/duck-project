import React, { useEffect, useState } from 'react';
import DuckItem from './duckItem';

function DuckList() {
  const [duckList, setDuckList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/public/data/duckList.json');
        const data = await response.json();
        setDuckList(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  // Render your component based on the duckList state
  if (duckList === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <h1>Duck List</h1>
      <ul>
        {duckList.map((duck) => (
          <li key={duck.id}>
           <DuckItem key={duck.id} duck={duck} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DuckList;