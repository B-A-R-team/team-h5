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
  image,
  ...rest
}) {
  return (
    <div className={`section relative ${bgc} max-h-screen`} {...rest}>
      <div
        className={`h-full flex flex-col items-center ${
          isBetween ? 'justify-between' : ''
        }`}
      >
        <header className="w-full">
          {isActive && image && (
            <div
              className="w-full overflow-hidden flex justify-center items-center"
              style={{ height: 200 }}
            >
              <img
                className="fade-item-l"
                src={image.src}
                alt={image.alt}
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}
          {isActive && title && (
            <h2
              className={`inline-block fade-item-d mb-2 text-xl text-white self-start pl-5 pr-10 py-2 pr-4 bg-red-600 shadow relative ${
                image ? '-top-4' : 'mt-6 mb-6'
              }`}
            >
              {title}
              <span className="absolute w-2 bg-red-600 shadow inset-y-0 -right-4"></span>
              <span className="absolute w-2 bg-red-600 shadow inset-y-0 -right-8"></span>
            </h2>
          )}
        </header>
        {isActive && (image ? (
          <div className="content">{children}</div>
        ) : (
          children
        ))}
      </div>
      {!isLast && (
        <div
          className="absolute inset-x-0 bottom-0 pb-4 w-full h-14 flex justify-center bg-transparent-black"
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <NextIcon />
        </div>
      )}
    </div>
  );
}
