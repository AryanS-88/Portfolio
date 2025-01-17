import React from 'react'
import heroImg from '../assets/hero.svg'
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="bg-cyan-200 py-24 ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I'm <span className="text-cyan-600">Aryan</span>
          </h1>
          <p className="mt-4 text-3xl text-slate-700">Fullstack Developer</p>
          <p className="mt-2 text-xl Text-slate-700 tracking wide capitalize">
            Turning ideas into applications
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithub className="h-8 w-8 text-slate-500 hover:text-black duration:300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration:300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration:300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="" className="h-80 lg:h-96 sm" />
        </article>
      </div>
    </div>
  )
}

export default Hero
