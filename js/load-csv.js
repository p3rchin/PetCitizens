var allData;
// Loading a CSV using D3
d3.dsv( ";", "../data/pets-citizens.csv" )
  .then( function( data ) {
    allData = data;
    printData();   
  } )
  .catch( function( error ) {
    // handle error   
  } );
function printData(){
	console.log("Hola");
	table = document.getElementById("table");
for(var i = 1; i < table.rows.length; i++)
  {
    for(var j = 0; j < table.rows[i].cells.length; j++)
    { 
      table.rows[i].cells[0].innerHTML = allData[i-1]["Microchip"];
    }

}
}