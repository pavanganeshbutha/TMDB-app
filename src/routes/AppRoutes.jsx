import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import WatchlistPage from "../pages/WatchlistPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
