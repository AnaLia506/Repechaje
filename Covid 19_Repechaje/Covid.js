const Api_Url = async () => {
    const respuesta = await fetch('https://api.covid19api.com/summary');
    return (info = respuesta.json());
  };
  
  const nuevosCasos = async () => {
      const covid = await Api_Url(); 
      const paises = covid.Countries.find(pais => pais.Country === "Uruguay");
        const html = `
          <ul>
            <li>Pais: ${paises.Country}</li>
            <li>Nuevos casos confirmados: ${paises.NewConfirmed}</li>
            <li>Muertes nuevas: ${paises.NewDeaths}</li>
            <li>Nuevos confirmados: ${paises.TotalConfirmed}</li>
            <li>Total muertes: ${paises.TotalDeaths}</li>
          </ul>
        `;
      console.log(paises)
    
      document.getElementById("información").innerHTML = html;
    }
    nuevosCasos();
  covid19Api();