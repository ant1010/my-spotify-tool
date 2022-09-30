export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    token: '',
    
};
//'BQC0-du0dnCWEyg7XqiHWApSRQz5lbyAdKP1QspsOoioOmk9LrYPdSmfItla1WkTd54aHXaVislq5uEKFPXZQXT7rEjMwtFUbep9Yjij5UNubKb3DgBpVk0c-X0YVfK7OebUQPXpSLeVAoUykIcNfcCtE7Uc'
const reducer = (state,action) => {
console.log(action);
switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
    case 'SET_TOKEN':
        return {
            ...state,
            token:action.token,
        }
        case 'SET_PLAYING':
        return {
            ...state,
            playing:action.playing,
        }
        case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists:action.playlists,
        }
        default:
        return state;
}
}
export default reducer;