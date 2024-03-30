import React, {useEffect, useState} from 'react';

const ListReorder = (props) => {
  const {items} = props;

  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    setNewItems(items);
  }, [items]);

  const onClick = function () {
    setNewItems([...newItems.reverse()]);
  };

  return <ul>
    {newItems.map((i) => <li key={i}
                             onClick={i === 'C' ? onClick : undefined}>{i}</li>)}
  </ul>;
};

export default ListReorder;
