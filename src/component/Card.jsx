import React from 'react'

const Card = (props) => {
    console.log(props.profile)
  return (
    <div className=' mr-10 inline-block bg-black text-white p-4 w-70 rounded text-center shadow-md'>
        <img className='ml-8 h-32 rounded-full mb-4' src={props.profile} alt="" />
        <h1 className='text-xl font-semibold mb-4'>{props.username} surname</h1>
        <h2>{props.city} , {props.age}</h2>
        <button className='mt-5 bg-emrald-700 text-center'>Add friend</button>
    </div>
  )
}

export default Card
