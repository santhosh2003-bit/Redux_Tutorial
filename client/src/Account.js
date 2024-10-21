import React from 'react'
import { useSelector } from 'react-redux'
const Account = () => {
   let data= useSelector((state)=>{
        return state;
    })
  return (
    <div className='p-6'>
    <h1 className='text-xl text-gray-400 mb-3'>Account Details</h1>
    <table className='border w-[80%]'>
        <thead>
            <tr>

            <th className='border '>Salary</th>
            <th className='border'>Name</th>
            <th className='border'>mobile</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border text-center'>{data.balance}</td>
                <td className='border text-center'>{data.fullName}</td>
                <td className='border text-center'>{data.mobile}</td>

            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Account