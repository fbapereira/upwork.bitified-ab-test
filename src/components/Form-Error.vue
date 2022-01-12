<template>
  <span v-bind:class="{ error: !!error }" class="form-error">{{ error }}</span>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    error: {
      type: Object as PropType<string>,
      required: true,
    },
  },
})
export default class FormError extends Vue {}
</script>
<style scoped lang="scss">
@import "../styles/variables.scss";

.form-error {
  background-color: $white;
  border-radius: 6px;
  border: solid 2px $danger;
  color: $danger;
  height: 3rem;
  line-height: 1.5rem;
  margin-left: 1rem;
  opacity: 0;
  padding: 5px 0;
  position: absolute;
  text-align: center;
  transition: opacity 0.6s;
  visibility: hidden;
  width: 120px;
  z-index: 1;

  &::after {
    border-color: transparent #e77777 transparent transparent;
    border-style: solid;
    border-width: 0.5rem;
    color: $white;
    content: "";
    margin-top: -0.5rem;
    position: absolute;
    right: 101%;
    top: 50%;
  }

  &.error {
    visibility: visible;
    opacity: 1;
  }
}
</style>
