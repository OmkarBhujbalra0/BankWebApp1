import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        end={amount}
        duration={1.5}
        decimal='2'
        prefix='Rs.'
        />
    </div>
  )
}

export default AnimatedCounter