import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='relative bg-gray-50 h-screen w-screen overflow-x-hidden'>
        {children}
      </div>
    </>
  )
}

export default MainLayout;