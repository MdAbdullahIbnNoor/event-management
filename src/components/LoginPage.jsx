import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider";


function LoginPage() {

    const { signInUser, signUpWithGoogle } = useContext(AuthContext);
    const naviGate = useNavigate();
    // console.log(signInUser);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                e.target.reset()
                naviGate('/')
            }).catch(error => {
                console.log(error.message);
            })

    }

    const handleGoogleSignUp = () => {
        signUpWithGoogle()
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero min-h-[920px]" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="w-full max-w-md p-4 rounded-md shadow-lg sm:p-8 mx-auto my-40 border-2 border-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center text-gray-50">Login to your account</h2>
                <p className="text-sm text-center text-gray-50">Dont have account?
                    <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-accent ml-2 font-semibold">Sign up here</a>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={() => handleGoogleSignUp()} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border-2 border-accent-focus rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p className='text-white text-lg font-medium'>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">

                </div>
                <form onSubmit={handleLogin} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label for="email" className="block text-sm text-gray-50">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="password" className="text-sm text-gray-50">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-50">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-accent text-gray-50">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
