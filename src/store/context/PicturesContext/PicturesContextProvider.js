import PicturesContext from "./PicturesContext";
import { picturesArray, picturesArray2 } from "../../../data/pictures";
import { useReducer } from "react";
import PicturesReducer from "../../reducers/pictures/picturesReducer";

const PicturesContextProvider = ({ children }) => {
  const [pictures, dispatch] = useReducer(PicturesReducer, {
    picturesArray,
    picturesArray2,
  });
  const data = { pictures, dispatch };
  return (
    <PicturesContext.Provider value={data}>{children}</PicturesContext.Provider>
  );
};
export default PicturesContextProvider;
