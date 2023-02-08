import { useContext, useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Context } from './Main';
import Buttons from './Buttons';
import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = () => {
  const {
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
  } = useContext(Context);

  const ref = useRef(0);

  useEffect(() => {
    const rowsx = Math.floor((ref.current.clientHeight - 52) / 40) - 1; // 11
    const pagesx = Math.ceil(data.length / rowsx);
    setContacts(data.slice(rowsStart, rowsx));
    setRows(rowsx);
    setRowsEnd(rowsx);
    setPages(Array(pagesx).fill(0));
    setPage(pagesx);
  }, []);

  const handlePage = (params) => {
    if (params) {
      if (page > 1) {
        setContacts(data.slice(rowsStart + rows, rowsEnd + rows));
        setRowsStart(rowsStart + rows);
        setRowsEnd(rowsEnd + rows);
        setPage(page - 1);
      }
    } else {
      if (page < pages.length) {
        setContacts(data.slice(rowsStart - rows, rowsEnd - rows));
        setRowsStart(rowsStart - rows);
        setRowsEnd(rowsEnd - rows);
        setPage(page + 1);
      }
    }
  };

  return (
    <main className='h-[90%] p-5 pb-[38px]'>
      <section ref={ref} className='bg-slate-50 w-full h-full rounded-md p-3'>
        <Buttons />
        <table className='mt-3 w-full'>
          <TableHead />
          <TableBody contacts={contacts} />
        </table>
      </section>
      <div className='flex items-center w-fit ml-auto -mt-0.5 space-x-1'>
        <div className='py-px hover:bg-slate-200 rounded-md duration-200'>
          <BiChevronLeft
            onClick={() => handlePage(0)}
            className='text-xl text-slate-500'
          />
        </div>
        <div className='space-x-1 pb-0.5'>
          {pages.map((_, i) => (
            <span
              key={i}
              className={`font-semibold cursor-default
                ${
                  pages.length - page === i
                    ? 'text-blue-500 text-base'
                    : 'text-slate-300 text-sm'
                }`}
            >
              {i + 1}
            </span>
          ))}
        </div>
        <div className='py-px hover:bg-slate-200 rounded-md duration-200'>
          <BiChevronRight
            onClick={() => handlePage(1)}
            className='text-xl text-slate-500'
          />
        </div>
      </div>
    </main>
  );
};

export default Table;
