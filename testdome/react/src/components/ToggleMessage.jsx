import React, {useState} from 'react';

const ToggleMessage = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = function () {
    setVisible(!visible);
  };

  return (<>
    <div onClick={toggleVisibility}>Want to buy a new car?</div>
    {visible && <p>Call +11 22 33 44 now!</p>}
  </>);
};

export default ToggleMessage;
