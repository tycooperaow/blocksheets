<template>
  <div class="home">
    <div class="header">
      <img alt="blocksheet logo" src="../assets/logo.png">
      <h1>BLOCKSHEETS</h1>
    </div>
    <div class="hero">
      <h2>Read All of Your Assets Into One</h2>
      <button @click="goToMainApp()" class="web3-btn">
        Get Started
      </button>
    </div>
    <h3>Project Lightly Referenced In</h3>
    <div class="featured">
      <a href="https://decrypt.co/30222/hacker-steals-1200-worth-of-ethereum-in-under-100-seconds" target="_blank">
        <img src="@/assets/blog/decrypto.png" alt="" class="blog-img"/>
        Hacker steals $1,200 worth of Ethereum in under 100 seconds</a>
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
.home{
  margin: 2rem;
}
.header{display: flex; align-items: center;}
.header img{
  width: 4rem;
  margin: 0 1rem;
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
.featured{
  width: 15rem;
  margin: 2rem;
  border-radius: 6px;
  padding: 3px;
  border: 2px solid #ddd;
  transition:1s;
}
.featured:hover{
  transform: translateY(-5px);
}
.blog-img{
  width: 100%;
}
.featured a{
  text-decoration: none;
  font-size: 1rem;
  color: var(--link-light);
}
.hero{ margin: 4rem 1rem;}
</style>
