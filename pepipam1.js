function clase() {
    a = parseInt(document.getElementById("txt_precio222").value);
    c = parseInt(document.getElementById("pepe").value);
    i = c ;
    j = i *(0.3) ;
    
    document.getElementById("txt_cod_producto111").value = c;
    document.getElementById("txt_precio333").value = i;
    document.getElementById("txt_precio_total333").value = j;
    a1 = parseInt(document.getElementById("txt_precio444").value);
    c1 = parseInt(document.getElementById("pepe1").value);
    i1 = c1 ;
    j1 = i1 *(0.2);
    
    document.getElementById("txt_cod_producto222").value = c1;
    document.getElementById("txt_precio555").value = i1;
    document.getElementById("txt_precio_total555").value = j1;
    a2 = parseInt(document.getElementById("txt_precio4441").value);
    c2 = parseInt(document.getElementById("pepe2").value);
    i2 = c2 ;
    j2 = i2 * (0.1);
   
    document.getElementById("txt_cod_producto2221").value = c2;
    document.getElementById("txt_precio5551").value = i2;
    document.getElementById("txt_precio_total5551").value = j2;
    a3 = parseInt(document.getElementById("txt_precio44412").value);
    c3 = parseInt(document.getElementById("pepe3").value);
    i3 = c3 ;
    j3 = i3 * (0.5);
    
    document.getElementById("txt_cod_producto22212").value = c3;
    document.getElementById("txt_precio55512").value = i3;
    document.getElementById("txt_precio_total55512").value = j3;
    a4 = parseInt(document.getElementById("txt_precio44413").value);
    c4 = parseInt(document.getElementById("pepe4").value);
    i4 = c4 ;
    j4 = i4 * (0.3);
    
    document.getElementById("txt_cod_producto22213").value = c4;
    document.getElementById("txt_precio55513").value = i4;
    document.getElementById("txt_precio_total55513").value = j4;
    a5 = parseInt(document.getElementById("txt_precio444135").value);
    c5 = parseInt(document.getElementById("pepe5").value);
    i5 = c5 ;
    j5 = i5 * (0.4);
   
    document.getElementById("txt_cod_producto222135").value = c5;
    document.getElementById("txt_precio555135").value = i5;
    document.getElementById("txt_precio_total555135").value = j5;
    f = (j + j1 + j2 + j3 + j4 + j5);

    document.getElementById("txt_cant_producto666").value = f;
}
function greg() {
    
        document.write("Hola Estimado cliente, un placer tenerte una vez más."+"<br>"+"<br>");
        document.write("Tu compra total es de: " + "S/. " +f+"<br>"+"<br>");
        document.write("En los próximos minutos te estará listo su compra"+"<br>"+"<br>");
        document.write("Muchas gracias por tu compra "+"<br>"+"<br>");

    
}