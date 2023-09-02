window.onload = () => {
    const parrafo = document.getElementById('text')//Con esto conseguiremos el elemento que queramos modificar por su ID
    parrafo.innerText = 'Texto actualizado'//Esto hara un cambio en el elemento que queramos modificar
    const parrafo2 = document.getElementById('text2')
    parrafo2.innerHTML = '<li>Elemento 1</li><li>Elemento 2</li>'//Con innerHTML se modifica aparte con texto se puede agregar elementos de HTML
    
}