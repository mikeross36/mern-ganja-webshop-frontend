import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useGanjaDetails = () => {
  const { ganjaId } = useParams();
  const ganjaState = useSelector((state) => state.getAllGanjas);
  const { ganjas } = ganjaState;
  const ganja = ganjas?.find((ganja) => ganja._id === ganjaId);
  // console.log(ganjaState);
  return ganja;
};
