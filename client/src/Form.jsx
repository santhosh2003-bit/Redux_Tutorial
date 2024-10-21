import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {
    let dispatch= useDispatch()
    const [amount, setAmount] = useState("")
    const [name, setName] = useState("")
    const [num, setNum] = useState("")
  return (
    <div className='container  '>
       <div className='flex items-center p-6'>
        <input type="number" placeholder='Enter Amount...'  className='border-2 border-gray-400 text-3xl rounded-xl p-2' value={amount} onChange={(e)=>{setAmount(e.target.value) }} />
        <button className='border-2 border-slate-300 hover:border-slate-400 bg-blue-600 pt-2 pb-2 pl-4 pr-4 rounded-xl mr-5 ml-5 text-3xl text-white' onClick={()=>{dispatch({type:"deposite",payload:amount}); setAmount("")}}>Deposit</button>
        <button className='border-2 border-slate-300 hover:border-slate-400 bg-green-600 pt-2 pb-2 pl-4 pr-4 rounded-xl text-3xl text-white' onClick={()=>{dispatch({type:"withdraw",payload:amount});setAmount("")}}>withdraw</button>
        </div> 
        <div className='flex items-center p-6'>
            <input  type="text"  placeholder='Enter Name...'  className='border-2 border-gray-400 text-3xl rounded-xl p-2'  value={name} onChange={(e)=>setName(e.target.value)}/>
            <button className='border-2 border-slate-300 hover:border-slate-400 bg-green-600 pt-2 pb-2 pl-4 pr-4 rounded-xl text-3xl text-white ml-3' onClick={()=>{dispatch({type:"NameChange",payload:name});setName("")}}>Update</button>
        </div>
        <div className='flex items-center p-6'>
            <input type="text"  placeholder='Enter Mobile Number...' className='border-2  border-slate-400 text-3xl rounded-xl p-2'  value={num} onChange={(e)=>{setNum(e.target.value)}}/>
            <button className='border-2 border-slate-300 hover:border-slate-400 bg-green-600 pt-2 pb-2 pl-4 pr-4 rounded-xl text-3xl text-white ml-3' onClick={()=>{dispatch({type:"mobileNumberChange",payload:num});setNum("")}}>Update</button>
        </div>
        <button className='border-2 border-slate-300 hover:border-slate-400 bg-red-600 text-3xl p-2 text-white rounded-xl relative left-10'  onClick={()=>dispatch({type:"resert"})}>Resert</button>
    </div>
  )
}

export default Form