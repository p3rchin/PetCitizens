var dat = []
var aa = localStorage.getItem('data');
dat = JSON.parse(aa);


printTable();

function printTable(){

 let tablaProducto = document.getElementById('table');
 let cuerpoTabla = document.createElement('tbody');

 for(let i  = 0; i<dat.length; i++){
   dat [i] ["race"]  =  'Sin asignar' ;
   dat [i] ["owner"]  =  'Sin asignar';
   dat [i] ["address"]  = 'Sin asignar';
   dat [i] ["photo"]  = 'Sin asignar';
 };

 for (var i = 0; i < dat.length; i++) {

  let fila = document.createElement('tr');

  let td = document.createElement('td');
  td.innerText = dat[i].microchip;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].species;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].sex;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].size;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].potentDangerous;
  fila.appendChild(td);
  td = document.createElement('td');
  td.innerText = dat[i].neighborhood;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].race;
  fila.appendChild(td);


  td = document.createElement('td');
  td.innerText = dat[i].owner;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].address;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].photo;
  fila.appendChild(td);



  cuerpoTabla.appendChild(fila);
}

 tablaProducto.appendChild(cuerpoTabla);
}


function addPet(){

 var imagen = document.getElementById("file").files[0];
 var reader = new FileReader();
 if (file) {
  reader.readAsDataURL(imagen); 
}else{
}
var microchip = document.getElementById("micro").value;
var species = document.getElementById("Species").value;
var sex = document.getElementById("sex").value;
var size = document.getElementById("size").value;
var potentDangerous = document.getElementById("danger").value;
var neighborhood = document.getElementById("localidad").value;
var race = document.getElementById("raza").value;
var owner = document.getElementById("own").value;
var address = document.getElementById("direccion").value;

if(microchip != "" && species !="0"  && sex !="0" && size != "0" 
        && potentDangerous !="0" && neighborhood !="" && race != "" 
        && owner != "" && address != ""){

          for (var i = 0; i < dat.length; i++) {
            if(dat[i]["microchip"] == microchip){
alert("Ya una mascota posee este microchip. Intente con uno nuevo");
break;
            }else{
              dat.unshift({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, "potentDangerous" : potentDangerous, "neighborhood" : neighborhood, "race" : race, "owner" : owner, "address" : address, "photo" : imagen});
              alert("Datos de la nueva mascota"+"\nMicrochip: " + microchip+ "\nEspecie: " + species+ "\nSexo: " + sex + "\nTamaño: " + size + "\nPotencial peligroso: " + potentDangerous+ "\nLocalidad: " + neighborhood+ "\nRaza: " + race+ "\nDueño: " + owner + "\nDirección: " + address+ "\nFoto: "+  imagen);
              console.log(dat[0]);
            
              let tablaProducto = document.getElementById('table');
              let cuerpoTabla = document.createElement('tbody');
              let fila = document.createElement('tr');
            
              let td = document.createElement('td');
              td.innerText = microchip;
              fila.appendChild(td);
            
              td = document.createElement('td');
              td.innerText = species;
              fila.appendChild(td);
            
              td = document.createElement('td');
              td.innerText = sex;
              fila.appendChild(td);
            
              td = document.createElement('td');
              td.innerText = size;
              fila.appendChild(td);
            
              td = document.createElement('td');
              td.innerText = potentDangerous;
              fila.appendChild(td);
            
              td = document.createElement('td');
              td.innerText = neighborhood;
              fila.appendChild(td);
            
              td = document.createElement('td');
              td.innerText = race;
              fila.appendChild(td);
            
            
              td = document.createElement('td');
              td.innerText = owner;
              fila.appendChild(td);
            
              td = document.createElement('td');
              td.innerText = address;
              fila.appendChild(td);
            
              td = document.createElement('td');
              td.innerText = imagen;
              fila.appendChild(td);
            
            
            
              cuerpoTabla.appendChild(fila);
            
              tablaProducto.appendChild(cuerpoTabla);         
              break;   
            }
          }

 

        } else{
          alert("No puede dejar ningún espacio por llenar en el formulario");
      }
    }

function modifyPet(){


  var imagen = document.getElementById("file1").files[0];
  var reader = new FileReader();
  if (file1) {
   reader.readAsDataURL(imagen); 
 }else{
 }
  var microchip1 = document.getElementById("micro1").value;
  var race1 =  document.getElementById("raza1").value;
  var owner1 =  document.getElementById("own1").value;
  var address1 =  document.getElementById("direccion1").value;
 
  if(microchip1 != "" && race1 != "" && owner1 != "" && address1 != ""){


  for (var i = 0; i < dat.length; i++) {
   if(dat[i]["microchip"] == microchip1){
     dat[i] = {...dat[i],race : race1};
     dat[i] = {...dat[i],owner : owner1};
     dat[i] = {...dat[i],address : address1};
     dat[i] = {...dat[i],photo : imagen};
     console.log(dat[i]);


var table = document.querySelector('#table');
table.innerHTML = '';

     let tablaProducto = document.getElementById('table');
 let cuerpoTabla = document.createElement('tbody');
 
  for (var i = 0; i < dat.length; i++) {

  let fila = document.createElement('tr');

  let td = document.createElement('td');
  td.innerText = dat[i].microchip;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].species;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].sex;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].size;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].potentDangerous;
  fila.appendChild(td);
  td = document.createElement('td');
  td.innerText = dat[i].neighborhood;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].race;
  fila.appendChild(td);


  td = document.createElement('td');
  td.innerText = dat[i].owner;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].address;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = dat[i].photo;
  fila.appendChild(td);



  cuerpoTabla.appendChild(fila);
}

 tablaProducto.appendChild(cuerpoTabla);
     break; 
   }
 }
 alert("Actualizacion de mascota para: "+"\nMicrochip: " + microchip1+ "\nRaza: " + race1+ "\nDueño: " + owner1 + "\nDirección: " + address1 + "\nFoto: "+  imagen);
}else{
  alert("No puede dejar ningún espacio por llenar en el formulario");
}
}