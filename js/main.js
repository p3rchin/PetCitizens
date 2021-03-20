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

 dat.forEach(p => {

  let fila = document.createElement('tr');

  let td = document.createElement('td');
  td.innerText = p.microchip;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = p.species;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = p.sex;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = p.size;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = p.potentDangerous;
  fila.appendChild(td);
  td = document.createElement('td');
  td.innerText = p.neighborhood;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = p.race;
  fila.appendChild(td);


  td = document.createElement('td');
  td.innerText = p.owner;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = p.address;
  fila.appendChild(td);

  td = document.createElement('td');
  td.innerText = p.photo;
  fila.appendChild(td);



  cuerpoTabla.appendChild(fila);
});

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

  dat.unshift({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, "potentDangerous" : potentDangerous, "neighborhood" : neighborhood, "race" : race, "owner" : owner, "address" : address, "photo" : imagen});
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
 

  for (var i = 0; i < dat.length; i++) {
   if(dat[i]["microchip"] == microchip1){
     dat[i] = {...dat[i],race : race1};
     dat[i] = {...dat[i],owner : owner1};
     dat[i] = {...dat[i],address : address1};
     dat[i] = {...dat[i],photo : imagen};
     console.log(dat[i]);
     break; 
   }
 }
}