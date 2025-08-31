import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o Projeto - Album Giveaway",
  description:
    "Conheça mais sobre o Album Giveaway, projeto que celebra os 100 maiores discos da música brasileira segundo a Rolling Stone Brasil.",
  openGraph: {
    title: "Sobre o Projeto - Album Giveaway",
    description:
      "Conheça mais sobre o Album Giveaway, projeto que celebra os 100 maiores discos da música brasileira.",
    url: "https://album-giveaway.vercel.app/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Sobre o Projeto
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Uma homenagem aos 100 maiores discos da música brasileira
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              🎵 O que é este projeto?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              O Album Giveaway é uma aplicação web que sorteia aleatoriamente
              álbuns da prestigiosa lista dos "100 Maiores Discos da Música
              Brasileira", elaborada pela Rolling Stone Brasil. A cada acesso,
              você descobre um clássico da MPB com sua capa original e link
              direto para ouvir no Spotify.
            </p>
          </section>

          <section className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              📚 Sobre a Lista Original
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A lista dos "100 Maiores Discos da Música Brasileira" foi
              cuidadosamente elaborada pela
              <strong> Rolling Stone Brasil</strong>, uma das mais respeitadas
              publicações musicais do mundo. Esta seleção representa décadas de
              música brasileira, desde os pioneiros da Bossa Nova até os
              inovadores do Rock Nacional e Hip-Hop.
            </p>
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Fonte original:</strong>
              </p>
              <a
                href="https://rollingstone.com.br/artigo/os-100-maiores-discos-da-musica-brasileira/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline break-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
              >
                rollingstone.com.br/artigo/os-100-maiores-discos-da-musica-brasileira/
              </a>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              🏆 Destaques da Lista
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Top 5:
                </h3>
                <ol className="text-gray-300 space-y-1" role="list">
                  <li>1. Acabou Chorare - Novos Baianos (1972)</li>
                  <li>2. Tropicália ou Panis et Circencis - Vários (1968)</li>
                  <li>3. Construção - Chico Buarque (1971)</li>
                  <li>4. Chega de Saudade - João Gilberto (1959)</li>
                  <li>5. Secos & Molhados - Secos & Molhados (1973)</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Gêneros Representados:
                </h3>
                <ul className="text-gray-300 space-y-1" role="list">
                  <li>• Bossa Nova</li>
                  <li>• Tropicália</li>
                  <li>• MPB</li>
                  <li>• Rock Nacional</li>
                  <li>• Hip-Hop Brasileiro</li>
                  <li>• Samba</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              🛠️ Tecnologias Utilizadas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-sm text-gray-300" role="list">
                  <li>• Next.js 14</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold mb-2">APIs</h3>
                <ul className="text-sm text-gray-300" role="list">
                  <li>• Spotify Web API</li>
                  <li>• Discogs API</li>
                </ul>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Deploy</h3>
                <ul className="text-sm text-gray-300" role="list">
                  <li>• Vercel</li>
                  <li>• GitHub</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              🎯 Objetivo
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Este projeto tem como objetivo promover e facilitar o acesso aos
              clássicos da música brasileira, permitindo que novos ouvintes
              descubram obras fundamentais de nossa cultura musical. Cada
              sorteio é uma oportunidade de conhecer ou revisitar um marco da
              discografia nacional.
            </p>
          </section>

          <div className="text-center pt-8">
            <a
              href="/"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full transition-all duration-200 text-base font-bold hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              🎲 Sortear Novo Álbum
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
