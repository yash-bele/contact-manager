import { FiAlertTriangle } from 'react-icons/fi';
import { FaDesktop } from 'react-icons/fa';
import Main from './components/main/Main';

const App = () => {
  return (
    <>
      <main className='font-titillium h-screen select-none hidden lg:block'>
        <Main />
      </main>
      <main className='absolute w-full h-full justify-center items-center flex lg:hidden'>
        <section className='-mt-32 shadow-md p-5 rounded-md bg-red-100'>
          <FiAlertTriangle className='text-center text-4xl w-full mb-5 text-red-500' />
          <h1 className='font-bold text-center text-base text-slate-700'>
            You are on small screen.
          </h1>
          <h1 className='font-bold text-center text-base text-slate-700'>
            Switch to desktop size screen.
          </h1>
          <FaDesktop className='text-center text-4xl w-full mt-5 text-blue-500' />
        </section>
      </main>
    </>
  );
};

export default App;
