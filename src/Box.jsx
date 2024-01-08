import React from 'react'
import Img from '/public/assets/images/illustration-article.svg'
import profile from '/public/assets/images/image-avatar.webp'

function Box() {
  return (
    <div className="bg-yellow-400 p-10 sm:p-0 w-full h-screen flex justify-center items-center">
        <div className='w-[390px] p-5 mx-auto bg-white xl:h-[65vh] lg:h-[55vh] md:h-[55vh] max-h-[525px] border-black border rounded-md'>
          <div>
          <div className='w-full flex justify-center items-center'>
            <img src={Img} className='rounded-md'/>
          </div>
          <div className='px-1'>
          <p className='text-black mt-5 font-semibold bg-yellow-400 max-w-[90px] rounded-md p-1 flex justify-center items-center'>Learning</p>
          <p className='mt-3 font-medium'>Published 21 Dec 2023</p>
          <h1 className='font-bold text-2xl mt-3'>HTML & CSS foundations</h1>
          <p className='mt-3 font-medium text-gray-500'>These languages are the backbone of every website, defining structure,content,and presentation.</p>
          <div className='flex items-center mt-5'>
            <img src={profile} className='w-[40px] h-[40px]'/>
            <p className='px-3 font-bold'>Greg Hooper</p>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Box