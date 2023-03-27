import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=" bg-gray-800 bottom-0 z-40">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0">&#169; 2022 - {new Date().getFullYear()} Neil Silao</p>
        </div>
    </div>
        
    </>
  )
}

export default Footer