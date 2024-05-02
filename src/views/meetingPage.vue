<!-- first page of create meeting -->
<template>
  <div dir="rtl" class="h-screen flex flex-col">
    <div class="h-[45%]">
        <img class="h-full w-full" src="../assets/photos/meet.jpg" alt="">
    </div>
    <div class="h-[55%] px-7 py-5 flex flex-col justify-between">
        <div class="flex flex-col">
            <input class="meeting-name border-b border-gray-200 pb-3" placeholder="عنوان میتینگ"/>
        </div>
        <div>
            <button @click="go_second_page_of_meeting" class="bg-[#2375C8] rounded-full p-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33984 9.00056H14.6591M14.6591 9.00056L10.4144 4.75586M14.6591 9.00056L10.4144 13.2453" stroke="white" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const go_second_page_of_meeting = () => {
    router.push('secondPageOfMeeting')
}
</script>

<style>
.meeting-name:focus{
    outline: none;
}
</style>