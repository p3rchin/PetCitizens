
// Loading a CSV using D3
d3.dsv( ";", "../data/pets-citizens.csv" )
  .then( function( data ) {
    console.log( data.length );    
  } )
  .catch( function( error ) {
    // handle error   
  } );