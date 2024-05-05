<template>
  <div dir="rtl" class="bg-neutral-100 h-screen">
    <div class="archived-users-header px-7 flex items-center justify-between bg-white shadow h-[9%]">
        <div class="flex gap-2 items-center">
            <div>
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.83301 11.5002C1.83301 7.17895 1.83301 5.01835 3.17544 3.67592C4.51786 2.3335 6.67847 2.3335 10.9997 2.3335C15.3209 2.3335 17.4815 2.3335 18.8239 3.67592C20.1663 5.01835 20.1663 7.17895 20.1663 11.5002" stroke="#616161" stroke-width="1.5"/>
                    <path d="M1.83301 13.3333C1.83301 10.7664 1.83301 9.48297 2.33256 8.50254C2.77198 7.64013 3.47314 6.93897 4.33555 6.49955C5.31598 6 6.59943 6 9.16634 6H12.833C15.3999 6 16.6834 6 17.6638 6.49955C18.5262 6.93897 19.2274 7.64013 19.6668 8.50254C20.1663 9.48297 20.1663 10.7664 20.1663 13.3333C20.1663 15.9002 20.1663 17.1837 19.6668 18.1641C19.2274 19.0265 18.5262 19.7277 17.6638 20.1671C16.6834 20.6667 15.3999 20.6667 12.833 20.6667H9.16634C6.59943 20.6667 5.31598 20.6667 4.33555 20.1671C3.47314 19.7277 2.77198 19.0265 2.33256 18.1641C1.83301 17.1837 1.83301 15.9002 1.83301 13.3333Z" stroke="#616161" stroke-width="1.5"/>
                    <path d="M11.0003 16.0835L11.0003 10.5835M11.0003 10.5835L12.8337 12.8752M11.0003 10.5835L9.16699 12.8752" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="text-gray-500 font-black text-[17px]">کاربران آرشیو شده</div>
        </div>
        <button @click="go_back_chat_page">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6663 10H3.33301M3.33301 10L8.33301 5M3.33301 10L8.33301 15" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
            <div v-for="(user,index) in archivedUsers" :key="index" class="flex flex-col relative">
                <div class="bg-white h-full w-full px-4 py-1 flex rounded-lg">
                    <div class="flex items-center gap-3 w-[95%]">
                        <div class="w-14 h-16 flex items-center">
                            <img class="h-[72%] w-full rounded-full" :src="user.img" alt="">
                        </div>
                        <div class="flex flex-col w-full">
                            <div class="">{{ user.name }}</div>
                            <div class="text-sm text-gray-500">{{ user.text.substring(0,38) }}</div>
                        </div>
                    </div>
                    <div class="h-[85%] mt-auto">
                        <button @click="show_menu_details(index)">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="4.16667" cy="10.0002" rx="1.66667" ry="1.66667" stroke="#757575" stroke-width="1.5"/>
                                <circle cx="9.99967" cy="10.0002" r="1.66667" stroke="#757575" stroke-width="1.5"/>
                                <ellipse cx="15.8337" cy="10.0002" rx="1.66667" ry="1.66667" stroke="#757575" stroke-width="1.5"/>
                            </svg>
                        </button>
                    </div>
                    <div v-if="menuDetails == index" class="absolute left-[6%] rounded top-[42%] w-[55%] p-5 gap-7 z-50 flex flex-col bg-white shadow">
                              <button @click="close_menu_details" class="w-fit ms-auto">
                                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33301 1.3335L10.6663 10.6668M1.33303 10.6668L5.99969 6.00016L10.6664 1.3335" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                                 </svg>
                              </button>
                              <div class="flex items-center gap-2">
                                 <div>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1.5 9.5C1.5 5.96447 1.5 4.1967 2.59835 3.09835C3.6967 2 5.46447 2 9 2C12.5355 2 14.3033 2 15.4017 3.09835C16.5 4.1967 16.5 5.96447 16.5 9.5" stroke="#757575" stroke-width="1.5"/>
                                       <path d="M1.5 11C1.5 8.8998 1.5 7.8497 1.90873 7.04754C2.26825 6.34193 2.84193 5.76825 3.54754 5.40873C4.3497 5 5.3998 5 7.5 5H10.5C12.6002 5 13.6503 5 14.4525 5.40873C15.1581 5.76825 15.7317 6.34193 16.0913 7.04754C16.5 7.8497 16.5 8.8998 16.5 11C16.5 13.1002 16.5 14.1503 16.0913 14.9525C15.7317 15.6581 15.1581 16.2317 14.4525 16.5913C13.6503 17 12.6002 17 10.5 17H7.5C5.3998 17 4.3497 17 3.54754 16.5913C2.84193 16.2317 2.26825 15.6581 1.90873 14.9525C1.5 14.1503 1.5 13.1002 1.5 11Z" stroke="#757575" stroke-width="1.5"/>
                                       <path d="M9 8.75L9 13.25M9 13.25L10.5 11.375M9 13.25L7.5 11.375" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </div>
                                 <div class="text-gray-500">خروج از آرشیو</div>
                              </div>
                              <div class="flex items-center gap-2">
                                 <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <g clip-path="url(#clip0_1740_204101)">
                                          <path d="M16.5 12C16.5 9.87868 16.5 8.81802 15.841 8.15901C15.182 7.5 14.1213 7.5 12 7.5H6C3.87868 7.5 2.81802 7.5 2.15901 8.15901C1.5 8.81802 1.5 9.87868 1.5 12C1.5 14.1213 1.5 15.182 2.15901 15.841C2.81802 16.5 3.87868 16.5 6 16.5H12C14.1213 16.5 15.182 16.5 15.841 15.841C16.5 15.182 16.5 14.1213 16.5 12Z" stroke="#616161" stroke-width="1.5"/>
                                          <path d="M13.5 7.5V6C13.5 3.51472 11.4853 1.5 9 1.5C6.51472 1.5 4.5 3.51472 4.5 6V7.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                       </g>
                                       <defs>
                                          <clipPath id="clip0_1740_204101">
                                             <rect width="18" height="18" fill="white" transform="matrix(-1 0 0 1 18 0)"/>
                                          </clipPath>
                                       </defs>
                                    </svg>
                                 </div>
                                 <div class="text-gray-500">مسدود کردن</div>
                              </div>
                              <div class="flex items-center gap-2">
                                 <div>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M15.3751 5H2.625" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                       <path d="M14.125 6.875L13.78 12.0493C13.6473 14.0405 13.5809 15.0361 12.9322 15.6431C12.2834 16.25 11.2856 16.25 9.29001 16.25H8.70999C6.71439 16.25 5.71659 16.25 5.06783 15.6431C4.41907 15.0361 4.3527 14.0405 4.21996 12.0493L3.875 6.875" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                       <path d="M7.125 8.75L7.5 12.5" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                       <path d="M10.875 8.75L10.5 12.5" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                       <path d="M4.875 5C4.91691 5 4.93786 5 4.95686 4.99952C5.57444 4.98387 6.11927 4.59118 6.32941 4.01024C6.33588 3.99237 6.3425 3.97249 6.35576 3.93273L6.42857 3.71429C6.49073 3.52781 6.52181 3.43457 6.56304 3.3554C6.72751 3.03955 7.03181 2.82023 7.38346 2.76407C7.4716 2.75 7.56988 2.75 7.76645 2.75H10.2336C10.4301 2.75 10.5284 2.75 10.6165 2.76407C10.9682 2.82023 11.2725 3.03955 11.437 3.3554C11.4782 3.43457 11.5093 3.52781 11.5714 3.71429L11.6442 3.93273C11.6575 3.97244 11.6641 3.99238 11.6706 4.01024C11.8807 4.59118 12.4256 4.98387 13.0431 4.99952C13.0621 5 13.0831 5 13.125 5" stroke="#757575" stroke-width="1.5"/>
                                    </svg>
                                 </div>
                                 <div class="text-gray-500">حذف</div>
                              </div>
                    </div>
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
const menuDetails = ref(-1)
const archivedUsers = ref([
   {img:'/src/assets/photos/images.jpg', name:'سارا', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/selfie2.jpg', name:'فرهاد', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/monkey.jpg', name:'رها', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/selfie2.jpg', name:'هانا', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/monkey.jpg', name:'علی', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/selfie2.jpg', name:'حدیث', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/monkey.jpg', name:'مهرداد', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/selfie.jpg', name:'مهراد', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/monkey.jpg', name:'پریسا', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/monkey.jpg', name:'امیر', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/selfie2.jpg', name:'پریا', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/monkey.jpg', name:'حسین', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
   {img:'/src/assets/photos/monkey.jpg', name:'کریم', text:'رفته ال خرید خ خرید رفته خرید کرده ...' },
])
const go_back_chat_page = () => {
    router.push('chatPage')
}
const show_menu_details = (index) => {
  menuDetails.value = (menuDetails.value == index ) ? -1 : index
}
const close_menu_details = () => {
   menuDetails.value = -1
}
</script>

<style>
.archived-users-header{
    box-shadow: #e6edf3 10px 5px 8px -3px;
}
</style>