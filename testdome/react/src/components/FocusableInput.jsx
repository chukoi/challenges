import React, {useEffect, useRef} from 'react';

const FocusableInput = (props) => {
  const {shouldFocus} = props;
  const inputRef = useRef();

  useEffect(() => {
    if (shouldFocus) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);
  // Write your code here
  return <input ref={inputRef}/>;
};

export default FocusableInput;
