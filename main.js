let myFormularioCampus = document.querySelector(`#myFormularioCampus`);
let myFormularioPersonas = document.querySelector(`#myFormularioPersonas`);
let campus = {};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombreSede}`] = {Camper: [], trainers: []};
    listaSedes();
    myFormularioCampus.reset();
})

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']")
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)){
        opciones.insertAdjacentHTML("beforeend", `
        <option value="${val}">${val}<option/>
        `);       
    };
}

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

