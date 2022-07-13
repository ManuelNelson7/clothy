import React, { useState, useContext } from 'react'
import { ChevronLeftIcon, PlusIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'
import { getFirestore, collection } from 'firebase/firestore'

import { AppContext } from '../components/AppContext'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import SelectClothing from '../components/SelectClothing'
import { addDoc } from 'firebase/firestore'

const AddOutfit = () => {
    const { outfit, setOutfit, user } = useContext(AppContext)

    const [addClothing, setAddClothing] = useState(false)
    const [categoryOutfit, setCategoryOutfit] = useState('business')
    const [weather, setWeather] = useState('templado')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const createOutfit = () => {
        const newOutfit = {
            category: categoryOutfit,
            weather: weather,
            clothes: outfit,
            userid: user.uid
        }
        const db = getFirestore();
        const outfitRef = collection(db, "outfits");

        if (outfit.length > 0) {
            addDoc(outfitRef, newOutfit).then(() => {
                navigate('/')
                setOutfit([])
            });
        } else {
            setError('El outfit no puede estar vacío')
        }
    }

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
                            <div onClick={() => createOutfit()}>
                                <Button texto="Listo" px="4" />
                            </div>
                        </div>
                    </div>
                </div>

                {error && <p className='text-red-600 pt-20 pb-3 pl-7  font-semibold'>{error}</p>}
                {!error && <div className='h-20 w-screen'></div>}


                {/* Main */}
                <div className="w-full flex justify-center">
                    <div className="w-10/12">
                        <div>
                            <p className='text-white font-semibold'>Agregar prendas</p>
                            {!addClothing && (
                                <div className="box-content relative h-40 overflow-x-auto overflow-hidden xl:overflow-visible">
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

                        <div className='mt-1.5'>
                            <p className='text-white font-semibold'>Seleccionar categoría</p>
                            <div className='mt-3'>
                                <select onChange={(e) => setCategoryOutfit(e.target.value)} defaultValue="business" className='py-1.5 px-1 rounded-lg' name="category" id="category">
                                    <option value="casual">Casual</option>
                                    <option value="business">Business</option>
                                    <option value="salidas">Salidas</option>
                                </select>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <p className='text-white font-semibold'>Seleccionar clima</p>
                            <div className='mt-3'>
                                <select onChange={(e) => setWeather(e.target.value)} defaultValue='templado' className='py-1.5 px-1 rounded-lg bg-gray-200' name="weather" id="weather">
                                    <option value="invierno">Invierno</option>
                                    <option value="templado">Templado</option>
                                    <option value="verano">Verano</option>
                                </select>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Navbar />
        </>
    )
}

export default AddOutfit