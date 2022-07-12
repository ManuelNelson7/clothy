import { ChevronLeftIcon } from '@heroicons/react/outline'
import { GiPoloShirt } from 'react-icons/gi'
import React, { useEffect, useState, useContext } from 'react'
import { getFirestore, getDocs, collection, query, where, orderBy, limit } from 'firebase/firestore'

import { AppContext } from '../components/AppContext'
import Button from './Button'

const SelectClothing = ({ setAddClothing }) => {
    const { user, outfit, setOutfit } = useContext(AppContext);
    const [clothes, setClothes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const itemsRef = query(collection(db, 'clothes'), where('uid', '==', user.uid))

        getDocs(itemsRef)
            .then(res => {
                setClothes(res.docs.map((item) => ({ id: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))
    }, [])

    const handleSelect = (prenda) => {
        setOutfit([...outfit, prenda])
        setAddClothing(false)
    }


    return (
        <div className='bg-gray-800 absolute w-screen h-screen'>
            {/* Barra */}
            <div className='bg-gray-200 absolute z-10 top-0 right-0 w-full h-16 flex justify-center items-center'>
                <div className='w-11/12 md:w-8/12 xl:w-4/12 grid grid-cols-3 items-center'>

                    <div onClick={() => setAddClothing(false)} className='flex justify-start'>
                        <ChevronLeftIcon className='h-7 w-7 text-gray-700 cursor-pointer' />
                    </div>


                    <div className='flex justify-center'>
                        <p className='text-lg font-semibold text-gray-800'>Seleccionar</p>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className='bg-gray-900 absolute z-10 top-16 right-0 w-full h-12 flex justify-center items-center'>
                <div className='w-11/12 md:w-8/12 xl:w-4/12 grid grid-cols-4 items-center'>

                    <div className='flex justify-center'>
                        <GiPoloShirt className='h-6 w-6 text-white cursor-pointer' />
                    </div>
                </div>
            </div>

            {/* Main */}
            <div className="w-full pt-32 flex justify-center">
                {loading ? (<div>Cargando</div>) : (
                    <div className="w-10/12 flex flex-col gap-3">

                        <Grid clothes={clothes} category='camisa' categoryName='Camisas' handleSelect={handleSelect} />
                        <Grid clothes={clothes} category='pantalon' categoryName='Pantalones' handleSelect={handleSelect} />

                    </div>
                )}

            </div>
        </div>
    )
}

const Grid = ({ clothes, category, categoryName, handleSelect }) => {

    return (
        <div>
            <p className='text-white font-semibold'>{categoryName}</p>
            <div className="box-content relative h-52 overflow-x-auto overflow-hidden xl:overflow-visible">
                <div className="absolute flex space-x-2 xl:relative xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                    {clothes?.filter(item => item.category === category).map(prenda => (
                        <div
                            key={prenda.id}
                            className="w-40 h-40 cursor-pointer bg-gray-200 rounded-lg mt-4 flex justify-center items-center"
                            onClick={() => handleSelect(prenda)}
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
        </div>
    )
}

export default SelectClothing