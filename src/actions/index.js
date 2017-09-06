export const RECIEVE_MEMES = 'RECIEVE_MEMES';

function recieveMemes(Json){
const {memes} = Json.data;
       
    return{
        type: RECIEVE_MEMES,
        memes
    }
}

function fetchMemeJson(){
    return fetch('https://api.imgflip.com/get_memes')
    .then(Response => Response.json());
}

export function fetchMemes(){
    return function(dispacth){
        return fetchMemeJson().then(
            json => dispacth(recieveMemes(json)))
        }
    }


