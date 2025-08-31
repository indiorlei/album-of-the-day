import { useState } from 'react'

interface AlbumCardProps {
  image: string
  title: string
  artist: string
  year: number
  position: number
  spotifyUrl: string
  loading: boolean
  error: string | null
  onRetry: () => void
  onNewDraw: () => void
}

export default function AlbumCard({ 
  image, 
  title, 
  artist, 
  year, 
  position, 
  spotifyUrl, 
  loading,
  error,
  onRetry,
  onNewDraw
}: AlbumCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      action()
    }
  }

  return (
    <div className="text-center flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl w-full">
      <div className="relative group">
        {imageError || !image || image === '' ? (
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        ) : (
          <img
            src={image}
            alt={`Capa do álbum ${title} de ${artist} (${year})`}
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg shadow-2xl object-cover flex-shrink-0 transition-transform group-hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-300"></div>
      </div>
      
      <div className="flex-1">
        <div className="text-center lg:text-left">
          <div className="text-sm sm:text-base font-medium text-gray-400 mb-2 uppercase tracking-wider">
            Álbum • #{position}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-tight">
            {title}
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center relative">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <p className="text-xl sm:text-2xl text-white font-bold">{artist}</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 text-gray-300">
            <span className="text-sm sm:text-base">{year}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="text-sm sm:text-base">Rolling Stone Brasil</span>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
              <p className="text-red-300 text-sm mb-2">{error}</p>
              <button
                onClick={onRetry}
                className="text-red-400 hover:text-red-300 underline text-sm"
                onKeyDown={(e) => handleKeyDown(e, onRetry)}
              >
                Tentar novamente
              </button>
            </div>
          )}

          <div className="space-y-4">
            {loading ? (
              <div className="inline-flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium">
                <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                Buscando no Spotify...
              </div>
            ) : spotifyUrl ? (
              <a
                href={spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full transition-all duration-200 text-base font-bold hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                onKeyDown={(e) => handleKeyDown(e, () => window.open(spotifyUrl, '_blank'))}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Reproduzir no Spotify
              </a>
            ) : null}
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <button
                onClick={onNewDraw}
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onKeyDown={(e) => handleKeyDown(e, onNewDraw)}
              >
                🎲 Sortear Outro
              </button>
              
              <a 
                href="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm underline self-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
              >
                Sobre o projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}