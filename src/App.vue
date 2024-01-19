<script scoped>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
}

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/clavierview">Clavier</RouterLink>
    <RouterLink to="/journalview">Journal</RouterLink>
    <RouterLink to="/contactview">Contact</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: orange;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
