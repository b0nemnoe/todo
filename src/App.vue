<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/tasks">Feladatok Listája</router-link>
          </li>
          <li>
            <router-link to="/newtask">Új Feladat</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}

header {
  background-color: #007bff;
  padding: 1rem 0;
  color: #fff;
  height: max-content;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

nav ul li a:hover {
  color: #e0e0e0;
}

main {
  padding: 2rem;
}

#app{
  min-width: 300px;
}
header{
  align-items: flex-start;
  align-content: flex-start;
}
</style>
