import React from 'react'

function Skillcard({ icon, title, text }) {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-400">{text}</p>
    </article>
  )
}

export default Skillcard
