import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">FInd Us On</h3>
        <div className="join flex join-vertical *:justify-start *:gap-4 rounded-none">
          <button className="btn join-item">
            <FaFacebook />
            <h3>Facebook</h3>
          </button>
          <button className="btn join-item">
            <FaTwitter />
            <h3>Twitter</h3>
          </button>
          <button className="btn join-item">
            <FaInstagram />
            <h3>Instagram</h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default FindUs;
