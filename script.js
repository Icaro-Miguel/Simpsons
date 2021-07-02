
window.onload = function(){ 
let nomes = ['Maria', 'Marcus', 'Carolina', 'João', 'Diegão'];  
let turmas = ['302', '303', '305', '303', '304'];

for(let i = 0; i < nomes.length; i++){
  let lista = document.createElement('ul')
  let Elementolista = document.createElement('li')
  let Textolista = document.createTextNode(lista[i])

  Elementolista.appendChild(Textolista);
  lista.appendChild(Elementolista)

  // sublista

  let sublista = document.createElement('ul');
  let Elementosublista = document.createElement('li');
  let textosublista = document.createTextNode(turmas[i]);  

 Elementosublista.appendChild(textosublista);
 sublista.appendChild(Elementosublista);
 lista.appendChild(sublista);

 let estilo1 = document.createAttribute('class');
 estilo1.value = "lista";
Elementolista.setAttributeNode(estilo1);

let estilo2 = document.createAttribute('class');
estilo2.value = "sub-lista";
Elementosublista.setAttributeNode(estilo2)

 document.getElementById('caixa').insertAdjacentElement('beforeend', lista);



}

}