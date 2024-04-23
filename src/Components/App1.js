import React from 'react';
import CustomList from './CustomList';

const App1 = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return <CustomList items={items} />;
};

export default App1;

// const App2 = () => {
//   const items = ['Apple', 'Banana', 'Orange'];
//   return <CustomList items={items} />;
// };

// const App3 = () => {
//   const items = ['Red', 'Green', 'Blue'];
//   return <CustomList items={items} />;
// };
