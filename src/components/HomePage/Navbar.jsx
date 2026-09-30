import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-gray-300 p-3 flex justify-between">

      {/* Logo */}
      <i className="ri-graduation-cap-fill text-2xl text-blue-600 ml-5 cursor-pointer">
        <span className="text-gray-300 cursor-pointer">
          StudentHub
        </span>
      </i>

      {/* Home */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `relative group active:scale-95
          after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:bg-blue-500
          after:transition-all after:duration-300
          ${isActive ? 'text-blue-500 after:w-full' : 'after:w-0'}
          hover:after:w-full`
        }
      >
        Home
      </NavLink>

      {/* Students */}
      <NavLink
        to="/students"
        className={({ isActive }) =>
          `relative group active:scale-95
          after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:bg-blue-500
          after:transition-all after:duration-300
          ${isActive ? 'text-blue-500 after:w-full' : 'after:w-0'}
          hover:after:w-full`
        }
      >
        Students
      </NavLink>

      {/* About */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `relative group active:scale-95 mr-50
          after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:bg-blue-500
          after:transition-all after:duration-300
          ${isActive ? 'text-blue-500 after:w-full' : 'after:w-0'}
          hover:after:w-full`
        }
      >
        About
      </NavLink>

    </div>
  )
}

export default Navbar