<template>
  <div class="docs">
    <h1>Documentation</h1>
    <p>More documentation is comming soon!</p>
    <h3>How it works</h3>
    <ul>
      <li>Go To Here: <router-link :to="{name: 'Main'}">App</router-link></li>
      <li>Click <span class="important">"Connect to Metamask"</span>then your address should be automatically loaded</li>
      <li>If <span class="important">"Sorry, you may not have a metamask wallet installed."</span>, occurs, you can copy your address and paste it in the "Enter Address Field"</li>
    </ul>
    <br /><br />
    <button @click="goToMainApp()" class="web3-btn">
      Get Started
    </button>
  </div>
</template>
<script>
export default{
  methods:{
    goToMainApp(){
      this.$router.push({name: 'Main'})
    }
  },
}
</script>
<style scoped>
.docs{
  margin: 2rem;
}
ul li{
  margin: 1rem;
  margin-left: 3rem;
}
.important{
  color: var(--link-light);
}
.web3-btn{
  margin: 1rem 0;
  border-radius: 5px;
  background: #46BFBF;
  padding: .4rem 2rem;
  color: #fff;
  font-size: .9rem;
  border: none;
}
</style>
