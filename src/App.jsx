import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'


const App = () => {
  const [darkmode, setDarkmode] = useState(false)

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkmode])
  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
  }


  return (
      <div className='min-h-screen bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300 relative'>
        <button onClick={toggleDarkmode} className='fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:h-10 lg:w-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-900 text-xl lg:text-2xl shadow-lg hover:bg-amber-600 transition-all duration-300'><i className={`bx bx-${darkmode ? 'sun' : 'moon'} text-lg lg:text-xl`}></i></button>

      <Hero />
    </div>
  )
}

export default App