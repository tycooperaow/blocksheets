<template>
  <div class="main">
    <h1>Main Application</h1>
    <div  v-if="currentAddress == ''">
      <button class="web3-btn" @click="getMetamask()" v-if="currentAddress == ''">
        Connect To Metamask
      </button>
      {{feedback}}
    </div>
    <div v-else>
      <small>Click to get 10 recent address transaction Information</small>
      <br />
      <label>  Connected: </label>
      <button class="web3-btn " @click="getTransactions(currentAddress)">
      {{currentAddress}}
      </button>    <br />
      <button @click="getAllTokenBalances(currentAddress)">Get Token Balances</button>
    </div>
    <br />
    <small>Don't have Metamask? Enter Address Here!</small><br />
    <label>Enter Address: </label><br />
    <input type="text" v-model="query_transaction" class="address-add" placholder="Enter Ether Address"/><button class="" @click="getTransactions(query_transaction)">Get Transactions</button>
    <button class="" @click="getAllTokenBalances(query_transaction)">Get Token Balances</button>
    <!-- <button @click="getAccountsByMnemonic()">Get Accounts Mnemonic</button> -->

    <p>Your Dai Balance is: {{accountBal[1]['amount']}}</p>
    <p>Your Eth Balance is: {{accountBal[0]['amount']}}</p>
    <Spreadsheet :accountBal="accountBal" :transactions="transactions" :processing="processing" :api_token="api_token"/>

  </div>
</template>
<script>
import axios from 'axios'
import { ethers } from 'ethers';
import Spreadsheet from '@/components/main/Spreadsheet.vue';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default{
components:{
  Spreadsheet
},
name:'Main',
data(){
  return{
    processing: false,
    query_transaction: '',
    currentAddress: '',
    feedback: '',
    ethusd: 0,
    ethAccounts:[
      {address:'0x000000000', token: 'ETH', amount: .2312, fiat_amount: 2329, transactions: 1}
    ],
    accountBal:[
      {token:'eth', amount:0, fiat_amount:0},
      {token:'dai', amount:0, fiat_amount:0, coin_addr: '0x6B175474E89094C44Da98b954EedeAC495271d0F', decimal:18},
      {token:'bat', amount:0, fiat_amount:0, coin_addr: '0x0d8775f648430679a709e98d2b0cb6250d2887ef', decimal: 18},
      {token:'usdt', amount:0, fiat_amount:0, coin_addr: '0xdac17f958d2ee523a2206206994597c13d831ec7', decimal:6},
      {token:'mkr', amount:0, fiat_amount:0, coin_addr: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', decimal:18},
      {token:'link', amount:0, fiat_amount:0, coin_addr: '0x514910771af9ca656af840dff83e8264ecf986ca', decimal: 18},
      {token:'storj', amount:0, fiat_amount:0, coin_addr: '0x6B175474E89094C44Da98b954EedeAC495271d0F', decimal: 8},
      {token:'bnb', amount:0, fiat_amount:0, coin_addr: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52', decimal: 18},
    ],
    transactions: [],
    api_token: process.env.ETHERSCANAPI,
  }
},
methods:{
  getAllTokenBalances(addr){
    const contract_address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'//dai
    this.getEtherBal(addr)
    for(let contract = 1; contract < 5; contract++){
      this.getTokenAccountBal(contract, this.accountBal[contract]['coin_addr'], addr, this.accountBal[contract]['decimal'])
    }
  },
  getEtherBal(addr){
    axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${addr}&tag=latest&apikey=${this.api_token}`)
    .then((res)=>{
        // console.log(res.data)
        this.ether_amount = (res.data.result / 1e18)
        this.accountBal[0]['amount'] = (res.data.result / 1e18)
    }).catch((err)=>{
    })
  },
  getTokenAccountBal(idx, contract_address, addr, decimal){
    axios.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contract_address}&address=${addr}&tag=latest&apikey=${this.api_token}`)
    .then((res)=>{
        // console.log(res.data)
        // this.dai_amount = (res.data.result / 1e18)
        this.accountBal[idx]['amount'] = (res.data.result / Math.pow(10, decimal))
        this.accountBal
    }).catch((err)=>{
    })
  },
  getFiatAmount(){
      axios.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${this.api_token}`)
      .then((res)=>{
          this.accountBal[0]['fiat_amount'] = this.accountBal[0]['amount']*Number(res.data.result.ethusd)
          this.ethusd = res.data.result.ethusd
          console.log(res.data.result.ethusd)
      }).catch((err)=>{
      })
  },
  getProvider(){
    let infuraProvider = new ethers.providers.InfuraProvider('ropsten', '7f290e6cc00d44bfa1fdbc594bc030a0')
    // console.log(infuraProvider)
    infuraProvider.listAccounts()
    .then((res) => {
      this.ethAccounts = res
    }).catch((err)=>{
      console.log(err)
    })
  },
  getMetamask(){
    let provider = new ethers.providers.Web3Provider(web3.currentProvider);
    let metamask_addr = provider.provider.selectedAddress
    if( metamask_addr == null){
      if(localStorage.getItem('currentAddress') != null){
        this.currentAddress = localStorage.getItem('currentAddress')
          this.feedback = ''
      }else{
        console.log('feeedback')
        this.feedback = 'Sorry, you may not have a metamask wallet installed.'
      }
    }else{
      this.currentAddress = metamask_addr
      localStorage.setItem('currentAddress', metamask_addr);
    }
    this.getAllTokenBalances(this.currentAddress)
    this.getFiatAmount()
  },
  resetAddressToken(addr){
    this.currentAddress = addr
  },
  getTransactions(addr){
    this.processing = true
    let etherscanProvider = new ethers.providers.EtherscanProvider();
    console.log(`Get Address Transactions: ${addr}`)
    etherscanProvider.getHistory(addr)
    .then((history) => {
      this.processing = false
        history.forEach((tx) => {
          this.transactions.unshift(tx)
        })
    });
  }
},
created(){
  // this.getMetamask()
  // this.getProvider()
}
}
</script>
<style scoped>
.main{
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
.address-add{
  width: 40%;
  padding: .3rem .9rem;
  margin-left: 1rem;
  border: 1px solid #aaa;
}
</style>
