import ChangeUsername from "../components/ChangeUsername";
import FocusableInput from "../components/Focus";
import Focus from "../components/Focus";
import CharacterPoints from "../components/CharacterPoints";
import React from "react";
import GroceryApp from "../components/GroceryApp";
import { items, links, list, products, sampleItems } from "../data";
import ImageGallery from "../components/ImageGallery";
import ListReorder from "../components/ListReorder";
import TodoList from "../components/TodoList";
import ToggleMessage from "../components/ToggleMessage";
import PriceCalculator from "../components/PriceCalculator";
import PlayerStatus from "../components/PlayerStatus";
import ShoppingList from "../components/ShoppingList";

const routes = [
  {
    text: "Change Username",
    to: "/change-username",
    component: () => <ChangeUsername />,
  },
  {
    text: "Character Points",
    to: "/character-points",
    component: () => <CharacterPoints totalPoints={15} />,
  },
  {
    text: "Focus",
    to: "/focus",
    component: () => <Focus />,
  },
  {
    text: "Focusable Input",
    to: "/focusable-input",
    component: () => <FocusableInput shouldFocus={true} />,
  },
  {
    text: "Grocery App",
    to: "/grocery-app",
    component: () => <GroceryApp products={products} />,
  },
  {
    text: "Image Gallery",
    to: "/image-gallery",
    component: () => <ImageGallery links={links} />,
  },
  {
    text: "List Reorder",
    to: "/list-reorder",
    component: () => <ListReorder items={list} />,
  },
  {
    text: "Todo List",
    to: "/todo-list",
    component: () => (
      <TodoList
        items={items}
        onListClick={(event) => console.log("List clicked!")}
        onItemClick={(item, event) => {
          console.log(item, event);
        }}
      />
    ),
  },
  {
    text: "Toggle Message",
    to: "/toggle-message",
    component: () => <ToggleMessage />,
  },
  {
    text: "Mega Store App",
    to: "/mega-store-app",
    component: () => <PriceCalculator />,
  },
  {
    text: "Player Status",
    to: "/player-status",
    component: () => <PlayerStatus />,
  },
  {
    text: "Shopping List",
    to: "/shopping-list",
    component: () => <ShoppingList items={sampleItems} />,
  },
];

export default routes;
