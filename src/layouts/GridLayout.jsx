import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { map } from "firebase/firestore/pipelines";

const GridLayout = () => {
  const [movies, setMovies] = useState([]);
  const [pageno, setPageno] = useState(1);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/movie/day",
      params: { language: "en-US", page: pageno },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="px-15 py-8">
      <h2 className="ml-2 mb-9 font-semibold text-3xl">Trending Movies</h2>
      <div className=" px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-6">
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              moviePoster={movie.poster_path}
              movieTitle={movie.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GridLayout;
