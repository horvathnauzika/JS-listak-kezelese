
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
        txt += "<h3>${LISTA[index].nev}</h3>"
        txt += "<p>${LISTA[index].kor}</p>"
        txt += "<p>${LISTA[index].tel}</p>"
        txt += "<p>${LISTA[index].barat}</p>"
        txt += "</div>"
    }
    console.log(txt)
    return txt
}

export function listadivtablazat(LISTA){
    let txt = ""
    for (let index = 0; index < LISTA.length; index++) {
        txt += "<table>"

        txt += "<tr>"
        txt += "<th>${LISTA[index].nev}</th>"
        txt += "<th>${LISTA[index].kor}</th>"
        txt += "<th>${LISTA[index].tel}</th>"
        txt += "<th>${LISTA[index].barat}</th>"
        txt += "</tr>"

        txt +="<tr>"
        txt += "<td>${LISTA[index].nev}</td>"
        txt += "<td>${LISTA[index].kor}</td>"
        txt += "<td>${LISTA[index].tel}</td>"
        txt += "<td>${LISTA[index].barat}</td>"
        txt +="</tr>"

        txt += "</table>"
        
    }
    console.log(txt)
    return txt
}