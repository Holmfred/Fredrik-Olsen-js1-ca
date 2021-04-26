const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

const resultsContainer = document.querySelector(".numbers")

async function getUsaData() {

    try{
        const response = await fetch(url);

        const responseData = await response.json();

        const usa = responseData.data;
        
        resultsContainer.innerHTML = "";

        for(let i = 0; i < usa.length; i++){
            console.log(usa[i].Nation +" "+usa[i].Year +" "+ usa[i].Population)
            
            resultsContainer.innerHTML += `<div class="stats">
                                        <p>${usa[i].Nation}</p>
                                        <p><strong>Year:</Strong>${usa[i].Year}</p>
                                        <p><strong>Population:</strong>${usa[i].Population}</p>
                                        </div>`;
        }
    }
    
    catch (error) {
        console.log(error)
        resultsContainer.innerHTML = displayError()
    }

}

getUsaData()

