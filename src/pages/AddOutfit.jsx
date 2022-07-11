import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Button from '../components/Button'

const AddOutfit = () => {
    return (
        <>
            <div className='bg-gray-900 w-screen h-screen'>

                {/* Barra */}
                <div className='bg-gray-200 absolute top-0 right-0 w-full h-16 flex justify-center items-center'>
                    <div className='w-11/12 md:w-8/12 xl:w-4/12 grid grid-cols-3 items-center'>
                        <Link to="/">
                            <div className='flex justify-start'>
                                <ChevronLeftIcon className='h-7 w-7 text-gray-700 cursor-pointer' />
                            </div>
                        </Link>

                        <div className='flex justify-center'>
                            <p className='text-lg font-semibold text-gray-800'>Nuevo Outfit</p>
                        </div>

                        <div className='flex justify-end items-center'>
                            <Button texto="Listo" px="4" />
                        </div>
                    </div>
                </div>

                {/* Main */}
                <div className="w-full pt-20 flex justify-center">
                    <div className="w-10/12">
                        <p className='text-white'>Agregar prendas</p>
                        <div className="w-28 h-28 bg-gray-200 rounded-lg mt-4">

                        </div>
                    </div>

                </div>
            </div>
            <Navbar />
        </>
    )
}

export default AddOutfit