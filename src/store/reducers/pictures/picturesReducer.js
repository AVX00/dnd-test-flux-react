const PicturesReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case "drag-picture":
      const { source, destination } = action;
      newState = [...currentState];
      if (!destination) break;
      const [dragegedItem] = newState.splice(source.index, 1);
      newState.splice(destination.index, 0, dragegedItem);

      break;
    default:
      newState = [...currentState];
  }
  return newState;
};
export default PicturesReducer;
