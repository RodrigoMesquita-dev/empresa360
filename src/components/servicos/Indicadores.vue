<template>
  <div>
    indicadores
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
    name: 'Indicadores',
    mixins: [ApiMixin],
    props: ['id'],
    created() {
        this.getDadosApi(`http://localhost:3000/servicos/${this.id}`);
        console.log('indicadores', this.id);
    },
}
</script>