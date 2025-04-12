import Image from 'next/image'
import React from 'react'

export const Card = (props) => {
  return (
    <div className='flex flex-col shadow max-w-2xl cursor-pointer p-6'>
         <Image src={props.itemImage} alt={props.itemDescription} width={500} height={500} />
         <div className='flex flex-col px-4 py-2 text-xl'>
                <h4 className='hover:underline'>{props.itemName}</h4>
                {props.rate}
         </div>
    </div>
    
  )
}
