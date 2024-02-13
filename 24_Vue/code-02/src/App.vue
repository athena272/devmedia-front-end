<template>
  <header>
    <h1 class="titulo-header">Criptografando e descriptografando um texto</h1>
  </header>
  <main>
    <section class="formularios">
      <div class="form-box">
        <img src="../public/assets/locked-padlock.png" />
        <h2 class="titulo">Criptografar</h2>
        <p class="subtitulo">Digite o texto para criptografar</p>
        <form @submit.prevent="criptografar">
          <input type="text" v-model="txtParaCripto" placeholder="Digite o texto" />
          <input type="submit" value="Criptografar">
        </form>
      </div>
      <div class="form-box">
        <img src="../public/assets/padlock.png" />
        <h2 class="titulo">Descriptografar</h2>
        <p class="subtitulo">Digite o texto para descriptografar</p>
        <form @submit.prevent="descriptografar">
          <input type="text" v-model="txtParaDescripto" placeholder="Digite o texto" />
          <input type="submit" value="Descriptografar">
        </form>
      </div>
    </section>
    <section class="box-mensagem" v-if="resultadoTexto.length > 0">
      <h4 class="subtitulo">{{ resultadoTitulo }}</h4>
      <h3>{{ resultadoTexto }}</h3>
    </section>
    <section class="box-mensagem" v-if="msgErro.length > 0">
      <h3 class="titulo-erro">{{ msgErro }}</h3>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      txtParaCripto: '',
      txtParaDescripto: '',
      msgErro: '',
      resultadoTitulo: '',
      resultadoTexto: '',
    };
  },
  methods: {
    criptografar() {
      if (this.txtParaCripto.length > 0) {
        this.resultadoTitulo = 'Texto criptografado';
        this.resultadoTexto = btoa(this.txtParaCripto);
        this.msgErro = '';
      } else {
        this.resultadoTitulo = '';
        this.resultadoTexto = '';
        this.msgErro = 'Digite um texto para criptografar';
      }
    },
    verificaBase64(texto) {
      const regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
      return regex.test(texto);
    },
    descriptografar() {
      const verificaBase64 = this.verificaBase64(this.txtParaDescripto);
      if (verificaBase64 && this.txtParaDescripto.length > 0) {
        this.resultadoTitulo = 'Texto descriptografado';
        this.resultadoTexto = atob(this.txtParaDescripto);
        this.msgErro = '';
      } else {
        this.resultadoTitulo = '';
        this.resultadoTexto = '';
        this.msgErro = 'Este não é um formato válido';
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #e2e2e2;
  font-family: Montserrat;
  color: #000;
}

header {
  padding: 15px 20px;
  background: #1f4f66;
  display: flex;
  align-items: center;
  color: #fff;
}

.titulo-header {
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}

#main {
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin: 0 auto;
  padding-top: 20px;
}

.formularios {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form-box,
.box-mensagem {
  background: #fff;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}

.form-box {
  width: calc((100% - 15px) / 2);
}

.form-box img {
  margin-top: 10px;
}

.titulo {
  color: #0482bd;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 30px;
  font-size: 26px;
  margin: 10px 0;
}

.subtitulo {
  font-weight: 300;
}


.form-box form {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 600px;
}

input[type="text"] {
  height: 40px;
  outline: none;
  font-size: 16px;
  margin: 0 10px 10px;
  padding: 0 10px;
  background-color: #e2e2e2;
  border: none;
  text-align: center;
}

input[type="submit"] {
  background-color: #0482bd;
  border: none;
  height: 50px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 0;

  cursor: pointer;
}

.titulo-erro {
  color: #f00;
}

@media (max-width: 700px) {
  .form-box {
    width: 100%;
    margin: 0px 20px 10px;
  }

  .form-box form {
    max-width: none;

  }
}

@media (max-width: 425px) {
  .titulo-header {
    font-size: 16px;
  }

  .titulo {
    font-size: 18px;
  }

  input[type="text"] {
    font-size: 14px;
  }

  .form-box {
    margin: 0 10px 10px;
  }

}
</style>