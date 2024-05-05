<!-- first page of login -->
<template>
  <div dir="rtl" class="flex flex-col h-screen bg-neutral-100">
    <div class="h-[30%]">
        <div class="login-background flex flex-col justify-center items-center w-full h-full rounded-b-[15%]">
          <div class=" flex flex-col gap-3 mb-[8%]">
            <div class="flex justify-center">
                <img src="../assets/photos/logo.png" alt="">
            </div>
            <div class="text-xl text-[#2375c8] font-extrabold">ورود به سامانه تراز</div>
          </div>
        </div>
    </div>
    <div class="h-[70%] flex flex-col items-center">
      <div class="information-box flex flex-col justify-center gap-3 bg-white p-5 -mt-[9%] w-[83%] h-[94%] rounded-2xl shadow">
        <div>
          <div class="text-[#2375c8] text-lg border-b border-gray-100 pb-1">اطلاعات شخصی</div>
        </div>
        <div class="flex flex-col gap-2.5">
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">نام</label>
            <input type="text" class="border border-gray-200 rounded-md py-1 px-4 placeholder:text-sm placeholder:text-gray-400" placeholder="نام خود را وارد نمایید">
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">نام خانوادگی</label>
            <input type="text" class="border border-gray-200 rounded-md py-1 px-4 placeholder:text-sm placeholder:text-gray-400" placeholder="نام خانوادگی خود را وارد نمایید">
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">نام کاربری</label>
            <input type="text" class="border border-gray-200 rounded-md py-1 px-4 placeholder:text-sm placeholder:text-gray-400" placeholder="نام کاربری خود را وارد نمایید">
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">نام شرکت</label>
            <input type="text" class="border border-gray-200 rounded-md py-1 px-4 placeholder:text-sm placeholder:text-gray-400" placeholder="نام شرکت را وارد نمایید">
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">شماره تلفن</label>
            <input type="text" class="border border-gray-200 rounded-md py-1 px-4 placeholder:text-sm placeholder:text-gray-400" placeholder="شماره تلفن را وارد نمایید">
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="" class="text-gray-500">ایمیل</label>
            <input type="text" class="border border-gray-200 rounded-md py-1 px-4 placeholder:text-sm placeholder:text-gray-400" placeholder="ایمیل خود را وارد نمایید">
          </div>
        </div>
      </div>
      <div class="flex items-center mt-4 w-full px-9">
        <button @click="go_address_login_box" class="text-white bg-[#2375c8] rounded-full p-1.5">
          <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const go_address_login_box = () => {
  router.push('addressLoginBox')
}
</script>

<style>
@font-face {
       font-family: BYekan ;
       src: url("../assets/Yekan.ttf");
     }
     body{
       font-family: BYekan;
     }
.login-background{
    background-image: url("../assets/photos/login-background.png");
}
.information-box{
  box-shadow: rgba(130, 165, 198, 0.1) 0px 4px 12px;
}
</style>