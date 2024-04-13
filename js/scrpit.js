//traemos los botones del carrito
const botonCarrito = document.querySelector('#boton-carrito');
const cerrarCarritoBtn = document.querySelector('#cerrar-carrito');
const carrito = document.querySelector('#carrito');
const botonesAgregarCarrito = document.querySelectorAll('.btn-agregar');
//Preparamos la lista del carrito y las listas de categorias 
let listacarrito = [];


/*
const cortes = [
    {
        nombre: "Asado",
        precio: 2000,
        categoria: 1,
        imagen:"./imagenes/asado.jpg"
    },
    {
        nombre: "Vacío",
        precio: 1800,
        categoria: 1,
        imagen:"./imagenes/vacio.jpg"
    },
    {
        nombre: "Matambre",
        precio: 1900,
        categoria: 1,
        imagen:"./imagenes/matambre.jpg"
    },
    {
        nombre: "Bondiola",
        precio: 2100,
        categoria: 1,
        imagen:"./imagenes/bondiola.jpg"
    },
];
const achuras = [
    {
        nombre: "Molleja",
        precio: 8000,
        categoria: 2,
        imagen:"./imagenes/molleja.jpg"
    },
    {
        nombre: "Riñon",
        precio: 1800,
        categoria: 2,
        imagen:"./imagenes/riñon.jpg"
    },
    {
        nombre: "Chinchulin",
        precio: 1900,
        categoria: 2,
        imagen:"./imagenes/chinchulin.jpg"
    },
    {
        nombre: "Chorizo",
        precio: 2100,
        categoria: 2,
        imagen:"./imagenes/chorizo.jpg"
    },
];
const acomp = [
    {
        nombre: "Provoleta",
        precio: 8000,
        categoria: 3,
        imagen:"./imagenes/provoleta.jpg"
    },
    {
        nombre: "Queso",
        precio: 1800,
        categoria: 3,
        imagen:"./imagenes/queso.jpg"
    },
    {
        nombre: "Salame",
        precio: 1900,
        categoria: 3,
        imagen:"./imagenes/salame.jpg"
    },
    {
        nombre: "Papas fritas",
        precio: 2100,
        categoria: 3,
        imagen:"./imagenes/papas fritas.jpg"
    },
];
*/
let listaArrays = [];

