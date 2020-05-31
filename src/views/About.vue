<template>
  <div class="about">
    <h1>About</h1>

    <p>
      This is a simple tool to read and get all the tokens associated within and address and be able to export them in a csv file. (Still in early stages)
    </p>

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
.about{
  margin: 2rem;
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
