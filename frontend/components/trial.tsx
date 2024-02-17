// In your component file
import { useEffect, useState } from 'react';




const spotitfyApi = 'https://spotify-github-profile.vercel.app/api/view?uid=joseizarra&cover_image=false&theme=default&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false'

const Trial = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        // const response = await fetch('http://localhost:8888/api/v1/login');
        const response = await fetch(spotitfyApi);
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch currently playing song');
        }
        const data = await response.json();
        setCurrentlyPlaying(data.name);
        console.log(currentlyPlaying);
      } catch (error) {
        console.error('Error fetching currently playing song:', error.message);
      }
    };

    fetchCurrentlyPlaying();
  }, []);

  return (
    <div>
      {currentlyPlaying ? (
        <p>Response: {JSON.stringify(currentlyPlaying)}</p>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default Trial;
