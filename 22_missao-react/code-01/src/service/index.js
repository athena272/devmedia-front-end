import { jogosExclusivos } from "../data";

export const retornarJogos = () => {
  return jogosExclusivos;
};

export const buscarJogo = (textoDigitado) => {
  return jogosExclusivos.filter(
    (jogo) =>
      jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};

export const filtrarJogo = (plataforma) => {
  return jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma);
};

{/* <h1>Lista de Alunos</h1>
<ul>
  {alunos.map((aluno) => (
  <li key={aluno.matricula}>
    {aluno.nome}
    <button onClick={abrirInformacaoAluno(aluno)}>+</button>
  </li>
  ))}
</ul>
{mostrarComponente && <InformacaoAluno aluno={alunoSelecionado} fecharInformacaoAluno={fecharInformacaoAluno} />} */}