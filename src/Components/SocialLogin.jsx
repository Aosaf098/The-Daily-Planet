import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <>
      <div className="flex flex-col gap-6 mb-10">
        <h3 className="text-xl font-semibold">Login With</h3>
        <button className="flex items-center btn border-2 border-solid border-orange-700">
          <FaGoogle />
          <p>Login with Google</p>
        </button>
        <button className="flex items-center btn border-2 border-solid border-blue-700">
          <FaFacebook />
          <p>Login with Facebook</p>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
