import { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    const movieIds = [
      550, 603, 155, 680, 13, 27205, 157336, 299534, 597, 24428, 862, 278, 424,
      98, 12, 120, 122, 121, 807, 1891, 11, 1892, 1893, 1894, 1895, 1979, 85,
      105, 497, 9806, 10138, 10195, 1771, 49538, 285, 68718, 49026, 118340,
      76341, 38111,
    ];

    const randomMovieIdIndex = Math.floor(Math.random() * movieIds.length);

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieIds[randomMovieIdIndex]}/images`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        const backdrops = response.data.backdrops;
        let fileName = "";
        for (let i = 0; i < backdrops.length; i++) {
          const item = backdrops[i];
          if (item.width === 3840) {
            fileName = item.file_path;
            console.log(item.width, fileName);
            break;
          }
        }
        setBackgroundImage(fileName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section
      className=" min-h-134 bg-blue-600/80 text-white flex justify-center bg-cover bg-blend-multiply"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundImage})`,
      }}
    >
      <div className="w-8/10 flex flex-col justify-center">
        <h1 className="text-9xl font-extrabold mb-6">Welcome.</h1>
        <p className="text-7xl font">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>
    </section>
  );
};

export default Banner;
