import React from 'react';

import duckImage1 from '../assets/images/ducks/bachelor.png';
import duckImage2 from '../assets/images/ducks/couple.png';
import duckImage3 from '../assets/images/ducks/doctor.png';
import duckImage4 from '../assets/images/ducks/unicorn.png';


function DuckItem({ duck }) {
    let imageSrc;
    switch (duck.src) {
      case 'bachelor.png':
        imageSrc = duckImage1;
        break;
      case 'couple.png':
        imageSrc = duckImage2;
        break;
      case 'doctor.png':
        imageSrc = duckImage3;
        break;
      case 'unicorn.png':
        imageSrc = duckImage4;
        break;
      default:
        imageSrc = null;
    }

    return (
        <div>
             {imageSrc && <img src={imageSrc} alt={duck.occupation} />}
            <div>occupation : {duck.occupation}</div>
            <div>number : {duck.id}</div>
        </div>
    );
}

export default DuckItem;