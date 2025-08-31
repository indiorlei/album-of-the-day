export default function AlbumSkeleton() {
  return (
    <div className="text-center flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl w-full animate-pulse">
      <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-700 rounded-lg flex-shrink-0"></div>
      
      <div className="flex-1 space-y-4">
        <div className="text-center lg:text-left">
          <div className="h-4 bg-gray-700 rounded w-32 mb-4 mx-auto lg:mx-0"></div>
          <div className="h-12 bg-gray-700 rounded w-full mb-6"></div>
          <div className="h-8 bg-gray-700 rounded w-3/4 mb-6 mx-auto lg:mx-0"></div>
          <div className="h-6 bg-gray-700 rounded w-48 mb-8 mx-auto lg:mx-0"></div>
          <div className="h-12 bg-gray-700 rounded-full w-56 mx-auto lg:mx-0"></div>
        </div>
      </div>
    </div>
  )
}