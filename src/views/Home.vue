<template>
  <div class="home">
    <Register />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Register from "@/components/Register.vue"; // @ is an alias to /src

@Options({
  components: {
    Register,
  },
})
export default class Home extends Vue {}
</script>
