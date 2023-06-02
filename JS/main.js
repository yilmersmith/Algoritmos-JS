function saludo(){
    alert("Bienvenido Usuario");
    alert("A continuación encontrarás unos botones que ejecutan algoritmos realizados con JS puro.");
}

function suma(){
    let A=0;
    let B=0;
    let Suma = 0;

    A = parseInt(prompt(" POR FAVOR INGRESE EL PRIMER VALOR A SUMAR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A SUMAR"));

    Suma = A + B;
    alert("EL RESULTADO DE LA SUMA ENTRE LOS DOS VALORES ES: " +Suma);

}
function operaciones(){
    let A=0;
    let B=0;
    let Resta = 0;
    let Division= 0;
    let multiplicacion =0;

    A = parseInt(prompt(" POR FAVOR INGRESE EL PRIMER VALOR A RESTAR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A RESTAR"));
    Resta = A - B;
    alert("EL RESULTADO DE LA RESTA ENTRE LOS DOS VALORES ES: " +Resta);

    A = parseInt(prompt(" POR FAVOR INGRESE EL PRIMER VALOR A DIVIDR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A DIVIDR"));
    Division = A / B;
    alert("EL RESULTADO DE LA DIVISION ENTRE LOS DOS VALORES ES: " +Division);

    A = parseInt(prompt(" POR FAVOR INGRESE EL PRIMER VALOR A MULTIPLICAR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A MULTIPLICAR"));
    multiplicacion = A * B;
    alert("EL RESULTADO DE LA MULTIPLICACION ENTRE LOS DOS VALORES ES: " +multiplicacion);
}

function Cuadrado(){
    let A=0;
    let Cuadrado = 0;

    A = parseInt(prompt("POR FAVOR INGRESE EL VALOR "));

    Cuadrado = A * A;
    alert("EL AREA DEL TRIANGULO ES : " +Cuadrado);
}

function Area(){
    let B=0;
    let A=0;
    let Area = 0;

    A = parseInt(prompt(" POR FAVOR INGRESE LA BASE DEL TRIANGULO"));
    B = parseInt(prompt("POR FAVOR INGRESE LA ALTURA DEL TRIANGULO"));

    Area = (A * B)/2;
    alert("EL AREA DEL TRIANGULO ES : " +Area);
}
function Inversion(){
    let cantidadDinero=0;
    let años=0;
    let meses=0;
    let total=0;
    let total2=0;

    cantidadDinero = parseInt(prompt(" POR FAVOR INGRESE LA CANTIDAD DE DINERO"));
    años = parseInt(prompt("POR FAVOR INGRESE LOS  AÑOS"));
    meses=años*12;
    total = cantidadDinero * 0.017 ;
    total2=total*meses;
    alert("EL TOTAL GANADO EN : " +años+" ES DE : " + total2);
}

function Promedio(){
    let Nalumno;
    let Nmateria;
    let N1 =0;
    let N2 =0;
    let N3 =0;
    let N4 =0;
    let N5 =0;
    let N6 =0;
    let N7 =0;
    let Promedio;
    let Estado;

    
    Nalumno =prompt(" POR FAVOR INGRESE SU NOMBRE");
    Nmateria =prompt(" POR FAVOR INGRESE LA MATERIA"); 
    N1 = parseInt(prompt(" POR FAVOR INGRESE LA NOTA 1"));
    N2 = parseInt(prompt(" POR FAVOR INGRESE LA NOTA 2"));
    N3 = parseInt(prompt(" POR FAVOR INGRESE LA NOTA 3"));
    N4 = parseInt(prompt(" POR FAVOR INGRESE LA NOTA 4"));
    N5 = parseInt(prompt(" POR FAVOR INGRESE LA NOTA 5"));
    N6 = parseInt(prompt(" POR FAVOR INGRESE LA NOTA 6"));
    N7 = parseInt(prompt(" POR FAVOR INGRESE LA NOTA 7"));

    Promedio = (N1+N2+N3+N4+N5+N6+N7)/7;

    if (Promedio >= 6.2) {
        
       Estado = "APROBO";
    
    }
    
    else {
        Estado = "REPROBO";
    }

    alert("EL ESTUDIANTE:  " +Nalumno+  "  "+Estado+ " EN LA MATERIA " +Nmateria+ " CON UN PROMEDIO DE: " +Promedio);

}
function Mayor(){
    let N1;
    let N2;

    N1 = parseInt (prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    N2 = parseInt (prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    
    
    if(N1==N2){
        alert ("EL VALOR ES IGUAL");
    }

    if (N1 > N2){

        alert ("EL MAYOR ES : " +N1);

    }
    else{
       alert ("EL MAYOR ES : " +N2);
    }
    
}

function Menor(){
    let N1;
    let N2;
    let N3;

    N1 = parseInt (prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    N2 = parseInt (prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    N3 = parseInt (prompt("POR FAVOR INGRESE EL TERCER VALOR"));
    
    if((N1==N2)&&(N1==N3)){
        alert ("LOS VALORES SON IGUALES " );
    }
    else{
        if ((N1 < N2)&&(N1 < N3)){
            alert ("EL MENOR ES : " +N1)
        }
            else{
                if ((N2<N1)&&(N2<N3)){
                    alert ("EL MENOR ES : " +N2);
                }
                else{
                    alert ("EL MENOR ES : " +N3);
                }
        
            }
    }
   
}

function Kilos() {
    let KILOS=0;
    let TotalP=0;
    let KilosDE=0;
    let Peso=0;
    
    KILOS =parseInt(prompt("INGRESE CANTIDAD DE MATERIAL "));
    if( KILOS  <=2){
        Peso=KILOS*4500;
        alert("El precio a pagar por "+KILOS+" Kilos de material es: "+Peso);
    }
    else{
        if(KILOS  <=5){
            Peso=KILOS*4500;
            KilosDE=Peso*0.1;
            TotalP=Peso - KilosDE;
            alert("El precio a pagar por "+KILOS+" Kilos de material "+"con el 10% de descuento es: "+TotalP);
        }
        else{
            if(KILOS  <=8 ){
                Peso=KILOS*4500;
                KilosDE=Peso*0.15;
                TotalP=Peso - KilosDE;
                alert("El precio a pagar por "+KILOS+" Kilos de material "+"con el 15% de descuento es: "+TotalP);
            }
            else{
                if(KILOS >=9){
                    Peso=KILOS*4500;
                    KilosDE=Peso*0.2;
                    TotalP=Peso - KilosDE;
                    alert("El precio a pagar por "+KILOS+" Kilos de material "+"con el 20% de descuento es: "+TotalP);
                }
            }
        }

    }
}




