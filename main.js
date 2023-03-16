let campus = {};
let formularioSede = document.querySelector(`#formularioSede`);
let nivelCamper = document.querySelector(`#nivelCamper`);
let infoTrainer = document.querySelector(`#infoTrainer`);

formularioSede.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    
    campus[`${data.ciudad}`] = {numero: data.numeroSede ,direccion: data.direccionSede, Teams: []}; 
    
    
    listaSedes();
    
    
    formularioSede.reset();
    
})

let listaSedes = ()=>{
    let sedeSeleccionada = document.querySelector("[name='ciudad']").value;
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    opciones.insertAdjacentHTML("beforeend", `<option value="${sedeSeleccionada}">${sedeSeleccionada}<option/>"`)
}
let listaTeams = ()=>{
    let teamSeleccionado = document.querySelector("[name='teamsTrainers']").value
    let temas = document.querySelector("[name='teams']")
    temas.innerHTML = null;
    temas.insertAdjacentHTML("beforeend", `<option value="${teamSeleccionado}">${teamSeleccionado}<option/>"`)

}

infoTrainer.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let teams = data.teams;
    delete data.sede;
    console.log(data); 
    listaTeams();
    console.log(campus[`${"Teams"}`]);
    console.log(campus["Teams"]);
/*     console.log(campus[`${teams}`]["Teams"]); */
    console.log(campus[`${teams}`]["Teams"].unshift(data));
 /*    campus[`${teams}`]["Teams"] = [];
    campus[`${teams}`]["Teams"].unshift(data); 
    */
    infoTrainer.reset();
    console.log(campus);
})






/* let formularioSede = document.querySelector(`#formularioSede`);
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
let listaSedes = (val, id)=>{
    let sedeSeleccionada = document.querySelector("[name='ciudad']").value;
    let opciones = document.querySelector(id);
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
}) */

