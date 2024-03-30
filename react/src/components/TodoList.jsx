import React, {useState} from 'react';
import "./styles.css"

const TodoItem = (props) => <li className={props.item.done ? 'completed' : 'incomplete'}
                                onClick={props.onClick}>{props.item.text}</li>;

const TodoList = ({items, onListClick, onItemClick}) => {

  const [todoItems, setTodoItems] = useState(items);
  const handleItemClick = (item, event) => {
    if (item.done) {
      event.stopPropagation();
    } else {
      onItemClick(item, event);
      const newItems = todoItems.map(i => {
        if (i.text === item.text) {
          i.done = true;
        }
        return i;
      });
      setTodoItems([...newItems]);
    }
  };

  return (<ul onClick={onListClick}>
    {todoItems.map((item, index) => <TodoItem item={item} key={index}
                                              onClick={(event) => {
                                                handleItemClick(item, event);
                                                !item.done && onItemClick(item, event);
                                              }}/>)}
  </ul>);
};

export default TodoList;
