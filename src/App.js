import { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import VideoCard from "./VideoCard";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://i1.wp.com/globalinfusion.org/wp-content/uploads/2018/01/ig-logo-email.png?ssl=1"
          alt="LOGO"
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {reels.map(({ channel, song, url, avatarSrc, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
