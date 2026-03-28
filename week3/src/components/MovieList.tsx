import React, {useState} from "react";
import { useMovieStore } from '../store/useMovieStore';

export function MovieList() {
    const movies = useMovieStore((state) => state.Movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  const [filter, setFilter] = useState<'all' | 'watched' | 'unwatched'>('all');

  if (!Array.isArray(movies)) {
    return <div>Error: movies is not an array</div>;}

    const displayedMovies =
    filter === 'all'
      ? movies
      : filter === 'watched'
      ? movies.filter((m) => m.watched)
      : movies.filter((m) => !m.watched);

  return (
    <div className="p-6 bg-white rounded-xl">
      <h2 className="text-xl font-bold mb-4">Movie library</h2>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter('all')} className="px-3 py-1 border rounded">
          All movies
        </button>
        <button onClick={() => setFilter('watched')} className="px-3 py-1 border rounded">
          Watched movies
        </button>
        <button onClick={() => setFilter('unwatched')} className="px-3 py-1 border rounded">
          Unwatched
        </button>
      </div>

      <div className="space-y-2">
        {displayedMovies.map((movie) => (
          <div key={movie.id} className="flex items-center gap-3">
            <span>
              {movie.title} {movie.watched ? ' Watched' : ' Not watched'}
            </span>

            <button
              onClick={() => toggleWatched(movie.id)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              Change state
            </button>
          </div>
        ))}

        {displayedMovies.length === 0 && (
          <span className="text-gray-400 italic">No movies here...</span>
        )}
      </div>
    </div>
  );
}
