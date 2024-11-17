import { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const NewsCard = ({ singleNews }) => {
  const { author, title, image_url, rating, total_view } = singleNews;
  const { name, published_date, img } = author;
  const { number, badge } = rating;

  const [showFullDetails, setShowFullDetails] = useState(false);

  let details = singleNews.details;
  //   !showFullDetails && details.slice(0, 30) + "...";

  if (!showFullDetails) {
    details = details.substring(0, 300) + "...";
  }

  const handleFullDetails = () => {
    setShowFullDetails((prev) => !prev);
  };

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
            <CiBookmark size={25} />
            <CiShare2 size={25} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <div>
          <Link to={`/news/${singleNews._id}`}>
            <img className="w-full" src={image_url} alt="" />
          </Link>
        </div>
        <div className="">
          <p className="text-justify">{details}</p>
          <Link
            onClick={handleFullDetails}
            className="text-primary font-medium text-normal"
            href="#"
          >
            {showFullDetails ? "Read Less" : "Read More"}
          </Link>
        </div>
        <hr className="border-2 border-solid border-base-200" />
        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <span>
              <ReactStars size={32} />
            </span>
            <span className="font-medium">{number}</span>
          </div>
          <div className="flex items-center gap-6">
            <FaEye size={25} />
            <span className="text-normal font-semibold">{total_view}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
