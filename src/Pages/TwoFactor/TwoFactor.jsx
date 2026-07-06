import { NavLink } from "react-router-dom";

const TwoFactor = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 min-h-screen'>
      <div className='lg:col-span-7'>
        <div
          className='h-full bg-cover bg-center bg-no-repeat flex flex-col justify-between'
          style={{ backgroundImage: "url('/assets/two-factor-bg.jpg')" }}
        >
          <div className='mt-4 md:mt-12 ml-0 md:ml-24 flex flex-col items-center md:items-start'>
            <NavLink to='/'>
              <img src='assets/Rupai-logo.png' alt='Logo' />
            </NavLink>
            <p className='font-normal not-italic text-[14px] leading-[100%] text-[#1E1E1E] text-center md:text-left'>
              Smart Management for Tea Estates
            </p>
          </div>

          <div className='flex flex-col items-center justify-center px-6 md:px-24 py-10'>
            <img
              src='/assets/Two-factor.jpg'
              alt='Two Factor'
              className='w-full max-w-[200px] md:max-w-[300px] h-auto rounded-full mb-8'
            />
            <div className='text-center lg:text-left w-full'>
              <h1 className='font-semibold text-[22px] md:text-[32px] leading-[100%] mb-[9px] text-white'>
                Extra security, <br /> Complete peace of mind
              </h1>
              <p className='font-normal text-[14px] md:text-[18px] leading-[100%] text-white'>
                We have sent a verification code to your registered <br /> email
                and mobile number
              </p>
            </div>
          </div>

          <div className='bg-[#06470D] w-full p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4'>
            <div className='flex items-center gap-[9px] text-white justify-center md:justify-start'>
              <img src='assets/shield-check.png' alt='shield' />
              <div className='text-center md:text-left'>
                <p className='text-[16px]'>Secure & Reliable</p>
                <p className='text-[12px]'>Your data is protected</p>
              </div>
            </div>
            <div className='flex items-center gap-[9px] text-white justify-center md:justify-start'>
              <img src='assets/shield-check.png' alt='shield' />
              <div className='text-center md:text-left'>
                <p className='text-[16px]'>Trusted access</p>
                <p className='text-[12px]'>Only you can access your account</p>
              </div>
            </div>
            <div className='flex items-center gap-[9px] text-white justify-center md:justify-start'>
              <img src='assets/shield-check.png' alt='shield' />
              <div className='text-center md:text-left'>
                <p className='text-[16px]'>Real-time Protection</p>
                <p className='text-[12px]'>Advanced security for your estate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:col-span-5 flex flex-col items-center justify-center p-4 md:p-6'>
        <div className='w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 md:p-8 my-auto'>
          <div className='flex flex-col items-center text-center mb-8'>
            <img
              src='/assets/two-factor-atuh.png'
              alt=''
              className='w-20 h-20 bg-green-50 rounded-full p-4'
            />
            <h1 className='font-semibold text-[22px] md:text-[32px] leading-[100%] mt-4 mb-4 text-green-800'>
              Two-Factor Authentication
            </h1>
            <p className='font-normal text-[14px] md:text-[18px] leading-[100%] text-black'>
              Please enter the verification code sent to your <br /> email and
              mobile number
            </p>
          </div>

          <div className='mb-6 text-center'>
            <p className='font-normal text-[14px] mb-2 text-black text-left'>
              Verification Code
            </p>
            {/* ইনপুট বক্সের সাইজ ছোট করা হয়েছে যেন এক লাইনে থাকে */}
            <div className='flex flex-wrap gap-1 md:gap-2 justify-center'>
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type='text'
                  maxLength='1'
                  className='w-9 h-10 md:w-14 md:h-16 border border-gray-300 rounded-lg text-center text-xl focus:border-green-600 outline-none'
                />
              ))}
            </div>
            <div className='flex justify-center items-center gap-2 text-green-800 font-medium my-4'>
              <span>🕒 Code will expire in 02:45</span>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='flex flex-col sm:flex-row items-center gap-2'>
              <label className='input input-bordered flex items-center gap-2 w-full'>
                📧
                <input
                  type='email'
                  className='grow w-full'
                  defaultValue='saadi@jamunatech.com'
                />
              </label>
              <button className='text-green-700 font-semibold whitespace-nowrap self-end sm:self-center'>
                Resend
              </button>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-2'>
              <label className='input input-bordered flex items-center gap-2 w-full'>
                📞
                <input
                  type='tel'
                  className='grow w-full'
                  defaultValue='+880 1712 345 678'
                />
              </label>
              <button className='text-green-700 font-semibold whitespace-nowrap self-end sm:self-center'>
                Resend
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-4 mt-8'>
            <button className='bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition'>
              Verify & Continue
            </button>
            <NavLink
              to='/login'
              className='border border-gray-300 py-3 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-gray-50 transition'
            >
              ← Back to Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactor;
