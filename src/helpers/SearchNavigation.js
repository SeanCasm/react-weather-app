import { useLocation, useNavigate } from "react-router-dom";

export const SearchNavigation = ({ lat, lon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  switch (location.pathname) {
    case "/home":
      navigate(`../weather/${lat}/${lon}`);
      break;
    case "/weather":
      navigate(`weather/${lat}/${lon}`);
      break;
    default:
      navigate(`weather/${lat}/${lon}`);
  }
};
