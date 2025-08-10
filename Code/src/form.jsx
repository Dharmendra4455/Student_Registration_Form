import React, { useState } from 'react'
import Conformation from './Conformation'
 const form = () => {
  const[name,setname]=useState("")
  const[dob,setdob]=useState("")
  const[address,setaddress]=useState("")
  const[branch,setbranch]=useState("")
  const[agey,setagey]=useState(0)
  const[agem,setagem]=useState(0)
  const[issubmitted,setissubmitted]=useState(false)
 
  const namehandler=(e)=>{
    setname(e.target.value)
    setdob("")              //first input name then other below field if already field remove it.
    setaddress("")
    if(name.length>=2)
    {
      const namepattern=/^[a-zA-Z\s'-]+$/;
      if(!namepattern.test(name))
        {
          document.getElementById('name').style.borderColor='red'
          document.getElementById('name').style.outlineColor='red'
          document.getElementById('nameerror').style.display='block'
         
        }
        else
        {
          document.getElementById('name').style.borderColor='black'
          document.getElementById('name').style.outlineColor='black'
          document.getElementById('nameerror').style.display='none'
        }
    }
    else{
       document.getElementById('nameerror').style.display='block'

    }
  }
  const dobhandler=(e)=>{
    setdob(e.target.value)
    if(!name)
    {
     document.getElementById('name').style.borderColor='red'
     document.getElementById('name').style.outlineColor='red'
     document.getElementById('nameerror').style.display='block'
     setdob("")
    }
    else
    {   
 const inputdob=e.target.value
const date=new Date(inputdob)
const dobyear=date.getFullYear()
if(dobyear>2005 || dobyear<2000) //valid age should not greater than 2005 and lessthen 2000
{
     document.getElementById('dob').style.borderColor='red'
     document.getElementById('dob').style.outlineColor='red'
     document.getElementById('doberror').style.display='block'
       setdob("")
    }
else
  {
     document.getElementById('dob').style.borderColor='black'
     document.getElementById('dob').style.outlineColor='black'
     document.getElementById('doberror').style.display='none'

const dobmonth=date.getMonth()+1
const currentdate=new Date()
const year=currentdate.getFullYear()
const month=currentdate.getMonth()+1
 
var ageyear=year-dobyear
var agemonth=month-dobmonth
if(agemonth<0)
{
agemonth+=12
ageyear-=1

}
setagey(ageyear)
setagem(agemonth)
} 
} 
  }  
  const addresshandler=(e)=>{
    if(!dob){
         document.getElementById('dob').style.borderColor='red'
         document.getElementById('dob').style.outlineColor='red'
         document.getElementById('doberror').style.display='block'     
    }
    else{
      const add=e.target.value
      setaddress(add)
     if(add.length>=9 && add.length<=30){
         document.getElementById('address').style.borderColor='black'
         document.getElementById('address').style.outlineColor='black'
         document.getElementById('addresserror').style.display='none'
    }
    else{
         document.getElementById('address').style.borderColor='red'
         document.getElementById('address').style.outlineColor='red'
         document.getElementById('addresserror').style.display='block'
    }
    }
    
    
  }
const branchhandler=(e)=>{
    const branch=e.target.value
   if(branch)
    {
         setbranch(branch)
         document.getElementById('branch').style.borderColor='black'
         document.getElementById('branch').style.outlineColor='black'
         document.getElementById('brancherror').style.display='none'
    }
   else
    {
        document.getElementById('branch').style.borderColor='red'
        document.getElementById('branch').style.outlineColor='red'
        document.getElementById('brancherror').style.display='block'
    }
  if(!address)
    {
         document.getElementById('address').style.borderColor='red'
         document.getElementById('address').style.outlineColor='red'
         document.getElementById('addresserror').style.display='block'
    }
}

  const submithandler=()=>{
   if(!address)
    {
         document.getElementById('address').style.borderColor='red'
         document.getElementById('address').style.outlineColor='red'
         document.getElementById('addresserror').style.display='block'
    
    }
    else if(!branch){
        document.getElementById('branch').style.borderColor='red'
        document.getElementById('branch').style.outlineColor='red'
        document.getElementById('brancherror').style.display='block'
    }
    else{
      alert("Form Submitted Successfully")
    
    setissubmitted(true)
    }
    
  }

    //alert(currentdate)
    return (
   <>
   {issubmitted?<Conformation data={{name,dob,address,branch,agey,agem}}/>:
   <div id='outer_container' className=' mt-4 flex justify-center'>
   <div id='inner_container' className=' form_Container border-1 min-w-[440px] max-w-[550px]  h-auto '>
   <h1 className='text-2xl font-semibold underline pl-16 ' >Student Registration Form</h1>
    <form action={submithandler}>
    <div className="form_content pl-4 pr-4 mt-4">
    <label className='text-md mt-4'>Name<sup className='text-red-600 text-xl'>*</sup></label>
    <input id='name' className=" border p-1 rounded w-[400px] block" placeholder="fullname" onChange={namehandler} ></input>
   <div id="nameerror" className=" text-red-500 hidden">Invalid name!</div>
    <div  className='text-md mt-4'>DateOfBirth<sup className='text-red-600 text-xl'>*</sup></div>
    <input id='dob' className="first border p-1 rounded w-[400px]" required  type='date' onChange={dobhandler} value={dob}></input>
    <div id='doberror' className=" text-red-500 hidden">after 01/01/2000 and before 12/12/2005</div>
    <div className='text-md mt-4'>Address<sup className='text-red-600 text-xl'>*</sup></div>
    <input id='address' className=" border p-1 rounded w-[400px]" placeholder="current Address" onChange={addresshandler} value={address}></input>
     <div id='addresserror' className="text-red-500 hidden">Enter valid Address!</div>
     <div className="branch_age flex">
        <div className="branch">
         <div className="branch mt-2">Branch <sup className='text-red-600 text-xl'>*</sup></div>
       <select id='branch' className=' border p-1 w-[190px] rounded' onChange={branchhandler}>
        <option value="">Select Branch</option>
        <option value="CS">CS</option>
        <option value="IT">IT</option>
        <option value="E&TC">E&TC</option>
        <option value="Mechanical">Mechanical</option>
    </select>
    <div id='brancherror' className=" text-red-500 hidden ">Select branch!</div>
     </div>
   <div className="age">
     <div className="ml-[25px] mt-2">age<sup className='text-red-600 text-xl'>*</sup></div>
    <input className=" border p-1 ml-5 rounded" value={agey || agem?agey+" years "+agem+" months":""}></input> 
   </div>
     </div>
  <div className="submit flex justify-center">
     <button className='border-1 mt-8 mb-4 pt-1 pb-1 pl-12 pr-12 font-semibold rounded bg-blue-400 hover:bg-green-500'>Submit</button>     
  </div>
   </div>
     </form>
   </div>   
 </div>}
 
   </>
  )
}
export default form
