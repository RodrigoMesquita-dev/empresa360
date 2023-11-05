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
            <!--params não funciona com a string path-->
            <!--<router-link :to="`/home/vendas/leads/${d.id}`" class="btn btn-sm btn-primary" :to="{ name: 'lead'}">-->
            <router-link class="btn btn-sm btn-primary" :to="{ name: 'lead', params: { id: d.id }}">
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: 'Leads',
  mixins: [ApiMixin],
  created() {
      this.getDadosApi('http://localhost:3000/leads');
  },
}
</script>