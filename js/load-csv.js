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
	console.log(allData);
}
}