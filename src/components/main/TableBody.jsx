import { useContext, useEffect, useState } from 'react';
import { HiOutlineLink, HiOutlineTrash } from 'react-icons/hi';
import { Context } from './Main';

const TableBody = ({ contacts }) => {
  const { popup, setPopup, data, setData, checks, setChecks } =
    useContext(Context);

  const handleChange = (e) => {
    const value = e.target.value * 1;
    const checked = e.target.checked;
    checked
      ? setChecks([...checks, value])
      : setChecks(checks.filter((check) => check !== value));
  };

  return (
    <tbody>
      {contacts.map((contact, i) => {
        const { id, name, designation, industry, email, phone, country } =
          contact;
        return (
          <tr
            key={id}
            className={`flex items-center bg-white pl-2 h-10 rounded-md ${
              !(i % 2) ? 'bg-slate-50' : 'bg-[#B2DFFF4F]'
            }`}
          >
            <td className='flex items-center w-[15%]'>
              <input
                value={id}
                onChange={handleChange}
                id={id}
                type='checkbox'
              />
              <label
                htmlFor={id}
                className='text-sm font-semibold ml-3 text-slate-500'
              >
                {name.length > 17 ? `${name.substring(0, 17)}...` : name}
              </label>
            </td>
            <td className='w-[15%]'>
              <span className='text-sm font-semibold ml-2 text-slate-500'>
                {designation.length > 20
                  ? `${designation.substring(0, 20)}...`
                  : designation}
              </span>
            </td>
            <td className='w-[15%]'>
              <span className='text-sm font-semibold ml-2 text-slate-500'>
                {industry.length > 20
                  ? `${industry.substring(0, 20)}...`
                  : industry}
              </span>
            </td>
            <td className='w-[15%]'>
              <span className='text-sm font-semibold ml-2 text-slate-500'>
                {industry.length > 20
                  ? `${industry.substring(0, 20)}...`
                  : industry}
              </span>
            </td>
            <td className='w-[15%] relative group'>
              <span className='text-sm font-semibold ml-2 text-slate-500 group-hover:text-[#2DA5FC]'>
                {email.length > 20 ? `${email.substring(0, 20)}...` : email}
              </span>
              <div className='absolute text-xs font-semibold text-[#2DA5FC] -bottom-8 z-10 hidden group-hover:block'>
                <div className='border-b-[15px] border-b-white border-l-[8px] border-r-transparent border-r-[8px] border-l-transparent ml-auto mr-[25%] w-fit'></div>
                <div className='bg-white py-1 px-2 ml-2 rounded-md shadow-md'>
                  <p className='cursor-pointer'>{email}</p>
                </div>
              </div>
            </td>
            <td className='w-[11%]'>
              <span className='text-sm font-semibold ml-2 text-slate-500'>
                {phone}
              </span>
            </td>
            <td className='w-[7%]'>
              <span className='text-sm font-semibold ml-2 text-slate-500'>
                {country}
              </span>
            </td>
            <td className='w-[7%] flex items-center space-x-2.5'>
              <HiOutlineLink className='text-sm text-blue-500 ml-2 cursor-pointer' />
              <HiOutlineTrash className='text-base text-red-400 cursor-pointer' />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
