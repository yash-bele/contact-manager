import {
  MdOutlineDashboard,
  MdOutlineContacts,
  MdOutlineLogout,
} from 'react-icons/md';

const Aside = () => {
  return (
    <aside className='flex flex-col justify-between w-[12%] h-full bg-[#CEF3FF] pt-3 pb-5 text-sm font-semibold'>
      <section className='mx-auto w-fit'>
        <h1 className='text-[#0884FF] text-3xl ml-2'>Logo</h1>
        <div className='flex items-center ml-2 mt-10'>
          <MdOutlineDashboard className='text-base mr-1' />
          <span>Dashboard</span>
        </div>
        <div className='flex items-center bg-[#2DA5FC] text-white px-2 py-2.5 rounded-md mt-5'>
          <MdOutlineContacts className='text-base mr-1' />
          <span className='font-medium'>Table Contacts</span>
          <span className='w-px h-5 bg-white ml-2'></span>
        </div>
      </section>
      <section className='flex items-center ml-[15%] w-fit'>
        <MdOutlineLogout className='text-base mr-1' />
        <span>Log Out</span>
      </section>
    </aside>
  );
};

export default Aside;
