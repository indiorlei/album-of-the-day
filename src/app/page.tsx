"use client";

import { useEffect, useState } from "react";
import { useAlbum } from "@/hooks/useAlbum";
import AlbumCard from "@/components/AlbumCard";
import AlbumSkeleton from "@/components/AlbumSkeleton";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const {
    selectedAlbum,
    albumImage,
    spotifyUrl,
    loading,
    error,
    drawRandomAlbum,
    retryFetch,
  } = useAlbum();

  useEffect(() => {
    setMounted(true);
    drawRandomAlbum();
  }, []);

  if (!mounted || (!selectedAlbum && loading)) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
        <AlbumSkeleton />
      </main>
    );
  }

  if (!selectedAlbum) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-white mb-4">Erro ao carregar álbum</p>
          <button
            onClick={drawRandomAlbum}
            className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-full font-bold"
          >
            Tentar Novamente
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-4">
      <AlbumCard
        image={albumImage}
        title={selectedAlbum.title}
        artist={selectedAlbum.artist}
        year={selectedAlbum.year}
        position={selectedAlbum.position}
        spotifyUrl={spotifyUrl}
        loading={loading}
        error={error}
        onRetry={retryFetch}
        onNewDraw={drawRandomAlbum}
      />
    </main>
  );
}
