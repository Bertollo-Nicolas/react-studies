import React from 'react';

const FakeBrowserHader: React.FC = () => {
   return (
      <div className='title-bar h-12 w-full bg-neutral-100 px-5 flex items-center border-b-2'>
        <div className="title-bar--window-control flex">
            <span className="fake-btn w-3 h-3 bg-red-500 block rounded-full mr-3"></span>
            <span className="fake-btn w-3 h-3 bg-yellow-500 block rounded-full mr-3"></span>
            <span className="fake-btn w-3 h-3 bg-green-500 block rounded-full mr-3"></span>
        </div>
        <div className="title-bar--nav-control flex ml-5">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right rotate-180 text-gray-600"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right text-gray-600"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
        </div>
        <div className="title-bar--adress-bar w-2/5 absolute left-1/2 transform -translate-x-1/2">
            <div className="fake-input flex items-center justify-between bg-neutral-200 rounded-md w-full px-2">
                <p className="url text-center mx-auto">https://www.developper.com</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rotate-clockwise text-gray-600 w-4 h-4 rotate-180">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
                </svg>
            </div>
        </div>
      </div>
   );
};
export default FakeBrowserHader;