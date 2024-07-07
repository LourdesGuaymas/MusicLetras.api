const contenido = document.getElementById('contenido');

const form = document.getElementById('form_Buscar').addEventListener('submit', function(e){
 
    //Asignamos constantes a los valores que queremos "traer"
    const nombre = document.getElementById('#artista').value;
    const edad = document.getElementById('#cancion').value;
  
    console.log(artista, cancion);
    //Prevenimos el evento de carga
    e.preventDefault();
  
    const documento = document.querySelector('.contenido');
    //Creamos constante para "Resumir" generar parrafos
      const p = document.createElement('resultado');
    //Le agregamos un valor al contenido que queremos generar (en este caso un parrafo)
    p.innerHTML = artista;
   


   async function consultarAPI() {
    try{
      const url = await fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`);
  
      const respuesta = await url.json();
  console.log(respuesta)
      return {
        respuesta
      
      }
    }
    
   
    catch(error){
        console.log(error)
    }

   
 }

consultarAPI();
});