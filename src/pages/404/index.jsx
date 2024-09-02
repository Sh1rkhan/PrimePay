
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 font-jost text-indigo-950">
      <h1 className="text-indigo-950 text-9xl mb-4 font-extrabold">404</h1>
      <h2 className="text-4xl  mb-2 font-bold">Oops! Page not found</h2>
      <p className="text-lg text-center max-w-md mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.
      </p>
      <Link to="/" className="bg-indigo-950 text-white px-6 py-4 rounded-full hover:bg-secondary">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
