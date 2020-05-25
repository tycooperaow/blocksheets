<template>
  <div class="home">
    <div class="header">
      <img alt="blocksheet logo" src="../assets/logo.png">
      <h1>BLOCKSHEETS</h1>
    </div>
    <div class="hero">
      <h2>Read All of Your Assets Into One</h2>
      <button @click="goToMainApp()">
        Get Started
      </button>
    </div>
    <div class="announcement">
      <p>This is an official submisson by the Blocksheets Team to the 2020 EthGlobal Hack Money Hackathon</p>
      <p>About the Creator:</p>
      <a href="https://www.twitter.com/tycooperaow">tycooperaow</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods:{
    goToMainApp(){
      this.$router.push({name: 'Main'})
    }
  },
created(){
  localStorage.removeItem('currentAddress')
}
}
</script>
<style scoped>

.header{display: flex; align-items: center;}
.header img{
  width: 4rem;
  margin: 0 1rem;
}
.hero{ margin: 4rem 1rem;}
</style>
