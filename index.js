

async function pegaNick(){

    document.addEventListener("keydown", ()=>{
        let tecla=event.key;
        if(tecla=="Enter"){
            let nick = document.getElementById("nick").value;
            let chave = document.getElementById("key").value;
            verificaNome(nick, chave);
        }
          
    })
    let next = document.getElementById("next")
    next.addEventListener("click", ()=>{
        let nick = document.getElementById("nick").value;
        let chave = document.getElementById("key").value;
        verificaNome(nick, chave);
    })
}
async function verificaNome(nick, chave){
    let resposta = await fetch("https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+nick+"?api_key="+chave).catch(()=>{
   alert("error")
    })
    if(resposta.ok){
   
        localStorage.setItem("nick", nick)
        localStorage.setItem("chave", chave)
        location.assign("../pages/perfil.html")
    }
    
}

pegaNick();