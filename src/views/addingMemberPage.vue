
<template>
  <div dir="rtl" class="h-screen bg-neutral-100">
    <div class="add-member-header px-6 h-[10%] bg-white flex items-center justify-between">
        <div class="text-lg font-semibold">مخاطبین</div>
        <button @click="go_back_group_chat_page">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6668 10H3.3335M3.3335 10L8.3335 5M3.3335 10L8.3335 15" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
    <div class="h-[90%] gap-7 pt-7 flex flex-col">
        <div class="relative flex items-center px-6">
                <input type="text" class="w-full rounded ps-10 py-1.5 placeholder:text-gray-300" placeholder="جستجو">
                <div class="absolute right-[10%]">
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
        <div class="h-full flex flex-col px-6 gap-3.5 pb-7 overflow-auto">
            <div v-for="contact in contacts" :key="contact" class="flex items-center">
                <div class="bg-white w-[85%] py-3 px-5 rounded-lg flex">
                    <div class="flex gap-3 items-center">
                        <div>
                            <img class="h-11 w-11 rounded-full" :src="contact.src" alt="">
                        </div>
                        <div>{{ contact.name }}</div>
                    </div>
                </div>
                <div class="w-[15%] flex justify-end">
                    <button @click="add_contact_to_group(contact)" class="bg-[#2375C8] p-1 rounded">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_1740_203145" fill="white">
                                <path d="M12.5999 3.30002C12.5999 2.80297 12.1969 2.40002 11.6999 2.40002C11.2029 2.40002 10.7999 2.80297 10.7999 3.30002V10.8H3.2999C2.80285 10.8 2.3999 11.203 2.3999 11.7C2.3999 12.1971 2.80285 12.6 3.2999 12.6H10.7999V20.1C10.7999 20.5971 11.2029 21 11.6999 21C12.1969 21 12.5999 20.5971 12.5999 20.1V12.6H20.0999C20.5969 12.6 20.9999 12.1971 20.9999 11.7C20.9999 11.203 20.5969 10.8 20.0999 10.8H12.5999V3.30002Z"/>
                            </mask>
                            <path d="M12.5999 3.30002C12.5999 2.80297 12.1969 2.40002 11.6999 2.40002C11.2029 2.40002 10.7999 2.80297 10.7999 3.30002V10.8H3.2999C2.80285 10.8 2.3999 11.203 2.3999 11.7C2.3999 12.1971 2.80285 12.6 3.2999 12.6H10.7999V20.1C10.7999 20.5971 11.2029 21 11.6999 21C12.1969 21 12.5999 20.5971 12.5999 20.1V12.6H20.0999C20.5969 12.6 20.9999 12.1971 20.9999 11.7C20.9999 11.203 20.5969 10.8 20.0999 10.8H12.5999V3.30002Z" fill="white"/>
                            <path d="M10.7999 10.8V19.8H19.7999V10.8H10.7999ZM10.7999 12.6H19.7999V3.60002H10.7999V12.6ZM12.5999 12.6V3.60002H3.5999V12.6H12.5999ZM12.5999 10.8H3.5999V19.8H12.5999V10.8ZM21.5999 3.30002C21.5999 -2.16767 17.1674 -6.59998 11.6999 -6.59998V11.4C7.22646 11.4 3.5999 7.77361 3.5999 3.30002H21.5999ZM11.6999 -6.59998C6.23229 -6.59998 1.7999 -2.16759 1.7999 3.30002H19.7999C19.7999 7.77354 16.1734 11.4 11.6999 11.4V-6.59998ZM1.7999 3.30002V10.8H19.7999V3.30002H1.7999ZM10.7999 1.80002H3.2999V19.8H10.7999V1.80002ZM3.2999 1.80002C-2.16771 1.80002 -6.6001 6.23241 -6.6001 11.7H11.3999C11.3999 16.1735 7.77341 19.8 3.2999 19.8V1.80002ZM-6.6001 11.7C-6.6001 17.1675 -2.16779 21.6 3.2999 21.6V3.60002C7.77349 3.60002 11.3999 7.22658 11.3999 11.7H-6.6001ZM3.2999 21.6H10.7999V3.60002H3.2999V21.6ZM1.7999 12.6V20.1H19.7999V12.6H1.7999ZM1.7999 20.1C1.7999 25.5676 6.23221 30 11.6999 30V12C16.1735 12 19.7999 15.6266 19.7999 20.1H1.7999ZM11.6999 30C17.1675 30 21.5999 25.5676 21.5999 20.1H3.5999C3.5999 15.6265 7.22638 12 11.6999 12V30ZM21.5999 20.1V12.6H3.5999V20.1H21.5999ZM12.5999 21.6H20.0999V3.60002H12.5999V21.6ZM20.0999 21.6C25.5675 21.6 29.9999 17.1676 29.9999 11.7H11.9999C11.9999 7.2265 15.6264 3.60002 20.0999 3.60002V21.6ZM29.9999 11.7C29.9999 6.23233 25.5674 1.80002 20.0999 1.80002V19.8C15.6265 19.8 11.9999 16.1736 11.9999 11.7H29.9999ZM20.0999 1.80002H12.5999V19.8H20.0999V1.80002ZM21.5999 10.8V3.30002H3.5999V10.8H21.5999Z" fill="white" mask="url(#path-1-inside-1_1740_203145)"/>
                        </svg>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';
const invitedListMembers = ref([])
const contacts = ref([
    {name:'سارا', src:'/src/assets/photos/selfie.jpg', id:1},
    {name:'حدیث', src:'/src/assets/photos/monkey.jpg', id:2},
    {name:'علی', src:'/src/assets/photos/selfie.jpg', id:3},
    {name:'فرهاد', src:'/src/assets/photos/monkey.jpg', id:4},
    {name:'پریا', src:'/src/assets/photos/monkey.jpg', id:5},
    {name:'امیر', src:'/src/assets/photos/selfie.jpg', id:6},
    {name:'ارین', src:'/src/assets/photos/monkey.jpg', id:7},
    {name:'عارف', src:'/src/assets/photos/selfie.jpg', id:8},
    {name:'رها', src:'/src/assets/photos/monkey.jpg', id:9},
    {name:'سارا', src:'/src/assets/photos/selfie.jpg', id:10},
])
const go_back_group_chat_page = () => {
    router.back('groupChatPage')
}
const add_contact_to_group = (contact) => {
    contacts.value = contacts.value.filter((row) => contact !== row )
    invitedListMembers.value.push(contact)
}
</script>

<style>
.add-member-header{
    box-shadow: #E7F0F9 10px 5px 8px -3px;
}
</style>