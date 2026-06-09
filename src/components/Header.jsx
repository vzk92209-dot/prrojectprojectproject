import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome</h1>
        <p className="text-xl text-blue-100">
          Build amazing applications with React and Vite
        </p>
      </div>
    </header>
  )
}
