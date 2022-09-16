type GameCardProps = {
  bannerUrl: string
  alt: string
  title: string
  adsCount: number
}

export function GameCard({ bannerUrl, alt, title, adsCount }: GameCardProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} alt={alt} />
      <div className='w-full pt-6 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{title}</strong>
        {adsCount > 1 
          ? (
            <span className='text-zinc-300 text-sm block'>{adsCount} anúncios</span>
          )
          : (
            <span className='text-zinc-300 text-sm block'>{adsCount} anúncio</span>
          )
        }
      </div>
    </a>
  )
}