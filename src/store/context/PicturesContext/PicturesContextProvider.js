import PicturesContext from "./PicturesContext";
import { picturesArray } from "../../../data/pictures";
import { useReducer } from "react";
import PicturesReducer from "../../reducers/pictures/picturesReducer";

const PicturesContextProvider = ({ children }) => {
  const [pictures, dispatch] = useReducer(PicturesReducer, picturesArray);
  const data = { pictures, dispatch };
  return (
    <PicturesContext.Provider value={data}>{children}</PicturesContext.Provider>
  );
};
export default PicturesContextProvider;
