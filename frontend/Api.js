const url = "http://localhost:4000";

export const getCasos = async ()=>{
    try{

        const resultado = await fetch(url+"/caso");
        const casos = await resultado.json();
        return casos;

    }catch (error) {
        console.log(error);
    }
};

export const getJueces = async ()=>{
    try{

        const resultado = await fetch(url+"/juez");
        const jueces = await resultado.json();
       // console.log(jueces);
        return jueces;

    }catch (error) {
        console.log(error);
    }
};

export const getSospechosos = async ()=>{
    try{

        const resultado = await fetch(url+"/acusado");
        const sospechosos = await resultado.json();
        //console.log(sospechosos);
        return sospechosos;

    }catch (error) {
        console.log(error);
    }
};
export const getJuzgados = async ()=>{
    try{

        const resultado = await fetch(url+"/juzgado");
        const juzgados = await resultado.json();
       // console.log(juzgados);
        return juzgados;

    }catch (error) {
        console.log(error);
    }
};
export const getPruebas = async (myCase)=>{
    try{

        const resultado = await fetch(`${url}/prueba/${2}`);
        const Pruebas = await resultado.json();
        console.log(Pruebas);
        return Pruebas;

    }catch (error) {
        console.log(error);
    }
};

export const nuevaPrueba = async (prueba) => {
    try {
        console.log(prueba);
        await fetch("http://localhost:4000/prueba",{
            method: "POST",
            body: JSON.stringify(prueba), // data puede ser string o un objeto
            headers: {
              "Content-Type": "application/json", // Y le decimos que los datos se enviaran como JSON
            },
          });
        } catch (error) {
          console.log(error);
        }
        window.location.href = "index.html";
};