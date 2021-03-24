const rectangular = (state) => {
  return {
    area: () => {
      return state.height * state.width;
    }
  }
}

const openable = (state) => {
  return {
    toggleOpen: () => {
      return state.open = !state.open;
    }
  }
}

const buildRectangleWindow = (state) => {
  return Object.assign(state, rectangular(state), openable(state));
};

const rectangleWindow = buildRectangleWindow({
  height: 10,
  width: 20,
  open: false
}
)

rectangleWindow.open
rectangleWindow.toggleOpen();
rectangleWindow.open; 