async function cargarDatos() {
    try {
      const response = await fetch('js/datos.json');
      const data = await response.json();
      listaArrays = Object.values(data);
      let contador = 0;
      //Traemos la el contenedor donde se cargaran dinamicamente los productos
      const contenido = document.querySelector('#contenido');
      //Recorremos el Array que contiene las categorias
      listaArrays.forEach((array) => {
          contador++;
          //creamos el contenedor principal y le asignamos el ID y sus clases 
          const contenedorPrincipal = document.createElement("div");
          contenedorPrincipal.id = "contenedor-principal-"+contador;
          contenedorPrincipal.classList.add("row", "row-cols-1", "row-cols-md-3", "row-cols-lg-4", "m-3", "g-4");
          contenido.appendChild(contenedorPrincipal);
          //Recorremos el array de categorias para obtener los objetos
          array.forEach((elemento) => {
              //creamos cada uno de los contenedores de los productos y sus partes
              
              //agregando los datos que necesitan de forma dinamica
              const colDiv = document.createElement("div");
              colDiv.classList.add("col");
              const cardDiv = document.createElement("div");
              cardDiv.classList.add("card", "h-100", "card-edicion");
      
              const img = document.createElement("img");
              img.src = elemento.imagen;
              img.classList.add("card-img-top");
              img.alt = "Imagen de " + elemento.nombre;
      
              const cardBodyDiv = document.createElement("div");
              cardBodyDiv.classList.add("card-body", "carta");
      
              const titulo = document.createElement("h5");
              titulo.classList.add("card-title", "corte");
              titulo.textContent = elemento.nombre.toUpperCase();
      
              const precioPorKg = document.createElement("p");
              precioPorKg.textContent = (elemento.categoria === 3) ? "Precio por Unidad:" : "PRECIO POR KG:";
              
              const precio = document.createElement("p");
              precio.classList.add("precio");
              precio.textContent = elemento.precio;
      
              const cantidadLabel = document.createElement("p");
              cantidadLabel.textContent = (elemento.categoria === 3) ? "Cantidad por Unidad:" : "Cantidad en kg:";
              
              const cantidadContainerDiv = document.createElement("div");
              cantidadContainerDiv.classList.add("cantidad-container");
      
              const decrementBtn = document.createElement("button");
              decrementBtn.classList.add("btn", "btn-sm", "btn-secondary", "btn-decrement");
              decrementBtn.textContent = "-";
      
              const cantidadInput = document.createElement("input");
              cantidadInput.type = "number";
              cantidadInput.classList.add("custom-input", "cantidad");
              cantidadInput.value = "1";
              cantidadInput.min = "1";
      
              const incrementBtn = document.createElement("button");
              incrementBtn.classList.add("btn", "btn-sm", "btn-secondary", "btn-increment");
              incrementBtn.textContent = "+";
      
              const agregarBtn = document.createElement("button");
              agregarBtn.type = "button";
              agregarBtn.classList.add("btn", "btn-primary", "btn-agregar");
              agregarBtn.textContent = "Agregar al carrito";
              //se agrega el evento a la hora de hacer click en el boton agregar al carrito
              agregarBtn.addEventListener("click", function() {
                  const elementoVendido = elemento.nombre;
                  const precioElemento = parseFloat(elemento.precio);
                  const cantidadVendida = parseInt(cantidadInput.value);
                  const categoriaAGuardar = parseInt(elemento.categoria);
                  const imgenAGuardar = elemento.imagen;
                  const indice = listacarrito.findIndex(item => item.nombre === elementoVendido);
                  //guardamos todos los datos necesarios para mostrar
                  if (indice !== -1) {
                      listacarrito[indice].imagen = imgenAGuardar;
                      listacarrito[indice].cantidad += cantidadVendida;
                      listacarrito[indice].precioPorKg = precioElemento;
                      listacarrito[indice].precioTotal += precioElemento * cantidadVendida;
                      listacarrito[indice].categoria = categoriaAGuardar;
                  } else {
                      const item = {
                          nombre: elementoVendido,
                          cantidad: cantidadVendida,
                          precioPorKg: precioElemento,
                          precioTotal: precioElemento * cantidadVendida,
                          categoria: categoriaAGuardar,
                          imagen: imgenAGuardar,
                      };
                      listacarrito.push(item);
                  }
                  //seteamos la lista para que se vaya guardando en el Local Storage
                  localStorage.setItem("lista", JSON.stringify(listacarrito));
                  mostrarListaCarrito();
              });
      
              cantidadContainerDiv.append(decrementBtn, cantidadInput, incrementBtn);
              cardBodyDiv.append(titulo, precioPorKg, precio, cantidadLabel, cantidadContainerDiv, agregarBtn);
              cardDiv.append(img, cardBodyDiv);
              colDiv.appendChild(cardDiv);
              contenedorPrincipal.appendChild(colDiv);
          });
      });
    } catch (error) {
        const cardBodyDivError = document.createElement("div");
        cardBodyDivError.textContent = 'Error al cargar los productos';
        cardBodyDivError.style.color = 'white';
        cardBodyDivError.style.fontWeight = 'bold';
        const contenido = document.querySelector('#contenido');
        contenido.appendChild(cardBodyDivError);
    }
  }

cargarDatos();


//funcion para mostrar el carrito 
botonCarrito.addEventListener('click', function() {
    carrito.classList.remove('carrito-oculto');
    //si la lista  del LS existe se carga
    const carritoGuardado = localStorage.getItem("lista");
if (carritoGuardado) {
    listacarrito = JSON.parse(carritoGuardado);
    console.log(carritoGuardado);
    mostrarListaCarrito();
}
    if(listacarrito.length === 0 ){
        const lista = document.querySelector('#lista');
        lista.innerHTML= '';
        const li = document.createElement("li");
        li.innerHTML = 'EL CARRITO SE ENCUENTRA VACIO'
        lista.append(li);
    }
});


//funcion para ocultar el carrito
cerrarCarritoBtn.addEventListener('click', function() {
    carrito.classList.add('carrito-oculto');
});



