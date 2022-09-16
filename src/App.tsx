
import './styles/main.css'
import eSports from './assets/esports.svg'
import { GameCard } from './components/GameCard'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'


type Game = {
  id: number
  bannerUrl: string
  title: string
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
   <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={eSports} alt="Logo eSports" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-clip-text bg-nlw-gradient'>duo</span> está aqui
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
       {games.map(game  => (
         <GameCard 
          key={game.id}
          bannerUrl={game.bannerUrl}
          title={game.title}
          alt={game.title}
          adsCount={game._count.ads}
        />
       ))}
      </div>
      <CreateAdBanner />
   </div>
  )
}

export default App
