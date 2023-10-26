export const converterCaracteres = (frase) => {
    const palavras = frase.split(" ");
    let senha = '';

    palavras.forEach(palavra => {
        const primeiraLetra = palavra.charAt(0).toLowerCase();
        if (primeiraLetra === "i") senha += '1';

        else if (primeiraLetra === "o") senha += '0';

        else if (primeiraLetra === "s") senha += '5';

        else if (primeiraLetra === "e") senha += '3';

        else senha += primeiraLetra;
    });
    
    return senha;
};