//funcion que carga la lista en el Carrito
function mostrarListaCarrito() {
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    let total = 0; 
    let mensaje = '';
    //recorremos la lista para ir creando los elementos necesarios que aparecen en el carrito
    listacarrito.forEach(item => {
        const li = document.createElement("li");
        const imagen = document.createElement("img");
        const btnBorrar = document.createElement("button"); 
        imagen.src = item.imagen;
        imagen.classList.add('imagen-carrito');
        li.appendChild(imagen);
        mensaje = (item.categoria === 3) ? "precio por unidad: $" : "precio por KG: $";
        
        li.innerHTML += item.nombre + " x" + item.cantidad + mensaje + item.precioPorKg.toFixed(2) + " SUBTOTAL $" + item.precioTotal.toFixed(2);

        btnBorrar.innerHTML = "<i class='bi bi-trash-fill'></i>";
        btnBorrar.classList.add('btn-borrar'); 
        btnBorrar.addEventListener('click', () => {
            eliminarDelCarrito(item);
            mostrarListaCarrito();
        });
        li.appendChild(btnBorrar);
        lista.append(li);
        total += item.precioTotal;
    });
    const totalMuestra = document.createElement("div");
    totalMuestra.classList.add('total-estilos');
    totalMuestra.textContent = "Total: $" + total.toFixed(2);
    lista.append(totalMuestra);
    
    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar Carrito";
    botonBorrar.classList.add('boton-borrarTodo-estilos');
    //se agrega el evento del boton borrar dentro del carrito
    botonBorrar.addEventListener('click', function() {

        lista.innerHTML = '';
        vaciarCarrito();
    });
    lista.append(botonBorrar);
}
// funcion que permite eliminar toda la lista del Local Storage
function vaciarCarrito() {
    listacarrito = []; 
    localStorage.removeItem("lista"); 
}
// funcion que elimina de un elemento de acuerdo a la cantidad
function eliminarDelCarrito(item) {
    const index = listacarrito.indexOf(item);
    if (index !== -1) {
        if (item.cantidad > 0) {
            item.cantidad--;
            item.precioTotal = item.cantidad * item.precioPorKg;
            if (item.cantidad === 0) {
                listacarrito.splice(index, 1);
                localStorage.setItem("lista", JSON.stringify(listacarrito));
            }
        } else {
            listacarrito.splice(index, 1);
            localStorage.setItem("lista", JSON.stringify(listacarrito));
        }
    }
}

//evento del boton '+' 
document.querySelectorAll('.btn-increment').forEach(btn => {
    btn.addEventListener('click', function() {
        const cantidadInput = this.parentElement.querySelector('.cantidad');
        cantidadInput.value = parseInt(cantidadInput.value) + 1;
    });
});
//evento del boton '-'
document.querySelectorAll('.btn-decrement').forEach(btn => {
    btn.addEventListener('click', function() {
        const cantidadInput = this.parentElement.querySelector('.cantidad');
        if (parseInt(cantidadInput.value) > 1) {
            cantidadInput.value = parseInt(cantidadInput.value) - 1;
        }
    });
});

// Obtener los botones del menú lateral
const btnTodos = document.querySelector("#btn-Todos");
const btnCorte = document.querySelector("#btn-Corte");
const btnAchura = document.querySelector("#btn-Achura");
const btnAcomp = document.querySelector("#btn-Acomp");

// Agregar evento de clic al botón "Todos los productos"
btnTodos.addEventListener("click", function(e) {
    e.preventDefault();
    mostrarTodosLosProductos();
});

// Agregar evento de clic al botón "Cortes"
btnCorte.addEventListener("click", function(e) {
    e.preventDefault();
   mostrarProductosPorCategoria(1);
});

// Agregar evento de clic al botón "Achuras"
btnAchura.addEventListener("click", function(e) {
    e.preventDefault();
    mostrarProductosPorCategoria(2);    
});

// Agregar evento de clic al botón "Acompañamientos"
btnAcomp.addEventListener("click", function(e) {
    e.preventDefault();
    mostrarProductosPorCategoria(3);   
});
// Función para mostrar todos los productos
function mostrarTodosLosProductos() {
   listaArrays.forEach(array => {
        array.forEach(elemento => {
                const contenedor = document.getElementById("contenedor-principal-" + elemento.categoria);
                contenedor.classList.remove('invisible');
             
        });
    });
}

// Función para mostrar productos por categoría
function mostrarProductosPorCategoria(categoria) {
    listaArrays.forEach(array => {
        array.forEach(elemento => {
            if (elemento.categoria === categoria) {
                const contenedor = document.getElementById("contenedor-principal-" + elemento.categoria);
                contenedor.classList.remove('invisible');
            } else {
                const contenedor = document.getElementById("contenedor-principal-" + elemento.categoria);
                contenedor.classList.add('invisible');
            }
        });
    });
}








