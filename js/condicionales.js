 
    var nombre = prompt("Hey ¿Cual es tu Nombre?");
    var edad = prompt ("Hey  ¿Cual es tu talla de calzado?");

switch (nombre) {
    case "Mario":
        document.write("> Hey Mario")
        break;
    case "Ronaldo":
        document.write("> Hey Ronaldo");
        break;
    default:
        document.write("> Hey "+nombre);
        break;
}
if (edad >= 26) {
    document.write(" Bienvenido a la tienda de tenis");
    
} else{
    document.write(" No puedes comprar aun en este sitio no tienes los requisitos suficientes");
};
