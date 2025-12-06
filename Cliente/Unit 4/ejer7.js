/*Crea un objeto llamado tvSamsung con las propiedades nombre (“TV Samsung 42”), 
categoria (“Televisores”), unidades (4), precio (345.95) 
y con un método llamado importe que devuelve el valor total de las unidades 
(nº de unidades * precio)

*/
let tvSamsung = {
    nombre: "Tv Samsung 42'",
    categoria:"Televisores",
    unidades: 4,
    precio: 400.00,
    importe: function(){
        return this.unidades*this.precio
    }
}
console.log(tvSamsung);
console.log(tvSamsung.importe())

