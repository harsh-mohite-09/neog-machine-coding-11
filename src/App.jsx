import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import WatchlistPage from "./pages/WatchlistPage";
import StarredPage from "./pages/StarredPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Routes>
        <Route index={true} element={<HomePage />} />
        <Route path="/detail/:id" element={<MovieDetailPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/starred" element={<StarredPage />} />
      </Routes>
    </Flex>
  );
}

export default App;
