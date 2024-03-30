const movie_wrap = document.querySelector('.movie_wraper')
const select = document.querySelector('.catigors')
const opt = document.querySelector('.option')

let parM = movies.splice(1,100)
let Categories = []

parM.forEach((item)=>{
    if (!Categories.includes(item.Categories)) {
        Categories.push(item.Categories)
        
    }
})
Categories.forEach((item)=>{
    let newop = document.createElement("option")
    newop.textContent = item;
    newop.setAttribute("value",item)
    select.appendChild(newop)
})

select.addEventListener("change",(e)=>{
    let fill = parM.filter((item)=> item.Categories == e.target.value)
    renderM(fill)
})

function renderM(data) {
    movie_wrap.innerHTML = ""
    data.forEach((item)=>{
    movie_wrap.innerHTML += `
    <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="http://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
    `
    })

}
renderM(parM)
if (opt.value == 'All') {

}