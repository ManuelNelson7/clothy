import React, { useState, useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { Link } from 'react-router-dom'
import Button from './Button'

const OutfitHome = () => {
    const { outfitChosen } = useContext(AppContext)

    return (
        <div className='w-full flex justify-center'>
            <div className='w-10/12'>

                <h1 className='text-white text-3xl mt-8 font-bold'>Outfit del día</h1>

                <div className='bg-gray-200 h-80 w-full mt-4 rounded-lg flex justify-center items-center'>
                    {outfitChosen ? (
                        <div>
                            <div className={`bg-white w-full object-cover rounded-md shadow-lg h-80 grid grid-cols-2 grid-rows-2 hover:opacity-90 cursor-pointer`}>
                                {outfitChosen.clothes.map(prenda => (
                                    <div key={prenda.id} className="h-40 bg-slate-100 rounded-md">
                                        <img src={prenda.img} className="object-cover rounded-md h-40 w-full" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                        : (
                            <div className='w-11/12 h-72 border-dashed border-gray-400 border-4 flex flex-col justify-center items-center'>
                                <p className='text-lg font-semibold text-gray-700'>No elegiste tu outfit aún</p>
                                <Link to="/choose-outfit">
                                    <Button
                                        texto='Elegir uno'
                                        mt='2'
                                        px="4"
                                    />
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default OutfitHome