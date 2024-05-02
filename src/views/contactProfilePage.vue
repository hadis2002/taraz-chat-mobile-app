<template>
    <div dir="rtl" class="h-screen bg-gray-50">
      <div class="background-img bg-bottom h-[40%] flex flex-col">
          <div class="flex p-7 h-[10%] justify-between items-center">
              <button>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="12.75" r="2" stroke="#616161" stroke-width="1.5"/>
                    <circle cx="12" cy="12.75" r="2" stroke="#616161" stroke-width="1.5"/>
                    <circle cx="19" cy="12.75" r="2" stroke="#616161" stroke-width="1.5"/>
                </svg>
              </button>
              <button @click="go_back_contact_chat_page">
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
                <div>سارا احمدی</div>
                <div class="text-gray-500 text-[16px]">مدیر پشتیبانی</div>
              </div>
          </div>
      </div>
      <div class="flex flex-col gap-6 items-center">
          <contactBox></contactBox>
          <mediaBox></mediaBox>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  import mediaBox from "@/components/mediaBox.vue";
  import contactBox from "@/components/contactBox.vue";
  const router = useRouter()
  const go_back_contact_chat_page = () => {
      router.back(-1)
  }
  </script>
  
  <style>
  .background-img{
      background-image: url(../assets/photos/login-background.png);
  }
  </style>