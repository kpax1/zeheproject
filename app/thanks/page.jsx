import React from 'react'
import succ from '@/public/success-svgrepo-com.svg'
import Image from 'next/image'
const page = () => {
  return (
    <div className='thank'>
        <h2 className='thanks'>Thank for order</h2>
        <Image
        className='yo'
        src={succ}
        width={100}
        height={100}
        alt='yo'
        />
    </div>

  )
}

export default page