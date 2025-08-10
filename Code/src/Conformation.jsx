import React from 'react'
import Form from './form'
import { useState } from 'react'
const Conformation = (props) => {
  //  console.log(props.data.name)
   
    const[isnew,setisnew]=useState(false)
    const newregistrationhandler=()=>{
        setisnew(true)
    }
  return (
    <>
    {isnew?<Form/>:
    <div className="container">
    <div className="outercontainer flex justify-center">
    <div className="innercontainer border p-5 mt-5">
    <div className="content text-[16px] font-serif">
    <h1 className='text-2xl font-semibold underline pl-9 font-serif ' >Registration Successfully</h1>
   <div className="comtainer flex justify-center">
    <div className="data">
    <div>Name:{" "+props.data.name} </div>
    <div>DOB: {" "+props.data.dob}</div>
    <div>Address:{" "+props.data.address}</div>
    <div>Branch: {" "+props.data.branch}</div>
    <div>age: {" "+props.data.agey} {" "}Years{" "}{props.data.agem}{" "} Months</div>
    </div>
    </div>
    </div>
    <button onClick={newregistrationhandler} className='border-1 mt-8 ml-12 mb-4 pt-1 pb-1 pl-12 pr-12 font-semibold rounded bg-blue-400 hover:bg-blue-500'>New Registration</button>     
    </div>
    </div>
    </div>}
    </>
  )
}

export default Conformation