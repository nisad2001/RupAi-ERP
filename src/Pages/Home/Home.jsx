import { PiSignIn } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-12 h-auto'>
        {/* Left side */}
        <div
          className="min-h-screen bg-[url('assets/home-img.png')] bg-cover bg-center bg-no-repeat md:col-span-7 flex flex-col justify-between pt-8 md:pt-0"
          style={{ backgroundImage: "url('/assets/home-img.png')" }}
        >
          <div className='flex flex-col items-center text-center md:items-start md:text-left'>
            <div className='mt-4 md:mt-12 ml-0 md:ml-24'>
              <img src='assets/Rupai-logo.png' alt='Logo' />
              <p className='font-normal not-italic text-[14px] leading-[100%] text-[#1E1E1E]'>
                Smart Management for Tea Estates
              </p>
            </div>

            <div className='mt-8 md:mt-8 mb-[40px] md:mb-[78px] px-6 md:ml-24 md:px-0'>
              <h1 className='font-semibold text-[26px] md:text-[40px] leading-[100%] text-[#1E1E1E]'>
                Manage Your Estate <br /> Smarter, Better, Together
              </h1>
              <div className='w-[82px] border-t-[6px] border-[#176C0E] mt-6 rounded-sm mx-auto md:mx-0'></div>
              <p className='text-[#1E1E1E] font-normal text-[18px] md:text-[20px] leading-[28px] mt-6'>
                A complete ERP solution for Tea Estates to{" "}
                <br className='hidden md:block' /> manage Plantation,
                Production, Workforce, <br className='hidden md:block' />{" "}
                Finance & more efficiently.
              </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center xl:justify-items-start gap-x-4 gap-y-[48px] px-6 md:ml-0 xl:ml-[112px] md:px-0 mb-[40px] md:mb-[60px] mx-auto xl:mx-0'>
              {/* Leaf items */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className='flex flex-col items-center w-[131px]'>
                  <img
                    src={`assets/leaf${i}.png`}
                    className='w-[72px] h-[72px]'
                    alt='leaf'
                  />
                  <p className='text-white pt-2 text-[14px] text-center'>
                    Module {i}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-[#06470D] flex flex-col items-center justify-center w-full p-6 space-y-4 md:space-y-0 md:space-x-9 md:flex-row md:items-start'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='flex items-center gap-[9px] text-white'>
                <img src='assets/shield-check.png' alt='shield' />
                <div className='text-center md:text-left'>
                  <p className='text-[16px]'>Secure & Reliable</p>
                  <p className='text-[12px]'>Your data is protected</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className='col-span-5 w-full block px-6 md:px-8 pb-10'>
          <div className='flex flex-col items-center text-center mt-[60px] md:mt-[110px] mb-8'>
            <div className='w-[100px] h-[100px] md:w-[129px] md:h-[129px] rounded-full border-[0.86px] border-[#AEAEAE] overflow-hidden flex items-center justify-center text-center mb-[20px]'>
              <img
                src='/assets/home-right-leaf.png'
                alt='Profile'
                className='w-[60px] h-[60px] md:w-[82px] md:h-[82px] object-cover'
              />
            </div>
            <div>
              <h1 className='font-semibold text-[#06470E] text-[24px] md:text-[32px] leading-[100%] tracking-[0] mb-[9px]'>
                Welcome Back!
              </h1>
              <p className='text-black font-normal text-[16px] md:text-[18px] leading-[100%] tracking-[0]'>
                Sign in to your <span className='text-[#06470E]'>RupAI</span>{" "}
                ERP account
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full max-w-[463px] mx-auto'
          >
            <div className='mb-6'>
              <label className='block font-bold text-[20px] leading-[100%] tracking-[0] mb-[14px]'>
                Username/E-mail
              </label>
              <input
                {...register("identifier")}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#06470E]'
                placeholder='Enter your username or e-mail'
              />
            </div>

            <div className='mb-6'>
              <label className='block text-sm font-semibold mb-2'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#06470E]'
                  placeholder='Enter your password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-4 text-gray-500'
                >
                  👁️
                </button>
              </div>
            </div>

            <div className='flex justify-between items-center mb-8 text-sm'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  {...register("remember")}
                  className='mr-2 accent-[#06470E]'
                />{" "}
                Remember me
              </label>
              <a href='#' className='text-[#06470E] font-medium'>
                Forgot Password?
              </a>
            </div>

            <button
              type='submit'
              className='w-full bg-[#06470D] text-white py-4 rounded-lg font-semibold text-[18px] hover:bg-[#043309] transition flex items-center justify-center gap-2'
            >
              <PiSignIn size={20} /> Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
