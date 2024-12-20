import { Tilt } from '@jdion/tilt-react';
import { HiArrowRight } from 'react-icons/hi';

const DesignCard = ({ img, tag, date, headline, paragraph }) => {
  return (
    <div className="flex flex-col w-full sm:w-4/5 md:w-full mx-auto rounded-[20px] shadow-xl">
      <div className="w-full ">
        <img src={img} className="w-2/4 md:w-2/3 mx-auto" alt="" />
      </div>
      <div className="py-6 px-8 bg-lightBlue">
        <div className="flex gap-4 items-center">
          <span className="py-[6px] px-3 bg-secondaryBlue rounded-md text-white ">
            {tag}
          </span>
          <span className="text-secondaryGrey font-lato text-base">{date}</span>
        </div>
        <h4 className="text-black-PRIMARY text-[23px] md:text-[25px] font-futura font-medium my-2 md:my-3">
          {headline}
        </h4>
        <p className="font-lato text-secondaryGrey text-base">{paragraph}</p>
        <button className="flex group gap-3 items-center mt-4 text-blue-PRIMARY border-b duration-150 hover:border-b-blue-PRIMARY">
          Link <HiArrowRight className="group-hover:-rotate-45 duration-150" />{' '}
        </button>
      </div>
    </div>
  );
};
export default DesignCard;
