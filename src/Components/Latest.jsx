import React from 'react'
import Marquee from 'react-fast-marquee'

const Latest = () => {
  return (
    <>
        <div className='bg-gray-200 my-8 flex gap-2 lg:p-4 p-2'>
            <button className='bg-primary text-white px-6 py-2 rounded-none'>Latest</button>
            <Marquee 
            pauseOnHover={true}
            speed={100}
            className='font-semibold lg:text-2xl text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ad asperiores quis iure repellat qui sit recusandae, inventore a fugit commodi neque ratione quam quo! Sapiente doloremque ipsa placeat ad.
            </Marquee>
        </div>
    </>
  )
}

export default Latest
