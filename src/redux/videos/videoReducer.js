import { SET_VIDEO } from "./videoAction";

const initialState = {
    video: null
}

const videoReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_VIDEO:
            return{
                video: action.payload
            }

        default:
            return state
    }
}

export default videoReducer;