const programadores = [
    { nome: 'João', pais: 'Brasil', continente: 'Américas', idade: 19, linguagem: 'Python' },
    { nome: 'Caterina', pais: 'Bielorrússia', continente: 'Europa', idade: 29, linguagem: 'JavaScript' },
    { nome: 'Yang', pais: 'China', continente: 'Ásia', idade: 39, linguagem: 'Ruby' },
    { nome: 'Calebe', pais: 'Israel', continente: 'Ásia', idade: 40, linguagem: 'Ruby' },
    { nome: 'Andrei', pais: 'Romênia', continente: 'Europa', idade: 59, linguagem: 'C' },
    { nome: 'Marieta', pais: 'Peru', continente: 'Américas', idade: 60, linguagem: 'C' },
    { nome: 'Lukas', pais: 'Croácia', continente: 'Europa', idade: 75, linguagem: 'Python' },
    { nome: 'Samantha', pais: 'Geórgia', continente: 'Europa', idade: 88, linguagem: 'Ruby' },
    { nome: 'Viktoria', pais: 'Bulgária', continente: 'Europa', idade: 98, linguagem: 'PHP' },
    { nome: 'Podolski', pais: 'Polônia', continente: 'Europa', idade: 128, linguagem: 'JavaScript' }
];

const buscarProgramadoresRuby = () => programadores.filter(programador => programador.linguagem === 'Ruby')

console.log(buscarProgramadoresRuby());

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2023 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2023 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

const carrosPorAno = () => {
    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    const carrosDoAno = carros.filter(carro => carro.anoFabricacao === anoAtual);
    return carrosDoAno
}

console.log(carrosPorAno())