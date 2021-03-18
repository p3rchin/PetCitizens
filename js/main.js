
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

  dat.push({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, "potentDangerous" : potentDangerous, "neighborhood" : neighborhood, "race" : race, "owner" : owner, "address" : address, "photo" : imagen});
  console.log(dat[dat.length - 1]);
}