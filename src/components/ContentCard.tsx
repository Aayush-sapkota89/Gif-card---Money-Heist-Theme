import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '../types';

interface ContentCardProps {
  movie: Movie;
}

const ContentCard: React.FC<ContentCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative flex-shrink-0 h-[140px] md:h-[160px] w-[250px] overflow-hidden rounded-md transition-transform duration-300 ease-out transform group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <img 
        src={movie.thumbnailUrl} 
        alt={movie.title}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isHovered ? 'scale-110 brightness-50' : 'scale-100'
        }`}
      />
      
      {/* New badge */}
      {movie.isNew && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          NEW
        </div>
      )}
      
      {/* Hover Card */}
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-between p-3 bg-gradient-to-t from-black to-transparent">
          <div className="flex justify-end">
            {/* Controls that appear at the top on hover */}
          </div>
          
          <div>
            <h3 className="text-white font-medium text-sm mb-1 line-clamp-1">{movie.title}</h3>
            
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-green-500 text-xs font-medium">98% Match</span>
              {movie.rating && <span className="text-xs border border-gray-500 px-1">{movie.rating}</span>}
              {movie.duration && <span className="text-xs text-gray-300">{movie.duration}</span>}
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="bg-white rounded-full p-1 hover:bg-white/90 transition-colors">
                <Play size={16} className="text-black" />
              </button>
              <button className="bg-gray-800/80 rounded-full p-1 hover:bg-gray-700/80 transition-colors">
                <Plus size={16} className="text-white" />
              </button>
              <button className="bg-gray-800/80 rounded-full p-1 hover:bg-gray-700/80 transition-colors">
                <ThumbsUp size={16} className="text-white" />
              </button>
              <button className="bg-gray-800/80 rounded-full p-1 hover:bg-gray-700/80 transition-colors ml-auto">
                <ChevronDown size={16} className="text-white" />
              </button>
            </div>
            
            {movie.genres && (
              <div className="mt-2 flex flex-wrap">
                {movie.genres.slice(0, 3).map((genre, index) => (
                  <React.Fragment key={genre}>
                    <span className="text-[10px] text-gray-300">{genre}</span>
                    {index < Math.min(movie.genres!.length, 3) - 1 && (
                      <span className="text-[10px] text-gray-300 mx-1">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;