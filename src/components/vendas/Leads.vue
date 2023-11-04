<template>
  <div>
    <h3>lead</h3>
    <table class="table table-hover">
      <thead>
        <th scope="col">id</th>
        <th scope="col">nome</th>
        <th scope="col">telefone</th>
        <th scope="col">***</th>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{d.id}}</td>
          <td>{{d.nome}}</td>
          <td>{{d.telefone}}</td>
          <td>
            <router-link to="/home/vendas/leads" class="btn btn-sm btn-primary">
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Leads',
  data: () => ({
    dados: null 
  }),
  methods: {
    getDadosApi() {
      // aqui chamaremos os dados salvosd no nosso json-server
      fetch('http://localhost:3000/leads')
        .then(response => {
          return response.json(); 
        })
        .then(response => {
          this.dados = response;
        })
    },
  },
  created() {
      this.getDadosApi();
  },
}
</script>