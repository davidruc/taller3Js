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
    
    listaTeams("[name='teamsTrainers']","[name='teams']");
    listaTeams("[name='teamsTrainers']","[name='teamsC']")
    campus.sede.forEach((item)=>{
        item.teams.unshift({
            [data.teamsTrainers]:[]
        });
    });
    
    infoTrainer.reset();
});

trainer.addEventListener("submit", (e)=>{
    e.preventDefault();  
    listaTrainers();
    let data = Object.fromEntries(new FormData(e.target));
    delete data.sedeT;
    
   /*  console.log(data); */
    /* delete data.teams; */
/*     let trainerrr = data.nombreTrainer; */
    campus.sede.forEach((item)=>{
        item.teams.forEach((eventos)=>{
            eventos[data.teams].unshift({
               data, grupoDelTrainer: []
            }, 
            );
            
        }) 
    })
  
    trainer.reset();  
})


nivelCamper.addEventListener("submit", (e)=>{
    e.preventDefault();  
    let data = Object.fromEntries(new FormData(e.target));
    delete data.sedeC;
    
    /* console.log("data camper", data); */
    campus.sede.forEach((item)=>{
        item.teams.forEach((eventos)=>{
       /*      eventos[data.teamsC].unshift(data) */
            eventos[data.teamsC].forEach((paso)=>{
                paso.grupoDelTrainer.unshift(data);
                /* let arrayTrainer = [trainerSeleccionado] */
              /*   arrayTrainer.unshift(data) */
              /*   paso.data[nombreTrainer.value].unshift(arrayTrainer) */
                console.log("aqui pasa algo?", paso.data.nombreTrainer/* [eventos.nombreTrainer] */);
               /*  paso.nombreTrainer.unshift(data) */
              /*   paso[eventos.nombreTrainer].unshift(data) */
             
            })
        
        }) 
    });
    listaTrainers();
    console.log(campus);
    nivelCamper.reset();
})



let listaSedes = (p1,p2)=>{
    let sedeSeleccionada = document.querySelector(p1).value;
    let opciones = document.querySelector(p2);
    opciones.innerHTML = null;
    opciones.insertAdjacentHTML("beforeend", `<option value="${sedeSeleccionada}">${sedeSeleccionada}<option/>"`)
}
let listaTeams = (p3, p4)=>{
    let teamSeleccionado = document.querySelector(p3).value;
    let temas = document.querySelector(p4);
    temas.innerHTML = null;
    temas.insertAdjacentHTML("beforeend", `<option value="${teamSeleccionado}">${teamSeleccionado}<option/>"`)
}
let listaTrainers = ()=>{
    var trainerSeleccionado = document.querySelector("[name='nombreTrainer']").value;
    let trainerrr = document.querySelector("[name='nombreT']");
    let salonSeleccionado = document.querySelector("[name='salonTrainer']").value;
    let salonnn = document.querySelector("[name='salonT']")
    trainerrr.innerHTML = null;
    salonnn.innerHTML = null;
    trainerrr.insertAdjacentHTML("beforeend", `<option value="${trainerSeleccionado}">${trainerSeleccionado}<option/>"`)
    salonnn.insertAdjacentHTML("beforeend", `<option value="${salonSeleccionado}">${salonSeleccionado}<option/>"`)
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

