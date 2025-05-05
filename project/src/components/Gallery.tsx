import React, { useState, useEffect } from 'react';
import { photos, categories } from '../data/photoData';
import { X, Plus } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    // Filter photos based on selected category
    if (selectedCategory === 'all') {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter(photo => photo.category === selectedCategory));
    }
    
    // Delay animation to allow filter transition
    setAnimateItems(false);
    const timer = setTimeout(() => setAnimateItems(true), 100);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimateItems(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector('#gallery');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const openLightbox = (id: string) => {
    setSelectedPhoto(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = '';
  };

  const getNextPhotoId = () => {
    if (!selectedPhoto) return null;
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    return filteredPhotos[(currentIndex + 1) % filteredPhotos.length].id;
  };

  const getPrevPhotoId = () => {
    if (!selectedPhoto) return null;
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    return filteredPhotos[(currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length].id;
  };

  const selectedPhotoData = selectedPhoto 
    ? photos.find(photo => photo.id === selectedPhoto) 
    : null;

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="inline-block px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            My Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Photography
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A selection of my best photographic work
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } shadow-sm`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ${
                animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(photo.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-200 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                </p>
                
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <Plus className="w-5 h-5 text-gray-900" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">No photos found in this category.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg"
            >
              View All Photos
            </button>
          </div>
        )}
      </div>
      
      {/* Lightbox */}
      {selectedPhoto && selectedPhotoData && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-6xl w-full">
            <img
              src={selectedPhotoData.src}
              alt={selectedPhotoData.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 rounded-b-lg">
              <h3 className="text-xl font-bold text-white mb-1">
                {selectedPhotoData.title}
              </h3>
              <p className="text-sm text-gray-200">
                {selectedPhotoData.category.charAt(0).toUpperCase() + selectedPhotoData.category.slice(1)}
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors text-white"
              onClick={() => setSelectedPhoto(getPrevPhotoId())}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors text-white"
              onClick={() => setSelectedPhoto(getNextPhotoId())}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;