/*
Funcionalidades:
    Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y 
    lo agregarán a una lista visible al hacer clic en "Adicionar".

    Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

    Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

    Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un 
    nombre de la lista y se mostrará en la página.
*/

//Declaración de variables
let amigos = [];   //declara el array inicializado en vacio
 

//Función para agregar nombres al array.
function agregarAmigo(){
    //llama al ID desde el html
    const inputAmigo = document.getElementById('amigo'); 
    //trim elimina espacios innecesarios
    const nombreAmigo = inputAmigo.value.trim(); 
        

    //solicita ingresar nombre válido 
    if(nombreAmigo === ""){ 
        alert("Por favor, inserte un nombre.");
        return;
    }

    //revisa que no esté duplicado
    if(amigos.includes(nombreAmigo)){
        alert("Se repite el nombre, ingresa uno diferente");
        return;
        }
    
    //agrega nombre a la lista
    amigos.push(nombreAmigo);

    //limpia el campo de entrada
    limpiarCampo();
   
    //actualizar la lista en el html
    actualizarLista();
}

/*Función para actualizar nombres en la pantalla
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
*/
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    //Borra el contenido de la lista
    listaAmigos.innerHTML = ""; 
    
    //recorre el array y crea elementos de lista (<li>) para cada título
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        //añade elementos a la lista
        listaAmigos.appendChild(li);
    }
}


/*
Función para sortear nombres del array
Seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
*/ 
function sortearAmigo(){
//Comprueba si el array está vació
    if(amigos.length === 0){
        alert("No hay amigos ingresados en la lista");
        return;
        }

        //Genera un índice aleatorio usando Math.random() y Math.floor()
        const amigoAleatorio = Math.floor(Math.random() * amigos.length);
        //obtiene el nombre sorteado desde el índice
        const amigoSorteado = amigos[amigoAleatorio];
        //Muestra el resultado
        const elementoHtml = document.getElementById('resultado');
        elementoHtml.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
}  



//Función limpiar campos
function limpiarCampo(){
    document.querySelector('#amigo').value = "";
}