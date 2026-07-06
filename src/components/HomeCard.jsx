const HomeCard = () => {
  const images = [
    "/assets/dining-banner.jpg",
    "/assets/experience -walk.jpg",
    "/assets/experience-cherish-1.jpg",
    "/assets/experience-cherish-2.jpg",
    "/assets/experience-cherish-3.jpg",
    "/assets/stay-suite.jpg",
    "/assets/experience-cherish-4.jpg",
    "/assets/experience-cherish-5.jpg",
    "/assets/experience-cherish-6.jpg",
    "/assets/experience-factory.jpg",
    "/assets/tea-delicious-dining.jpg",
    "/assets/stay-suite.jpg",
  ];

  return (
    <div className='py-6  max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {images.map((src, index) => (
          <div
            key={index}
            className='group overflow-hidden rounded-2xl cursor-pointer shadow-lg transition-all duration-300'
          >
            <img
              src={src}
              alt={`Card ${index + 1}`}
              className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
