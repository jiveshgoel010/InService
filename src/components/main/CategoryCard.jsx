/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */





function CategoryCard({ imageUrl, title }) {
  return (
    <div className="group w-full sm:w-[45vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] h-[35vh] relative bg-white rounded-md overflow-hidden shadow-lg">
      {/* Background Image with Animation */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center transform transition-transform duration-500 group-hover:scale-110 z-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

      {/* Title */}
      <div className="absolute bottom-0 w-full text-white text-center p-2 text-lg sm:text-xl md:text-2xl font-semibold z-20">
        {title}
      </div>
    </div>
  );
}



export default CategoryCard
