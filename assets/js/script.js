function botonInfo(){
  var info = document.getElementById('nuevaInformacion');
  var enlaces = document.getElementsByTagName('a')
  var parrafos = document.getElementsByTagName('p');
  
  var contador = 0;
  for (var i = 0; i < enlaces.length; i++){
    if(enlaces[i].href == "http://laboratoria.la/"){
    contador++; //contador = contador + i
    }
  }
  info.innerHTML = 'El total de enlaces es: <span class="resultado">' + enlaces.length + '</span> <br> El total de párrafos es: ' + parrafos.length + '<br> Los enlaces que llevan a Laboratoria son: '+ contador;
}











































function cambiarTitulo(){
  var nuevoTitulo = document.getElementsByClassName('title');
  nuevoTitulo[0].innerHTML = 'Ola k ase';
  nuevoTitulo[1].innerHTML = 'Chai k no ase';
}




/*
'<img src="uhj" alt="feito">'

*/











