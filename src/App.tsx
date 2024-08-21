import React from 'react';
import ProductList from './ProductList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Product Store</h1>
      <ProductList />
    </div>
  );
};

export default App;