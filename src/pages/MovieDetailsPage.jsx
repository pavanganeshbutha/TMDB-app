import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <section className="border h-120">
      <div>{movieId}</div>
    </section>
  );
};

export default MovieDetailsPage;
