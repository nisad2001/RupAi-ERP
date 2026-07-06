import { NavLink } from "react-router-dom";

const TwoFactor = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 min-h-screen'>
      {/* Left side */}
      <div className='md:col-span-7 relative'>
        <div
          className='min-h-screen bg-cover bg-center bg-no-repeat flex flex-col pt-8 md:pt-0'
          style={{ backgroundImage: "url('/assets/two-factor-bg.jpg')" }}
        >
          <div className='mt-4 md:mt-12 ml-6 md:ml-24'>
            <NavLink to='/'>
              <img src='assets/Rupai-logo.png' alt='Logo' />
            </NavLink>
            <p className='font-normal not-italic text-[14px] leading-[100%] text-[#1E1E1E]'>
              Smart Management for Tea Estates
            </p>
          </div>

          <div className='flex-grow flex flex-col items-center justify-center px-6 md:px-24 py-10'>
            <img
              src='/assets/Two-factor.jpg'
              alt='Two Factor'
              className='w-full max-w-[200px] md:max-w-[300px] h-auto rounded-full mb-8'
            />
            <div className='text-center md:text-left w-full'>
              <h1 className='font-semibold text-[22px] md:text-[32px] leading-[100%] mb-[9px] text-white'>
                Extra security, <br /> Complete peace of mind
              </h1>
              <p className='font-normal text-[14px] md:text-[18px] leading-[100%] text-white'>
                We have sent a verification code to your registered <br /> email
                and mobile number
              </p>
            </div>
          </div>

          {/* Footer section fixed at bottom */}
          <div className='bg-[#06470D] w-full p-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4'>
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

      {/* Right side */}
      <div className='md:col-span-5 flex items-center justify-center p-8'>
        <NavLink
          to='/'
          className='mt-4 bg-green-900 p-2 rounded-sm text-white cursor-pointer'
        >
          back to home
        </NavLink>
      </div>
    </div>
  );
};

export default TwoFactor;
