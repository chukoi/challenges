import React, {useEffect, useState} from 'react';

const ImageGallery = ({links}) => {
  const [tempLinks, setTempLinks] = useState(links);

  useEffect(() => {

  }, []);

  const onRemove = function (index) {
    const newItems = tempLinks.filter((link, i) => {
      return i !== index;
    });
    setTempLinks(newItems);
  };


  return <div>{tempLinks.map((link, index) => <div key={link} className="image">
    <img src={link}
         alt="link"/>
    <button className="remove"
            onClick={() => onRemove(index)}>X
    </button>
  </div>)}</div>;
};

export default ImageGallery;
