let formularioSede = document.querySelector(`#formularioSede`);
let myFormularioPersonas = document.querySelector(`#myFormularioPersonas`);
let campus = {};

formularioSede.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombreSede}`] = {Camper: [], trainers: []};
   /*  listaSedes(); */
    ciudades();
    formularioSede.reset();
    console.log(campus);
});

let ciudades = ()=>{
    let ubicacion = document.querySelector("[name='ciudad']")
    let data = 
}

/* let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']")
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)){
        opciones.insertAdjacentHTML("beforeend", `
        <option value="${id}">${val}<option/>
        `);       
    };
} */

myFormularioPersonas.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sedes = data.sede;
    delete data.sede;

    campus[`${sedes}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioPersonas.reset();
    
})

