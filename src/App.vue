<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/docs">Docs</router-link> |
      <router-link to="/app">Main</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  margin: 0;
  padding: 0;
}
html, body{
  margin: 0;
  padding: 0;
  /* overflow-x: hidden;s */
  height: 100%;
  width: 100%;
}
html {
  overflow:   scroll;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* THEMES */
:root{
    --primary: #46BFBF;
    --secondary: #2775C9;
    --success: #138013;
    --danger: #b30f00;
    --bg-default: #FFFFFF;
    --bg-secondary: #dedede;
    --link-light: #00AFF0;
    --link-dark: #11607E;
    --bg-dark: #545454;
}
#nav a {
  color: var(--primary);
  margin: 0 1rem;
}
#nav{
  width:100%;
  display:flex;
  font-size: 1.2rem;
  margin: 1rem;
  justify-content:flex-start;
}
.primary-btn{
  background-color: var(--primary);
  padding: 1rem 2rem;
  font-size:.9rem;
  border:none;
  margin: .5rem;
  color: var(--bg-default);
  border-radius: 10px;
  transition: 1s;
}
.success-alert{
  border: 2px solid var(--success);
  border-radius: 10px;
  margin: 1.3rem;
  background-color: #85e085;
  color: var(--success);
  padding: .5rem 2rem;
  transition: 1s ease
}
.danger-alert{
  border: 2px solid var(--danger);
  border-radius: 10px;
  margin: 1.3rem;
  background-color: #ffb3b3;
  color: var(--danger);
  padding: .5rem 2rem;
  transition: 1s ease
}
.mt-3{margin-top:3rem;}
.dev-note{
  color:#bbb;
  font-size: .8rem;
}
</style>
