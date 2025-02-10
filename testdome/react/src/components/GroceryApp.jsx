import React from 'react';

const Product = props => {
  const {product: {name, votes}, onVote, index} = props;
  const plus = () => {
    onVote('up', index);
  };
  const minus = () => {
    onVote('down', index);
  };
  return (<li>
    <span>{name}</span> - <span>votes: {votes}</span>
    <button onClick={plus}>+</button>
    {' '}
    <button onClick={minus}>-</button>
  </li>);
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    const newProducts = products.map((product, i) => {
      if (index !== i) return product;

      dir === 'up' && product.votes++;
      dir === 'down' && product.votes--;

      return product;
    });
    setProducts(newProducts);
  };

  return (<ul>
    {products.map((product, index) => <Product key={product.name}
                                               index={index}
                                               product={product}
                                               onVote={onVote}/>)}
  </ul>);
};

export default GroceryApp;
