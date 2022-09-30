export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectURI = "http://localhost:3000/";
const clientId = "6ca42bd62f0542959053535545c73611";

const scopes = [
    "streaming",
    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-private",
    "playlist-read-collaborative",
];
export const getTokenFromURL = () => {
    const code = new URLSearchParams(window.location.search).get("code");
console.log("code:", code);
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial,item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
            

            },{});

    
} ;
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&response_type=code`;
