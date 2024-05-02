<template>
  <div class="bg-white flex w-full shadow h-[10%]">
            <div class="px-5 flex w-[60%]">
                <input style="outline: none;" class="placeholder:text-gray-400 h-[70%]" type="text" placeholder="پیام خود را اینجا بنویسید">
            </div>
            <div class="flex w-[40%] justify-center gap-3 items-center">
                <button @click="media_box_toggle" class="bg-black p-3 rounded-lg">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V6Z" stroke="#ffffff" stroke-width="1.5"/>
                        <path d="M9.9983 8.24305L13.312 4.92938C14.8741 3.36729 17.4067 3.36729 18.9688 4.92939C20.5309 6.49148 20.5309 9.02414 18.9688 10.5862L9.30469 20.2504" stroke="#ffffff" stroke-width="1.5"/>
                        <path d="M6 22L18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14L15.5 14" stroke="#ffffff" stroke-width="1.5"/>
                        <path d="M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z" stroke="#ffffff" stroke-width="1.5"/>
                    </svg>
                </button>
                <transition  enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0 translate-y-[50%] duration-100" enter-to-class="opacity-100" leave-active-class="duration-300 ease-in" leave-from-class="opacity-100" leave-to-class="transform opacity-0" name="fade">
                    <div @click="close_media_box" v-if="mediaBoxModal" class="bg-black w-full h-full absolute bottom-0 left-0 bg-opacity-50">
                        <div class="flex flex-col h-full justify-end items-end px-9 py-20 gap-5 text-white">
                            <button class="flex gap-2 items-center">
                                <div>فایل</div>
                                <div class="bg-white rounded-full p-3">
                                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z" fill="#2375C8"/>
                                        <path d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22" stroke="#2375C8" stroke-width="1.5"/>
                                    </svg>
                                </div>
                            </button>
                            <button class="flex gap-2 items-center">
                                <div>استیکر</div>
                                <div class="bg-white rounded-full p-3">
                                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#2375C8" stroke-width="1.5"/>
                                        <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill="#2375C8"/>
                                        <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#2375C8"/>
                                    </svg>
                                </div>
                            </button>
                            <button class="flex gap-2 items-center">
                                <div>لوکیشن</div>
                                <div class="bg-white rounded-full p-3">
                                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464Z" stroke="#2375C8" stroke-width="1.5"/>
                                        <path d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" stroke="#2375C8" stroke-width="1.5"/>
                                        <path d="M20.9605 15.5C21.6259 16.1025 22 16.7816 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 16.7816 2.37412 16.1025 3.03947 15.5" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                            </button>
                            <button class="flex gap-2 items-center">
                                <div>صدا</div>
                                <div class="bg-white rounded-full p-3">
                                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z" stroke="#2375C8" stroke-width="1.5"/>
                                        <path d="M13 8L17 8" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M13 11L17 11" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M12 19V22" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                            </button>
                            <button class="flex gap-2 items-center">
                                <div>دوربین</div>
                                <div class="bg-white rounded-full p-3">
                                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="13" r="3" stroke="#2375C8" stroke-width="1.5"/>
                                        <path d="M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21Z" stroke="#2375C8" stroke-width="1.5"/>
                                        <path d="M19 10H18" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </transition>
                <button class="bg-sky-600 p-3 rounded-lg">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32987 13.5005C8.91282 13.6948 9.2043 13.792 9.44793 13.9551C9.68404 14.1131 9.88687 14.316 10.0449 14.5521C10.208 14.7957 10.3052 15.0872 10.4995 15.6701C11.7097 19.3008 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z" stroke="#ffffff" stroke-width="1.5"/>
                        <path d="M16.213 8.84823C16.5075 8.55696 16.5102 8.0821 16.2189 7.78758C15.9276 7.49307 15.4528 7.49044 15.1583 7.78171L16.213 8.84823ZM10.6641 14.336L16.213 8.84823L15.1583 7.78171L9.60934 13.2695L10.6641 14.336Z" fill="#ffffff"/>
                    </svg>
                </button>
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
const mediaBoxModal = ref(false)
const media_box_toggle = () => {
    mediaBoxModal.value = true
}
const close_media_box = () => {
    mediaBoxModal.value = false
}
</script>

<style>

</style>