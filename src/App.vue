<template>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Poppins-SemiBold, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 42px;
}

input,
button {
  width: 25rem;
  height: 3.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

input {
  color: #495057;
  border: 1px solid #bebebe;

  &::placeholder {
    color: #bebebe;
  }

  &:focus {
    border-color: #c2dbfe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem #c2dbfe;
  }
}

button {
  width: 26.5rem;
  height: 3.25rem;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  border: 0;
  font-size: 1rem;
  color: #fff;
  background-color: #3d9df5;
  border-color: #3d9df5;
}
</style>
