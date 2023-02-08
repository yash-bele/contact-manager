import { useContext, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { Context } from './Main';

const Navbar = () => {
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

  const [search, setSearch] = useState('');
  const [searchFilter, setSearchFilter] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchFilter(data.filter((i) => i.email.includes(value)));
  };
  const handleSearch = (params) => {
    // setContacts([params]);
    // setSearchFilter(searchFilter.filter((i) => i.id !== params.id));
  };

  return (
    <section className='h-[10%] flex items-center justify-between px-5 border-b-2'>
      <h1 className='text-xl font-semibold text-slate-500'>Total Contacts</h1>
      <div className='flex items-center'>
        <section className='relative'>
          <div
            className={`flex items-center bg-slate-100 py-2 px-3 mr-32 w-80 rounded-md duration-200 search-div
          ${search && searchFilter.length ? 'rounded-b-none' : ''}`}
          >
            <MdOutlineSearch className='text-xl mr-3 -mb-0.5' />
            <input
              value={search}
              onChange={handleChange}
              type='text'
              spellCheck='false'
              placeholder='Search by Email Id...'
              className='outline-none text-sm w-full bg-transparent'
            />
          </div>
          {search && searchFilter.length ? (
            <div className='bg-white pb-2 px-3 mr-32 w-80 rounded-t-none absolute z-20 space-y-1 rounded-b-md shadow-lg'>
              {searchFilter.map((i) => (
                <div
                  onClick={() => handleSearch(i)}
                  key={i.id}
                  className='flex items-center cursor-pointer'
                >
                  <MdOutlineSearch className='text-lg mr-3 -mb-0.5' />
                  <p className='text-sm'>{i.email}</p>
                </div>
              ))}
            </div>
          ) : null}
        </section>
        <div className='flex items-center text-xs'>
          <img
            src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
            alt='profile'
            className='w-10 rounded-full mr-2'
          />
          <div>
            <p className='font-semibold text-sm'>Ram Darvin</p>
            <p>Super Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
