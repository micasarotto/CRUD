

//micaela sarotto florencia johsasnon y paula cunha
  const URL_ID = 'https://672ce96afd8979715640afd8.mockapi.io/users/'
  let dataId
  let datos = {
  name: document.g
  //lastname: d
  }

function buscar (id) {
    fetch( URL_ID + id)
    .then(response => 
        response.json())
    .then (data => 
         mostrarResult(data) 
    )
    };

    function mostrarTodos () {
        fetch(URL_ID)
        .then(response => 
            response.json())
        .then (fulldata => 
             mostrarResults(fulldata) 
        )
        };
    

 document.getElementById("btnGet1").addEventListener("click", function() {
    let id = document.getElementById("inputGet1Id").value
    if (id) {
    buscar(id)} 
    else {  
        document.getElementById("results").innerHTML= ''
        mostrarTodos()
    }


})

function mostrarResult(data) { 
    document.getElementById("results").innerHTML = ` 
                                       <p>ID: ${data.id}</p> 
                                       <p>Name: ${data.name}</p> 
                                       <p>Lastname: ${data.lastname}</p>`
   }; 


  function mostrarResults(fulldata){ 
    fulldata.forEach(id => {
    document.getElementById("results").innerHTML += ` 
                                       <p>ID: ${id.id}</p> 
                                       <p>Name: ${id.name}</p> 
                                       <p>Lastname: ${id.lastname}</p>`
   
   })};
    
 