export function mostraImagemElo(elo){
   
    switch(elo){
        case "BRONZE":
         
            document.getElementById("eloImg").setAttribute("src", "../lol data dragon/dragontail-11.24.1/elos antigos imgs/bronze.png")
            break;
        case "SILVER":
            document.getElementById("eloImg").setAttribute("src", "../lol data dragon/dragontail-11.24.1/elos antigos imgs/prata.png");
            break;
        case "IRON":
            document.getElementById("eloImg").setAttribute("src", "../lol data dragon/dragontail-11.24.1/elos antigos imgs/ferro.png");
            break;
        case "GOLD":
            document.getElementById("eloImg").setAttribute("src", "../lol data dragon/dragontail-11.24.1/elos antigos imgs/ouro.png");
            break;
        case "PLATINUM":
            document.getElementById("eloImg").setAttribute("src", "../lol data dragon/dragontail-11.24.1/elos antigos imgs/platina.png");
            break;
        case "MASTER":
            document.getElementById("eloImg").setAttribute("src", "../lol data dragon/dragontail-11.24.1/elos antigos imgs/mestre.png");
            break;
        case "GRAND MASTER":
            document.getElementById("eloImg").setAttribute("src", "../lol data dragon/dragontail-11.24.1/elos antigos imgs/gMaster.png");
            break;
        case "CHALLENGER":
            document.getElementById("eloImg").setAttribute("src", "../lol data dragon/dragontail-11.24.1/elos antigos imgs/desafiante.png");
            break;
        
    }
    
    
    
   
}