import React, { useState, useContext } from 'react'
import { ChevronLeftIcon, PlusIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

import { AppContext } from '../components/AppContext'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import SelectClothing from '../components/SelectClothing'

const AddOutfit = () => {
    const { outfit, setOutfit } = useContext(AppContext)
    const [addClothing, setAddClothing] = useState(false)

    return (
        <>
            {addClothing && <SelectClothing setAddClothing={setAddClothing} />}

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
                        <div>
                            <p className='text-white font-semibold'>Agregar prendas</p>
                            {!addClothing && (
                                <div className="box-content relative h-52 overflow-x-auto overflow-hidden xl:overflow-visible">
                                    <div className="absolute flex space-x-2 xl:relative xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                        <div
                                            onClick={() => setAddClothing(true)}
                                            className="w-28 h-32 cursor-pointer bg-gray-200 rounded-lg mt-4 flex justify-center items-center"
                                        >
                                            <PlusIcon className='h-8 w-8 text-gray-500' />
                                        </div>

                                        {outfit.map(prenda => (
                                            <div
                                                key={prenda.id}
                                                className="w-28 h-32 cursor-pointer bg-gray-200 rounded-lg mt-4 flex justify-center items-center"
                                            >
                                                <img
                                                    src={prenda.img}
                                                    alt={prenda.id}
                                                    className='w-full object-cover h-full rounded-lg'
                                                />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </div>
            <Navbar />
        </>
    )
}

export default AddOutfit