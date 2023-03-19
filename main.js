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
    console.log(data);
    const {sede: [{direccionSede, numeroSede}]} = campus 
    if (data.ciudad == "Medellin"){
        console.log("El número de teléfono de la sede de Medellin: ",numeroSede);
    }
    if (data.ciudad == "Bucaramanga"){
        console.log("La dirección de la sede de Bucaramanga es: ",direccionSede);
    }
    
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
    delete data.sedeC
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
                    

                    paso.grupoDelTrainer.forEach((valor)=>{
                        if (data.nombre == valor.nombre){
                            console.log("El prerrequisito es:",valor.prerrequisito);
                            console.log("Número de créditos del road map:",valor.numeroDeCreditos);
                           
                        }
                    })
                    

                    });
                }           
        }
    })
       
    });
    
    nivelCamper.reset();
    if (data.teamsC == "Team1"){
        const {sede: [{ciudad, direccionSede, numeroSede, teams: [{ Team1: [{data:{tipoDeAsignatura}, grupoDelTrainer:[{salonT, sandbox}] }]}]}]}  = campus
        console.log("La asignatura es ",tipoDeAsignatura);
        console.log("El salón de clases es ", salonT);
        console.log("La asignatura es ", sandbox);
    } else if (data.teamsC == "Team2"){
        const {sede: [{ciudad, direccionSede, numeroSede, teams: [{ Team2: [{data:{tipoDeAsignatura}, grupoDelTrainer:[{salonT, sandbox}] }]}]}]}  = campus
        console.log(tipoDeAsignatura);
        console.log(salonT);
        console.log(sandbox);
    } else if (data.teamsC == "Team3"){
        const {sede: [{ciudad, direccionSede, numeroSede, teams: [{ Team3: [{data:{tipoDeAsignatura}, grupoDelTrainer:[{salonT, sandbox}] }]}]}]}  = campus
        console.log(tipoDeAsignatura);
        console.log(salonT);
        console.log(sandbox);
    } else if (data.teamsC == "Team4"){
        const {sede: [{ciudad, direccionSede, numeroSede, teams: [{ Team4: [{data:{tipoDeAsignatura}, grupoDelTrainer:[{salonT, sandbox}] }]}]}]}  = campus
        console.log(tipoDeAsignatura);
        console.log(salonT);
        console.log(sandbox);
    } else (console.log("no ingresaste un valor de tipo de asignatura ni salón :c "))
    console.log("Objeto campus: ",campus);
})

let listaSedes = (p1,p2)=>{
    let sedeSeleccionada = document.querySelector(p1).value;
    let opciones = document.querySelector(p2);
    opciones.innerHTML = null;
    opciones.insertAdjacentHTML("beforeend", `<option value="${sedeSeleccionada}">${sedeSeleccionada}<option/>"`)
}
let listaTeams = (p3, p4)=>{
    var teamSeleccionado = document.querySelector(p3).value;
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





// Segundo Punto 

/* 2. Consultas: Usando Destructuring,
2.1 De los trainers, reportar si la asignatura (tecnología) es
remota o presencial y de los campers el nombre de salón.
2.2 El teléfono de la sede de Medellín y la dirección de la
sede de Bucaramanga
2.3 De la asignatura (tecnología) si tiene sandbox o no */

/* const {sede [ciudad, direccionSede, numeroSede, []]} = campus */

/* const obj = { 
    a: [
        { foo: 123, bar: 'abc' }, 
        {}
    ], 
    b: true 
};
const { a: [{foo: f}] } = obj; // f = 123

 */

/* console.log(ti); */
/* const {sede: [ciudad, direccionSede, numeroSede, [{"":[{nombreTrainer, salonTrainer, sedeT, teams, tipoDeAsignatura: ti}, {}]}]]} = campus
console.log(ti); */
