var allData;
// Loading a CSV using D3
d3.dsv( ";", "../data/pets-citizens.csv" )
  .then( function( data ) {
    allData = data;
    printTable(); 
    printData();  
  } )
  .catch( function( error ) {
    // handle error   
  } );
function printTable(){

   let tablaProducto = document.getElementById('table');
        let cuerpoTabla = document.createElement('tbody');

        allData.forEach(p => {
     
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


            cuerpoTabla.appendChild(fila);
        });

        tablaProducto.appendChild(cuerpoTabla);
  }


