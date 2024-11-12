import GreenHeart from './GreenHeart';
import PropTypes from 'prop-types';

function JobCard({ postedTime, title, location, hourlyRate, estimatedTime, description, rating, category }) {
  return (
    <article className="flex z-10 flex-col items-start px-4 pt-14 pb-10 mt-px w-full text-sm leading-loose bg-white text-stone-500 max-md:max-w-full">
      <div className="text-xs tracking-wide leading-none">
        Posted {postedTime}
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-start self-stretch mt-1 w-full text-xl tracking-wide leading-tight text-neutral-900 max-md:max-w-full">
        <div className="flex self-end mt-5 max-md:max-w-full">
          <div className="flex-auto">
            {title}
          </div>
        </div>
        <GreenHeart />
      </div>
      <div className="flex gap-6 mt-5">
        {/* <div className="flex gap-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b47c16debf09bf73edc2a5e2d3704a007c4a2a7b70f480c56b8c9bab29626134?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" alt="" className="object-contain shrink-0 w-6 aspect-square" />
          <div className="my-auto">{paymentVerified ? 'Payment verified' : 'Payment unverified'}</div>
        </div> */}
        <div className="flex gap-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2ee065d5b38ea1b0b140cefe63aa53dc9d22a716dfb2a12672d07dfceaf7390?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" alt="" className="object-contain shrink-0 w-6 aspect-square" />
          <div className="my-auto">{location}</div>
        </div>
        <div className="flex gap-2">
          <div className="my-auto font-bold">Rating:</div>
          <div className="my-auto">{rating} ★</div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-7">
        <div className="grow">
          Hourly: {hourlyRate}
        </div>
        <div className="flex gap-1.5 self-start">
          <div className="my-auto">-</div>
          <div className="font-bold">Est. time:</div>
        </div>
        <div className="basis-auto">
          {estimatedTime}
        </div>
      </div>
      <div className="mt-5">
        <div className="font-bold">Description:</div>
        <div>{description}</div>
      </div>
      <div className="mt-5">
        <div className="font-bold">Category:</div>
        <div>{category}</div>
      </div>
    </article>
  );
}

JobCard.propTypes = {
  postedTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hourlyRate: PropTypes.string.isRequired,
  estimatedTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default JobCard;