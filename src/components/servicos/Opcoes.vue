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
}
</script>