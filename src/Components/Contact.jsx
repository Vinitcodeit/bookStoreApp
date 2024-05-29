import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };

  return (
   <>
    <div className='flex h-screen items-center justify-center '>
    <div  className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Contact Us</h3>
  
  {/* Name */}
   
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input className=' py-1 w-80 px-3 rounded-md outline-none' type="name" placeholder='Enter Your Full Name' 
          {...register("name", { required: true })}
        />
        <br />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
    </div>

    {/* email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input className=' py-1 w-80 px-3 rounded-md outline-none' type="email" placeholder='Enter Your Email' 
          {...register("email", { required: true })}
        />
        <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Message</span>
        <br />
        <input className=' py-1 w-80 px-3 rounded-md outline-none' type="message" placeholder='Enter Your message' 
           {...register("message", { required: true })}
        />
        <br />
                {errors.message && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    
    <div className='flex justify-around mt-4 '>
        <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Contact</button>
        {/* <p>Have accout?{" "}
         <button className='underline text-blue-500 cursor-pointer'
         onClick={()=>
          document.getElementById("my_modal_3").showModal()
         }>
        Login
        </button> 
        <Login />
     </p> */}
    </div>
    </form>
  </div>
</div>
    </div>
   </>
  )
}

export default Contact
