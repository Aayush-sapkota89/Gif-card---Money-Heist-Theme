import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';
import { ContentRow as ContentRowType } from '../types';

interface ContentRowProps {
  data: ContentRowType;
}

const ContentRow: React.FC<ContentRowProps> = ({ data }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mt-8 space-y-2 px-4 md:px-12">
      <h2 className="text-white text-xl md:text-2xl font-medium">{data.title}</h2>
      
      <div className="group relative">
        {/* Left Control */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 flex items-center justify-center w-12 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
        >
          <ChevronLeft className="text-white" size={36} />
        </button>
        
        {/* Content Row */}
        <div 
          ref={rowRef}
          className="flex space-x-2 overflow-x-scroll scrollbar-hide py-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {data.movies.map(movie => (
            <ContentCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        {/* Right Control */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 flex items-center justify-center w-12 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
        >
          <ChevronRight className="text-white" size={36} />
        </button>
      </div>
    </div>
  );
};

export default ContentRow;