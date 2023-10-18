'use client'

import { useState } from "react";

export default function Home() {

  const [headingState, setHeadingState] = useState('');
  const handleChange = (e)=>{
    setHeadingState(e.target.value);
  }

  const addTodoButton = (e)=>{
    e.preventDefault();
    console.log(headingState);
  }

  return (
    <>
      <div className="mx-5 md:mx-10">
          <div className="flex justify-center items-center mt-10"><h1>Todo</h1></div>
          <div className="my-5">
              <div>
                <form onSubmit={addTodoButton}>
                  <div className="flex flex-col justify-center items-center text-black">
                    <input type="text" name='heading' onChange={handleChange} className="px-3 py-2 rounded-lg outline-none" required/>
                    <button type="submit" className="my-5 px-10 py-2 rounded-lg bg-white hover:bg-gray-100">Add</button>
                  </div>
                </form>
              </div>
          </div>

          <div className="">
            <div>
              <h1 className="uppercase text-lg">All todos:</h1>
            </div>
            <hr/>
            <div>
              
            </div>
          </div>
      </div>
    </>
  )
}
