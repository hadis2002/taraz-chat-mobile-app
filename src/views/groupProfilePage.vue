<template>
  <div dir="rtl" class="h-screen bg-gray-50">
    <div class="background-img bg-bottom h-[40%] flex flex-col">
        <div class="flex p-7 h-[10%] items-center justify-end">
            <button @click="go_back_group_chat_page">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7H1M1 7L7 1M1 7L7 13" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="flex flex-col gap-2 justify-center items-center h-[60%]">
            <div class="w-20 h-20 flex justify-center">
                <img class="rounded-full h-full w-full" src="../assets/photos/monkey.jpg" alt="">
            </div>
            <button class="bg-white rounded-full p-1 -mt-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10.8334" r="2.5" stroke="#2375C8" stroke-width="1.5"/>
                    <path d="M8.14823 17.5H11.8519C14.4528 17.5 15.7532 17.5 16.6874 16.8872C17.0918 16.6219 17.439 16.2809 17.7092 15.8839C18.3334 14.9667 18.3334 13.6899 18.3334 11.1364C18.3334 8.5828 18.3334 7.30601 17.7092 6.38884C17.439 5.99178 17.0918 5.65087 16.6874 5.38557C16.0871 4.99178 15.3356 4.85102 14.1851 4.80071C13.636 4.80071 13.1633 4.39223 13.0556 3.86364C12.8941 3.07074 12.185 2.5 11.3615 2.5H8.6387C7.81513 2.5 7.10604 3.07074 6.94453 3.86364C6.83685 4.39223 6.36413 4.80071 5.81508 4.80071C4.66453 4.85102 3.91304 4.99178 3.31278 5.38557C2.90838 5.65087 2.56115 5.99178 2.29093 6.38884C1.66675 7.30601 1.66675 8.5828 1.66675 11.1364C1.66675 13.6899 1.66675 14.9667 2.29093 15.8839C2.56115 16.2809 2.90838 16.6219 3.31278 16.8872C4.24695 17.5 5.54737 17.5 8.14823 17.5Z" stroke="#2375C8" stroke-width="1.5"/>
                    <path d="M15.8333 8.33337H15" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </button>
            <div class="text-lg">گروه تولید</div>
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
import contactBox from '../components/contactBox.vue'
const router = useRouter()
const go_back_group_chat_page = () => {
    router.back(-1)
}
</script>

<style>
.background-img{
    background-image: url(../assets/photos/login-background.png);
}
</style>