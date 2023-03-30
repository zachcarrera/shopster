import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { Navbar } from "../../components";
import axios from 'axios'

export const Checkout = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [cardNumber, setCardNumber] = useState(0)
    const [cardExp, setCardExp] = useState(0)
    const [cardCVC, setCardCVC] = useState(0)
    const [zipCode, setZipCode] = useState(0)
 
    const navigate = useNavigate()

    const [errorList, setErrorList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:8000/api/checkouts/new`, { firstName, lastName, email, phone, cardNumber, cardExp, cardCVC, zipCode })
            .then(res => {
                const createdCheckout = res.data
                // view one page
                navigate(`/success/${createdCheckout._id}`)
            })
            .catch(error => {
                const errorRespondData = error.response.data.errors
                const tempErrorArray = []
                for (const eachKey in errorRespondData) {
                    tempErrorArray.push(errorRespondData[eachKey].message)
                }
                setErrorList(tempErrorArray)
            })
    }


    return (
        <div>
            <Navbar/>
{/*     
            This component uses @tailwindcss/forms

            yarn add @tailwindcss/forms
            npm install @tailwindcss/forms

            plugins: [require('@tailwindcss/forms')]
 */}

            <section>
                <h1 className="sr-only">Checkout</h1>

                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-50 py-12 md:py-24">
                        <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                            <div className="flex items-center gap-4">
                                <span className="h-10 w-10 rounded-full bg-blue-700"></span>

                                <h2 className="font-medium text-gray-900">Shopster</h2>
                            </div>

                            <div>
                                <p className="text-2xl font-medium tracking-tight text-gray-900">
                                    $99.99
                                </p>

                                <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
                            </div>

                            <div>
                                <div className="flow-root">
                                    <ul className="-my-4 divide-y divide-gray-100">
                                        <li className="flex items-center gap-4 py-4">
                                            <img
                                                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                                alt=""
                                                className="h-16 w-16 rounded object-cover"
                                            />

                                            <div>
                                                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline">Size:</dt>
                                                        <dd className="inline">XXS</dd>
                                                    </div>

                                                    <div>
                                                        <dt className="inline">Color:</dt>
                                                        <dd className="inline">White</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </li>

                                        <li className="flex items-center gap-4 py-4">
                                            <img
                                                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                                alt=""
                                                className="h-16 w-16 rounded object-cover"
                                            />

                                            <div>
                                                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline">Size:</dt>
                                                        <dd className="inline">XXS</dd>
                                                    </div>

                                                    <div>
                                                        <dt className="inline">Color:</dt>
                                                        <dd className="inline">White</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-12 md:py-24">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
                                <div className="col-span-3">
                                    <label
                                        htmlFor="FirstName"
                                        className="block text-xs font-medium text-gray-700"

                                    >
                                        First Name
                                    </label>

                                    <input
                                        name="firstName" value={firstName}
                                        type="text"
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        onChange={event => setFirstName(event.target.value)}
                                    />
                                </div>

                                <div className="col-span-3">
                                    <label
                                        htmlFor="LastName"
                                        className="block text-xs font-medium text-gray-700"
                                    >
                                        Last Name
                                    </label>

                                    <input
                                        name="lastName" value={lastName}
                                        type="text"
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        onChange={event => setLastName(event.target.value)}
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        name="email" value={email}
                                        type="email"
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                        Phone
                                    </label>

                                    <input
                                        name="phone" value={phone}
                                        type="number"
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        onChange={event => setPhone(event.target.value)}
                                    />
                                </div>


                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        <div>
                                            <label htmlFor="CardNumber" className="block text-xs font-medium text-gray-700"> Card Number </label>

                                            <input
                                                name="cardNumber" value={cardNumber}
                                                type="text"
                                                placeholder="Card Number"
                                                className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                                onChange={event => setCardNumber(event.target.value)}
                                            />
                                        </div>

                                        <div className="flex -space-x-px">
                                            <div className="flex-1">
                                                <label htmlFor="CardExpiry" className="block text-xs font-medium text-gray-700"> Card Expiry </label>

                                                <input
                                                    name="cardExp" value={cardExp}
                                                    type="date"
                                                    placeholder="Expiry Date"
                                                    className="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
                                                    onChange={event => setCardExp(event.target.value)}
                                                />
                                            </div>


                                            <div className="flex-1">
                                                <label htmlFor="CardCVC" className="block text-xs font-medium text-gray-700"> Card CVC </label>

                                                <input
                                                    name="cardCVC" value={cardCVC}
                                                    type="text"
                                                    placeholder="CVC"
                                                    className="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
                                                    onChange={event => setCardCVC(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                <fieldset className="col-span-6">
                                    {/* <legend className="block text-sm font-medium text-gray-700">
                                        Billing Zip Code
                                    </legend> */}

                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        {/* <div>
                                            <label htmlFor="Country" className="sr-only">Country</label>

                                            <select
                                                id="Country"
                                                className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                            >
                                                <option>England</option>
                                                <option>Wales</option>
                                                <option>Scotland</option>
                                                <option>France</option>
                                                <option>Belgium</option>
                                                <option>Japan</option>
                                            </select>
                                        </div> */}

                                        <div>
                                            <label className="block text-xs font-medium text-gray-700" for="PostalCode"> ZIP/Post Code </label>

                                            <input
                                                name="zipCode" value={zipCode}
                                                type="text"
                                                id="PostalCode"
                                                placeholder="ZIP/Post Code"
                                                className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                                                onChange={event => setZipCode(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="col-span-6">
                                    <button
                                        className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                    >
                                        Pay Now
                                    </button>
                                    {
                                        errorList.map((eachError, idx) => (
                                            <p className='text-red-500' key={idx}>{eachError}</p>
                                        ))
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
