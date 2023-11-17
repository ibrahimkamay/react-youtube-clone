import React from 'react'
import images from '../assets/images/images'

const HomeCard = () => {
  return (
    <div className='w-[300px] m-3 cursor-pointer'>
    <img src={images.youtube} alt="" />
    <div className='font-bold m-2'>Title Title Title Title Title Title Title</div>
    <div className='text-xs mt-1 tracking-wider text-gray-700'>Halil İbrahim KAMAY</div>
    <div className='text-xs mt-1 tracking-wider text-gray-700'>
      <span>100K Görüntüleme</span>
      <span>1 yıl önce</span>
    </div>
    </div>
  )
}

export default HomeCard