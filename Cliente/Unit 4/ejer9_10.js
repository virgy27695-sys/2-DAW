/*9. Crea una clase Productos con las propiedades name, category, units y price y los métodos total que devuelve el importe del producto
y getInfo que devolverá: ‘Name (category): units uds x price € = total €’. Crea 3 productos diferentes.
Después crea una clase Televisores que hereda de Productos y que tiene una nueva propiedad llamada tamaño.
El método getInfo mostrará el tamaño junto al nombre.
10. modifica las clases Productos y Televisores para que el método que muestra los datos del producto se llame de la manera más adecuada .
A continuación, crea 5 productos y guárdalos en un array. Crea las siguientes funciones (todas reciben ese array como parámetro):
prodsSortByName: devuelve un array con los productos ordenados alfabéticamente
prodsSortByPrice: devuelve un array con los productos ordenados por importe
prodsTotalPrice: devuelve el importe total del los productos del array, con 2 decimales
prodsWithLowUnits: además del array recibe como segundo parámetro un nº y devuelve un array con todos los productos de los que quedan menos de los unidades indicadas
prodsList: devuelve una cadena que dice ‘Listado de productos:’ y en cada línea un guión y la información de un producto del array

*/
class Product{
    constructor(name, category, units , price ){
        this.name= name;
        this.category= category;
        this.units= units;
        this.price= price;
    }

    getTotal(){
        return this.units*this.price;
    }

    toString(){
        return `${this.name} (${this.category}): ${this.units} uds x ${this.price} â‚¬ = ${this.getTotal()} â‚¬`;

    }

}

let listaProductos=[];
for (let i=5;i>=1;i--){
    listaProductos.push(new Product("Producto"+i,"ElectrodomÃ©sticos",i*20,100));
}
console.log(listaProductos);

class TV extends Product{
    constructor (name, category, units , price , size){
        super(name,category,units,price);
        this.size= size;
    }

    toString(){
        return `${this.name} (${this.size} pulgadas) (${this.category}): ${this.units} uds x ${this.price} â‚¬ = ${this.getTotal()} â‚¬`;
    }
}

let tvSamsung= new TV("eTV Samsung", "Televisores", 50, 500, 45);
listaProductos.push(tvSamsung);
console.log(listaProductos);

console.log("ORDENADOS  POR NOMBRE");
let productosOrdenadosNombre=prodsSortByName([...listaProductos]);
console.log(productosOrdenadosNombre);

console.log("ORDENADOS  POR PRECIO");
let productosOrdenadosPrecio=prodsSortByPrice([...listaProductos]);
console.log(productosOrdenadosPrecio);

console.log("PREVISIÃ“N DE INGRESOS");
let ingresos=prodsTotalPrice([...listaProductos]);
console.log(ingresos);

console.log("PRODCUTOS CON POCO STOCK");
let productosPocoStock=prodsWithLowUnits([...listaProductos],30);
console.log(productosPocoStock);


console.log("LISTADO DE PRODUCTOS INFO");
let infoListado=prodsList([...listaProductos]);
console.log(infoListado);

// devuelve un array con los productos ordenados alfabÃ©ticamente
function prodsSortByName(products){
    products.sort(function (a,b){
        return a.name>b.name
    })
    return products;
}

//devuelve un array con los productos ordenados por importe
function prodsSortByPrice(products){
     products.sort(function (a,b){
        return a.price>b.price
    })
    return products;

}
//devuelve el importe total del los productos del array, con 2 decimales
function prodsTotalPrice(products){
    let total=0;
    products.forEach(element => {
        total+=element.getTotal();
    });
    return total;

}
//ademÃ¡s del array recibe como segundo parÃ¡metro un nÂº y devuelve un array con todos los productos de los que quedan menos de los unidades indicadas
function prodsWithLowUnits(products,units){
    let productsWithLowUnits=[];
    products.forEach(producto=>{
        if(producto.units<units)
            productsWithLowUnits.push(producto);
    })
    return productsWithLowUnits;
}
//devuelve una cadena que dice â€˜Listado de productos:â€™ y en cada lÃ­nea un guiÃ³n y la informaciÃ³n de un producto del array
function prodsList(products){
    let cadena="";
    products.forEach(producto=>{
        cadena+=` - ${producto.toString()} \n`
    })
    return cadena;

}

