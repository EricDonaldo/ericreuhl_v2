import React from 'react'
import { BiCodeBlock } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="bg-slate-800 shadow-lg flex items-center justify-around py-4 px-32 fixed top-0 left-0 w-full">
        <Link to="/">
            <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
                <BiCodeBlock className="text-6xl"/>
                <span className="font-semibold text-2xl">Eric Reuhl</span>
            </span>
        </Link>

        <div className="flex items-center gap-5">
            <Link to="/" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                Home
            </Link>

            <Link to="/about" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                About
            </Link>

            <Link to="/contact" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                Contact
            </Link>

            <Link to="/projects" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                Projects
            </Link>
        </div>
    </nav>
  )
}

export default navbar