/*Crea una clase Productos con las propiedades name, category, units y price 
y los métodos total que devuelve el importe del producto y getInfo que devolverá: 
‘Name (category): units uds x price € = total €’. Crea 3 productos diferentes.
Después crea una clase Televisores que hereda de Productos 
y que tiene una nueva propiedad llamada tamaño. 
El método getInfo mostrará el tamaño junto al nombre
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

