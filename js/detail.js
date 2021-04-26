const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

const resultsContainer2 = document.querySelector(".singleDetail")

async function getUsaData() {

    try{
        const response = await fetch(url);

        const responseData = await response.json();

        const usa = responseData.data;
        
        resultsContainer2.innerHTML = "";

        for(let i = 0; i < usa.length; i++){
            console.log(usa[i].Nation +" "+usa[i].Year +" "+ usa[i].Population)
            
            resultsContainer2.innerHTML += `<div class="stats">
                                        <p>${usa[i].Nation}</p>
                                        <p><strong>Year:</Strong>${usa[i].Year}</p>
                                        <p><strong>Population:</strong>${usa[i].Population}</p>
                                        </div>`;

            if (i < 1){
                break
            }
        }
    }
    
    catch (error) {
        console.log(error)
        resultsContainer2.innerHTML = displayError()
    }

}

getUsaData()