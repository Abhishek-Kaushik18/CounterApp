

const add = document.querySelector(`#plus`)
const drop = document.querySelector(`#minus`)
const reset = document.querySelector(`#reset`)
const counter = document.querySelector(`#counter`)
const UnList = document.querySelector(`#listitem`)

let count = 0

add.addEventListener(`click`,e=>{
    count++
    counter.innerHTML = count
    const li = document.createElement(`li`)
    li.setAttribute(`id`,`listed`)
    li.innerHTML = `list Item : `+ count
    UnList.appendChild(li)
})

drop.addEventListener(`click`,e=>{
    // const li = document.querySelector(`#listed`)
    const li = UnList.lastChild
    if(li){
        UnList.removeChild(li)
        count--
        counter.innerHTML = count
    }
})

reset.addEventListener(`click`,e=>{
    count = 0
    counter.innerHTML = count
    UnList.innerHTML = ''
})

