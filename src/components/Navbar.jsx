import React, { useContext, useState } from 'react'
import { CogIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { AppContext } from './AppContext'

const Navbar = () => {
    const { user } = useContext(AppContext);
    const [addButton, setAddButton] = useState(false)


    return (
        <>
            {addButton && (
                <div className='w-full flex justify-center absolute bottom-16'>
                    <div className='bg-gray-100 w-8/12 md:w-7/12 xl:w-4/12 rounded-t-lg shadow-xl grid grid-rows-2'>
                        <button className='py-4 px-3 flex hover:bg-blue-100 rounded-t-lg border-b-2 border-solid'>
                            <p className='flex-start text-xl'>Añadir una prenda</p>
                        </button>

                        <button className='py-4 px-3 flex hover:bg-blue-100'>
                            <p className='flex-start text-xl'>Añadir un outfit</p>
                        </button>
                    </div>

                </div>
            )}

            <div className='bg-gray-200 absolute bottom-0 right-0 w-full h-16 flex justify-center items-center'>
                <div className='w-11/12 md:w-8/12 xl:w-4/12 grid grid-cols-3 items-center'>
                    <div className='flex justify-center'>
                        <CogIcon className='h-8 w-8 text-gray-700 cursor-pointer' />
                    </div>

                    <div className='flex justify-center'>
                        <PlusCircleIcon
                            onClick={() => setAddButton(!addButton)}
                            className='h-10 w-10 text-blue-900 cursor-pointer'
                        />
                    </div>

                    <div className='flex justify-center'>
                        <div className='h-8 w-8 bg-gray-200 cursor-pointer rounded-full '>
                            <img src={user.photoURL ? user.photoURL : 'https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png'} alt="profile" className='object-cover object-center w-full h-full rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar