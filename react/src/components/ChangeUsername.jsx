import React, {useRef} from 'react';

class Username extends React.Component {
  state = {value: ''};

  changeValue(value) {
    this.setState({value});
  }

  render() {
    const {value} = this.state;
    return <h1>{value}</h1>;
  }
}

function ChangeUsername() {
  const inputRef = useRef();
  const usernameRef = useRef();

  function clickHandler() {
    usernameRef.current.setState({value: inputRef.current.value});
  }

  return (<div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={inputRef}/>
      <Username ref={usernameRef}/>
    </div>);
}

export default ChangeUsername;

