import CategoryCard from "./CategoryCard";
import { useState } from 'react';

function CategoryGrid() {
  const [showAll, setShowAll] = useState(false);

  const cardsData = [
    { imageUrl: '/cleaning.jpeg', title: 'Cleaning' },
    { imageUrl: '/barber.jpeg', title: 'Barber' },
    { imageUrl: '/carwash.jpeg', title: 'Car Washing' },
    { imageUrl: '/catering.jpeg', title: 'Catering' },
    { imageUrl: '/photography.jpeg', title: 'Photography' },
    { imageUrl: '/trainer.jpeg', title: 'Trainer' },
  ];

  // Determine which cards to display based on showAll state
  const cardsToShow = showAll ? cardsData : cardsData.slice(0, 4);

  return (
    <div className="flex flex-col w-full gap-1">
      <p className="text-4xl font-semibold w-[90%] mx-auto">Explore popular categories on InService</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-[90%] mx-auto">
        {cardsToShow.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
            <CategoryCard imageUrl={card.imageUrl} title={card.title} />
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="w-4/5 mx-auto mt-2 flex justify-end">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-500 hover:underline"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default CategoryGrid;