import { ChevronLeftIcon } from '@heroicons/react/outline'
import React, { useEffect, useState, useContext } from 'react'
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

import { AppContext } from '../components/AppContext'
import { Link, useNavigate } from 'react-router-dom'

const ChooseOutfit = () => {
  const { user, setOutfitChosen, createChoice } = useContext(AppContext);
  const [outfits, setOutfits] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const db = getFirestore()
    const itemsRef = query(collection(db, 'outfits'), where('userid', '==', user.uid))

    getDocs(itemsRef)
      .then(res => {
        setOutfits(res.docs.map((item) => ({ id: item.id, ...item.data() })
        ))
      })
      .finally(() => setLoading(false))
  }, [])

  const handleChoose = (look) => {
    setOutfitChosen(look)
    createChoice(look)
    navigate("/")
  }


  return (
    <div className='bg-gray-800 absolute w-screen h-screen'>
      {/* Barra */}
      <div className='bg-gray-200 absolute z-10 top-0 right-0 w-full h-16 flex justify-center items-center'>
        <div className='w-11/12 md:w-8/12 xl:w-4/12 grid grid-cols-3 items-center'>

          <Link to="/">
            <div className='flex justify-start'>
              <ChevronLeftIcon className='h-7 w-7 text-gray-700 cursor-pointer' />
            </div>

          </Link>

          <div className='flex justify-center'>
            <p className='text-lg font-semibold text-gray-800'>Seleccionar</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className=' absolute z-10 top-16 right-0 w-full h-16 flex justify-center items-center'>
        <div className='w-11/12 md:w-8/12 xl:w-4/12 grid grid-cols-3 gap-4 items-center'>

          <button className='flex justify-center rounded-md py-1 bg-teal-900'>
            <span className='text-white font-semibold'>Casual</span>
          </button>

          <button className='flex justify-center rounded-md py-1 bg-blue-900'>
            <span className='text-white font-semibold'>Business</span>
          </button>

          <button className='flex justify-center rounded-md py-1 bg-sky-900'>
            <span className='text-white font-semibold'>Salidas</span>
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="w-full pt-32 flex justify-center">
        {loading ? (<div>Cargando</div>) : (
          <div className="w-10/12 flex flex-col gap-3 items-center mt-2">

            {outfits.map(look => (
              <div key={look.id} onClick={() => handleChoose(look)} className={`bg-white w-full rounded-md shadow-lg h-72 grid grid-cols-${look.clothes.length <= 4 ? 2 : 3} grid-rows-2 hover:opacity-90 cursor-pointer`}>
                {look.clothes.map(prenda => (
                  <div key={prenda.id} className="h-36 bg-slate-100 rounded-md">
                    <img src={prenda.img} className="object-cover rounded-md h-36 w-full" alt="" />
                  </div>
                ))}
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  )
}

// const Grid = ({ outfit }) => {

//   return (
//     <div>
//       <p className='text-white font-semibold'>{categoryName}</p>
//       <div className="box-content relative h-52 overflow-x-auto overflow-hidden xl:overflow-visible">
//         <div className="absolute flex space-x-2 xl:relative xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
//           {clothes?.filter(item => item.category === category).map(prenda => (
//             <div
//               key={prenda.id}
//               className="w-40 h-40 cursor-pointer bg-gray-200 rounded-lg mt-4 flex justify-center items-center"
//               onClick={() => handleSelect(prenda)}
//             >
//               <img
//                 src={prenda.img}
//                 alt={prenda.id}
//                 className='w-full object-cover h-full rounded-lg'
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

export default ChooseOutfit