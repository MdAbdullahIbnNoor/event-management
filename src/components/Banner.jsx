import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[500px] lg:min-h-[930px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex max-w-screen-2xl" data-aos="fade-left">
                        <div className='w-3/4 order-1 text-center mx-auto'>
                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-emerald-500">The BD’s Best Event Management Agency for Corporate</h1>
                            <p className="mb-10 lg:text-2xl text-gray-100">Recognized as the leading event management agency in Bangladesh, we specialize in crafting exceptional corporate experiences. Our expertise and dedication make us the preferred choice for delivering unforgettable events.</p>
                            <button className="btn btn-accent btn-outline">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner