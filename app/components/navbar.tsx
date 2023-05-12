"use client";
import React from "react";
// import { Icon360View } from "";/
import { AiFillCar } from "react-icons/ai";
import { Tb360View } from "react-icons/tb";
type NavProps = {
  handleInputChange: (val: string) => void;
  currentModel: any;
  suggestions: any;
  setRequiredCar: any;
};
const Navbar = (props: NavProps) => {
  const { currentModel, handleInputChange, suggestions, setRequiredCar } = props;
  return (
    <div className='navbar bg-base-100 mb-7'>
      <div className='flex-1 gap-2'>
        <a className='btn btn-ghost normal-case text-3xl' href='https://iter8.netlify.app/' target='_blank'>
          AutoPulse
        </a>
        <AiFillCar size={40} />
        <Tb360View size={40} />
      </div>
      <div className='flex-none gap-2'>
        {suggestions.length > 0 ? (
          suggestions.map((item: any, idx: number) => {
            const bodyStyleName = item?.bodyStyles?.[0]?.Name || "Car";

            return (
              <div
                key={idx}
                className='border-2 border-slate-500 p-[20px] text-base font-bold rounded-lg cursor-pointer relative'
                onClick={() => {
                  setRequiredCar(item);
                }}
              >
                <div className='badge badge-xs bg-inherit outline-none border-none font-normal top-1 right-[0.2px] absolute '>
                  {bodyStyleName}
                </div>
                {item?.makeMaskingName}-{item?.maskingName}
              </div>
            );
          })
        ) : (
          <div className='border-2 border-slate-500 p-[10px] text-sm rounded-lg'>Start Typing the model name -</div>
        )}

        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
            value={currentModel}
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
          />
        </div>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar border-2 border-slate-600'>
            <div className='w-10 rounded-full'>.</div>
          </label>
          <ul tabIndex={0} className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
