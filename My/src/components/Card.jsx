import React from 'react'

const Card = ({className,title, description }) => {
  return (
      <div
          className={`items-center w-auto px-8 py-2 bg-white hover:bg-gray-900 hover:text-white active:bg-gray-800 active:text-gray-50 rounded-lg trsnsition-all shadow-lg ${className}`}>
      <div>
        <h1 className=" text-lg font-semibold py-2"> {title} </h1>
      </div>
      <div>
        <p className="text-xl font-bold"> {description} </p>
      </div>
    </div>
  );
}

export default Card