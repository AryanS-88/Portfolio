import React from 'react'
import { links } from '../data'

function Navbar() {
  return (
    <nav className="bg-cyan-200">
      <div className="align-element flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          FullStack
          <span className="text-cyan-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wider hover:text-cyan-600 duration-350"
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
