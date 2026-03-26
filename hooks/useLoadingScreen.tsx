import { useState, useEffect } from 'react';

interface LoadingScreenConfig {
  minLoadingTime?: number;
  showProgress?: boolean;
}

export const useLoadingScreen = (config: LoadingScreenConfig = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { minLoadingTime = 2000, showProgress = true } = config;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
      
      // Fade out effect
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [minLoadingTime]);

  return {
    isLoading,
    loadingComplete,
    showProgress
  };
};
