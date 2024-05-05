<!-- second page of login -->
<template>
  <div dir="rtl" class="flex flex-col h-screen bg-neutral-100">
    <div class="h-[30%]">
        <div class="login-background flex flex-col justify-center items-center w-full h-full rounded-b-[15%]">
          <div class=" flex flex-col gap-3 mb-[8%]">
            <div class="flex justify-center">
                <img src="../assets/photos/logo.png" alt="">
            </div>
            <div class="text-xl text-[#2375c8] font-extrabold">ورود به سامانه تراز</div>
          </div>
        </div>
    </div>
    <div class="h-[70%] justify-around flex flex-col items-center">
      <div class="information-box flex flex-col justify-center gap-5 bg-white p-5 -mt-[20%] w-[83%] h-[81%] rounded-2xl shadow">
        <div>
          <div class="text-[#2375c8] font-semibold border-b border-gray-100 pb-1">آدرس</div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">استان</label>
            <select @change="fetch_cities" class="bg-white border border-gray-200 rounded-md py-[4%] px-4 text-sm text-gray-400">
                <option class="" value="">استان محل زندگی خود را وارد نمایید</option>
                <option v-for="state in states" :key="state" :value="state.name">{{ state.name }}</option>
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">شهر</label>
            <select class="bg-white border border-gray-200 rounded-md py-[4%] px-4 text-sm text-gray-400">
                <option value="">شهر محل زندگی خود را وارد نمایید</option>
                <option v-for="item in cities" :key="item" value="">{{ item.name }}</option>
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">کد پستی</label>
            <input type="text" class="border border-gray-200 rounded-md py-[3%] px-4 placeholder:text-sm placeholder:text-gray-400" placeholder="کد پستی محل زندگی خود را وارد نمایید">
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">آدرس منزل</label>
            <textarea class="border border-gray-200 rounded-md py-3 px-4 placeholder:text-sm placeholder:text-gray-400" placeholder="آدرس محل زندگی خود را وارد نمایید"></textarea>
          </div>
        </div>
      </div>
      <div class="flex -mb-6 items-center justify-between w-full px-9">
        <button @click="go_communication_ways" class="text-white bg-[#2375c8] rounded-full p-1.5">
            <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button @click="go_back_personal_information" class="text-[#2375c8] border border-[#2375c8] rounded-full p-1.5">
            <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2375c8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted , ref } from "vue";
import axios from 'axios'
const cities = ref([])
const states = ref([])
const router = useRouter()
const go_back_personal_information = () => {
    router.push('/')
}
const go_communication_ways = () => {
    router.push({name:'communicationWaysLoginBox'})
}
const fetch_state = () => {
    axios.get('https://iran-locations-api.ir/api/v1/fa/states')
    .then((response)=>{
        states.value = response.data
        console.log(response)
    })
    .catch((err)=>{
        console.log(err , 'err state')
    })
}
const fetch_cities = (e) => {
    let state = e.target.value
    axios.get(`https://iran-locations-api.ir/api/v1/fa/cities?state=${state}`)
    .then((response)=>{
        cities.value = response.data.cities
        console.log(response)
    })
    .catch((err)=>{
        console.log(err , 'err city')
    })
}
onMounted(()=>{
    fetch_state()
})
</script>

<style>

</style>