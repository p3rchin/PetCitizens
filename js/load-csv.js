var allData;
// Loading a CSV using D3
d3.dsv( ";", "../data/pets-citizens.csv" )
.then( function( data ) {
  allData = data;
  localStorage.setItem('data', JSON.stringify(allData));

} )
.catch( function( error ) {
    // handle error   
  } );






