import React from 'react'

const Button = ({color="blue", texto, py="2", px="6", mt="0"}) => {
    return (
        <button className={`bg-${color}-800 hover:bg-${color}-900 transition-all duration-150 text-white px-${px} rounded-lg mt-${mt} py-${py}`}>
            {texto}
        </button>
    )
}

export default Button