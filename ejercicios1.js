// Hacer algoritmo que reciba en un objeto la cant de hombres y mujeres en una clase
// Ejermplo {hombres: 5, mujeres: 3}
// Con esta info que agregue al mismo la clave total, con el total de estudiantes. y los
// porcentajes totales de h y m cada una en su clave correspondiente.
function cursoTotalyPorcentaje(objeto1) {
    objeto1.totalEst =  (objeto1.mujeres)+(objeto1.hombres);
    objeto1.porcentajeH = Math.round((objeto1.hombres/objeto1.totalEst)*100);
    objeto1.porcentajeM = Math.round((objeto1.mujeres/objeto1.totalEst)*100);
    var max = Math.max(objeto1.porcentajeH, objeto1.porcentajeM);
    var min = Math.min(objeto1.porcentajeH, objeto1.porcentajeM);
    objeto1["diferencia entre M y H"] = Math.ceil(((max-min)/min)*100);
    return objeto1;
}
var claseFisica = {hombres:25, mujeres:10,}
var claseQuimica =  {
    hombres: 234,
    mujeres: 567,
  };
var claseInformatia = {
    hombres: 789,
    mujeres: 100,
  };
var claseFilosofia =  {
    hombres: 123,
    mujeres: 456,
  };
console.log(cursoTotalyPorcentaje(claseQuimica));

// Hacer una funcion que reciba un objeto el cual contiene empleados y su sueldo bruto
// con esto calculo un aumento del mismo en un 30% y retorne el mismo objeto con los nuevos valores
// Ejempplo de objeto: {Juan: 623200, Maria: 738100, Analia: 920320, Julio: 489500}


// Hacer una funcion que reciba un objeto con nombres y notas de una materia
// a partir de esto,  calcula el promedio y arroja un nuevo objeto que nos diga quienes han
// aprobado y quienes no
// Ejemplo {mia:[9, 9, 10, 7], pepe:[2, 5, 6, 3]} ->  {mia: "aprobada", pepe:"reprobado"}


// Hacer una funcion que reciba un numero y retorne un arreglo con todos los divisores del mismo
// Ejemplo: 8 --> [1, 2, 4, 8]
