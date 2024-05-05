<template>
    <div dir="rtl" class="h-screen bg-neutral-100">
        <headerOfChatPage :group-img="true" :contact-img="false" :contact-name="false" :group-name="true" :contact-menu-items="false" :group-menu-items="true"></headerOfChatPage>
        <rowChats :group-members-img="true" :selected-messages="chatCheckboxVisibility" @select_message_emit="select_message_emit"></rowChats>
        <footerOfChatPage v-if="footerOfChat"></footerOfChatPage>

        <div v-if="submitSelectedMessages" class="h-[10%]">
            <div class="submit-footer bg-[#F5F5F5] p-6 flex items-center justify-between h-full">
                <div>
                    <button @click="forward_message_to_contacts" class="bg-sky-600 text-white rounded px-4 py-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 12L14.5 7M19.5 12L14.5 17M19.5 12L9.5 12C7.83333 12 4.5 13 4.5 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <button @click="cancel_submitting_select_messages" class="h-full flex">
                    <svg class="w-3 h-3" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75 0.750002L11.25 11.25M0.75002 11.25L6.00002 6L11.25 0.75" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0 translate-y-[50%] duration-100" enter-to-class="opacity-100" leave-active-class="duration-300 ease-in translate-y-[50%]" leave-from-class="opacity-100" leave-to-class="transform opacity-0" name="fade">
            <div v-if="contactsList" class="bg-white flex flex-col pt-4 z-50 w-full h-[65%] shadow rounded-t-3xl absolute bottom-0">
                <button @click="close_contacts_list_modal" class="border-b-4 border-[#a7a7a7] mx-auto rounded-full w-[25%]"></button>
                <div class="px-6 h-[6%] flex items-end">ارسال به...</div>
                <div class="relative flex items-center px-6 w-full h-[15%]">
                    <div class="absolute right-9">
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
                    <input type="text" class="w-full ps-11 py-1.5 rounded bg-[#F5F5F5] placeholder:text-gray-300 placeholder:text-sm" placeholder="جستجو">
                </div>
                <div class="h-[79%] overflow-auto flex flex-col gap-5 px-6 pb-6">
                    <div v-if="checkboxContactPage" class="flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <input type="checkbox">
                            <div class="text-gray-400">ارسال برای همه</div>
                        </div>
                        <div>
                            <button @click="send_message_to_contact" class="text-white bg-[#2375C8] px-4 py-1 rounded">ارسال</button>
                        </div>
                    </div>
                    <div v-for="contact in contactsTab" :key="contact" class="flex flex-col">
                        <div v-touch:hold="select_contacts" class=" bg-white shadow-md cursor-pointer px-4 flex gap-3.5 items-center rounded-lg">
                           <div class="w-14 h-16 flex items-center">
                              <img class="h-[72%] w-full rounded-full" :src="contact.img" alt="">
                           </div>
                           <div class="flex justify-between w-full">
                              <div class="flex flex-col w-full">
                                 <div class="flex justify-between items-center">
                                    <div class="">{{ contact.name }}</div>
                                    <input v-if="checkboxContactPage" type="checkbox">
                                 </div>
                                 <div class="text-sm text-gray-500 ">{{ contact.text.substring(0,25) }}...</div>
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div @click="close_contacts_list_modal" v-if="blackBackground" class="w-full bg-black h-full fixed top-0 left-0 bg-opacity-20 z-40"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import headerOfChatPage from '@/components/headerOfChatPage.vue';
import rowChats from '@/components/rowChats.vue';
import footerOfChatPage from '@/components/footerOfChatPage.vue';
const footerOfChat = ref(true)
const select_message_emit = () => {
    footerOfChat.value = false
    submitSelectedMessages.value = true
    chatCheckboxVisibility.value = true
}


const submitSelectedMessages = ref(false)
const contactsList = ref(false)
const blackBackground = ref(false)
const checkboxContactPage = ref(false)
const chatCheckboxVisibility = ref(false)
const contactsTab = ref([
   {img:'/src/assets/photos/images.jpg', name:'حدیث', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/selfie.jpg', name:'علی', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/images.jpg', name:'سارا', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/selfie.jpg', name:'فرهاد', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/images.jpg', name:'عسل', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'هانا', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/selfie.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/images.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید کرده ....' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید رفته خرید خرید کرده ....' },
])
const cancel_submitting_select_messages = () => {
    chatCheckboxVisibility.value = false
    footerOfChat.value = true
    submitSelectedMessages.value = false
}
const forward_message_to_contacts = () => {
    blackBackground.value = true
    contactsList.value = true
}
const close_contacts_list_modal = () => {
    blackBackground.value = false
    contactsList.value = false
    submitSelectedMessages.value = false
    footerOfChat.value = true
    chatCheckboxVisibility.value = false
}
const select_contacts = () => {
    checkboxContactPage.value = true
}
const send_message_to_contact = () => {
    blackBackground.value = false
    contactsList.value = false
    submitSelectedMessages.value = false
    footerOfChat.value = true
    chatCheckboxVisibility.value = false
}
</script>

<style>

</style>