import { useSelector } from "react-redux";

export const Session = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  sessionStorage.setItem("favorites", JSON.stringify(favorites));
};
