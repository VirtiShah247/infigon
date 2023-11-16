import axios from 'axios';
import React, { useState } from 'react';

const SignIn = () => {
    const [detail, setDetail] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetail({ ...detail, [name]: value });
    };


    const handleSignIn = async () => {
        try {
            const response = await axios.post('https://dev.api.infigon.app/auth/signin-with-phone-and-password', {
                "phoneNumber": detail.phoneNumber,
                "password": detail.password
            });

            // Handle the response data as needed
            console.log('API Response:', response.data);
            localStorage.setItem("access_token", response.data.access_token)
            // Reset the form after successful API call
            setDetail({})
        } catch (error) {
            // Handle error (e.g., display an error message)
            console.error('API Error:', error);
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className = "mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className = "space-y-6" action = "/getproduct">
                    <div>
                        <label htmlFor = "phoneNumber" className = "block text-sm font-medium leading-6 text-gray-900">
                            Phone No
                        </label>
                        <div className = "mt-2">
                            <input
                                id = "phoneNumber"
                                name = "phoneNumber"
                                value = {detail.phoneNumber}
                                type = "tel"
                                required
                                className = "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange = {(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className = "flex items-center justify-between">
                            <label htmlFor = "password" className = "block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id = "password"
                                name = "password"
                                value = {detail.password}
                                type = "password"
                                autoComplete = "current-password"
                                required
                                className = "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange = {(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type = "submit"
                            className = "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick = {handleSignIn}
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
