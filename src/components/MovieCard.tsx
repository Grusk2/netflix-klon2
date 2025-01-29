import React from "react";

type MovieCardProps = {
  title: string;
  thumbnail: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, thumbnail }) => {
  return (
    <div className="w-64 h-96 rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105 hover:shadow-xl">
      {/* Image Section */}
      <div className="h-4/5 w-full">
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="h-full w-full object-cover object-top"
        />
      </div>
      {/* Title Section */}
      <div className="h-1/5 flex items-center justify-center bg-gray-800 text-white text-center px-2">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
