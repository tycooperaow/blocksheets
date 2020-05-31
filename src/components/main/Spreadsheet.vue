<template>
  <div id="Spreadsheet">
    <table>
      <tr>
        <th>Token/Collectable</th>
        <th>Amount</th>
        <th>Fiat Amount (In USD)</th>
      </tr>
      <tr v-for="(accbal, idx) in accountBal" :key="idx">
        <td colspan="1" class="token-area">{{accbal['token']}}</td>
        <td colspan="1">{{accbal['amount'].toFixed(4)}}</td>
        <td colspan="1">{{(accbal['fiat_amount']).toFixed(2)}}</td>
      </tr>
    </table>
    <br />
  <div v-if="!processing">
    <table>
      <tr>
        <th>Txn Hash</th>
        <th>Timestamp</th>
      </tr>
      <br />
      <tr v-for="(tx, tx_id) in transactions" :key="tx_id"  v-if="tx_id < 10" >
        <td colspan="3">
          <a href="#" @click="gotoEtherScan(tx['hash'])">{{tx['hash']}}</a></td>
        <td colspan="1">{{setLocalTime(tx['timestamp'])}}</td>
        <br />
      </tr>
    </table>
  </div>
  <div v-else-if="processing" class="processing-spinner">
   <vue-spinner color="#2eb8b8" size="200px"></vue-spinner>
  </div>

  </div>
</template>
<script>
import axios from 'axios'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
export default{
  components:{
    'vue-spinner': ScaleLoader
  },
  props: ['accountBal', 'transactions', 'processing', 'api_token'],
  data(){
    return{

    }
  },
  methods:{
  gotoEtherScan(scan){
    window.open(`https://etherscan.io/tx/${scan}`, '_blank');
  },
  autoSet(num){
    if(isNaN(num)){
      return num
    }else{
        return 0
    }
  },
  setLocalTime(epoch){
    var date = new Date(Number(epoch)*1000);
    const m = date.getMonth()+1
    const d = date.getDate()
    const y = date.getFullYear()
    const h = date.getHours()
    const min = date.getMinutes()
    let realMin = ''
    if(min < 10){
      realMin = `0${min}`
    }else{
      realMin = min
    }
    const full_time = `${m}/${d}/${y} , ${h}:${realMin} `
    return full_time
  },
},
created(){
}
}
</script>
<style scoped>
#Spreadsheet{
  margin: 1rem;
}
.token-area{
  text-transform:uppercase;
}
table th{
  border: 2px solid #ddd;
  padding:.5rem;
}
.processing-spinner{
  margin: 2rem;
  transform: scale(1.6);
}
</style>
