import React, {useEffect, useState} from 'react'
import { EmojiSadIcon } from '@heroicons/react/outline'

const Ayer = () => {
    const [ayer, setAyer] = useState({})

    return (
        <div className='w-full flex justify-center'>
            <div className='w-10/12'>

                <h1 className='text-white text-3xl mt-8 font-bold'>Ayer usaste</h1>

                <div className='bg-gray-200 h-72 w-full mt-4 rounded-lg flex justify-center items-center'>
   
                            <div className='w-11/12 h-64 border-dashed border-gray-400 border-4 flex flex-col justify-center items-center'>
                                <p className='text-xl font-semibold text-gray-700'>Ayer no elegiste ningún outfit</p>
                                <EmojiSadIcon className='h-16 w-16 text-gray-600 mt-2' />
                            </div>

                </div>
            </div>
        </div>
    )
}

export default Ayer