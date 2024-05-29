import React from 'react'

import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
    console.log(list);
  return (
 <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center dark:mt-16 dark:pt-12'>
    <h1 className='text-2xl md:text-4xl'>
        We're delighted to have you{" "}
        <span className='text-pink-500 '>Here! :)</span>
        </h1>
        <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nostrum debitis suscipit, natus corporis tempore eligendi quaerat fugiat molestias consequatur similique sed, est porro possimus excepturi modi maxime voluptas et?
        Magni laboriosam odio ullam, eum provident iure harum perspiciatis cumque ad animi eveniet nulla vero unde alias accusamus in quam commodi aspernatur id nemo eos. Voluptates fugiat illum molestias aliquid.</p>
        <Link to="/"><button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button></Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        { list.map((item)=>(
                <Cards item={item} key={item.id} />
            ))}
    </div>
    </div>
 </>
  )
}

export default Course
