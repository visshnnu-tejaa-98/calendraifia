
let heading = document.getElementById("heading-dynamic")
console.log(heading)

let dropdown = document.getElementById("exampleFormControlSelect1")
let button = document.getElementById("search-search-btn")
console.log(dropdown)
async function getData(){
    try{
        let apiResponse = await fetch(`https://restcountries.eu/rest/v2/all`)
        let apiData = await apiResponse.json()
        for(let i=0;i<apiData.length;i++){
            let option = document.createElement("option")
            option.innerHTML = apiData[i].name
            option.value = apiData[i].alpha2Code
            dropdown.append(option)
        }
    }catch(err){
        console.log(err)
    }
}
getData().catch(err=>console.log(err))

button.addEventListener("click",function(e){
    e.preventDefault()
    section.innerHTML = ""
    async function getData(){
        try{
            let input = dropdown.value
            let apiResponse = await fetch(`https://restcountries.eu/rest/v2/all`)
            let apiData = await apiResponse.json()
            // console.log(apiData[0].alpha2Code)
            // console.log(input)
            let apiHolidaysResponse = await fetch(`https://calendarific.com/api/v2/holidays?&api_key=3957fe5313f33b4890c720534efa747afc6e7472&country=${input}&year=2021`)
            let apiHolidaysData = await apiHolidaysResponse.json()
            console.log(apiHolidaysData.response.holidays)
            for(let i=0;i<apiHolidaysData.response.holidays.length;i++){
                let div = document.createElement("div")
                div.classList.add("inline")
                // console.log(apiData[i])
                div.innerHTML = `
                <button type="button" data-toggle="modal" data-target="#exampleModal${i}" class="margin button">${apiHolidaysData.response.holidays[i].name}</button>
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
                        <p class="modal-text"><b>Date:</b>  ${apiHolidaysData.response.holidays[i].date.iso}</p>
                        <p class="modal-text"><b>Name:</b>  ${apiHolidaysData.response.holidays[i].name}</p>
                        <p class="modal-text"><b>Description:</b>  ${apiHolidaysData.response.holidays[i].description}</p>
                        <p class="modal-text"><b>Celebrated States:</b>  ${apiHolidaysData.response.holidays[i].locations}</p>
                        <p class="modal-text"><b>Type:</b>  ${apiHolidaysData.response.holidays[i].type.join(",")}</p>
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
    getData()
    
    
})


let filterButton = document.getElementById("filter-button")
let filterMonth = document.getElementById("filter-by-month")
let filterType = document.getElementById("filter-by-type")
console.log(filterButton)
console.log(filterMonth)
console.log(filterType)

