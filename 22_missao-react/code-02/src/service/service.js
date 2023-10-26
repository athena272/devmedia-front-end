import produtos from "../data/data.js";

const produtosFiltrados = produtos.filter((produto) => produto.comprado === false);

export { produtosFiltrados };