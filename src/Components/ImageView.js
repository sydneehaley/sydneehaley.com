import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ImageView = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <div className='projectview__imagebigger'>
        {data
          .filter((image) => image.id === parseInt(id))
          .map((image, i) => (
            <img src={image.link} />
          ))}

        <p>test</p>
      </div>
    </div>
  );
};

export default ImageView;
