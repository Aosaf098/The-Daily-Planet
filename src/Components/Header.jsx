import React from 'react'
import moment from 'moment'
import dailyPlanet from '../assets/dailyplanet.png'

const Header = () => {
  return (
    <>
        <header className='flex flex-col justify-center items-center gap-4'>
            <div>
                <img className='w-96' src={dailyPlanet} alt="" />
            </div>
            <div className='space-y-2'>
                <p className='text-lg font-normal text-center text-gray-500'>Straight from the Source</p>
                <p className='text-lg font-medium text-center'>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </header>
    </>
  )
}

export default Header
