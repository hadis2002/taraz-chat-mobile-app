<template>
  <div dir="rtl" class="h-screen flex flex-col">
    <div class="h-[45%]">
        <img class="h-full w-full" src="../assets/photos/meet.jpg" alt="">
    </div>
    <div class="h-[55%] justify-between px-7 py-5 flex flex-col">
        <div class="flex h-[91%] flex-col gap-7 relative">
            <div class="flex flex-col gap-1.5">
            <div class="flex gap-2 items-center">
                <div>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.49935 8.50001C6.49935 9.42048 5.75316 10.1667 4.83268 10.1667C3.91221 10.1667 3.16602 9.42048 3.16602 8.50001C3.16602 7.57954 3.91221 6.83334 4.83268 6.83334C5.75316 6.83334 6.49935 7.57954 6.49935 8.50001Z" stroke="#757575" stroke-width="1.5"/>
                        <path d="M9.83333 4.83334L6.5 7.16668" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M9.83333 12.1667L6.5 9.83332" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M13.1673 12.8333C13.1673 13.7538 12.4211 14.5 11.5007 14.5C10.5802 14.5 9.83398 13.7538 9.83398 12.8333C9.83398 11.9128 10.5802 11.1667 11.5007 11.1667C12.4211 11.1667 13.1673 11.9128 13.1673 12.8333Z" stroke="#757575" stroke-width="1.5"/>
                        <path d="M13.1673 4.16667C13.1673 5.08714 12.4211 5.83333 11.5007 5.83333C10.5802 5.83333 9.83398 5.08714 9.83398 4.16667C9.83398 3.24619 10.5802 2.5 11.5007 2.5C12.4211 2.5 13.1673 3.24619 13.1673 4.16667Z" stroke="#757575" stroke-width="1.5"/>
                    </svg>
                </div>
                <div>اشتراک گذاری دعوت</div>
            </div>
            <div @click="toggle_invite_options" class="w-full flex items-center relative">
                <button class="border border-gray-200 w-full rounded-lg py-2 text-right px-3 text-sm text-gray-400">ارسال دعوت از طریق...</button>
                <button :class="arrowIcon" class="absolute end-3"> 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6673 6L8.00065 10L3.33398 6" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div v-if="inviteOptions" class="absolute flex flex-col px-5 py-5 gap-4 z-50 bg-white top-[20%] shadow w-full rounded-lg">
                <button @click="toggle_invite_options" class="ms-auto">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33398 1.33338L10.6673 10.6667M1.334 10.6667L6.00067 6.00004L10.6673 1.33337" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
                <div class="flex gap-1 items-center">
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1740_214046)">
                                <path d="M6.17188 15.2734V9.72656L2.96875 7.26562V14.1016C2.96875 14.8828 3.35938 15.2734 4.14062 15.2734" fill="#4285F4"/>
                                <path d="M6.01562 9.6875L10 12.6953L13.9844 9.6875V5.85938L10 8.86719L6.01562 5.85938" fill="#EA4335"/>
                                <path d="M13.8281 15.2734V9.72656L17.0312 7.26562V14.1016C17.0312 14.8828 16.6406 15.2734 15.8594 15.2734" fill="#34A853"/>
                                <path d="M2.96875 7.34347L6.17188 9.80441V5.97628L5 5.07785C3.94531 4.25754 2.96875 5.07785 2.96875 6.09347" fill="#C5221F"/>
                                <path d="M17.0312 7.34347L13.8281 9.80441V5.97628L15 5.07785C16.0547 4.25754 17.0312 5.07785 17.0312 6.09347" fill="#FBBC04"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1740_214046">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>جیمیل</div>
                </div>
                <div class="flex gap-1 items-center">
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1740_214056)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.425 12.1231C19.5696 11.4716 19.6449 10.797 19.6449 10.1038C19.6449 4.91046 15.3751 0.699005 10.1058 0.699005C9.5508 0.699005 9.00635 0.746525 8.47483 0.836945C7.62229 0.307182 6.61335 0 5.53268 0C2.47648 0 0 2.4413 0 5.45527C0 6.46147 0.27752 7.40276 0.759646 8.21421C0.633823 8.82396 0.566788 9.45692 0.566788 10.1038C0.566788 15.2994 4.83772 19.5097 10.1058 19.5097C10.7032 19.5097 11.2865 19.4552 11.8532 19.352C12.6329 19.7647 13.5219 20 14.4685 20C17.5235 20 20 17.5575 20 14.5459C20 13.6753 19.793 12.8534 19.425 12.1231ZM14.9988 14.5992C14.5579 15.2159 13.9064 15.7028 13.0597 16.0482C12.2237 16.3914 11.2218 16.5664 10.08 16.5664C8.71002 16.5664 7.56114 16.3288 6.66392 15.8593C6.02305 15.5185 5.49506 15.0571 5.09407 14.4844C4.68838 13.9095 4.48377 13.338 4.48377 12.785C4.48377 12.4419 4.61783 12.1428 4.88124 11.8982C5.14229 11.6548 5.47743 11.5331 5.87724 11.5331C6.20415 11.5331 6.48754 11.6293 6.71684 11.8206C6.93674 12.0049 7.12488 12.2773 7.27657 12.6262C7.44591 13.0088 7.62935 13.331 7.82337 13.5826C8.01152 13.8283 8.28081 14.0335 8.62418 14.1946C8.9699 14.3546 9.43674 14.4381 10.0094 14.4381C10.7984 14.4381 11.4452 14.2711 11.9309 13.9442C12.4071 13.6255 12.6376 13.2406 12.6376 12.77C12.6376 12.4002 12.5165 12.108 12.2695 11.8785C12.0085 11.6397 11.6663 11.4542 11.2512 11.3244C10.8173 11.1923 10.2293 11.0474 9.50141 10.8967C8.51011 10.688 7.66933 10.4411 7.00141 10.1594C6.31702 9.87308 5.76552 9.47545 5.36218 8.97814C4.95296 8.47157 4.74482 7.83748 4.74482 7.09211C4.74482 6.38266 4.96238 5.74161 5.39276 5.18982C5.81844 4.64151 6.44167 4.2126 7.24482 3.92164C8.03621 3.63299 8.97696 3.48694 10.0435 3.48694C10.8949 3.48694 11.6439 3.5843 12.2695 3.77673C12.8986 3.96916 13.4278 4.22884 13.8441 4.54994C14.2639 4.87452 14.5767 5.2188 14.7719 5.57816C14.9694 5.94099 15.0706 6.30152 15.0706 6.65044C15.0706 6.98661 14.9389 7.29265 14.679 7.55811C14.4179 7.82705 14.0875 7.96267 13.6994 7.96267C13.3467 7.96267 13.0691 7.87689 12.8786 7.70996C12.6999 7.55347 12.5141 7.31002 12.3083 6.96225C12.0708 6.51711 11.7827 6.16589 11.4523 5.91782C11.1312 5.6767 10.5962 5.55613 9.85889 5.55613C9.17686 5.55613 8.61947 5.6906 8.20672 5.95838C7.80926 6.21457 7.61524 6.51017 7.61524 6.86025C7.61524 7.07355 7.67757 7.25324 7.80692 7.40626C7.94097 7.57087 8.13265 7.71229 8.37489 7.83284C8.62536 7.95688 8.88406 8.05657 9.14276 8.12612C9.40734 8.19915 9.85184 8.30696 10.4621 8.44607C11.2347 8.60836 11.9438 8.79268 12.5706 8.99091C13.2067 9.1903 13.7547 9.43604 14.2039 9.72468C14.6602 10.018 15.0212 10.3936 15.2787 10.8433C15.5362 11.2966 15.6667 11.853 15.6667 12.501C15.6667 13.2754 15.441 13.9813 14.9988 14.5992Z" fill="#00AEF3"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1740_214056">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>اسکایپ</div>
                </div>
                <div class="flex gap-1 items-center">
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1740_214063)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6826 20H1.10385C0.49403 20 0 19.5057 0 18.8961V1.10384C0 0.494106 0.494107 0 1.10385 0H18.8962C19.5058 0 20 0.494106 20 1.10384V18.8961C20 19.5057 19.5057 20 18.8962 20H13.7997V12.2549H16.3994L16.7886 9.23649H13.7997V7.30944C13.7997 6.43554 14.0424 5.84 15.2955 5.84L16.8939 5.8393V3.13962C16.6175 3.10284 15.6687 3.02066 14.5648 3.02066C12.2603 3.02066 10.6826 4.4273 10.6826 7.0105V9.23649H8.0763V12.2549H10.6826V20Z" fill="#4460A0"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1740_214063">
                                <rect width="20" height="20" rx="3" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>فیس بوک</div>
                </div>
            </div>
            </div>
            <div class="flex flex-col gap-1.5">
            <div>دعوت از مخاطبین</div>
            <div class="w-full flex items-center relative">
                <button class="border border-gray-200 w-full rounded-lg py-2 text-right px-3 text-sm text-gray-400">مخاطبین خود را انتخاب کنید.</button>
                <button @click="invite_contact" class="absolute end-3"> 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.19961 7.69998H7.69961V7.19998V2.19998C7.69961 2.14475 7.74438 2.09998 7.79961 2.09998C7.85483 2.09998 7.89961 2.14475 7.89961 2.19998V7.19998V7.69998H8.39961H13.3996C13.4548 7.69998 13.4996 7.74475 13.4996 7.79998C13.4996 7.85519 13.4548 7.89998 13.3996 7.89998H8.39961H7.89961V8.39998V13.4C7.89961 13.4552 7.85483 13.5 7.79961 13.5C7.74439 13.5 7.69961 13.4552 7.69961 13.4V8.39998V7.89998H7.19961H2.19961C2.14439 7.89998 2.09961 7.8552 2.09961 7.79998C2.09961 7.74475 2.14438 7.69998 2.19961 7.69998H7.19961Z" fill="#424242" stroke="#424242"/>
                    </svg>
                </button>
            </div>
            </div>
            <div v-if="invitedContactsBox" class="border border-gray-200 flex-wrap overflow-auto h-[30%] flex gap-1 -mt-[6%] w-full rounded-lg py-2 text-right px-3">
                <div v-for="contact in invitedContactsList" :key="contact" class="flex my-0.5 h-fit bg-[#FAFAFA] w-fit rounded-full px-2 py-1 gap-1.5 items-center">
                    <div class="w-7 h-7">
                        <img class="h-full w-full rounded-full" :src="contact.img" alt="">
                    </div>
                    <div class="text-sm w-max">{{ contact.name }}</div>
                    <button @click="remove_from_invited_list(contact)">
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33398 0.833315L10.6673 10.1666M1.334 10.1666L6.00067 5.49998L10.6673 0.833313" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="contactsModal" class="bg-black w-full h-full bg-opacity-30 fixed top-0 left-0 flex justify-center items-center">
            <div class="bg-white flex flex-col gap-2 py-5 justify-between w-[82%] h-[62%] rounded-lg">
                <div class="flex flex-col gap-5 h-[90%]">
                    <div class="flex px-6 h-[10%] justify-between items-center">
                        <div class="text-[16px] font-semibold">دعوت از مخاطبین</div>
                        <button @click="close_contacts_list_modal">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16602 1.66663L12.8327 13.3333M1.16604 13.3333L6.99937 7.49996L12.8327 1.66663" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="h-[10%] px-6">
                        <div class="relative h-full flex items-center">
                            <input class="bg-neutral-100 w-full py-1.5 px-12 rounded-lg placeholder:text-stone-400" type="text" placeholder="جستجو">
                            <div class="absolute right-5">
                                <svg class="w-5 -5" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.5423" cy="10.5417" r="8.70833" stroke="#757575" stroke-width="1.5"/>
                                    <path d="M16.959 16.9584L20.1673 20.1667" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="h-[80%] px-6 flex flex-col overflow-auto">
                        <div v-for="contact in contactsList" :key="contact" class="flex border-b py-3 border-gray-50 items-center">
                            <div class="flex w-[90%] items-center gap-3">
                                <div class="w-10 h-8 flex items-center">
                                    <img class="h-full w-full rounded-full" :src="contact.img" alt="">
                                </div>
                                <div class="w-full">{{ contact.name }}</div>
                            </div>
                            <div class="w-[10%]">
                                <button @click="invite_contact_to_meet(contact)" class="bg-[#2375C8] p-0.5 rounded">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="path-1-inside-1_1740_214161" fill="white">
                                            <path d="M10.5 2.75C10.5 2.33579 10.1642 2 9.75 2C9.33579 2 9 2.33579 9 2.75V9H2.75C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H9V16.75C9 17.1642 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.1642 10.5 16.75V10.5H16.75C17.1642 10.5 17.5 10.1642 17.5 9.75C17.5 9.33579 17.1642 9 16.75 9H10.5V2.75Z"/>
                                        </mask>
                                        <path d="M10.5 2.75C10.5 2.33579 10.1642 2 9.75 2C9.33579 2 9 2.33579 9 2.75V9H2.75C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H9V16.75C9 17.1642 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.1642 10.5 16.75V10.5H16.75C17.1642 10.5 17.5 10.1642 17.5 9.75C17.5 9.33579 17.1642 9 16.75 9H10.5V2.75Z" fill="white"/>
                                        <path d="M9 9V18H18V9H9ZM9 10.5H18V1.5H9V10.5ZM10.5 10.5V1.5H1.5V10.5H10.5ZM10.5 9H1.5V18H10.5V9ZM19.5 2.75C19.5 -2.63485 15.1347 -7 9.75 -7V11C5.19372 11 1.5 7.30643 1.5 2.75H19.5ZM9.75 -7C4.36523 -7 0 -2.63477 0 2.75H18C18 7.30635 14.3064 11 9.75 11V-7ZM0 2.75V9H18V2.75H0ZM9 0H2.75V18H9V0ZM2.75 0C-2.63477 0 -7 4.36523 -7 9.75H11C11 14.3064 7.30635 18 2.75 18V0ZM-7 9.75C-7 15.1347 -2.63485 19.5 2.75 19.5V1.5C7.30643 1.5 11 5.19372 11 9.75H-7ZM2.75 19.5H9V1.5H2.75V19.5ZM0 10.5V16.75H18V10.5H0ZM0 16.75C0 22.1347 4.36515 26.5 9.75 26.5V8.5C14.3064 8.5 18 12.1937 18 16.75H0ZM9.75 26.5C15.1348 26.5 19.5 22.1348 19.5 16.75H1.5C1.5 12.1936 5.19364 8.5 9.75 8.5V26.5ZM19.5 16.75V10.5H1.5V16.75H19.5ZM10.5 19.5H16.75V1.5H10.5V19.5ZM16.75 19.5C22.1348 19.5 26.5 15.1348 26.5 9.75H8.5C8.5 5.19364 12.1936 1.5 16.75 1.5V19.5ZM26.5 9.75C26.5 4.36515 22.1347 0 16.75 0V18C12.1937 18 8.5 14.3064 8.5 9.75H26.5ZM16.75 0H10.5V18H16.75V0ZM19.5 9V2.75H1.5V9H19.5Z" fill="white" mask="url(#path-1-inside-1_1740_214161)"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-[10%] py-2 px-6 flex items-center">
                    <button @click="submit_inviting_contacts" class="bg-[#2375C8] text-white px-9 rounded py-1">تایید</button>
                </div>
            </div>
        </div>
        <div class="flex h-[8%] items-center justify-between">
            <button @click="go_fourth_page_of_meeting" class="bg-[#2375C8] rounded-full p-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33984 9.00056H14.6591M14.6591 9.00056L10.4144 4.75586M14.6591 9.00056L10.4144 13.2453" stroke="white" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button @click="go_back_second_page_of_meeting" class="border border-[#2375C8] rounded-full p-2">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1493 8.4894H2.83008M2.83008 8.4894L7.07478 4.24469M2.83008 8.4894L7.07478 12.7341" stroke="#2375C8" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
