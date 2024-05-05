<template>
    <div dir="rtl" class="h-screen bg-gray-50">
      <div class="background-img bg-bottom h-[40%] flex flex-col">
          <div class="flex p-7 h-[10%] justify-between items-center">
              <button v-if="menuIcon">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="12.75" r="2" stroke="#616161" stroke-width="1.5"/>
                    <circle cx="12" cy="12.75" r="2" stroke="#616161" stroke-width="1.5"/>
                    <circle cx="19" cy="12.75" r="2" stroke="#616161" stroke-width="1.5"/>
                </svg>
              </button>
              <button @click="submit_information" v-if="tickIcon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.00012 12.6112L8.9232 17.5001L20.0001 6.50006" stroke="#2375C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button @click="go_back_saved_message_chat_page">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 7H1M1 7L7 1M1 7L7 13" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </button>
          </div>
          <div class="flex flex-col gap-2 justify-center items-center h-[60%]">
              <button class="flex w-20 h-20 justify-center">
                  <img class="rounded-full w-full h-full" src="../assets/photos/images.jpg" alt="">
              </button>
              <div class="text-lg text-center">
                <div>حدیث عبداله زاده</div>
                <div class="text-gray-500 text-[16px]">مدیر پشتیبانی</div>
              </div>
          </div>
      </div>
      <div class="flex flex-col mt-[8%] gap-6 items-center">
          <informationLoginBox @show_communication_ways_box_emit="show_communication_ways_box_emit" :communication-ways-box="communicationWaysBoxVisibility" :address-box="addressBoxVisibility" :information-box="informationBoxVisibility" :personal-information-box="personalInformationVisibility" @show_personal_information_box_emit="show_personal_information_box_emit" @show_address_box_emit="show_address_box_emit" class="w-full"></informationLoginBox>
          <mediaBox v-if="media"></mediaBox>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  import informationLoginBox from "@/components/informationLoginBox.vue";
  import mediaBox from "@/components/mediaBox.vue";
  const router = useRouter()
  const media = ref(true)
  const menuIcon = ref(true)
  const tickIcon = ref(false)
  const personalInformationVisibility = ref(false)
  const informationBoxVisibility = ref(true)
  const addressBoxVisibility = ref(false)
  const communicationWaysBoxVisibility = ref(false)
  const go_back_saved_message_chat_page = () => {
      if(media.value == true){
        router.back(-1)
      }
      if(personalInformationVisibility.value == true){
        personalInformationVisibility.value = false
        informationBoxVisibility.value = true
        media.value = true
        menuIcon.value = true
        tickIcon.value = false
      } 
      if(addressBoxVisibility.value == true){
        addressBoxVisibility.value = false
        informationBoxVisibility.value = true
        media.value = true
        menuIcon.value = true
        tickIcon.value = false
      } 
      if(communicationWaysBoxVisibility.value == true){
        communicationWaysBoxVisibility.value = false
        informationBoxVisibility.value = true
        media.value = true
        menuIcon.value = true
        tickIcon.value = false
      } 
  }
const show_personal_information_box_emit = () => {
    media.value = false
    personalInformationVisibility.value = true
    informationBoxVisibility.value = false
    menuIcon.value = false
    tickIcon.value = true
}
const show_address_box_emit = () => {
    media.value = false
    addressBoxVisibility.value = true
    informationBoxVisibility.value = false
    menuIcon.value = false
    tickIcon.value = true
}
const show_communication_ways_box_emit = () => {
    media.value = false
    communicationWaysBoxVisibility.value = true
    informationBoxVisibility.value = false
    menuIcon.value = false
    tickIcon.value = true
}
const submit_information = () => {
    if(personalInformationVisibility.value == true){
        personalInformationVisibility.value = false
        informationBoxVisibility.value = true
        media.value = true
        menuIcon.value = true
        tickIcon.value = false
      } 
      if(addressBoxVisibility.value == true){
        addressBoxVisibility.value = false
        informationBoxVisibility.value = true
        media.value = true
        menuIcon.value = true
        tickIcon.value = false
      } 
      if(communicationWaysBoxVisibility.value == true){
        communicationWaysBoxVisibility.value = false
        informationBoxVisibility.value = true
        media.value = true
        menuIcon.value = true
        tickIcon.value = false
      } 
}
  </script>
  
  <style>
  .background-img{
      background-image: url(../assets/photos/login-background.png);
  }
  </style>