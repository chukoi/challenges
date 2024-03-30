import ChangeUsername from '../components/ChangeUsername';
import FocusableInput from '../components/Focus';
import Focus from '../components/Focus';
import CharacterPoints from '../components/CharacterPoints';
import React from 'react';
import GroceryApp from '../components/GroceryApp';
import {items, links, products} from '../data';
import ImageGallery from '../components/ImageGallery';
import ListReorder from '../components/ListReorder';
import TodoList from '../components/ToDoList';
import ToggleMessage from '../components/ToggleMessage';


const routes = [{
  text: 'Change Username', to: '/change-username', component: () => <ChangeUsername/>,
}, {
  text: 'Character Points', to: '/character-points', component: () => <CharacterPoints totalPoints={15}/>,
}, {
  text: 'Focus', to: '/focus', component: () => <Focus/>,
}, {
  text: 'Focusable Input', to: '/focusable-input', component: () => <FocusableInput shouldFocus={true}/>,
}, {
  text: 'Grocery App', to: '/grocery-app', component: () => <GroceryApp products={products}/>,
}, {
  text: 'Image Gallery', to: '/image-gallery', component: () => <ImageGallery links={links}/>,
}, {
  text: 'List Reorder', to: '/list-reorder', component: () => <ListReorder links={links}/>,
}, {
  text: 'Todo List',
  to: '/todo-list',
  component: () => <TodoList items={items} onListClick={(event) => console.log('List clicked!')}
                             onItemClick={(item, event) => {
                               console.log(item, event);
                             }}/>,
}, {
  text: 'Toggle Message', to: '/toggle-message', component: () => <ToggleMessage/>,
}];

export default routes;

