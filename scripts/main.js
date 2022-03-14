import { mostraElo } from "./mostraElo.js";
import { mostraNick } from "./mostraNick.js";
import {mostraImagemElo} from "./mostraImagemElo.js"
import {idsPartidas} from "./idsPartidas.js"
import {mostraJogo} from "./mostraJogo.js" 
let nick = mostraNick();
let elo = await mostraElo(nick)
mostraImagemElo(elo) 
let ids= await idsPartidas(nick)
console.log(ids)
for(let k=0;k<15;k++){
    mostraJogo(ids[k], nick)
}
document.getElementById("load").style.display="none";
document.getElementById("loadBarr").style.display="none";