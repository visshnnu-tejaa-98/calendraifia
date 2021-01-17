let article = document.getElementById("article")
console.log(article)

async function getData(){
    try{
      let apiResponse = await fetch(`https://calendarific.com/api/v2/holidays?&api_key=3957fe5313f33b4890c720534efa747afc6e7472&country=IN&year=2021`)
    let apiData = await apiResponse.json()
    for(let i=0;i<apiData.response.holidays.length;i++){
        let div = document.createElement("div")
        div.classList.add("inline")
        // console.log(apiData[i])
        div.innerHTML = `
        <button type="button" data-toggle="modal" data-target="#exampleModal${i}" class="margin button">${apiData.response.holidays[i].name}</button>
          <!-- Modal -->
          <div class="modal fade model-content-style" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p class="modal-text"><b>Date:</b>  ${apiData.response.holidays[i].date.iso}</p>
                  <p class="modal-text"><b>Name:</b>  ${apiData.response.holidays[i].name}</p>
                  <p class="modal-text"><b>Description:</b>  ${apiData.response.holidays[i].description}</p>
                  <p class="modal-text"><b>Celebrated States:</b>  ${apiData.response.holidays[i].locations}</p>
                  <p class="modal-text"><b>Type:</b>  ${apiData.response.holidays[i].type.join(",")}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        `
        section.appendChild(div)
        // console.log(apiData.response.holidays[i].name)
        // console.log(apiData.response.holidays[i])
        
    }
    }catch(err){
      console.log(err)
    }
}
getData().catch(err=>console.log(err))


let filterButton = document.getElementById("filter-button")
let filterMonth = document.getElementById("filter-by-month")
let filterType = document.getElementById("filter-by-type")
console.log(filterButton)
console.log(filterMonth)
console.log(filterType)

let array = []
filterButton.addEventListener("click",function(e){
    section.innerHTML = ""
    console.log(filterMonth.value)
    console.log(filterType.value)
    async function getData(){
        try{
          
          let apiResponse = await fetch(`https://calendarific.com/api/v2/holidays?&api_key=3957fe5313f33b4890c720534efa747afc6e7472&country=IN&year=2021`)
        let apiData = await apiResponse.json()
        // console.log(apiData)
        // let array = apiData.filter(i=>i.response.holidays[i].date.iso.split("-")[1] == filterMonth.value )
        for(let i=0;i<apiData.response.holidays.length;i++){
            if(apiData.response.holidays[i].date.iso.split("-")[1] == filterMonth.value && apiData.response.holidays[i].type.join(" ")===filterType.value){
                
                array.push(apiData.response.holidays[i])
            }
        }
        }catch(err){
          console.log(err)
        }
        console.log(array)
        if(array.length===0){
          alert("There is no holidays with specified filter, Try again by changing new filter")
        }
        for(let i=0;i<array.length;i++){
            console.log(i)
            let div = document.createElement("div")
            div.classList.add("inline")
            // console.log(apiData[i])
            div.innerHTML = `
            <button type="button" data-toggle="modal" data-target="#exampleModal${i}" class="margin button">${array[i].name}</button>
              <!-- Modal -->
              <div class="modal fade model-content-style" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p class="modal-text"><b>Date:</b>  ${array[i].date.iso}</p>
                      <p class="modal-text"><b>Name:</b>  ${array[i].name}</p>
                      <p class="modal-text"><b>Description:</b>  ${array[i].description}</p>
                      <p class="modal-text"><b>Celebrated States:</b>  ${array[i].locations}</p>
                      <p class="modal-text"><b>Type:</b>  ${array[i].type.join(",")}</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            `   
            section.appendChild(div)
        }
        array = []
        
    }

    getData()   
    console.log(array)
    console.log(array[0])
    

})




