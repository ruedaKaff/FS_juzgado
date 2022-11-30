import {getJueces, getCasos, getSospechosos, getJuzgados,getPruebas,nuevaPrueba} from "./Api.js";

let myCase="";
document.addEventListener("DOMContentLoaded", () => {
    /* ALL GETS */

    renderingCasos();
    renderingJueces();
    renderingSospechosos();
    renderingJuzgados();
    renderingPruebas();
    
  });
  /* ALL GETS */
async function renderingCasos() {
      const cases = await getCasos();
      const casos = document.querySelector("#casos");
      let html = "";
  
      cases.forEach((juzgadoCaso) => {
        const { foto_acusado,nombre_caso , nombre_juez, fecha, id_caso } = juzgadoCaso;
        html += `
        <div class="card">
          <img src="${foto_acusado}" style="height: 280px;"; class="card-img-top" alt="..." />
          <div class="card-body">
                  <h1 class="card-title">${nombre_caso}</h1>
                  <p class="card-text">
                      Juez: ${nombre_juez}
                  </p>
                  <p class="card-text">
                      ${fecha}
                  </p>
                  <form action="fullCaso.html" method="GET">
                  <button type="submit"  class="btn btn-primary boton" value="${id_caso}">Ver pruebas</button>
                  </form>
          </div>
        </div>
          `;
          casos.innerHTML = html;
      });
    }

document.addEventListener("click", getCasoss);
    async function getCasoss (e){
      let htmlmodal= "";    // FOR EACH TO PAINT HTML WITH CAMPOS FROM STUDENTS
      if (e.target.classList.contains("add")) {
        const caso = await getCasos();
        console.log(caso);
        const casosOption = document.querySelector("#caso");
        caso.forEach((fields) => {
        const { nombre_caso, id_caso } = fields;
        htmlmodal += ` 
        <option value="${id_caso}">${nombre_caso}</option>
        ` ;
      });
      casosOption.innerHTML = htmlmodal;
        
      }
    }
const caso = document.querySelector("#casos");

caso.addEventListener('click', selectedCase)
function selectedCase (e)
{
  if(e.target.classList.contains("boton"))
  {
    const selectedCase = e.target.parentElement.parentElement;
  console.log(selectedCase);
  cases(selectedCase);
  }
}
function cases (selected)
{
  const caseDetail = {
    id: selected.querySelector("button").getAttribute("id")
  }
  myCase = caseDetail.id;
  console.log(myCase);

}
async function renderingJueces() {
      const juez = await getJueces();
      const jueces = document.querySelector("#jueces");
      let html = "";
  
      juez.forEach((juzgadoCaso) => {
        const { foto_juez, nombre_juez , id_juez, nombre_juzgado } = juzgadoCaso;
        html += `
        <div class="card">
          <img src="${foto_juez}" style="height: 280px;"; class="card-img-top" alt="..." />
          <div class="card-body">
                  <h1 class="card-title">${nombre_juez}</h1>
                  <p class="card-text">
                      ID: ${id_juez}
                  </p>
                  <p class="card-text">
                      Jugazdo: ${nombre_juzgado}
                  </p>
                  
                  <a href="#" class="btn btn-primary">Detalle</a>
          </div>
        </div>
          `;
          jueces.innerHTML = html;
      });
    }
async function renderingSospechosos() {
      const sospechoso = await getSospechosos();
      const sospechosos = document.querySelector("#sospechosos");
      let html = "";
  
      sospechoso.forEach((juzgadoJuez) => {
        const { foto_acusado, nombre_acusado , id_acusado, edad } = juzgadoJuez;
        html += `
        <div class="card">
          <img src="${foto_acusado}" style="height: 280px;"; class="card-img-top" alt="..." />
          <div class="card-body">
                  <h1 class="card-title">${nombre_acusado}</h1>
                  <p class="card-text">
                      ID: ${id_acusado}
                  </p>
                  <p class="card-text">
                      Edad: ${edad}
                  </p>
                  
                  <a href="#" class="btn btn-primary">Detalle</a>
          </div>
        </div>
          `;
          sospechosos.innerHTML = html;
      });
    }
async function renderingJuzgados() {
      const juzgado = await getJuzgados();
      const juzgados = document.querySelector("#juzgados");
      let html = "";
  
      juzgado.forEach((juzgadoJuez) => {
        const { nombre_juzgado , id_juzgado, ciudad } = juzgadoJuez;
        html += `
        <div class="card">
          <img src="https://www.cicnews.com/wp-content/uploads/2021/01/Humanitarian-and-Compassionate-Grounds-Immigration-1.jpg" style="height: 280px;"; class="card-img-top" alt="..." />
          <div class="card-body">
                  <h1 class="card-title">${nombre_juzgado}</h1>
                  <p class="card-text">
                      ID: ${id_juzgado}
                  </p>
                  <p class="card-text">
                      Ciudad: ${ciudad}
                  </p>
                  
                  <a href="#" class="btn btn-primary">Detalle</a>
          </div>
        </div>
          `;
          juzgados.innerHTML = html;
      });
    }
async function renderingPruebas() {
      const prueba = await getPruebas(myCase);
      const pruebas = document.querySelector("#prueba");
      let html = "";
  
      prueba.forEach((juzgadoJuez) => {
        const { nombre_caso , foto_prueba, descripcion, veracidad } = juzgadoJuez;
        html += `
        <div class="conatiner col-md-6 main-header">
        <h1>Prueba: ${nombre_caso}</h1>
        <img  src="${foto_prueba}" width="350px" alt="Logo" />
        
          <h3>Descripcion: 
          ${descripcion}</h3> 
          <h3>Veracidad: 
          ${veracidad}</h3>

      </div>
          `;
          pruebas.innerHTML = html;
      });
    }

    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", crearPrueba);
    
    async function crearPrueba(e) {
      e.preventDefault(e);
    
      const descripcion = document.querySelector("#descripcion").value;
      const veracidad = document.querySelector("#veracidad").value;
      const foto_prueba= document.querySelector("#foto_prueba").value;
      const id_caso = document.querySelector("#caso").value;///

      
      const prueba = {
        descripcion,
        veracidad,
        foto_prueba,
        id_caso,
      };
      /* llamamos a la funcion metodo HTTP POST */
      nuevaPrueba(prueba);
    }

