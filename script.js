
        const limit = 10;
        let contenedor = document.getElementById("contenedor");
        let enviar = document.getElementById("enviar");


        function showCharacters(data) {
            let htmlContentToAppend = "";
            const characters = data.results;
            for (const character of characters) {
                let characterImage = `${character.thumbnail.path}/portrait_medium.jpg`;
                htmlContentToAppend += `
                <div class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1"> ${character.name}</h4>
                            </div>
                            <div>
                            <p class="mb-1">${character.description}</p>
                            </div>
                            <div>
                            <img src="${characterImage}" class="img-thumbnail">
                            </div>
                            <br><br>
                        </div>
                    </div>
                </div>`;
            }
            contenedor.innerHTML = htmlContentToAppend;
        }
        

        enviar.addEventListener("click", function() {
            let nombre = document.getElementById("filtrado").value;
            const URL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nombre}&ts=1&apikey=71657ce5bfcb842b5b4604acfe308b4b&hash=bb71ad6c0647097796c4121794e4676d`;
            
            
            fetch(URL)
            .then(response => response.json())
            .then(json => {
                showCharacters(json.data);
            })
            .catch(error => {
                alert('Ocurrió un error al cargar la información de los personajes');
              })
        });
