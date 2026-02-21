const Card = ({ moviePoster, movieTitle }) => {
  return (
    <figure className="p-4  border rounded-xl border-gray-800/10 hover:cursor-pointer">
      <img
        className="rounded-xl"
        src={`https://image.tmdb.org/t/p/original${moviePoster}`}
        alt="movie-poster"
      />
      <figcaption className="text-center mt-2">{movieTitle}</figcaption>
    </figure>
  );
};

export default Card;
