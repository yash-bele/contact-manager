import { useState } from 'react';
import Main from './components/main/Main';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className='font-titillium h-screen select-none'>
      <Main />
    </main>
  );
};

export default App;
