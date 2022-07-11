import React, { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { useNavigate } from 'react-router-dom'

import googleIcon from '../assets/google-icon.png'

const Login = () => {
    const { loginWithGoogle } = useContext(AppContext);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        await loginWithGoogle();
        navigate('/')
    }


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicia sesión en Clothy</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Sin necesidad de mails de confirmación ni contraseñas
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Continuar con</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3">
                            <div
                                className="w-full cursor-pointer inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                onClick={() => { handleGoogleLogin() }}
                            >
                                <span className="sr-only">Sign in with Facebook</span>
                                <img src={googleIcon} className='h-6 w-6' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login