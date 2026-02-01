
import { useState, useEffect } from 'react';
import { getPageImages, savePageImages } from '@/data/pageImages';
import { STORAGE_EVENTS } from '@/config';

export const usePageImages = () => {
  const [images, setImages] = useState(getPageImages());

  useEffect(() => {
    const handleStorageChange = () => {
      setImages(getPageImages());
    };
    
    window.addEventListener(STORAGE_EVENTS.images, handleStorageChange);
    // Also listen to standard storage event for cross-tab sync
    window.addEventListener(STORAGE_EVENTS.products, handleStorageChange);
    
    return () => {
      window.removeEventListener(STORAGE_EVENTS.images, handleStorageChange);
      window.removeEventListener(STORAGE_EVENTS.products, handleStorageChange);
    };
  }, []);

  const updateImages = (section, key, value) => {
    const newImages = {
      ...images,
      [section]: {
        ...images[section],
        [key]: value
      }
    };
    setImages(newImages);
    savePageImages(newImages);
  };

  return { images, updateImages };
};
