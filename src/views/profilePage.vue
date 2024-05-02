<template>
  <div dir="rtl" class="h-screen bg-neutral-100">
    <div :class="containerHeight" class="flex flex-col">
        <div class="background-box p-5 flex flex-col bg-bottom h-[45%]">
          <button class="flex justify-between items-center">
            <div>
              <svg @click="submit_information" v-if="tickIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.00012 12.6112L8.9232 17.5001L20.0001 6.50006" stroke="#2375C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <svg v-if="menuIcon" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                <circle cx="12" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                <circle cx="19" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
              </svg>
            </div>
            <svg @click="back" v-if="backIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 10H3.33334M3.33334 10L8.33334 5M3.33334 10L8.33334 15" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="flex flex-col mt-[7%] items-center">
            <button class="h-20 w-20">
              <img class="h-full w-full rounded-full" src="../assets/photos/images.jpg" alt="">
            </button>
            <button class="-mt-[2.5%] bg-white rounded-full p-1">
              <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="13" r="3" stroke="#2375C8" stroke-width="1.5"/>
                <path d="M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21Z" stroke="#2375C8" stroke-width="1.5"/>
                <path d="M19 10H18" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            <div class="text-lg">سارا احمدی</div>
            <div class="text-gray-500 text-[15px]">مدیر پشتیبانی</div>
          </div>
        </div>
        <informationLoginBox @show_communication_ways_box_emit="show_communication_ways_box_emit" :communication-ways-box="communicationWaysBoxVisibility" :address-box="addressBoxVisibility" :information-box="informationBoxVisibility" :personal-information-box="personalInformationVisibility" @show_personal_information_box_emit="show_personal_information_box_emit" @show_address_box_emit="show_address_box_emit"></informationLoginBox>
    </div>
    <footerOfPages v-if="footerBox"></footerOfPages>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import footerOfPages from '@/components/footerOfPages.vue';
import informationLoginBox from '@/components/informationLoginBox.vue';
const personalInformationVisibility = ref(false)
const informationBoxVisibility = ref(true)
const addressBoxVisibility = ref(false)
const communicationWaysBoxVisibility = ref(false)
const footerBox = ref(true)
const backIcon = ref(false)
const menuIcon = ref(true)
const tickIcon = ref(false)
const containerHeight = ref('h-[91%]')
const back = () => {
  if(personalInformationVisibility.value == true){
    personalInformationVisibility.value = false
    informationBoxVisibility.value = true
    footerBox.value = true
    containerHeight.value = 'h-[91%]'
    backIcon.value = false
    tickIcon.value = false
    menuIcon.value = true
  }
  if(addressBoxVisibility.value == true){
    addressBoxVisibility.value = false
    informationBoxVisibility.value = true
    footerBox.value = true
    containerHeight.value = 'h-[91%]'
    backIcon.value = false
    tickIcon.value = false
    menuIcon.value = true
  }
  if(communicationWaysBoxVisibility.value == true){
    communicationWaysBoxVisibility.value = false
    informationBoxVisibility.value = true
    footerBox.value = true
    containerHeight.value = 'h-[91%]'
    backIcon.value = false
    tickIcon.value = false
    menuIcon.value = true
  }
}
const submit_information = () => {
    personalInformationVisibility.value = false
    addressBoxVisibility.value = false
    communicationWaysBoxVisibility.value = false
    informationBoxVisibility.value = true
    tickIcon.value = false
    backIcon.value = false
    footerBox.value = true
    menuIcon.value = true
    containerHeight.value = 'h-[91%]'
}
const show_personal_information_box_emit = () => {
  personalInformationVisibility.value = true
  informationBoxVisibility.value = false
  footerBox.value = false
  containerHeight.value = 'h-[100%]'
  tickIcon.value = true
  backIcon.value = true
  menuIcon.value = false
}
const show_address_box_emit = () => {
  informationBoxVisibility.value = false
  footerBox.value = false
  addressBoxVisibility.value = true
  tickIcon.value = true
  backIcon.value = true
  menuIcon.value = false
  containerHeight.value = 'h-[100%]'
}
const show_communication_ways_box_emit = () => {
  informationBoxVisibility.value = false
  footerBox.value = false
  communicationWaysBoxVisibility.value = true
  tickIcon.value = true
  backIcon.value = true
  menuIcon.value = false
  containerHeight.value = 'h-[100%]'
}
</script>

<style>
.background-box{
    background-image: url('../assets/photos/login-background.png');
}
.personal-information , .address-box{
  box-shadow: rgba(127, 148, 185, 0.2) 0px 2px 8px 0px;
}
</style>