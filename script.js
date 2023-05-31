const hero = document.querySelector('.hero')
const btn = document.querySelector('button')
const input = document.querySelector('input')
const select = document.querySelector('select')
const sel =document.querySelector('.select-2')

let all = null
function getAPI(API) {
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res)=>{
            all= res.data
            console.log(res.data)
            view(res.data)
        })
}
getAPI('all')

function view(data){
    window.scroll(0,0)
    hero.innerHTML = ''
    data.map(el =>(
        hero.innerHTML += `<div class="box">
<img src="${el.flags.svg}" width="200" alt="">
<h1>${el.name.common}</h1>
<h2>${el.region}</h2>
<h3>${el.area}</h3>
<h3>${el.population}</h3>
<a href="${el.maps.googleMaps}" target="_blank" class="map">Map <ion-icon name="navigate-circle"></ion-icon></a>
</div>`
    ))
}
btn.addEventListener('click',()=>{
    getAPI(`name/${input.value.trim()}`)
})
input.addEventListener('input',(e)=>{
    getAPI(`name/${e.target.value.trim()}`)
})

select.addEventListener('change', (e)=>{
    let target = e.target.value
    if (target === 'asia'){
        const  res = all.filter((el)=>{
            return el.region === 'Asia'
        })
        view(res)
    }else if (target === 'europe'){
        const  res = all.filter((el)=>{
            return el.region === 'Europe'
        })
        view(res)
    }else if (target === 'africa'){
        const  res = all.filter((el)=>{
            return el.region === 'Africa'
        })
        view(res)
    }else if (target === 'americas'){
        const  res = all.filter((el)=>{
            return el.region === 'Americas'
        })
        view(res)
    }
})

sel.addEventListener("change",(e)=>{
    let target = e.target.value
    if (target === 'population'){
        const res = all.sort((a,b)=>{
            return b.population - a.population
        })
        view(res)
    }
    else if (target === 'area'){
        const res = all.sort((a,b)=>{
            return b.area - a.area
        })
        view(res)
    }
    else if (target === 'Z-A'){
        const res = all.sort((a,b)=>{
            return a.name.common < b.name.common ? 1 : -1
        })
        view(res)
    }
    else if (target === 'A-Z'){
        const res = all.sort((a,b)=>{
            return a.name.common > b.name.common ? 1 : -1
        })
        view(res)
    }
})












