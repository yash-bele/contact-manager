import { useState, createContext } from 'react';
import json from './data.json';
import Aside from './Aside';
import Navbar from './Navbar';
import Popup from './Popup';
import Table from './Table';
export const Context = createContext();

const Main = () => {
  const [popup, setPopup] = useState('');
  const [data, setData] = useState(json);
  const [contacts, setContacts] = useState([]);
  const [checks, setChecks] = useState([]);
  const [rows, setRows] = useState(0);
  const [rowsStart, setRowsStart] = useState(0);
  const [rowsEnd, setRowsEnd] = useState(0);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(0);

  return (
    <Context.Provider
      value={{
        popup,
        setPopup,
        data,
        setData,
        contacts,
        setContacts,
        checks,
        setChecks,
        rows,
        setRows,
        rowsStart,
        setRowsStart,
        rowsEnd,
        setRowsEnd,
        pages,
        setPages,
        page,
        setPage,
      }}
    >
      <main className='h-full flex'>
        <Aside />
        <section className='w-[88%]'>
          <Navbar />
          <Table />
          <Popup />
        </section>
      </main>
    </Context.Provider>
  );
};

export default Main;
