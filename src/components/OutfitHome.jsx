import React, { useState } from 'react'

const OutfitHome = () => {
    const [outfitChosen, setOutfitChosen] = useState(false)

    return (
        <div className='w-full flex justify-center'>
            <div className='w-10/12'>

                <h1 className='text-white text-3xl mt-8 font-bold'>Outfit del día</h1>

                <div className='bg-gray-200 h-80 w-full mt-4 rounded-lg flex justify-center items-center'>
                    {outfitChosen ? (
                        <div>
                            div
                        </div>
                    )
                        : (
                            <div className='w-11/12 h-72 border-dashed border-gray-400 border-4 flex flex-col justify-center items-center'>
                                <p className='text-xl font-semibold text-gray-700'>No elegiste tu outfit aún</p>
                                <button className='bg-blue-900 text-white px-6 rounded-lg mt-3 py-2'>
                                    Elegir uno
                                </button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default OutfitHome