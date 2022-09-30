const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/refresh', (req,res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000/',
        clientId: '6ca42bd62f0542959053535545c73611',
        clientSecret: '4d77e78939064bc6a8a023ffed8bcb46',
        refreshToken
    })
    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({  accessToken : data.body.accessToken,
            expiresIn : data.body.expiresIn,})
          
        }
    ).catch(() =>{
        res.sendStatus(400);
    })
})
app.post('/login',(req,res) =>{
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000/',
        clientId: '6ca42bd62f0542959053535545c73611',
        clientSecret: '4d77e78939064bc6a8a023ffed8bcb46'
    })
    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_token,
            resfreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) =>{
        console.log(err)
        res.sendStatus(400);
    })
})
app.listen(3001);