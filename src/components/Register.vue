<template>
  <div class="container">
    <h2>Get started by choosing a name below</h2>
    <input v-model="name" placeholder="Value" />
    <button @click="onSubmit">Continue</button>
    <p>{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { apiService } from "@/services/api.service";

@Options({})
export default class Register extends Vue {
  name!: string;
  error!: string;

  async onSubmit(): Promise<void> {
    apiService.create(this.name).then(() => {
      this.$router.push("List");
    });
  }
}
</script>
<style scoped lang="scss"></style>
