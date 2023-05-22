

function bubbleSort1(lista) {
  // Primero copiar el array (creé 'listo') y chequear si está ordenada, de ser así retorna la lista original
  let listo = Array.from(lista); 
  if (listo.every((value, index) => index == 0 || value >= listo[index - 1])) {
  return listo;
  };
  listo = listo.map((value, index) => {   // recorrer lista y reordenar valores 
    if (index <= listo.length && value > listo[index +1]) {
      let temp = value;
      value = listo[index +1];
      listo[index +1] = temp;
    };
    return value;
  });
  // Volver a llamar a la funcion para que se repita el procedimiento hasta que la lista esté ordenada
  return bubbleSort1(listo);
};


// con modificación  
function bubbleSort2(lista, inPlace) {
    // Primero chequear si está ordenada sino, copiar el array (creé 'listo') de estar ordenada, retorna la lista original
    if (lista.every((value, index) => index == 0 || value >= lista[index - 1])) {
      inPlace = true;
      return lista}; 
    let listo = Array.from(lista);
    if (listo.every((value, index) => index == 0 || value >= listo[index - 1])) {
      inPlace = true;
      return listo;
    };
    if (inPlace == false) {listo = listo.map((value, index) => {   // recorrer lista y reordenar valores 
      if (index <= listo.length && value > listo[index +1]) {
        let temp = value;
        value = listo[index +1];
        listo[index +1] = temp;
      };
      return value;
    })};
    // Volver a llamar a la funcion para que se repita el procedimiento hasta que la lista esté ordenada
    return bubbleSort2(listo, inPlace);
  };

 const listades = [4, 3, 5, 2, 8, 1, 9, 7, 6];

  const listaord1 = bubbleSort1(listades);

  console.log(listaord1.join(','));
 
  const listaord2 = bubbleSort2(listades, false);

  console.log(listaord2.join(','));

  