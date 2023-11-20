<template>
  <div>
    opcoes
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
    name: 'Opcoes',
    mixins: [ApiMixin],
    props: ['id'],
    created() {
        // this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`);
        console.log('opcoes ', this.id);
    },
    beforeRouteUpdate() {
      console.log('guarda de componente beforeRouteUpdate')
    }
}
</script>