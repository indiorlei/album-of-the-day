import { useState, useCallback } from 'react'
import { Album } from '@/data/albums'

interface AlbumData {
  image: string
  spotifyUrl: string
  error?: string
}

interface UseAlbumReturn {
  selectedAlbum: Album | null
  albumImage: string
  spotifyUrl: string
  loading: boolean
  error: string | null
  drawRandomAlbum: () => void
  retryFetch: () => void
}

export function useAlbum(): UseAlbumReturn {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)
  const [albumImage, setAlbumImage] = useState<string>('')
  const [spotifyUrl, setSpotifyUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAlbumData = useCallback(async (album: Album, retryCount = 0) => {
    try {
      const response = await fetch(`/api/album?artist=${encodeURIComponent(album.artist)}&title=${encodeURIComponent(album.title)}`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data: AlbumData = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      setAlbumImage(data.image || '')
      setSpotifyUrl(data.spotifyUrl || '')
      setError(null)
    } catch (err) {
      console.error('Fetch error:', err)
      
      if (retryCount < 2) {
        setTimeout(() => fetchAlbumData(album, retryCount + 1), 1000 * (retryCount + 1))
        return
      }
      
      setError('Erro ao carregar dados do álbum')
      setAlbumImage('')
      setSpotifyUrl('')
    } finally {
      setLoading(false)
    }
  }, [])

  const drawRandomAlbum = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/album', { method: 'POST' })
      
      if (!response.ok) {
        throw new Error('Failed to get random album')
      }

      const album: Album = await response.json()
      setSelectedAlbum(album)
      setAlbumImage('')
      setSpotifyUrl('')
      
      await fetchAlbumData(album)
    } catch (err) {
      console.error('Random album error:', err)
      setError('Erro ao sortear álbum')
      setLoading(false)
    }
  }, [fetchAlbumData])

  const retryFetch = useCallback(() => {
    if (selectedAlbum) {
      setLoading(true)
      setError(null)
      fetchAlbumData(selectedAlbum)
    }
  }, [selectedAlbum, fetchAlbumData])

  return {
    selectedAlbum,
    albumImage,
    spotifyUrl,
    loading,
    error,
    drawRandomAlbum,
    retryFetch
  }
}