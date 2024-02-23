
// Összes név és telefonszám
export function listakiir(LISTA){
    for (let index = 0; index < LISTA.length; index++) {
        console.log(`${LISTA[index].nev} tel: ${LISTA[index].tel}`)
        
    }
}

export function listaosszeallit(LISTA){
    let txt="<ul>"
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<li>${LISTA[index].nev} tel: ${LISTA[index].tel}</li>`
    }
    txt +="</ul>"
    console.log(txt)
    return txt
}

export function listaszemelyekdiv(LISTA){
    let txt = ""
    for (let index = 0; index < LISTA.length; index++) {
        txt += "<div>"
        
    }
}
