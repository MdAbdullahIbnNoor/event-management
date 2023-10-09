
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';

const Services = () => {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('event.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
            <h2 className='text-5xl text-center font-bold text-gray-700 mt-16'>Events Category</h2>
            <p className='text-xl text-center font-medium text-gray-600 my-5 mb-16'>Elevating Your Corporate Parties with Expert Planning, Entertainment, and Flawless Execution</p>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {/* <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                aria-label="Category"
                                title="traveling"
                            >
                                traveling
                            </a>
                            <span className="text-gray-600">— 28 Dec 2020</span>
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Visit the East
                        </a>
                        <p className="mb-2 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div> */}
                {
                    categories.map((category, idx) =>
                        <div key={idx} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm" data-aos = "flip-down">
                            <img
                                src={category.image}
                                className="object-cover w-full h-64"
                                alt=""
                            />
                            <div className="p-5 border border-t-0">
                                <p className="mb-3 text-sm font-semibold tracking-wide uppercase">
                                    <a
                                        href="/"
                                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                        aria-label="Category"
                                        title="price"
                                    >
                                        Price: 
                                    </a>
                                    <span className="text-gray-800 font-medium ml-2">{category.price}</span>
                                </p>
                                <a
                                    href="/"
                                    aria-label="Category"
                                    title="Visit the East"
                                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    {category.name}
                                </a>
                                <p className="mb-2 text-gray-700">
                                    {category.shortDescription}
                                </p>
                                <Link
                                    to={`event/${category.id}`}
                                    aria-label=""
                                    className="inline-flex items-center font-semibold text-accent hover:text-purple-800"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Services