const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("images/notFound.png");
            limpiarCampos();
        }
        else {
            limpiarCampos();
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            
            //Asigna imagen
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            //Asigna caracteristicas 
            document.getElementById("pokeId").innerHTML = data.id;
            document.getElementById("pokemon").innerHTML = data.name;
            document.getElementById("pokeHeight").innerHTML = data.height;
            document.getElementById("pokeWeight").innerHTML = data.weight;
            document.getElementById("pokeType").innerHTML = data.types[0].type.name;
            document.getElementById("pokeType").innerHTML = data.types[0].type.name;
            //Asigna valores de estadística a gráfica
            let hp = document.getElementById("HP");
            hp.style = "--bar-value:"+ data.stats[0].base_stat + "%;";
            hp.title =  data.stats[0].base_stat + "%";        
            let at = document.getElementById("AT");
            at.style = "--bar-value:"+ data.stats[1].base_stat + "%;";
            at.title = data.stats[1].base_stat + "%";
            let de = document.getElementById("DE");
            de.style = "--bar-value:"+ data.stats[2].base_stat + "%;";
            de.title = data.stats[2].base_stat + "%";
            let ae = document.getElementById("AE");
            ae.style = "--bar-value:"+ data.stats[3].base_stat + "%;";
            ae.title = data.stats[3].base_stat + "%";
            let ds = document.getElementById("DS");
            ds.style = "--bar-value:"+ data.stats[4].base_stat + "%;";
            ds.title = data.stats[4].base_stat + "%";
            let ve = document.getElementById("VE");
            ve.style = "--bar-value:"+ data.stats[5].base_stat + "%;";
            ve.title = data.stats[5].base_stat + "%";
            //Asigna habilidades
            document.getElementById("hab1").innerHTML = data.abilities[0].ability.name;
            document.getElementById("hab2").innerHTML = data.abilities[1].ability.name;

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


function limpiarCampos() {
    //Asigna caracteristicas
    document.getElementById("pokeName").textContent = "";
    document.getElementById("pokeId").textContent  = "";
    document.getElementById("pokemon").textContent = "";
    document.getElementById("pokeHeight").textContent = "";
    document.getElementById("pokeWeight").textContent = "";
    document.getElementById("pokeType").textContent = "";
    document.getElementById("pokeType").textContent = "";
    //Asigna valores de estadística a gráfica
    let hp = document.getElementById("HP");
    hp.style = "--bar-value:0%;";
    hp.title =  "0%";
    let at = document.getElementById("AT");
    at.style = "--bar-value:0%;";
    at.title =  "0%";
    let de = document.getElementById("DE");
    de.style = "--bar-value:0%;";
    de.title =  "0%";
    let ae = document.getElementById("AE");
    ae.style = "--bar-value:0%;";
    ae.title =  "0%";
    let ds = document.getElementById("DS");
    ds.style = "--bar-value:0%;";
    ds.title =  "0%";
    let ve = document.getElementById("VE");
    ve.style = "--bar-value:0%;";
    ve.title =  "0%";
    //Asigna habilidades
    document.getElementById("hab1").textContent = "";
    document.getElementById("hab2").textContent = "";
  }