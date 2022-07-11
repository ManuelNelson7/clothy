import { ChevronLeftIcon } from '@heroicons/react/outline'
import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { getFirestore, getDocs, collection, query, where, orderBy, limit } from 'firebase/firestore'
import Button from './Button'

const SelectClothing = ({ setAddClothing }) => {
    const { user } = useContext(AppContext);
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

            {/* Main */}
            <div className="w-full pt-20 flex justify-center">
                {loading ? (<div>Cargando</div>) : (
                    <div className="w-10/12 flex flex-col gap-3">

                        <div>
                            <p className='text-white font-semibold'>Camisas</p>
                            <div className="box-content relative h-52 overflow-x-auto overflow-hidden xl:overflow-visible">
                                <div className="absolute flex space-x-2 xl:relative xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                    {clothes.filter(item => item.category === 'camisa').map(prenda => (
                                        <div
                                            key={prenda.id}
                                            className="w-40 h-40 cursor-pointer bg-gray-200 rounded-lg mt-4 flex justify-center items-center"
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

                        <div>
                            <p className='text-white font-semibold'>Pantalones</p>
                            <div className="box-content relative h-52 overflow-x-auto overflow-hidden xl:overflow-visible">
                                <div className="absolute flex space-x-2 xl:relative xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                    {clothes.filter(item => item.category === 'pantalon').map(prenda => (
                                        <div
                                            key={prenda.id}
                                            className="w-40 h-40 cursor-pointer bg-gray-200 rounded-lg mt-4 flex justify-center items-center"
                                        >
                                            <img
                                                src={prenda.img}
                                                alt={prenda.id}
                                                className='w-full object-cover h-full rounded-lg'
                                            />6
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default SelectClothing