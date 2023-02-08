import { useContext, useState } from 'react';
import { HiOutlineTrash, HiCheck } from 'react-icons/hi';
import { Context } from './Main';

const Popup = () => {
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
    rowsStart,
    setRowsStart,
    rowsEnd,
    setRowsEnd,
    pages,
    setPages,
    page,
    setPage,
  } = useContext(Context);

  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    const datax = data.filter((datum) => !checks.includes(datum.id));
    const contactsx = datax.slice(rowsStart, rowsEnd);
    const pagesx = Math.ceil(datax.length / rows);
    setData(datax);
    if (pagesx !== pages.length && contactsx.length) {
      console.log(pagesx, pages.length, page);
      if (pagesx === page) {
        setContacts(contactsx);
        setPages(Array(pagesx).fill(0));
        setPage(pagesx - 1);
      } else {
        setContacts(contactsx);
        setPages(Array(pagesx).fill(0));
        setPage(pagesx);
      }
    } else if (contactsx.length) {
      setContacts(contactsx);
    } else {
      setPages(Array(pagesx).fill(0));
      setContacts(data.slice(rowsStart - rows, rowsEnd - rows));
      setRowsStart(rowsStart - rows);
      setRowsEnd(rowsEnd - rows);
    }
    setDeleted(true);
    setTimeout(() => {
      setChecks([]);
      setPopup('');
      setDeleted(false);
    }, 1000);
  };

  return (
    <>
      {popup && (
        <main className='absolute w-full h-full bg-black/50 top-0 left-0 flex items-center justify-center'>
          {popup === 'delete' && (
            <>
              {!deleted ? (
                <section className='bg-white flex flex-col items-center p-5 rounded-md -mt-20 w-[312.61px] h-[187px]'>
                  <div className='p-1.5 bg-blue-200 rounded-full'>
                    <HiOutlineTrash className='text-xl' />
                  </div>
                  <p className='mt-3 font-semibold'>Delete Contacts</p>
                  <p className='mt-2 text-[#2DA5FC]'>
                    Sure you want to delete these contacts ?
                  </p>
                  <div className='mt-5'>
                    <button
                      onClick={() => setPopup('')}
                      className='bg-blue-400 hover:bg-blue-500 px-5 pt-px pb-0.5 rounded-md text-white mr-3 duration-200'
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDelete()}
                      className='font-semibold'
                    >
                      Ok
                    </button>
                  </div>
                </section>
              ) : (
                <section className='bg-white flex flex-col items-center justify-center rounded-md -mt-20 w-[312.61px] h-[187px]'>
                  <div className='p-1.5 bg-blue-200 rounded-full'>
                    <HiCheck className='text-xl' />
                  </div>
                  <p className='mt-5 font-semibold'>Deleted Contacts</p>
                </section>
              )}
            </>
          )}
        </main>
      )}
    </>
  );
};

export default Popup;
