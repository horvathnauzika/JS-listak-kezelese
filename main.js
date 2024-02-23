import { SZEMELYLISTA } from "./adat.js";
import { listakiir, listaosszeallit, listaszemelyekdiv, listadivtablazat } from "./fuggvenyek.js";


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

LISTADIVEK.innerHTML=`
                        <div>
                            <h3>Név: ${SZEMELYLISTA[0].nev}</h3>
                            <p>Tel: ${SZEMELYLISTA[0].tel}</p>
                            <p>Kor: ${SZEMELYLISTA[0].kor}</p>
                            <p>Barát e: ${SZEMELYLISTA[0].barat}</p>
                        </div>

                        <div>
                            <h3>Név: ${SZEMELYLISTA[1].nev}</h3>
                            <p>Tel: ${SZEMELYLISTA[1].tel}</p>
                            <p>Kor: ${SZEMELYLISTA[1].kor}</p>
                            <p>Barát e: ${SZEMELYLISTA[1].barat}</p>
                        </div>
                        
`

const LISTATABLAZAT = document.querySelector("#tablazat")
console.log(LISTATABLAZAT)

LISTATABLAZAT.innerHTML=`
                        <table>
                            <tr>
                                <th>Név</th>
                                <th>Telefonszám</th>
                                <th>Kor</th>
                                <th>Barát e</th>
                            </tr>
                            <tr>
                                <td>${SZEMELYLISTA[0].nev}</td>
                                <td>${SZEMELYLISTA[0].tel}</td>
                                <td>${SZEMELYLISTA[0].kor}</td>
                                <td>${SZEMELYLISTA[0].barat}</td>
                            </tr>
                            <tr>
                                <td>${SZEMELYLISTA[1].nev}</td>
                                <td>${SZEMELYLISTA[1].tel}</td>
                                <td>${SZEMELYLISTA[1].kor}</td>
                                <td>${SZEMELYLISTA[1].barat}</td>
                            </tr>
                        </table>

`