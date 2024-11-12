import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import MovieList from './movie/MovieList'

export default function Page() {
  return (
    <>
        <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </main>
        <Footer />
    </>
  )
}
