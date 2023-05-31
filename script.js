const closeBtn = document.querySelector('.menu-close')
const openBtn = document.querySelector('.menu-open')
const sidebar = document.querySelector('.sidebar')
const sidebarUl = document.querySelector('.sidebar ul')
const bodyEl = document.querySelector('body')
const containerEl = document.querySelector('.container')



openBtn.addEventListener('click', ()=>{
    sidebar.style.width = '340px'
    sidebar.style.backgroundColor = 'white'
    sidebar.style.top = '0px'
    closeBtn.style.display = 'block'
    openBtn.style.display = 'none'
    sidebarUl.style.display = 'flex'
})


closeBtn.addEventListener('click', ()=>{
    sidebarUl.style.display = 'none'
    sidebar.style.backgroundColor = 'transparent'
    sidebar.style.top = '0px'
    // sidebar.style.boxShadow = '2px 2px 2px 2px rgb(235, 234, 234)'
    sidebar.style.width = '55px'
    closeBtn.style.display = 'none'
    openBtn.style.display = 'block'
})


containerEl.addEventListener('click', (e)=>{
    if(e.srcElement.matches('div')){
        console.log('clicked the sidebar')
    }else{
        console.log('clicked outside the sidebar')
    }
})