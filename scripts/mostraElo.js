let chave = localStorage.getItem("chave")
//const encriptedId;

async function info(nick){
    let resposta = await fetch("https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+nick+"?api_key="+chave)

    return resposta.json()
}




export async function mostraElo(nick){
    
    let result =await info(nick)
    let encriptedId = result.id
    let resposta = await fetch("https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+encriptedId+"?api_key="+chave)
    if(resposta.status!=200){
        return "erro"
    }else{
        let conv = await resposta.json();
        if(conv[0]==undefined){
            document.getElementById("tierJogador").innerHTML="Sem elo"
            document.getElementById("elo").innerHTML=" "
           }else{
            document.getElementById("tierJogador").innerHTML=conv[0].tier
            document.getElementById("elo").innerHTML=" - "+conv[0].rank
           }   
        return conv[0].tier
    }

}