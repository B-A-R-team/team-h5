import FullPage from './components/FullPage';
import { ReactComponent as MusicIcon } from './assets/image/music.svg';
import { useEffect, useState } from 'react';
import ready from './assets/audio/ready.mp3';

function App() {
  const [musicOpen, setMusicOpen] = useState(true);

  useEffect(() => {
    const music = document.getElementById('ready');
    music.volume = 0.5;
    if (musicOpen) {
      music.play();
    } else {
      music.pause();
    }
  }, [musicOpen]);

  return (
    <div className="relative">
      <span
        className="absolute z-50  top-0 right-0 w-7 mt-4 mr-4 border-2 border-gray1 rounded-full"
        onClick={() => {
          setMusicOpen((value) => !value);
        }}
      >
        <MusicIcon className={musicOpen ? 'animate-spin' : ''} />
        <audio id="ready" src={ready} />
      </span>
      <FullPage />
    </div>
  );
}

export default App;
