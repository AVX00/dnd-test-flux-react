import { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import PicturesContext from "./store/context/PicturesContext/PicturesContext";
import { dragPictureAction } from "./store/actions/pictures/actionsCreator";

const List = styled.ul`
  list-style: none;
  border-radius: 4px;
  background-color: #202430;
  width: 400px;
  height: fit-content;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  @media (max-width: 400px) {
    width: 100%;
    margin: 10px;
  }
`;

const PictureItem = styled.li`
  box-sizing: border-box;
  max-height: 100px;
  height: max-content;
  margin: 10px;
  border-radius: 4px;
`;

const Image = styled.img`
  max-height: inherit;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;
const App = () => {
  const { pictures, dispatch } = useContext(PicturesContext);

  const handleDragPicture = ({ source, destination }) => {
    dispatch(dragPictureAction(source, destination));
  };

  return (
    <DragDropContext onDragEnd={handleDragPicture}>
      <Droppable droppableId="picturesArray">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {pictures.picturesArray.map(({ id, src }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <PictureItem
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                    >
                      <Image src={src} alt="this is an alternative text" />
                    </PictureItem>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
      <Droppable droppableId="picturesArray2">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {pictures.picturesArray2.map(({ id, src }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <PictureItem
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                    >
                      <Image src={src} alt="this is an alternative text" />
                    </PictureItem>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default App;
