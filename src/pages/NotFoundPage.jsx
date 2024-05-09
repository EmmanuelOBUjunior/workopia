import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section>
        <div className="flex flex-col items-center">
      <FaExclamationTriangle className=" text-yellow-400 text-6xl mb-4"/>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">Sorry!!! The page you are looking for does not exist</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back To Home
      </Link>
        </div>
    </section>
  );
};

export default NotFoundPage;
