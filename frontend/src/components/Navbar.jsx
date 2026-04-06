import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const user = useSelector(state => state.user.userInfo);
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-deep flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg"></div>
        InterviewAI
      </div>
      <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">

        <NavLink to="/" className={({isActive}) => isActive ? "text-white transition" : "hover:text-white transition"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "text-white transition" : "hover:text-white transition"}>
          About
        </NavLink>
      </div>
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-white font-medium">Welcome, {user.name}</span>
        </div>
      ) : (
        <button onClick={() => Navigate("/dashboard")} className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      )}
    </nav>
  )
}

export default Navbar;