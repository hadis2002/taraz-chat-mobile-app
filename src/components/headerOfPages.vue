<template>
  <div dir="rtl" class="flex bg-white flex-col justify-end h-[14%]">
    <div class="flex px-8 h-[30%] justify-between">
        <div class="flex gap-2 items-center">
            <div>
                <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.825 17.0078C14.7312 17.2703 13.725 17.2266 13.1562 17.2266H12.2375L5.0625 20.6828L7.1625 16.1328" stroke="#3B85CE" stroke-width="2.13"/>
                    <path d="M8.69404 16.6138C8.16904 16.4825 7.68779 16.3075 7.20654 16.0888C4.10029 14.7763 2.04404 12.4575 2.00029 9.74501C1.95654 5.54501 6.85654 2.08876 12.9815 2.00126C16.394 1.95751 20.1128 3.05126 22.1253 5.02001" stroke="#3B85CE" stroke-width="2.13"/>
                    <path d="M23.6136 16.9639C24.0511 16.8327 24.4449 16.6577 24.8386 16.4827M24.8386 16.4827C27.3761 15.3452 29.0386 13.3327 28.9949 11.1014C28.9511 7.60144 24.7949 4.84519 19.7636 4.93269C14.7324 5.02019 10.6636 7.86394 10.7074 11.3639C10.7511 14.8639 14.9074 17.6202 19.9386 17.5327C20.2011 17.5327 20.4636 17.5327 20.6824 17.4889L26.8511 20.3764L24.8386 16.4827Z" stroke="#3B85CE" stroke-width="2.13"/>
                </svg>
            </div>
            <div class="text-lg font-black text-sky-600">گفت و گو ها</div>
        </div>
        <button @click="side_bar_toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L4 7" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M20 12L4 12" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M20 17L4 17" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </button>
        <transition  enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0 -translate-x-[50%] duration-100" enter-to-class="opacity-100" leave-active-class="duration-300 ease-in -translate-x-[50%]" leave-from-class="opacity-100" leave-to-class="transform opacity-0" name="fade">
            <div v-if="sideBarToggle" class="w-[64%] bg-white shadow absolute h-full top-0 left-0 z-50">
                <div class="flex flex-col">
                    <div class="flex flex-col gap-4 bg-neutral-50 p-4">
                        <div class="flex items-center gap-3 border-b pb-1 border-gray-100">
                            <button @click="close_side_bar">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.334 6.41699L3.66732 6.41699" stroke="#424242" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M18.334 11L3.66732 11" stroke="#424242" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M18.334 15.583L3.66732 15.583" stroke="#424242" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <div class="text-lg text-gray-500">تنظیمات</div>
                        </div>
                        <div class="flex flex-col items-center gap-1">
                            <button @click="go_profile_page">
                                <img class="rounded-full w-10 h-10" src="../assets/photos/monkey.jpg" alt="">
                            </button>
                            <div class="text-sm">سارا</div>
                            <div class="text-sm text-gray-500">طراح لباس</div>
                        </div>
                    </div>
                    <div class="flex flex-col p-5 gap-7">
                        <button class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6.75" cy="4.5" r="3" stroke="#616161" stroke-width="1.5"/>
                                    <path d="M11.25 6.75C12.4926 6.75 13.5 5.74264 13.5 4.5C13.5 3.25736 12.4926 2.25 11.25 2.25" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    <ellipse cx="6.75" cy="12.75" rx="5.25" ry="3" stroke="#616161" stroke-width="1.5"/>
                                    <path d="M13.5 10.5C14.8157 10.7885 15.75 11.5192 15.75 12.375C15.75 13.147 14.9897 13.8172 13.875 14.1528" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div class="text-gray-500">ایجاد کانال</div>
                        </button>
                        <button class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6.75" cy="4.5" r="3" stroke="#616161" stroke-width="1.5"/>
                                    <path d="M11.25 6.75C12.4926 6.75 13.5 5.74264 13.5 4.5C13.5 3.25736 12.4926 2.25 11.25 2.25" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    <ellipse cx="6.75" cy="12.75" rx="5.25" ry="3" stroke="#616161" stroke-width="1.5"/>
                                    <path d="M13.5 10.5C14.8157 10.7885 15.75 11.5192 15.75 12.375C15.75 13.147 14.9897 13.8172 13.875 14.1528" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div class="text-gray-500">ایجاد گروه</div>
                        </button>
                        <button @click="go_blocked_users_page" class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3448_4564)">
                                        <path d="M1.5 12C1.5 9.87868 1.5 8.81802 2.15901 8.15901C2.81802 7.5 3.87868 7.5 6 7.5H12C14.1213 7.5 15.182 7.5 15.841 8.15901C16.5 8.81802 16.5 9.87868 16.5 12C16.5 14.1213 16.5 15.182 15.841 15.841C15.182 16.5 14.1213 16.5 12 16.5H6C3.87868 16.5 2.81802 16.5 2.15901 15.841C1.5 15.182 1.5 14.1213 1.5 12Z" stroke="#616161" stroke-width="1.5"/>
                                        <path d="M4.5 7.5V6C4.5 3.51472 6.51472 1.5 9 1.5C11.4853 1.5 13.5 3.51472 13.5 6V7.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3448_4564">
                                        <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text-gray-500">کاربران مسدود شده</div>
                        </button>
                        <button @click="go_archived_users_page" class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3448_4570)">
                                        <path d="M1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5C12.5355 1.5 14.3033 1.5 15.4017 2.59835C16.5 3.6967 16.5 5.46447 16.5 9" stroke="#757575" stroke-width="1.5"/>
                                        <path d="M1.5 10.5C1.5 8.3998 1.5 7.3497 1.90873 6.54754C2.26825 5.84193 2.84193 5.26825 3.54754 4.90873C4.3497 4.5 5.3998 4.5 7.5 4.5H10.5C12.6002 4.5 13.6503 4.5 14.4525 4.90873C15.1581 5.26825 15.7317 5.84193 16.0913 6.54754C16.5 7.3497 16.5 8.3998 16.5 10.5C16.5 12.6002 16.5 13.6503 16.0913 14.4525C15.7317 15.1581 15.1581 15.7317 14.4525 16.0913C13.6503 16.5 12.6002 16.5 10.5 16.5H7.5C5.3998 16.5 4.3497 16.5 3.54754 16.0913C2.84193 15.7317 2.26825 15.1581 1.90873 14.4525C1.5 13.6503 1.5 12.6002 1.5 10.5Z" stroke="#757575" stroke-width="1.5"/>
                                        <path d="M9 12.75L9 8.25M9 8.25L10.5 10.125M9 8.25L7.5 10.125" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3448_4570">
                                        <rect width="18" height="18" rx="5" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text-gray-500">کاربران آرشیو شده</div>
                        </button>
                        <button class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3448_4577)">
                                        <path d="M1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.75 1.53711C9.75 1.53711 12 4.50007 12 9.00004C12 13.5 9.75 16.4631 9.75 16.4631" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 16.4631C8.25 16.4631 6 13.5 6 9.00004C6 4.50007 8.25 1.53711 8.25 1.53711" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.97266 11.625H16.0282" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.97266 6.375H16.0282" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3448_4577">
                                        <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text-gray-500">زبان</div>
                        </button>
                        <button class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7235 0.000976562C16.2083 0.000976562 15.747 0.307715 15.5475 0.783238L14.4 3.52448C14.058 3.20273 13.6118 2.99949 13.125 2.99949H1.87499C0.8415 2.99949 0 3.84099 0 4.87448V16.1245C0 17.158 0.8415 17.9995 1.87499 17.9995H13.125C14.1585 17.9995 15 17.158 15 16.1245V7.91574L17.88 1.84C17.9587 1.67276 18 1.48675 18 1.27599C18 0.57325 17.427 0.000976562 16.7235 0.000976562ZM14.25 16.1245C14.25 16.7447 13.7453 17.2495 13.125 17.2495H1.87499C1.25473 17.2495 0.749988 16.7447 0.749988 16.1245V4.87448C0.749988 4.25422 1.25473 3.74948 1.87499 3.74948H13.125C13.5203 3.74948 13.8742 3.96396 14.0767 4.29696L12.75 7.46795V5.62446C12.75 5.41746 12.582 5.24945 12.375 5.24945H2.62501C2.41801 5.24945 2.25 5.41746 2.25 5.62446V8.62445C2.25 8.83145 2.41801 8.99946 2.62501 8.99946H12.1088L11.7945 9.74945H8.62499C8.41799 9.74945 8.24998 9.91747 8.24998 10.1245V14.6245C8.24998 14.6342 8.25448 14.6425 8.25521 14.6522C7.94696 14.926 7.75797 15.0174 7.74446 15.0227C7.62595 15.067 7.53746 15.1667 7.50895 15.2905C7.48044 15.4165 7.51795 15.5485 7.60947 15.64C8.15245 16.1829 8.9017 16.3899 9.63446 16.3899C10.5712 16.3899 11.4795 16.0509 11.889 15.64C12.4785 15.0505 12.9105 13.882 12.5842 13.0112L14.25 9.49823V16.1245H14.25ZM9.51451 13.9757C9.61801 13.6352 9.71627 13.3127 10.0148 13.0142C10.545 12.484 11.2043 12.484 11.7345 13.0142C12.2092 13.489 11.847 14.6215 11.3595 15.109C10.953 15.5147 9.50773 15.9062 8.53798 15.3992C8.66696 15.2987 8.81546 15.169 8.98348 15.001C9.297 14.6867 9.40799 14.3252 9.51451 13.9757ZM9 13.1957V10.5002H11.481L10.9058 11.8743C10.4047 11.8653 9.90151 12.067 9.48375 12.4855C9.25049 12.7188 9.10575 12.961 9 13.1957ZM11.646 12.0497L12.6555 9.63699L13.2225 9.91525L12.078 12.3288C11.9392 12.2162 11.796 12.1202 11.646 12.0497ZM12 5.99948V8.24948H2.99999V5.99948H12ZM17.2013 1.5205L13.5428 9.238L12.945 8.94476L14.8462 4.40127L16.239 1.07279C16.3207 0.877035 16.5112 0.751035 16.7243 0.751035C17.0138 0.751035 17.2492 0.986547 17.2492 1.30155C17.2492 1.3765 17.2327 1.45374 17.2013 1.5205Z" fill="#616161"/>
                                </svg>
                            </div>
                            <div class="text-gray-500">تم</div>
                        </button>
                        <button class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.25 7.81249C2.25 5.4143 2.25 4.21521 2.53314 3.81181C2.81627 3.4084 3.94374 3.02247 6.19868 2.25059L6.62829 2.10354C7.80374 1.70118 8.39146 1.5 9 1.5C9.60854 1.5 10.1963 1.70118 11.3717 2.10354L11.8013 2.25059C14.0563 3.02247 15.1837 3.4084 15.4669 3.81181C15.75 4.21521 15.75 5.4143 15.75 7.81249C15.75 8.17474 15.75 8.56756 15.75 8.99352C15.75 13.2221 12.5708 15.2741 10.5761 16.1455C10.035 16.3818 9.76444 16.5 9 16.5C8.23556 16.5 7.96501 16.3818 7.42392 16.1455C5.42922 15.2741 2.25 13.2221 2.25 8.99352C2.25 8.56756 2.25 8.17474 2.25 7.81249Z" stroke="#616161" stroke-width="1.5"/>
                                    <circle cx="9" cy="6.75" r="1.5" stroke="#616161" stroke-width="1.5"/>
                                    <path d="M12 11.25C12 12.0784 12 12.75 9 12.75C6 12.75 6 12.0784 6 11.25C6 10.4216 7.34315 9.75 9 9.75C10.6569 9.75 12 10.4216 12 11.25Z" stroke="#616161" stroke-width="1.5"/>
                                </svg>
                            </div>
                            <div class="text-gray-500">اطلاعات شخصی</div>
                        </button>
                        <button class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8004 8.89263L15.1585 8.50475V8.50475L15.8004 8.89263ZM9.10737 2.19957L8.71949 1.55766L8.71949 1.55766L9.10737 2.19957ZM15.75 9C15.75 12.7279 12.7279 15.75 9 15.75V17.25C13.5563 17.25 17.25 13.5563 17.25 9H15.75ZM9 15.75C5.27208 15.75 2.25 12.7279 2.25 9H0.75C0.75 13.5563 4.44365 17.25 9 17.25V15.75ZM2.25 9C2.25 5.27208 5.27208 2.25 9 2.25V0.75C4.44365 0.75 0.75 4.44365 0.75 9H2.25ZM11.625 10.5C9.34683 10.5 7.5 8.65317 7.5 6.375H6C6 9.4816 8.5184 12 11.625 12V10.5ZM15.1585 8.50475C14.435 9.70219 13.1228 10.5 11.625 10.5V12C13.6695 12 15.4585 10.9088 16.4423 9.28051L15.1585 8.50475ZM7.5 6.375C7.5 4.87721 8.29781 3.56504 9.49525 2.84148L8.71949 1.55766C7.09125 2.54154 6 4.33047 6 6.375H7.5ZM9 2.25C8.88255 2.25 8.75591 2.19925 8.66408 2.10366C8.58377 2.02006 8.55881 1.93369 8.55194 1.88286C8.54087 1.80089 8.56287 1.6523 8.71949 1.55766L9.49525 2.84148C9.94887 2.56738 10.0907 2.06899 10.0384 1.6821C9.98386 1.27792 9.65879 0.75 9 0.75V2.25ZM16.4423 9.28051C16.3477 9.43713 16.1991 9.45913 16.1171 9.44806C16.0663 9.4412 15.9799 9.41623 15.8963 9.33592C15.8008 9.24409 15.75 9.11745 15.75 9H17.25C17.25 8.34121 16.7221 8.01614 16.3179 7.96155C15.931 7.9093 15.4326 8.05113 15.1585 8.50475L16.4423 9.28051Z" fill="#616161"/>
                                </svg>
                            </div>
                            <div class="text-gray-500">نسخه تاریک</div>
                        </button>
                        <button class="flex items-center gap-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3448_4608)">
                                        <path d="M1.5 8.99902L12 8.99902M12 8.99902L9.375 6.74902M12 8.99902L9.375 11.249" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.75195 5.25C6.76103 3.61873 6.83337 2.7353 7.40966 2.15901C8.06867 1.5 9.12933 1.5 11.2506 1.5L12.0007 1.5C14.122 1.5 15.1826 1.5 15.8416 2.15901C16.5007 2.81802 16.5007 3.87868 16.5007 6L16.5007 12C16.5007 14.1213 16.5007 15.182 15.8416 15.841C15.1826 16.5 14.122 16.5 12.0006 16.5H11.2506C9.12933 16.5 8.06867 16.5 7.40966 15.841C6.83337 15.2647 6.76103 14.3813 6.75195 12.75" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3448_4608">
                                        <rect width="18" height="18" rx="5" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text-gray-500">خروج از حساب کاربری</div>
                        </button>
                    </div>
                </div>
            </div>
        </transition>
        <div @click="close_side_bar" v-if="blackBackground" class="w-full bg-black h-full fixed top-0 left-0 bg-opacity-20 z-40"></div>
    </div>
    <div class="h-[50%] px-8 flex flex-col justify-center">
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3">
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.5" cy="11.5" r="9.5" stroke="#757575" stroke-width="1.5"/>
                    <path d="M18.5 18.5L22 22" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
            <input type="text" class="py-2 w-full ps-10 text-sm rounded bg-neutral-100 placeholder:text-gray-400" placeholder="جستجو"/>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const sideBarToggle = ref(false)
const blackBackground = ref(false)
const side_bar_toggle = () => {
    sideBarToggle.value = true
    blackBackground.value = true
}
const close_side_bar = () => {
    sideBarToggle.value = false
    blackBackground.value = false
}
const go_profile_page = () => {
    router.push('profilePage')
}
const go_blocked_users_page = () => {
    router.push('blockedUsers')
}
const go_archived_users_page = () => {
    router.push('archivedUsers')
}
</script>

<style>

</style>