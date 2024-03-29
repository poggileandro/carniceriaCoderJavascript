/*
// Obtener los botones del menú lateral
let btnTodos = document.querySelector("#btn-Todos");
let btnCorte = document.querySelector("#btn-Corte");
let btnAchura = document.querySelector("#btn-Achura");
let btnAcomp = document.querySelector("#btn-Acomp");

// Agregar un evento de clic al botón de TODOS LOS PRODUCTOS
btnTodos.addEventListener("click", function(e) {
    e.preventDefault();
    listaArrays.forEach(array => {
        array.forEach(elemento => {
            const elementoHTML = document.getElementById(elemento.nombre);
            if (elementoHTML) {
                elementoHTML.classList.remove('invisible');
            }
        });
    });
});

// Agregar un evento de clic al botón de Cortes
btnCorte.addEventListener("click", function(e) {
    e.preventDefault();
    listaArrays.forEach(array => {
        array.forEach(elemento => {
            const elementoHTML = document.getElementById(elemento.nombre);
            if (elementoHTML) {
                if (elemento.categoria === 1) {
                    elementoHTML.classList.remove('invisible');
                } else {
                    elementoHTML.classList.add('invisible');
                }
            }
        });
    });
});

// Agregar un evento de clic al botón de Achuras
btnAchura.addEventListener("click", function(e) {
    e.preventDefault();
    listaArrays.forEach(array => {
        array.forEach(elemento => {
            const elementoHTML = document.getElementById(elemento.nombre);
            if (elementoHTML) {
                if (elemento.categoria === 2) {
                    elementoHTML.classList.remove('invisible');
                } else {
                    elementoHTML.classList.add('invisible');
                }
            }
        });
    });
});

// Agregar un evento de clic al botón de Acompañamiento
btnAcomp.addEventListener("click", function(e) {
    e.preventDefault();
    listaArrays.forEach(array => {
        array.forEach(elemento => {
            const elementoHTML = document.getElementById(elemento.nombre);
            if (elementoHTML) {
                if (elemento.categoria === 3) {
                    elementoHTML.classList.remove('invisible');
                } else {
                    elementoHTML.classList.add('invisible');
                }
            }
        });
    });
});

*/