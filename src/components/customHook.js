import { useState } from 'react';

const CustomHook = () => {
  const [category, setCategory] = useState('general');

  return [category, setCategory];
};

export default CustomHook;