export function mostraNick(){
    let nick=localStorage.getItem("nick");
  
    let nome=document.getElementById("nomeJogador")
    nome.innerHTML=nick
    
    return nick;
}