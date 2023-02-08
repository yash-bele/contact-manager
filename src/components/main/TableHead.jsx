import { RxCaretSort } from 'react-icons/rx';

const TableHead = () => {
  return (
    <thead>
      <tr className='flex items-center bg-[#B2DFFF] pl-2 h-10 rounded-md'>
        <th className='flex items-center w-[15%]'>
          <div className='flex items-center'>
            <input type='checkbox' />
            <span className='text-sm font-semibold ml-3 text-slate-500'>
              Name
            </span>
          </div>
          <div className='w-px h-3 ml-auto bg-black'></div>
        </th>
        <th className='flex items-center w-[15%]'>
          <span className='text-sm font-semibold ml-2 text-slate-500'>
            Designation
          </span>
          <div className='flex items-center ml-auto'>
            <RxCaretSort className='mr-1' />
            <div className='w-px h-3 bg-black'></div>
          </div>
        </th>
        <th className='flex items-center w-[15%]'>
          <span className='text-sm font-semibold ml-2 text-slate-500'>
            Company
          </span>
          <div className='flex items-center ml-auto'>
            <RxCaretSort className='mr-1' />
            <div className='w-px h-3 bg-black'></div>
          </div>
        </th>
        <th className='flex items-center w-[15%]'>
          <span className='text-sm font-semibold ml-2 text-slate-500'>
            Industry
          </span>
          <div className='flex items-center ml-auto'>
            <RxCaretSort className='mr-1' />
            <div className='w-px h-3 bg-black'></div>
          </div>
        </th>
        <th className='flex items-center w-[15%]'>
          <span className='text-sm font-semibold ml-2 text-slate-500'>
            Email
          </span>
          <div className='flex items-center ml-auto'>
            <RxCaretSort className='mr-1' />
            <div className='w-px h-3 bg-black'></div>
          </div>
        </th>
        <th className='flex items-center w-[11%]'>
          <span className='text-sm font-semibold ml-2 text-slate-500'>
            Phone Number
          </span>
          <div className='w-px h-3 ml-auto bg-black'></div>
        </th>
        <th className='flex items-center w-[7%]'>
          <span className='text-sm font-semibold ml-2 text-slate-500'>
            Country
          </span>
          <div className='w-px h-3 ml-auto bg-black'></div>
        </th>
        <th className='flex items-center w-[7%]'>
          <span className='text-sm font-semibold ml-2 text-slate-500'>
            Action
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
