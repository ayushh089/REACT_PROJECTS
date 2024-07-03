function render(container,reactEl){
    const element=document.createElement(reactEl.type)
    element.setAttribute('href',reactEl.props.href)
    element.innerHTML=reactEl.children
    container.appendChild(element)
}
const reactEl={
    type:'a',
    props:{
        href:'google.com',
    },
    children:'Google'
}
const container=document.querySelector('#root')

render(container,reactEl)