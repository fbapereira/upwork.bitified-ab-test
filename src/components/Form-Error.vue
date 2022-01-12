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
.form-error {
  visibility: hidden;
  position: absolute;
  height: 3rem;
  line-height: 3rem;
  width: 120px;
  background-color: #fff;
  color: #e77777;
  text-align: center;
  padding: 5px 0;
  border: solid 2px #e77777;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
  margin-left: 1rem;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 101%;
    margin-top: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent #e77777 transparent transparent;
    color: white;
  }

  &.error {
    visibility: visible;
    opacity: 1;
  }
}
</style>
