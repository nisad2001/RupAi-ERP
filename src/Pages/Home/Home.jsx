const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-12 h-[1080px]'>
        {/* Left side */}
        <div className="min-h-screen bg-[url('assets/home-img.png')] bg-cover bg-center bg-no-repeat col-span-7">
          <div className='mt-20 ml-24'>
            <img src='assets/Rupai-logo.png' alt='Logo' />
            <p className='font-normal not-italic text-[14px] leading-[100%] tracking-[0%] text-[#1E1E1E]'>
              Smart Management for Tea Estates
            </p>
          </div>
          <div className='mt-14 ml-24 mb-[78px]'>
            <h1 className='font-semibold text-[40px] leading-[100%] tracking-normal text-[#1E1E1E]'>
              Manage Your Estate <br /> Smarter, Better, Together
            </h1>
            <div className='w-[82px] border-t-[6px] border-[#176C0E] mt-6 rounded-sm'></div>
            <p className='text-[#1E1E1E] font-normal text-[20px] leading-[28px] tracking-[0%] mt-6'>
              A complete ERP solution for Tea Estates to <br /> manage
              Plantation, Production, Workforce, <br /> Finance & more
              efficiently.
            </p>
          </div>

          {/* Icon Grid 1 */}
          <div className='flex w-[669px] justify-between gap-[17px] items-center ml-[112px] mb-[53px]'>
            {[
              "Plantation Management",
              "Production Tracking",
              "Workforce Management",
              "Real-time Reports",
            ].map((text, i) => (
              <div key={i} className='flex flex-col items-center w-[131px]'>
                <img
                  src={`assets/leaf${i + 1}.png`}
                  alt=''
                  className='w-[72px] h-[72px]'
                />
                <p className='text-[#FFFFFF] font-medium text-[18px] leading-[32px] tracking-[0%] text-center pt-[17px]'>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Icon Grid 2 */}
          <div className='flex w-[669px] justify-between gap-[17px] items-center ml-[112px] mb-[90px]'>
            {[
              "Inventory Control",
              "Accounts & Finance",
              "Sales & Auction",
              "And More Modules",
            ].map((text, i) => (
              <div key={i} className='flex flex-col items-center w-[131px]'>
                <img
                  src={`assets/leaf${i + 5}.png`}
                  alt=''
                  className='w-[72px] h-[72px]'
                />
                <p className='text-[#FFFFFF] font-medium text-[18px] leading-[32px] tracking-[0%] text-center pt-[17px]'>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className='bg-[#06470D] flex space-x-9'>
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className={`flex items-center gap-[9px] text-white ${i === 0 ? "ml-24" : ""} mt-10 mb-[45px]`}
              >
                <img src='assets/shield-check.png' alt='shield' />
                <div>
                  <p className='font-normal text-[16px] leading-[16px]'>
                    Secure & Reliable
                  </p>
                  <p className='font-normal text-[12px] leading-[12px] mt-1'>
                    Your data is always protected
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className='col-span-5'>right div</div>
      </div>
    </div>
  );
};

export default Home;
