<template>
  <div dir="rtl" class="h-[9%] w-[100%] gap-7 px-5 flex justify-around items-center bg-white shadow">
    <button @click="go_chat_page" class="footer-icon flex flex-col w-[100%] h-full justify-center items-center gap-1">
        <div>
            <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.825 17.0078C14.7312 17.2703 13.725 17.2266 13.1562 17.2266H12.2375L5.0625 20.6828L7.1625 16.1328" stroke="#C8C8C8" stroke-width="2.13"/>
                <path d="M8.69404 16.6138C8.16904 16.4825 7.68779 16.3075 7.20654 16.0888C4.10029 14.7763 2.04404 12.4575 2.00029 9.74501C1.95654 5.54501 6.85654 2.08876 12.9815 2.00126C16.394 1.95751 20.1128 3.05126 22.1253 5.02001" stroke="#C8C8C8" stroke-width="2.13"/>
                <path d="M23.6136 16.9639C24.0511 16.8327 24.4449 16.6577 24.8386 16.4827M24.8386 16.4827C27.3761 15.3452 29.0386 13.3327 28.9949 11.1014C28.9511 7.60144 24.7949 4.84519 19.7636 4.93269C14.7324 5.02019 10.6636 7.86394 10.7074 11.3639C10.7511 14.8639 14.9074 17.6202 19.9386 17.5327C20.2011 17.5327 20.4636 17.5327 20.6824 17.4889L26.8511 20.3764L24.8386 16.4827Z" stroke="#C8C8C8" stroke-width="2.13"/>
            </svg>
        </div>
        <div class="text-gray-400 text-sm">گفت و گو</div>
    </button>
    <button @click="go_notification_page" class="footer-icon w-[100%] h-full justify-center flex flex-col relative items-center gap-1">
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9986 9.7041V9C18.9986 5.13401 15.8646 2 11.9986 2C8.13261 2 4.9986 5.13401 4.9986 9V9.7041C4.9986 10.5491 4.74848 11.3752 4.27977 12.0783L3.13116 13.8012C2.08203 15.3749 2.88295 17.5139 4.70766 18.0116C9.48112 19.3134 14.5161 19.3134 19.2895 18.0116C21.1142 17.5139 21.9152 15.3749 20.866 13.8012L19.7174 12.0783C19.2487 11.3752 18.9986 10.5491 18.9986 9.7041Z" stroke="#9E9E9E" stroke-width="1.5"/>
                <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="absolute bottom-[70%] right-[25%] flex justify-center items-center font-bold bg-red-500 rounded-full text-[10px] w-[26%] h-[23%] text-white">
            <span>{{ notificationNumber }}</span>
        </div>
        <div class="text-gray-400 text-sm">اعلان</div>
    </button>
    <button class="footer-icon w-[100%] flex flex-col h-full justify-center items-center gap-1">
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="#9E9E9E" stroke-width="1.5"/>
                <path d="M7 4V2.5" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M17 4V2.5" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M2.5 9H21.5" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" fill="#9E9E9E"/>
                <path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" fill="#9E9E9E"/>
                <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="#9E9E9E"/>
                <path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" fill="#9E9E9E"/>
                <path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" fill="#9E9E9E"/>
                <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="#9E9E9E"/>
            </svg>
        </div>
        <div class="text-gray-400 text-sm">تقویم</div>
    </button>
    <button @click="go_profile_page" class="footer-icon w-[100%] flex flex-col h-full justify-center items-center gap-1">
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="6" r="4" stroke="#9E9E9E" stroke-width="1.5"/>
                <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#9E9E9E" stroke-width="1.5"/>
            </svg>
        </div>
        <div class="text-gray-400 text-sm">پروفایل</div>
    </button>
  </div>
</template>

<script setup>
import { onMounted , computed } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter()
const go_notification_page = () => {
    router.push('notificationPage')
}
const go_chat_page = () => {
    router.push('chatPage')
}
const go_profile_page = () => {
    router.push('profilePage')
}
const notificationNumber = computed(()=>{
    let date = new Date()
    return date.getSeconds()
})
</script>

<style>
.footer-icon:focus{
    border-top: 5px solid #3B85CE;
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
}
[role=tab]:focus{
    outline: none;
    border-bottom:2px solid #3B85CE;
}
</style>