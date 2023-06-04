import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from './utils/Loader';
import Tooltip from './utils/Tooltip';

const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  const [fetchData, { loading }] = useFetch();

  const fetchTasks = useCallback(() => {
    const config = { url: "/tasks", method: "get" };
    fetchData(config, { showSuccessToast: false }).then(data => setTasks(data.tasks));
  }, [fetchData]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);


  const handleDelete = (id) => {
    const config = { url: `/tasks/${id}`, method: "delete" };
    fetchData(config).then(() => fetchTasks());
  }


  return (
    <>
      <div className="my-2 mx-auto max-w-[700px] py-4">

        {tasks.length !== 0 && <h2 className='my-2 ml-2 md:ml-0 text-xl'>Your tasks ({tasks.length})</h2>}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {tasks.length === 0 ? (

              <div className='w-[700px] h-[200px] flex items-center justify-center gap-10'>
                <span>No tasks found</span>
              </div>

            ) : (
              tasks.map((task, index) => (
                <div key={task._id} className='bg-white my-4 p-4 text-gray-600 rounded-md shadow-md'>
                  <div className='flex mb-2'>

                    <span className='font-bold'>{task.title}</span>

                    <Tooltip text={"Edit this task"} position={"top"}>
                      <Link to={`/tasks/${task._id}`} className='ml-auto mr-2 text-black-600 cursor-pointer'>
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </Tooltip>

                    <Tooltip text={"Delete this task"} position={"top"}>
                      <span className='text-black-500 cursor-pointer pl-2' onClick={() => handleDelete(task._id)}>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </Tooltip>
                  </div>
                  <hr/>
                  <div className='whitespace-pre pt-2'>{task.description}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  )

}

export default Tasks