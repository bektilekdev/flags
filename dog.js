const breeds = document.querySelector('.breeds')
const breedsImg = document.querySelector('.breedsImg')
const selectTwo = document.querySelector('.select-two')
const input = document.querySelector('input')
const buttonTwo = document.querySelector('.buttonTwo')

function option(){
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res)=>{
            Object.keys(res.data.message).map(el=>{
                selectTwo.innerHTML += `<option value="${el}">${el}</option>`
            })

        })
}
 option()

selectTwo.addEventListener('change',(e)=>{
    getImg(e.target.value)
})

input.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter' ){
        getImg(e.target.value)
    }
})


input.addEventListener('keydown',(e)=>{
        if (e.key === 'Enter' && input.value === ''){
            alert('404')
        }
})

input.addEventListener('input', (e) => {
    if (input.value === ''){
        getImg().remove()
    }

})

buttonTwo.addEventListener('click',(e)=>{

})





function getAll() {
    axios('https://dog.ceo/api/breeds/list/all')
        .then((res) => {
            console.log(Object.keys(res.data.message))
            Object.keys(res.data.message).map((el) => {
                breeds.innerHTML += `<button class="btn-breed">${el}</button>`

            })
        })
        .then(() => btn())
}

getAll()

function btn() {
    const breedsBtn = document.querySelectorAll('.btn-breed')
    breedsBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            getImg(btn.innerHTML)
        })
    })
}

function getImg(API) {
    axios(`https://dog.ceo/api/breed/${API}/images/random`)
        .then((res) => {
            breedsImg.innerHTML += `<img src="${res.data.message}  " width="300" height="300" style="object-fit: cover" alt="img">`

        })
}
getImg()