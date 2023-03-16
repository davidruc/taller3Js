let campus = {
    sede: [/* {
        numero: "",
        direccion: "",
        teams: [{
            nombreTrainer: [],
            alumno: [],
        }]
    } */]
};

let formularioSede = document.querySelector(`#formularioSede`);
let nivelCamper = document.querySelector(`#nivelCamper`);
let infoTrainer = document.querySelector(`#infoTrainer`);
let trainer = document.querySelector(`#Trainer`);

formularioSede.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    data.teams = [];
    campus.sede.unshift(data);
    listaSedes("[name='ciudad']","[name='sede']");
    listaSedes("[name='ciudad']","[name='sedeT']");
    listaSedes("[name='ciudad']","[name='sedeC']");
    formularioSede.reset();
    
})

infoTrainer.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    delete data.sede;
    console.log('entro',data); 
    listaTeams("[name='teamsTrainers']","[name='teams']");
    listaTeams("[name='teamsTrainers']","[name='teamsC']")
    campus.sede.forEach((item)=>{
       /*  item.camper = [];
        item.trainer = []; */
        item.teams.unshift(data.teamsTrainers)
        console.log(item);
    })
    console.log('salio',campus);
    infoTrainer.reset();
    //console.log(campus);
});

trainer.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    
    let data = Object.fromEntries(new FormData(e.target));
    delete data.sedeT;
    delete data.teams;
    console.log('info trainer', data);
    
})

let listaSedes = (p1,p2)=>{
    let sedeSeleccionada = document.querySelector(p1).value;
    let opciones = document.querySelector(p2);
    opciones.innerHTML = null;
    opciones.insertAdjacentHTML("beforeend", `<option value="${sedeSeleccionada}">${sedeSeleccionada}<option/>"`)
}
let listaTeams = (p3, p4)=>{
    let teamSeleccionado = document.querySelector(p3).value
    let temas = document.querySelector(p4)
    temas.innerHTML = null;
    temas.insertAdjacentHTML("beforeend", `<option value="${teamSeleccionado}">${teamSeleccionado}<option/>"`)
}








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

