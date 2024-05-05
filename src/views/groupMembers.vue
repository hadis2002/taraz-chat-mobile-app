<template>
  <div dir="rtl" class="h-screen bg-neutral-100">
    <headerOfChatPage :contact-name="false" :group-name="true" :contact-menu-items="false" :group-menu-items="true"></headerOfChatPage>
    <div class="flex flex-col pt-7 gap-3.5 h-[90%]">
        <div class="px-6">
            <div class="relative flex items-center">
                <input type="text" class="w-full rounded ps-10 py-1.5 placeholder:text-gray-300" placeholder="جستجو">
                <div class="absolute right-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1740_203136)">
                            <circle cx="9.58317" cy="9.58329" r="7.91667" stroke="#9E9E9E" stroke-width="1.5"/>
                            <path d="M15.4165 15.4166L18.3332 18.3333" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1740_203136">
                             <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="px-6 flex justify-between">
            <ul class="list-disc text-gray-400 px-3.5">
                <li>اعضای گروه</li>
            </ul>
            <div v-if="checkBox" class="flex items-center gap-2">
                <div>
                    <input type="checkbox">
                </div>
                <div class="text-gray-400">انتخاب همه</div>
            </div>
        </div>
        <div class="h-full flex flex-col pb-7 gap-3.5 px-6 overflow-auto">
            <button v-touch:hold="select_member" v-for="(member,index) in members" :key="index" class="flex bg-white relative px-5 py-3 rounded-lg justify-between">
                <div class="flex gap-3 items-center">
                    <div>
                        <img class="h-11 w-11 rounded-full" :src="member.src" alt="">
                    </div>
                    <div class="flex gap-1 items-center">
                        <span>{{ member.name }}</span>
                        <span v-if="index == 0" class="text-sm text-gray-400">( مدیر پشتیبانی )</span>
                        <span v-if="index == 1" class="text-sm text-gray-400">(ادمین)</span>
                    </div>
                </div> 
                <div v-if="checkBox">
                    <input type="checkbox">
                </div>         
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import headerOfChatPage from '@/components/headerOfChatPage.vue';
const members = ref([
    {name: 'حدیث', src:'/src/assets/photos/monkey.jpg'},
    {name: 'سارا', src:'/src/assets/photos/selfie.jpg'},
    {name: 'پریا', src:'/src/assets/photos/monkey.jpg'},
    {name: 'امیر', src:'/src/assets/photos/selfie.jpg'},
    {name: 'ارین', src:'/src/assets/photos/monkey.jpg'},
    {name: 'عارف', src:'/src/assets/photos/selfie.jpg'},
    {name: 'سارا', src:'/src/assets/photos/monkey.jpg'},
    {name: 'علی', src:'/src/assets/photos/selfie.jpg'},
    {name: 'حدیث', src:'/src/assets/photos/monkey.jpg'},
    {name: 'سحر', src:'/src/assets/photos/monkey.jpg'},
    {name: 'فرهاد', src:'/src/assets/photos/selfie.jpg'},
    {name: 'مهراد', src:'/src/assets/photos/monkey.jpg'},
    {name: 'حدیث', src:'/src/assets/photos/selfie.jpg'},
])
</script>

<style>

</style>