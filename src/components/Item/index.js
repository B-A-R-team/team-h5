import React from 'react';
import { ReactComponent as NextIcon } from '../../assets/image/next.svg';
import './index.css';

export default function Item({
  fullpageApi,
  isLast,
  isBetween,
  isActive,
  title,
  bgc,
  children,
}) {
  return (
    <div className={`section relative text-white ${bgc}`}>
      <div
        className={`h-full flex flex-col py-6 items-center ${
          isBetween ? 'justify-between' : ''
        }`}
      >
        {title && (
          <h2
            className={`mb-8 text-3xl text-white self-start ml-10 ${
              isActive ? 'move-end' : 'move-start'
            }`}
          >
            {title}
          </h2>
        )}
        {isActive && children}
      </div>
      {!isLast && (
        <div
          className="absolute inset-x-0 bottom-4 w-full h-10 flex justify-center"
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <NextIcon />
        </div>
      )}
    </div>
  );
}
