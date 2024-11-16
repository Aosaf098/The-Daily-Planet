import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";


const NewsCard = ({ singleNews }) => {

  const { author, title, image_url, details, rating, total_view } = singleNews;
  const { name, published_date, img } = author;
  const {number, badge} = rating

  return (
    <>
      <div className="p-4 space-y-6 mt-4 mb-10 border border-solid border-gray-200 rounded-lg">
        <div className="flex items-center justify-between gap-10 bg-base-200 p-2">
          <div className="flex items-center gap-2">
            <img className="w-12 rounded-full" src={img} alt="" />
            <div>
              <h3>{name}</h3>
              <p>{published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CiBookmark size={25}/>
            <CiShare2 size={25} />
          </div>
        </div>
        <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <div>
            <img className="w-full" src={image_url} alt="" />
        </div>
        <div className="">
            <p className="text-justify">{details}</p>
            <a className="text-primary font-medium text-normal" href="#">Read More</a>
        </div>
        <hr className="border-2 border-solid border-base-200" />
        <div className="flex items-center justify-between">
            <div className="flex gap-6 items-center">
                <span>{badge}</span>
                <span>{number}</span>
            </div>
            <div className="flex items-center gap-6">
                <FaEye size={25}/>
                <span className="text-normal font-semibold">{total_view}</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
