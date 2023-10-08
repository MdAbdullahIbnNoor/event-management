import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

const SignUp = () => {

  const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);  

        createUser(email, password)
        .then(res => {
            console.log(res.user);
            user = res.user;
            user.displayName = name;
        })
        .catch(error => {
            console.log(error.message);
        })
    }


  return (
    <div className="flex flex-col max-w-md mx-auto my-[250px] px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Create a new account
      </div>
      <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ?
        <Link to="/login" target="_blank" className="text-sm text-blue-500 underline hover:text-blue-700">
          Sign in
        </Link>
      </span>
      <div className="p-6 mt-8">
        <form onSubmit={handleRegister}>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="text"
                id="create-account-pseudo"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="name"
                placeholder="Name"
                required
              />
            </div>
          </div>
          {/* <div className="flex gap-4 mb-2">
            <div className=" relative ">
              <input
                type="text"
                id="create-account-first-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="First name"
                placeholder="First name"
              />
            </div>
            <div className=" relative ">
              <input
                type="text"
                id="create-account-last-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="Last name"
                placeholder="Last name"
              />
            </div>
          </div> */}
          <div className="flex flex-col mb-2">
            <div className=" relative mb-2">
              <input
                type="Email"
                id="create-account-email"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name='email'
                placeholder="Email"
                required
              />
            </div>
            <div className=" relative mb-5">
              <input
                type="Password"
                id="create-account-email"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name='password'
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="flex w-full my-4">
            <button
              type="submit"
              className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default SignUp;
