<template>
  <div class="container">
    <h2>Get started by choosing a name below</h2>
    <div>
      <input v-model="name" placeholder="Value" />
      <FormError :error="error"></FormError>
    </div>
    <button @click="onSubmit">Continue</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { apiService } from "@/services/api.service";
import FormError from "@/components/Form-Error.vue";
import store from "@/store";

@Options({
  components: {
    FormError,
  },
})
export default class Register extends Vue {
  name = "";
  error = "";

  async onSubmit(): Promise<void> {
    try {
      const user = await apiService.create(this.name);
      store.dispatch("register", user);
      this.$router.push("List");
    } catch (err) {
      this.error =
        err?.response?.data?.validation_error?.details[0].message ||
        "unknown error";
    }
  }
}
</script>
<style scoped lang="scss"></style>
