import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-16 lg:min-h-[930px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex max-w-screen-xl">
                        <div className='w-1/2 order-2 text-left ml-10'>
                            <h1 className="mb-5 text-6xl font-bold text-accent-focus">The BD’s Best Event Management Agency for Corporate</h1>
                            <p className="mb-5 text-2xl">Recognized as the leading event management agency in Bangladesh, we specialize in crafting exceptional corporate experiences. Our expertise and dedication make us the preferred choice for delivering unforgettable events.</p>
                            <button className="btn btn-accent btn-outline">Learn More</button>
                        </div>
                        <div className='w-1/2 order-1'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner