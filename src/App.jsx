import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import MovieList from './movie/MovieList'
import Sidebar from './sidebar'

function App() {
  const [count, setCount] = useState(0)

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

export default App
