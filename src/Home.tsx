import React, { useState, useEffect } from "react";
import moviesData from "./data/movies.json";
import MovieCard from "./components/MovieCard";

type Movie = {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  synopsis: string;
  isTrending?: boolean;
};

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trending, setTrending] = useState<Movie[]>([]);
  const [recommended, setRecommended] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Load all movies
    setMovies(moviesData);

    // Trending movies
    const trendingMovies = moviesData.filter((movie) => movie.isTrending);
    setTrending(trendingMovies);

    // Recommended movies
    const nonTrendingMovies = moviesData.filter((movie) => !movie.isTrending);
    const randomRecommended = nonTrendingMovies
      .sort(() => 0.5 - Math.random())
      .slice(0, 8); // Limit to 8
    setRecommended(randomRecommended);
  }, []);

  // Filter movies based on the search term
  const filteredMovies = searchTerm
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Home</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        {/* Search Results */}
        {searchTerm ? (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
            {filteredMovies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredMovies.map((movie, index) => (
                  <MovieCard key={index} title={movie.title} thumbnail={movie.thumbnail} />
                ))}
              </div>
            ) : (
              <p>No movies found.</p>
            )}
          </section>
        ) : (
          <>
            {/* Trending Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Trending</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {trending.map((movie, index) => (
                  <MovieCard key={index} title={movie.title} thumbnail={movie.thumbnail} />
                ))}
              </div>
            </section>

            {/* Recommended Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Recommended for You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recommended.map((movie, index) => (
                  <MovieCard key={index} title={movie.title} thumbnail={movie.thumbnail} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
