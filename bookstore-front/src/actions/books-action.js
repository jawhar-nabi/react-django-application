

export const  getbooks = books => {   //this is an action creator
      return{         //this is an action
        type: 'GET_BOOKS',
        payload: books,
      }
}