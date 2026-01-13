import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">EventHub</Link>
        
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/events" 
              className="hover:text-blue-200 transition duration-300"
            >
              Events
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:text-blue-200 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:text-blue-200 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="hover:text-blue-200 transition duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}