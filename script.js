function digitarTexto(texto, elementoId, delay = 100) {
    const elemento = document.getElementById(elementoId);
    let i = 0;

    function digitar() {
        if (i < texto.length) {
            elemento.textContent += texto[i];
            i++;
            setTimeout(digitar, delay);
        }
    }

    digitar();
}

// Exemplo de uso:
digitarTexto("pizza de calabresa eh topp", "output", 100);

