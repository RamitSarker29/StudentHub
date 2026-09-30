import React from 'react'

const AddForm = () => {
  return (
    <div className='ml-7 mt-3 shadow-xl mr-5 rounded-xl'>
        <form className='ml-5 p-2' action="">
            <h1 className='w-full font-bold text-lg mb-1'>Profile Picture</h1>
            <div className="flex items-center gap-3">
                <label
                htmlFor="profilePic"
                className="bg-gray-200 border border-gray-600 px-4 py-2 text-gray-600 rounded-lg cursor-pointer"
                    >
                Choose Image
                </label>

                <span className="text-gray-400">
                PNG, JPG or JPEG
                </span>

                <input
                    id="profilePic"
                    type="file"
                    accept="image/*"
                    className="hidden"
  />
</div>
            <h1 className='w-full font-bold text-lg'>Full Name</h1>
            <input className='w-full border border-gray-400 p-1.5 mt-1 mb-1 focus:ring-1 focus:ring-blue-300 outline-none' type="text" name="" id="" placeholder='Enter full name' />
            <h1 className='font-bold text-lg'>Roll Number</h1>
            <input className='w-full border border-gray-400 p-1.5 mt-1 mb-1 focus:ring-1 focus:ring-blue-300 outline-none' type="number" name="" id="" placeholder='Enter roll number' />
            <h1 className='font-bold text-lg'>Department</h1>
            <select className='w-full border border-gray-400 p-1.5 mt-1 mb-1 focus:ring-1 focus:ring-blue-300 outline-none text-gray-500' name="" id="" defaultValue={''}>
                <option value="" disabled>Select Department</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EIE">EIE</option>
                <option value="ECS">ECS</option>
                <option value="IoT">IoT</option>
                <option value="CE">CE</option>
                <option value="ME">ME</option>
                <option value="EE">EE</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option value="FT">FT</option>

            </select>
            <h1 className='font-bold text-lg'>CGPA</h1>
            <input className='w-full border border-gray-400 p-1.5 mt-1 mb-1 focus:ring-1 focus:ring-blue-300 outline-none' type="number" name="" id="" placeholder='Enter CGPA' />
            <h1 className='font-bold text-lg'>Attendance(%)</h1>
            <input className='w-full border border-gray-400 p-1.5 mt-1 mb-1 focus:ring-1 focus:ring-blue-300 outline-none' type="number" name="" id="" placeholder='Enter Attendace' />
            <h1 className='font-bold text-lg'>Email</h1>
            <input className='w-full border border-gray-400 p-1.5 mt-1 mb-1 focus:ring-1 focus:ring-blue-300 outline-none' type="email" name="" id="" placeholder='Enter Email' />
            <div className='flex gap-2 mt-3 justify-end'>
                <button className='bg-gray-200 font-bold text-lg px-4 py-1 rounded-lg h-12 w-25 active:scale-95'>Cancel</button>
                <button className='bg-blue-600 text-white font-bold w-40 rounded-lg h-12 active:scale-95'>Add Student</button>
            </div>
        </form>
    </div>
  )
}

export default AddForm
