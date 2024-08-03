import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    const [IsEmail, setEmail] = useState('');
    const [isPassword, setPassword] = useState('');
    const [isErrorEmail, setErrorEmail] = useState(false);
    const [isErrorPassword, setErrorPassword] = useState(false);

    const TakeValue = (event) => {
        setEmail(event.target.value);
      };
    const TakeValuePassword = (event) =>{
        setPassword(event.target.value)
    }
      const handleSubmit = (event) => {
        event.preventDefault();
        if (IsEmail.trim() === '') {
            setErrorEmail(true);
        }else {
            setErrorEmail(false);
        }
        if(isPassword.trim()=== ''){
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        }
      };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='p-[10px]'>
        <NavLink to='/'>
              <svg className='mx-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none">
                    <path d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86298L5.66298 0.408386H4.06298C2.29498 0.408386 0.878976 1.84039 0.878976 3.60839L0.862976 22.8084C0.862976 24.5764 2.29498 26.0084 4.06298 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z" fill="#FC4747" />
                </svg>
              </NavLink>
            <div className='w-full sm:w-[400px]  rounded-[20px] bg-[#161D2F] p-[32px] mt-[82px]'>
                <h3 className='text-[32px] font-normal tracking[-0.5px] text-[#ffffff] font-outfit'>
                    Login
                </h3>
                <form onSubmit={handleSubmit} className='mt-[40px]'>
                    <label className='w-full relative' htmlFor="Email">
                        <input value={IsEmail} onChange={TakeValue}  id='Email' placeholder='Email address' type="text" className={`border-b-[1px] border-b-[#5A698F] pb-[17px] pl-[16px] bg-transparent outline-none text-white w-full  ${isErrorEmail ? "border-b-[#FC4747]" : ""}`} />
                        {isErrorEmail &&(
                        <span className='absolute top-[-1px] right-[20px] text-[#FC4747]'>
                            Can’t be empty
                        </span>
                        )}
                    </label>
                    <label className='w-full relative' htmlFor="Email">
                        <input value={isPassword} onChange={TakeValuePassword}  id='Email' placeholder='Password' type="text" className={`border-b-[1px] border-b-[#5A698F] pb-[17px] pl-[16px] bg-transparent outline-none text-white w-full  mt-[40px] ${isErrorPassword ? "border-b-[#FC4747]" : ""}`} />
                        {isErrorPassword &&(
                        <span className='absolute top-[-1px] right-[20px] text-[#FC4747]'>
                            Can’t be empty
                        </span>
                        )}
                    </label>
                    <button  className='w-full  sm:w-[336px] h-[48px] mx-auto rounded-[6px] bg-[#FC4747] text-[15px] font-normal mt-[40px] font-outfit text-white text-center transition duration-500 hover:bg-white hover:text-[#161D2F]'>
                        Login to your account
                    </button>
                </form>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-[9px] mt-[24px]'>
                    <span className='text-[15px] text-white font-outfit font-normal'>
                        Don’t have an account?
                    </span>
                    <NavLink to='/signUp' className='text-[15px] text-[#FC4747] cursor-pointer'>
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login