const inviteOptions = ref(false)
const arrowIcon = ref('')
const invitedContactsBox = ref(false)
const contactsModal = ref(false)
const invitedContactsList = ref([])
const contactsList = ref([
   {img:'/src/assets/photos/images.jpg', name:'حدیث'},
   {img:'/src/assets/photos/selfie.jpg', name:'علی'},
   {img:'/src/assets/photos/images.jpg', name:'سارا'},
   {img:'/src/assets/photos/selfie.jpg', name:'فرهاد'},
   {img:'/src/assets/photos/images.jpg', name:'عسل'},
   {img:'/src/assets/photos/monkey.jpg', name:'هانا'},
   {img:'/src/assets/photos/monkey.jpg', name:'پریا'},
   {img:'/src/assets/photos/selfie.jpg', name:'پریا'},
   {img:'/src/assets/photos/monkey.jpg', name:'پریا'},
   {img:'/src/assets/photos/monkey.jpg', name:'پریا'},
   {img:'/src/assets/photos/images.jpg', name:'پریا'},
   {img:'/src/assets/photos/monkey.jpg', name:'پریا'},
   {img:'/src/assets/photos/monkey.jpg', name:'پریا'},
])
const go_back_second_page_of_meeting = () => {
    router.push('secondPageOfMeeting')
}
const go_fourth_page_of_meeting = () => {
    router.push('fourthPageOfMeeting')
}
const toggle_invite_options = () => {
    inviteOptions.value = !inviteOptions.value
    if(inviteOptions.value == true){
        arrowIcon.value = 'rotate-180'
    }
    else{
        arrowIcon.value = 'rotate-0'
    }
}
const invite_contact = () => {
    contactsModal.value = true
}
const close_contacts_list_modal = () => {
    contactsModal.value = false
}
const submit_inviting_contacts = () => {
    contactsModal.value = false
}
const invite_contact_to_meet = (contact) => {
    contactsList.value = contactsList.value.filter((row) => contact !== row )
    invitedContactsList.value.push(contact)
    invitedContactsBox.value = true
    
}
const remove_from_invited_list = (contact) => {
    invitedContactsList.value = invitedContactsList.value.filter((row) => contact !== row)
    if(invitedContactsList.value.length == 0){
        invitedContactsBox.value = false
    }
}
</script>

<style>

</style>