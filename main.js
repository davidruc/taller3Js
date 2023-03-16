let formularioSede = document.querySelector(`#formularioSede`);
let myFormularioPersonas = document.querySelector(`#myFormularioPersonas`);
let infoCampers = document.querySelector(`#infoCampers`);
const campus = {};

formularioSede.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.ciudad}`] = {numero: data.numeroSede ,direccion: data.direccionSede ,Camper: [], trainers: []};
    listaSedes();
    formularioSede.reset();
});

let listaSedes = ()=>{
    let sedeSeleccionada = document.querySelector("[name='ciudad']").value;
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    opciones.insertAdjacentHTML("beforeend", `<option value="${sedeSeleccionada}">${sedeSeleccionada}<option/>"`)    

}


myFormularioPersonas.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioPersonas.reset();
    
})

/* infoCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let team = data.team;
    campus[`${team}`]["Camper"].unshift(data);
    infoCampers.reset();
})
 */
