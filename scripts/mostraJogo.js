let chave = localStorage.getItem("chave")

export async function mostraJogo(id, nick){
   let resposta = await fetch("https://americas.api.riotgames.com/lol/match/v5/matches/"+id+"?api_key="+chave+"")
   let conv = await resposta.json()



    //Essa parte do código vai pesquisar o nick do player na lista de jogadores que foi recebida com o fetch
    //Em seguida vai armazenar apenas os status do jogador em uma variável chamada resultado
    let pesquisa = await nick;
    let resultado = conv.info.participants.find((nome)=>{
    return nome.summonerName==pesquisa
    });
    console.log(resultado)

 
   let div = document.createElement("div")
   div.setAttribute("class", "partida")
   document.getElementById("historico").appendChild(div)
   let imgIcone = document.createElement("img")
   imgIcone.setAttribute("src", "../lol data dragon/dragontail-11.24.1/11.24.1/img/champion/"+resultado.championName+".png")
   imgIcone.setAttribute("class", "champ")
   div.appendChild(imgIcone)
   let span = document.createElement("span")
   span.setAttribute("class", "result")
   if(resultado.win){
    span.textContent="Vitória"
    span.style.color="green"
   }else{
    span.textContent="Derrota"
    span.style.color="red"
   }
   div.appendChild(span)
   let div2 = document.createElement("div")
   div2.setAttribute("class", "itens")
   div.appendChild(div2)
   //Definindo as imagens
   let item0=0;
   let item1=0;
   let item2=0;
   let item3=0;
   let item4=0;
   let item5=0;
   let item6=0;
   let cont=0
   while(cont <=6){
    if(resultado.item0!=0 && item0==0){
        item0 = document.createElement("img")
        item0.setAttribute("class", "item")
        item0.setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/"+resultado.item0+".png")
        div2.appendChild(item0)
       }else if(resultado.item1!=0 && item1==0){
        item1 = document.createElement("img")
        item1.setAttribute("class", "item")
        item1.setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/"+resultado.item1+".png")
        div2.appendChild(item1)
       }else if(resultado.item2!=0 && item2==0){
        item2 = document.createElement("img")
        item2.setAttribute("class", "item")
        item2.setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/"+resultado.item2+".png")
        div2.appendChild(item2)
       }else if(resultado.item3!=0 && item3==0){
        item3 = document.createElement("img")
        item3.setAttribute("class", "item")
        item3.setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/"+resultado.item3+".png")
        div2.appendChild(item3)
       }else if(resultado.item4!=0 && item4==0){
        item4 = document.createElement("img")
        item4.setAttribute("class", "item")
        item4.setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/"+resultado.item4+".png")
        div2.appendChild(item4)
       }else if(resultado.item5!=0 && item5==0){
        item5 = document.createElement("img")
        item5.setAttribute("class", "item")
        item5.setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/"+resultado.item5+".png")
        div2.appendChild(item5)
       }
       else if(resultado.item6!=0 && item6==0){
        item6 = document.createElement("img")
        item6.setAttribute("class", "item")
        item6.setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/"+resultado.item6+".png")
        div2.appendChild(item6)
       }
    cont++;
   }
   
   //Definindo as classes



  

}