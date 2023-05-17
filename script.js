const closeBtn = document.querySelector('.menu-close')
const openBtn = document.querySelector('.menu-open')
const sidebar = document.querySelector('.sidebar')
const sidebarUl = document.querySelector('.sidebar ul')



openBtn.addEventListener('click', ()=>{
    sidebar.style.width = '340px'
    sidebar.style.boxShadow = '2px 2px 2px 2px rgb(235, 234, 234)'
    sidebar.style.backgroundColor = 'white'
    closeBtn.style.display = 'block'
    openBtn.style.display = 'none'
    sidebarUl.style.display = 'flex'
})


closeBtn.addEventListener('click', ()=>{
    sidebarUl.style.display = 'none'
    sidebar.style.backgroundColor = 'transparent'
    sidebar.style.width = '55px'
    closeBtn.style.display = 'none'
    openBtn.style.display = 'block'
})