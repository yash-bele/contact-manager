import {
  MdEditCalendar,
  MdOutlineFilterList,
  MdDeleteOutline,
  MdImportExport,
  MdOutlineFileUpload,
} from 'react-icons/md';
import { BiChevronDown } from 'react-icons/bi';
import { useContext } from 'react';
import { Context } from './Main';

const Buttons = () => {
  const { popup, setPopup, data, setData, checks, setChecks } =
    useContext(Context);

  return (
    <section className='flex items-center justify-between'>
      <section className='flex items-center space-x-2.5'>
        <div className='flex items-center bg-white w-fit shadow p-1 pl-2 rounded-md cursor-pointer hover:shadow-md duration-200'>
          <MdEditCalendar className='mr-1.5 text-sm' />
          <span className='text-sm'>Select Date</span>
          <BiChevronDown className='text-base' />
        </div>
        <div className='flex items-center bg-white w-fit shadow p-1 pl-1.5 rounded-md cursor-pointer hover:shadow-md duration-200'>
          <MdOutlineFilterList className='mr-1 text-base' />
          <span className='text-sm mr-1'>Filter</span>
          <span className='w-px h-3 bg-black'></span>
          <BiChevronDown className='text-base' />
        </div>
      </section>
      <section className='flex items-center space-x-2.5'>
        <div
          onClick={() => {
            checks.length && setPopup('delete');
          }}
          className='flex items-center bg-white w-fit shadow py-1 pl-3 pr-5 rounded-md cursor-pointer hover:shadow-md duration-200'
        >
          <MdDeleteOutline className='mr-1 text-base' />
          <span className='text-sm'>Delete</span>
        </div>
        <div className='flex items-center bg-white w-fit shadow p-1 pl-3 pr-5 rounded-md cursor-pointer hover:shadow-md duration-200'>
          <MdImportExport className='mr-1 text-base' />
          <span className='text-sm'>Import</span>
        </div>
        <div className='flex items-center bg-white w-fit shadow p-1 pl-3 pr-5 rounded-md cursor-pointer hover:shadow-md duration-200'>
          <MdOutlineFileUpload className='mr-1 text-base' />
          <span className='text-sm'>Export</span>
        </div>
      </section>
    </section>
  );
};

export default Buttons;
