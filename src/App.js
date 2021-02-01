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

  useEffect(() => {
    const pictures = [
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/citybg.png',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/teamlogo.jpg',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/20210130qrcode.png',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/teamactive.jpg',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/code.webp',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/coding.jpg',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/20210130qrcode.png',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/ehotel.png',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/examsys.png',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/police.png',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/print.png',
      'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/bar-ui.png',
    ];
    window.img = new Array(pictures.length);
    pictures.forEach((picture, index) => {
      const img = new Image();
      img.src = picture;
      window.img[index] = img;
    });
  }, []);

  return (
    <div className="relative">
      <span
        className="absolute z-50  top-0 right-0 w-7 mt-4 mr-4 border-2 border-gray1 rounded-full bg-black bg-opacity-25"
        onClick={() => {
          setMusicOpen((value) => !value);
        }}
      >
        <MusicIcon className={`${musicOpen ? 'animate-spin' : ''}`} />
        <audio id="ready" src={ready} />
      </span>
      <FullPage />
      {/* <Projects /> */}
    </div>
  );
}

export default App;
