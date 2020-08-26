<template>
  <div class="home">
    <modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">custom header</h3>
    </modal>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Lista de servicos</h4>
            <ul class="icons-list">
              <li v-for="servico in listaDeServico" :key="servico.id">
                <a href="#" v-on:click="openService(servico)">{{
                  servico.descricao
                }}</a>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import NavbarComponent from "@/components/Navbar.vue";

@Component({
  components: {
    HelloWorld,
    NavbarComponent
  }
})
export default class Home extends Vue {
  listaDeServico = [
    {
      status: "Aberto",
      id: 1,
      descricao: "Servico 1",
      desconto: 10,
      total: "1200",
      clienteID: 1
    },
    {
      status: "Pago",
      id: 2,
      descricao: "Servico 2",
      desconto: 20,
      total: "400",
      clienteID: 1
    },
    {
      status: "Fechado",
      id: 3,
      descricao: "Servico 3",
      desconto: 50,
      total: "500",
      clienteID: 2
    },
    {
      status: "Cancelado",
      id: 4,
      descricao: "Servico 4",
      desconto: 0,
      total: "100",
      clienteID: 3
    }
  ];
  clientes = [
    { id: 1, nome: "Rafael", endereco: "Rua joao", tel: "111", email: "rafa@" },
    {
      id: 2,
      nome: "Marcelo",
      endereco: "Rua joao",
      tel: "111",
      email: "rafa@"
    },
    { id: 3, nome: "Joao", endereco: "Rua joao", tel: "111", email: "rafa@" }
  ];
  showModal = false;

  openService(servico: any) {
    console.log(servico);
    this.showModal = true;
  }
}
</script>
