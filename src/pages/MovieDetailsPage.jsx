import axios from "axios";
import { LoaderCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [backdrop, setBackdrop] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      },
    };

    axios
      .request(options)
      .then((res) => {
        setBackdrop(res.data.backdrop_path);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isloading) {
    return (
      <div className="border h-125 flex justify-center items-center">
        <LoaderCircleIcon className="animate-spin size-10 text-blue-600" />
      </div>
    );
  }
  return (
    <section
      className="border h-120 bg-cover bg-center bg-white/60 bg-blend-color"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
      }}
    >
      <div className="">{movieId}</div>
    </section>
  );
};

export default MovieDetailsPage;
