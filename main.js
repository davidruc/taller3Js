let campus = {
    sede: []
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
    listaTeams("[name='teamsTrainers']","[name='teams']");
    listaTeams("[name='teamsTrainers']","[name='teamsC']")
    campus.sede.forEach((item)=>{
       if(item.ciudad == data.sede){                
                item.teams.unshift({
                    [data.teamsTrainers]:[]
                });
        }
    });
    
    infoTrainer.reset();
});

trainer.addEventListener("submit", (e)=>{
    e.preventDefault();  
    listaTrainers();
    let data = Object.fromEntries(new FormData(e.target));
    campus.sede.forEach((item)=>{    
        item.teams.forEach((eventos)=>{
            if (item.ciudad == data.sedeT){
                if (item.teams[0] == eventos){
                    eventos[data.teams].unshift({
                       data, grupoDelTrainer: []    
                });
            }
            }
        }); 
    });
  
    trainer.reset();  
})

nivelCamper.addEventListener("submit", (e)=>{
    e.preventDefault();  
    let data = Object.fromEntries(new FormData(e.target));
    delete data.sedeC;
    campus.sede.forEach((item)=>{
        
        item.teams.forEach((eventos)=>{ 
            if (eventos[data.teamsC] != undefined){
                if (item.teams[0] == eventos){
                    eventos[data.teamsC].forEach((paso)=>{
                        let salonConfirmacion1 = paso.data.salonTrainer;
                        let salonConfirmacion2 = data.salonT;
                        let trainerConfirmacion1 = paso.data.nombreTrainer ;
                        let trainerConfirmacion2 = data.nombreT ;
                        if (salonConfirmacion1 == salonConfirmacion2 && trainerConfirmacion1 == trainerConfirmacion2){
                            paso.grupoDelTrainer.unshift(data);
                        }; 
                    });
                }           
        }
    })
       
    });
    console.log("Objeto campus: ",campus);
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