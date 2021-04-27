
const initialState = {
  videos: [
    { id: 0, title: 'Learn React', url: 'https://www.youtube.com/embed/Ke90Tje7VS0', tags: ['react', 'react-crash-course'], isHidden: false },
    { id: 1, title: 'Learn Redux', url: 'https://www.youtube.com/embed/CVpUuw9XSjY', tags: ['redux', 'redux-crash-course'], isHidden: false },
    { id: 2, title: 'Build A react application', url: 'https://www.youtube.com/embed/CVpUuw9XSjY', tags: ['react-app', 'react-redux-course'], isHidden: true },
  ],
  filter: ''
}






export const MovieReducer = (state = initialState, action: any) => {
 
  const findIndex =(arr: any[], id: number)=>{
    const index = arr.findIndex(video => video.id === id);
    return index;
  }

  switch (action.type) {
    case "SHOW": {
      const index = findIndex(state.videos, action.payload.id);
      const newArray = [...state.videos]; //making a new array
      newArray[index].isHidden = false;
      return { ...state, videos: newArray };
    }
    case "HIDE": {
      const index = findIndex(state.videos, action.payload.id);
      const newArray = [...state.videos]; //making a new array
      newArray[index].isHidden = true
      return { ...state, videos: newArray };
    }
    case "ADD": {
      return { ...state, videos: [...state.videos, action.payload] };
    }
    case "UPDATE": {
      const index = findIndex(state.videos, action.payload.id);
      const newArray = [...state.videos]; //making a new array
      newArray[index] = action.payload;
      return { ...state, videos: newArray };
    }
    case "FILTER": {
      console.log(action.payload);
      return {...state, filter: action.payload}
    }

    default:
      return state;
  }
}