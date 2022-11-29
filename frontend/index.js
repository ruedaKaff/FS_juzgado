import {getJueces, getCasos, getSospechosos, getJuzgados,getPruebas} from "./Api.js";


document.addEventListener("DOMContentLoaded", () => {
    /* ALL GETS */
    renderingCasos();
    renderingJueces();
    renderingSospechosos();
    renderingJuzgados();
  });
  /* ALL GETS */
async function renderingCasos() {
      const cases = await getCasos();
      const casos = document.querySelector("#casos");
      let html = "";
  
      cases.forEach((juzgadoCaso) => {
        const { foto_acusado,nombre_caso , nombre_juez, fecha } = juzgadoCaso;
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
                  
                  <a href="#" class="btn btn-primary">Detalle</a>
          </div>
        </div>
          `;
          casos.innerHTML = html;
      });
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

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", crearCategoria);
const url = `http://localhost:9091/categorias/add`;
async function crearCategoria(e) {
  e.preventDefault(e);

  const nombre = document.querySelector("#nombre").value;
  const imagen = document.querySelector("#imagen").value;
  const descripcion = document.querySelector("#descripcion").value;
  
  const categoria = {
    nombre,
    imagen,
    descripcion
  };
  /* llamamos a la funcion metodo HTTP POST */
  nuevaCategoria(categoria);
}
const nuevaCategoria = async (categoria) => {
  try {
  
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(categoria), // data puede ser string o un objeto
      headers: {
        "Content-Type": "application/json", // Y le decimos que los datos se enviaran como JSON
      },
    });
  } catch (error) {
    console.log(error);
  }
  window.location.href = "index.html";
};
