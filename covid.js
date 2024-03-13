async function getdata(){
    var res = await  fetch("https://data.covid19india.org/v4/min/data.min.json")
    var res1 = await res.json()
    console.log(res1)
    var chennai = res1.TN.districts.Chennai.total
    console.log(chennai)

    var div = document.createElement("div")
    div.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">tamilnadu</div>
    <div class="card-body text-primary">
      <h5 class="card-title">chennai</h5>
      <p class="card-text">confirmed:${chennai.confirmed}</p>
      <p class="card-text">confirmed:${chennai.deceased}</p>
      <p class="card-text">confirmed:${chennai.recovered}</p>
      <p class="card-text">confirmed:${chennai.tested}</p>
      <p class="card-text">confirmed:${chennai.vaccinated1}</p>
     
    </div>
  </div>`
  document.body.append(div)
} 
getdata()