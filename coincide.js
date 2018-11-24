var nombres = ["Africa", "Maria", "Tere", "Paris","Kenia", "India"]
var paises = ["Canada", "Colombia", "Africa", "India", "España"]

function coincide (nombre,pais){
    if ( nombre == pais){
    console.log (`${nombre} son iguales`);
    }

}

for (let index = 0; index < nombres.length; index++) {
    const nombre = nombres[index];

    for (let ind = 0; ind< paises.length; ind++) {
        const pais = paises[ind];

        coincide(nombre, pais)
        
    }
    
}





 


