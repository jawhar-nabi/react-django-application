

const initialState = {

    books : [{id:5, title: 'mybook' , content:'this is content'}],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return {
                ...state,
                books : action.payload
            };
        default:
            return state;

    }
}