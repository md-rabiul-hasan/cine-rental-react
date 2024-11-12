import React, { useContext } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import { DarkContenxt } from './context'
import MovieList from './movie/MovieList'

export default function Page() {
  const {darkMode} = useContext(DarkContenxt);
  return (
    <>
        <div className={`h-full w-full ${darkMode ? "bg-dark": "bg-white"}`}>
          <Header />
              <main>
                  <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                      <Sidebar />
                      <MovieList />
                  </div>
              </main>
          <Footer />
        </div>
    </>
  )
}
