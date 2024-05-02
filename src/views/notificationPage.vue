<template>
  <div dir="rtl" class="h-screen bg-neutral-100">
    <div class="notification-box px-7 flex items-center justify-between bg-white shadow h-[9%]">
        <div class="flex gap-2 items-center">
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9986 9.7041V9C18.9986 5.13401 15.8646 2 11.9986 2C8.13261 2 4.9986 5.13401 4.9986 9V9.7041C4.9986 10.5491 4.74848 11.3752 4.27977 12.0783L3.13116 13.8012C2.08203 15.3749 2.88295 17.5139 4.70766 18.0116C9.48112 19.3134 14.5161 19.3134 19.2895 18.0116C21.1142 17.5139 21.9152 15.3749 20.866 13.8012L19.7174 12.0783C19.2487 11.3752 18.9986 10.5491 18.9986 9.7041Z" stroke="#3B85CE" stroke-width="1.5"/>
                    <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="#3B85CE" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="text-[#3B85CE] font-black text-lg">اعلان ها</div>
        </div>
        <div class="text-sm text-gray-500">۲۴ اعلان</div>
    </div>
    <div class="h-[82%]">
        <div class="flex p-6 flex-col gap-4 h-full overflow-auto">
                    <div v-for="notification in notifications" :key="notification" class="flex flex-col">
                        <div class="bg-white flex gap-3.5 px-4 w-full items-center justify-between rounded-lg">
                           <div class="w-14 h-16 flex items-center">
                              <img class="h-[72%] w-full rounded-full" :src="notification.img" alt="">
                           </div>
                           <div class="flex w-full">
                              <div class="flex flex-col">
                                 <div class="">{{ notification.name }}</div>
                                 <div class="text-sm text-gray-500">{{ notification.text.substring(0,29) }}</div>
                              </div>
                           </div>
                        </div>
                    </div>
        </div>
    </div>
    <footerOfPages></footerOfPages>
  </div>
</template>

<script setup>
import footerOfPages from '@/components/footerOfPages.vue';
import { ref } from 'vue';
const notifications = ref([
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
</script>

<style>
.notification-box{
    box-shadow: #e6edf3 10px 5px 8px -3px;
}
</style>