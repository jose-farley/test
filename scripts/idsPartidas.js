let chave = localStorage.getItem("chave")

async function info(nick){
    let resposta = await fetch("https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+nick+"?api_key="+chave)
    let json= await resposta.json()
    return json
}


export async function idsPartidas(nick){
let puuid= await info(nick)

let result = await fetch("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/"+puuid.puuid+"/ids?start=0&count=20&api_key="+chave+"")

let resultConv = await result.json();
return await resultConv

}