<!-- second page of create meeting -->
<template>
  <div dir="rtl" class="h-screen flex flex-col">
    <div class="h-[45%]">
        <img class="h-full w-full" src="../assets/photos/meet.jpg" alt="">
    </div>
    <div class="h-[55%] justify-between px-7 py-5 flex flex-col">
        <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-1.5">
            <div class="flex gap-2 items-center">
                <div>
                    <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="#616161" stroke-width="1.5"/>
                        <path d="M7 4V2.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M17 4V2.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M2.5 9H21.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" fill="#616161"/>
                        <path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" fill="#616161"/>
                        <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="#616161"/>
                        <path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" fill="#616161"/>
                        <path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" fill="#616161"/>
                        <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="#616161"/>
                    </svg>
                </div>
                <label class="text-gray-500 font-semibold">تاریخ</label>
            </div>
            <div class="relative">
                <date-picker :column="1" mode="single" class="date-picker rounded w-full py-1.5 px-3 border border-gray-200 placeholder:text-sm" placeholder="تاریخ میتینگ را وارد نمایید"></date-picker>                    
                <button class="absolute inset-y-0 end-0 flex items-center pe-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z" fill="#0A66C2"/>
                    </svg>
                </button>
            </div>
            </div>
            <div class="flex flex-col gap-1.5">
                <div class="flex gap-2 items-center">
                    <div>
                      <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="13" r="9" stroke="#616161" stroke-width="1.5"/>
                        <path d="M12 9V13L14.5 15.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.5 4.5L7.50002 2" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 4.5L16.5 2" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <label class="text-gray-500 font-semibold">ساعت</label>
                </div>
                <div class="flex gap-5 justify-between">
                    <div class="relative">
                      <VueTimepicker class="time-picker-input" placeholder="شروع جلسه"></VueTimepicker>
                      <button class="absolute inset-y-0 end-0 flex items-center pe-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z" fill="#0A66C2"/>
                        </svg>
                      </button>
                    </div>
                    <div class="relative">
                      <VueTimepicker class="" placeholder=" پایان جلسه"></VueTimepicker>
                      <button class="absolute inset-y-0 end-0 flex items-center pe-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z" fill="#0A66C2"/>
                        </svg>
                      </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <button @click="go_third_page_of_meeting" class="bg-[#2375C8] rounded-full p-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33984 9.00056H14.6591M14.6591 9.00056L10.4144 4.75586M14.6591 9.00056L10.4144 13.2453" stroke="white" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button @click="go_back_first_page_of_meeting" class="border border-[#2375C8] rounded-full p-2">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1493 8.4894H2.83008M2.83008 8.4894L7.07478 4.24469M2.83008 8.4894L7.07478 12.7341" stroke="#2375C8" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import VueTimepicker from 'vue3-timepicker'
import 'vue3-timepicker/dist/VueTimepicker.css'
import datePicker from '@alireza-ab/vue3-persian-datepicker'
import { useRouter } from 'vue-router';
const router = useRouter()
const go_back_first_page_of_meeting = () => {
    router.push('meetingPage')
}
const go_third_page_of_meeting = () => {
    router.push('thirdPageOfMeeting')
}
</script>

<style>
.pdp-pointer{
    display: none;
}
.vue__time-picker{
  width: 100% !important;
}
.vue__time-picker input.vue__time-picker-input {
  width: 100% !important;
  border-color: #E5E7EB !important;
  border-radius: 4px;
}
.vue__time-picker input.vue__time-picker-input::placeholder {
  font-size: 14px;
}
</style>