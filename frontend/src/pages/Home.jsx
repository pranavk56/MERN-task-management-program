import React from 'react';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {

  return (
    <>
      <MainLayout>
        <div className='bg-primary text-white h-[250px] sticky py-2 text-center' style={{ top: 0, width: "100%" }}>
          <header style={{ fontFamily: "'Kalam', cursive", fontSize: "40px", color: "white" }} className='bg-primary flex justify-center top-0 p-4 items-center'>
            <h2 className='cursor-pointer uppercase font-bold' style={{ textAlign: "center" }}>
              <Link to="/"> Task Manager </Link>
            </h2>
          </header>
          <h1 className='text-2xl pt-3 pb-8'> Welcome to Task Manager App</h1>
          <Link to="/tasks/add" className='bg-blue-800 text-white hover:bg-blue-500 font-medium rounded-md px-4 py-2 text-xl space-x-3 hover:space-x-4'>
            <span className='transition-[margin]'>Create a new task</span>
            <span className='relative ml-4 text-base transition-[margin]'><i className="fa-solid fa-arrow-right"></i></span>
          </Link>
        </div>
        <Tasks />
        </MainLayout>
    </>
  )
}

export default Home