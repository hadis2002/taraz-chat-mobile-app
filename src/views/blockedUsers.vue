<template>
  <div dir="rtl" class="h-screen bg-neutral-100">
    <div class="blocked-users-header px-7 justify-between items-center flex bg-white shadow h-[9%]">
        <div class="flex items-center">
            <div class="text-gray-500 font-black text-lg">مسدود شده ها</div>
        </div>
        <button @click="go_back_chat_page">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6668 10H3.3335M3.3335 10L8.3335 5M3.3335 10L8.3335 15" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
    <div class="h-[91%] flex flex-col">
        <div class="h-[10%] px-6 py-1 flex items-end">
            <div class="relative flex items-center w-full">
                <div class="absolute right-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1740_205034)">
                            <circle cx="9.58366" cy="9.58334" r="7.91667" stroke="#9E9E9E" stroke-width="1.5"/>
                            <path d="M15.417 15.4167L18.3337 18.3333" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1740_205034">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <input type="text" class="w-full ps-11 py-1.5 rounded placeholder:text-gray-300 placeholder:text-sm" placeholder="جستجو">
            </div>
        </div>
        <div class="flex p-6 flex-col gap-4 h-[90%] overflow-auto">
                    <div v-for="user in blockedUsersList" :key="user" class="flex w-full gap-3 items-center">
                        <div class="bg-white w-[90%] px-4 flex gap-3.5 items-center justify-center rounded-lg">
                           <div class="w-14 h-16 flex items-center">
                              <img class="h-[72%] w-full rounded-full" :src="user.img" alt="">
                           </div>
                           <div class="flex w-full">
                              <div class="flex flex-col">
                                 <div class="">{{ user.name }}</div>
                                 <div class="text-sm text-gray-500">{{ user.text.substring(0,27) }}</div>
                              </div>
                           </div>
                        </div>
                        <div class="w-[10%] flex items-center">
                            <button @click="remove_from_blocked_users(user)" class="bg-[#2375C8] rounded p-1">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1740_204966)">
                                    <path d="M1.66699 13.3333C1.66699 10.9763 1.66699 9.79781 2.39923 9.06558C3.13146 8.33334 4.30997 8.33334 6.66699 8.33334H13.3337C15.6907 8.33334 16.8692 8.33334 17.6014 9.06558C18.3337 9.79781 18.3337 10.9763 18.3337 13.3333C18.3337 15.6904 18.3337 16.8689 17.6014 17.6011C16.8692 18.3333 15.6907 18.3333 13.3337 18.3333H6.66699C4.30997 18.3333 3.13146 18.3333 2.39923 17.6011C1.66699 16.8689 1.66699 15.6904 1.66699 13.3333Z" stroke="white" stroke-width="1.5"/>
                                    <path d="M5 8.33332V6.66666C5 3.90523 7.23858 1.66666 10 1.66666C12.3298 1.66666 14.2874 3.26012 14.8425 5.41666" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1740_204966">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </button>
                        </div>
                    </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const unBlockedUsersList = ref([])
const blockedUsersList = ref([
   {img:'/src/assets/photos/monkey.jpg', name:'حدیث', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/selfie.jpg', name:'علی', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'سارا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/selfie.jpg', name:'فرهاد', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'عسل', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'هانا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/selfie.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/selfie.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید خرید کرده ....' },
])
const remove_from_blocked_users = (user) => {
    blockedUsersList.value = blockedUsersList.value.filter((row) => user !== row)
    unBlockedUsersList.value.push(user)
}
const go_back_chat_page = () => {
    router.push('chatPage')
}
</script>

<style>
.blocked-users-header{
    box-shadow: #e6edf3 10px 5px 8px -3px;
}
</style>