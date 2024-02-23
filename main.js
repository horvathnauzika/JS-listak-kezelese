import { SZEMELYLISTA } from "./adat.js";
import { listakiir, listaosszeallit } from "./fuggvenyek.js";


console.log(SZEMELYLISTA)

// Írjuk ki a második ember nevét és telefonszámát
console.log(SZEMELYLISTA[1].nev)
console.log(SZEMELYLISTA[1].tel)
console.log(`${SZEMELYLISTA[1].nev} tel: ${SZEMELYLISTA[1].tel}`)


listakiir(SZEMELYLISTA)

// html elemek elérése - DOM elérése
// megfogom a div#lista elemelet

//const LISTAELEM = document.getElementById("lista")
//vagy
const LISTAELEM = document.querySelector("#lista")
console.log(LISTAELEM)

// módosítom a tartalmát
LISTAELEM.innerHTML="<h3>Címlista</h3>"
LISTAELEM.innerHTML+=`
                    <ul>
                        <li>${SZEMELYLISTA[0].nev} tel: ${SZEMELYLISTA[0].tel}</li>
                        <li>${SZEMELYLISTA[1].nev} tel: ${SZEMELYLISTA[1].tel}</li>
                    </ul>`

const LISTADIVEK = document.querySelector("#cardContainer")
console.log(LISTADIVEK)

LISTADIVEK.innerHTML="<h3>Divek</h3>"
LISTADIVEK.innerHTML+=`
                        <div>
                            <h3>Személy 1</h3>
                            <p>Név: ${SZEMELYLISTA[0].nev}</p>
                            <p>Tel: ${SZEMELYLISTA[0].tel}</p>
                            <p>Kor: ${SZEMELYLISTA[0].kor}</p>
                            <p>Barát e: ${SZEMELYLISTA[0].barat}</p>
                        </div>

                        <div>
                            <h3>Személy 2</h3>
                            <p>Név: ${SZEMELYLISTA[1].nev}</p>
                            <p>Tel: ${SZEMELYLISTA[1].tel}</p>
                            <p>Kor: ${SZEMELYLISTA[1].kor}</p>
                            <p>Barát e: ${SZEMELYLISTA[1].barat}</p>
                        </div>
                        
`