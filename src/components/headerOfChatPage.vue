<template>
    <div class="contact-chat-page-header flex items-center justify-between px-6 bg-white h-[10%]">
            <div class="flex gap-3 items-center">
                <button @click="menu_toggle">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                        <circle cx="12" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                        <circle cx="19" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                    </svg>
                </button>
                <div v-if="menu" class="bg-white p-4 gap-5 flex flex-col shadow absolute z-50 top-[6%] right-[5%] w-[51%]">
                    <button @click="close_menu" class="flex justify-end">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33398 1.33301L10.6673 10.6663M1.334 10.6663L6.00067 5.99967L10.6673 1.33301" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <button v-if="contactMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3445_14177)">
                                    <path d="M11.334 6.00098C12.784 6.00905 13.5693 6.07335 14.0815 6.5856C14.6673 7.17139 14.6673 8.1142 14.6673 9.99982V10.6665C14.6673 12.5521 14.6673 13.4949 14.0815 14.0807C13.4957 14.6665 12.5529 14.6665 10.6673 14.6665H5.33398C3.44837 14.6665 2.50556 14.6665 1.91977 14.0807C1.33398 13.4949 1.33398 12.5521 1.33398 10.6665L1.33398 9.99982C1.33398 8.1142 1.33398 7.17139 1.91977 6.5856C2.43203 6.07335 3.2173 6.00905 4.66732 6.00098" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M8 1.33301L8 9.99967M8 9.99967L6 7.66634M8 9.99967L10 7.66634" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3445_14177">
                                    <rect width="16" height="16" rx="5" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">خروجی از گفت و گو</div>
                    </button>
                    <button v-if="contactMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3445_14181)">
                                    <path d="M9.99805 4.66634C9.98998 3.21632 9.92567 2.43105 9.41342 1.91879C8.82763 1.33301 7.88482 1.33301 5.99921 1.33301L5.33254 1.33301C3.44692 1.33301 2.50411 1.33301 1.91832 1.91879C1.33254 2.50458 1.33254 3.44739 1.33254 5.33301L1.33254 10.6663C1.33254 12.552 1.33254 13.4948 1.91832 14.0806C2.50411 14.6663 3.44692 14.6663 5.33254 14.6663L5.99921 14.6663C7.88482 14.6663 8.82763 14.6663 9.41342 14.0806C9.92567 13.5683 9.98998 12.783 9.99805 11.333" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M6 8L14.6667 8M14.6667 8L12.3333 6M14.6667 8L12.3333 10" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3445_14181">
                                    <rect width="16" height="16" rx="5" transform="matrix(-1 0 0 1 16 0)" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">حذف کاربر</div>
                    </button>
                    <button @click="add_member" v-if="groupMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"/>
                                <path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="#1C274C" stroke-width="1.5"/>
                                <path d="M21 10H19M19 10H17M19 10L19 8M19 10L19 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">اضافه کردن عضو</div>
                    </button>
                    <button @click="go_group_members_page" v-if="groupMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="4.5" r="3" stroke="#616161" stroke-width="1.5"/>
                                <path d="M15 13.125C15 14.989 15 16.5 9 16.5C3 16.5 3 14.989 3 13.125C3 11.261 5.68629 9.75 9 9.75C12.3137 9.75 15 11.261 15 13.125Z" stroke="#616161" stroke-width="1.5"/>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">اعضای گروه</div>
                    </button>
                    <button v-if="groupMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1740_204374)">
                                    <path d="M12.75 6.75147C14.3813 6.76055 15.2647 6.83288 15.841 7.40917C16.5 8.06818 16.5 9.12884 16.5 11.2502V12.0002C16.5 14.1215 16.5 15.1821 15.841 15.8412C15.182 16.5002 14.1213 16.5002 12 16.5002H6C3.87868 16.5002 2.81802 16.5002 2.15901 15.8412C1.5 15.1821 1.5 14.1215 1.5 12.0002L1.5 11.2502C1.5 9.12884 1.5 8.06818 2.15901 7.40917C2.7353 6.83288 3.61873 6.76054 5.25 6.75146" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M9 1.5L9 11.25M9 11.25L6.75 8.625M9 11.25L11.25 8.625" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1740_204374">
                                    <rect width="18" height="18" rx="5" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">خروجی از تاریخچه چت</div>
                    </button>
                    <button v-if="groupMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1740_204378)">
                                    <path d="M11.2485 5.25C11.2395 3.61873 11.1671 2.7353 10.5908 2.15901C9.93182 1.5 8.87116 1.5 6.74984 1.5L5.99984 1.5C3.87852 1.5 2.81786 1.5 2.15885 2.15901C1.49984 2.81802 1.49984 3.87868 1.49984 6L1.49984 12C1.49984 14.1213 1.49984 15.182 2.15885 15.841C2.81786 16.5 3.87852 16.5 5.99984 16.5H6.74984C8.87116 16.5 9.93182 16.5 10.5908 15.841C11.1671 15.2647 11.2395 14.3813 11.2485 12.75" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M6.75 9L16.5 9M16.5 9L13.875 6.75M16.5 9L13.875 11.25" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1740_204378">
                                    <rect width="18" height="18" rx="5" transform="matrix(-1 0 0 1 18 0)" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">حذف گروه</div>
                    </button>
                    <button v-if="channelMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1740_204347)">
                                    <path d="M12.75 6.75147C14.3813 6.76055 15.2647 6.83288 15.841 7.40917C16.5 8.06818 16.5 9.12884 16.5 11.2502V12.0002C16.5 14.1215 16.5 15.1821 15.841 15.8412C15.182 16.5002 14.1213 16.5002 12 16.5002H6C3.87868 16.5002 2.81802 16.5002 2.15901 15.8412C1.5 15.1821 1.5 14.1215 1.5 12.0002L1.5 11.2502C1.5 9.12884 1.5 8.06818 2.15901 7.40917C2.7353 6.83288 3.61873 6.76054 5.25 6.75146" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M9 1.5L9 11.25M9 11.25L6.75 8.625M9 11.25L11.25 8.625" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1740_204347">
                                    <rect width="18" height="18" rx="5" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">خروجی از محتویات کانال</div>
                    </button>
                    <button v-if="channelMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1740_204351)">
                                    <path d="M11.248 5.25C11.239 3.61873 11.1666 2.7353 10.5903 2.15901C9.93133 1.5 8.87067 1.5 6.74935 1.5L5.99935 1.5C3.87803 1.5 2.81737 1.5 2.15836 2.15901C1.49935 2.81802 1.49935 3.87868 1.49935 6L1.49935 12C1.49935 14.1213 1.49935 15.182 2.15836 15.841C2.81737 16.5 3.87803 16.5 5.99935 16.5H6.74935C8.87067 16.5 9.93133 16.5 10.5903 15.841C11.1666 15.2647 11.239 14.3813 11.248 12.75" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M6.75 9L16.5 9M16.5 9L13.875 6.75M16.5 9L13.875 11.25" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1740_204351">
                                    <rect width="18" height="18" rx="5" transform="matrix(-1 0 0 1 18 0)" fill="white"/>
                                    </clipPath>
                                 </defs>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">حذف کانال</div>
                    </button>
                    <button class="flex items-center gap-2">
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3445_14185)">
                                    <path d="M14.666 10.667C14.666 8.78137 14.666 7.83857 14.0802 7.25278C13.4944 6.66699 12.5516 6.66699 10.666 6.66699H5.33268C3.44706 6.66699 2.50425 6.66699 1.91847 7.25278C1.33268 7.83857 1.33268 8.78137 1.33268 10.667C1.33268 12.5526 1.33268 13.4954 1.91847 14.0812C2.50425 14.667 3.44706 14.667 5.33268 14.667H10.666C12.5516 14.667 13.4944 14.667 14.0802 14.0812C14.666 13.4954 14.666 12.5526 14.666 10.667Z" stroke="#616161" stroke-width="1.5"/>
                                    <path d="M12 6.66634V5.33301C12 3.12387 10.2091 1.33301 8 1.33301C5.79086 1.33301 4 3.12387 4 5.33301V6.66634" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3445_14185">
                                    <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">مسدود کردن</div>
                    </button>
                    <button v-if="contactMenuItems" class="flex items-center gap-2">
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.88672 2.66634C9.61216 1.88955 8.87134 1.33301 8.00052 1.33301C7.12971 1.33301 6.38888 1.88955 6.11433 2.66634" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M2.33263 4H13.666" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M3.44358 5.66699L3.7502 10.2664C3.8682 12.0363 3.9272 12.9213 4.50387 13.4608C5.08054 14.0003 5.96748 14.0003 7.74134 14.0003H8.25692C10.0308 14.0003 10.9177 14.0003 11.4944 13.4608C12.0711 12.9213 12.1301 12.0363 12.2481 10.2664L12.5547 5.66699" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M9.66602 7.33301L9.33268 10.6663" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M6.33268 7.33301L6.66602 10.6663" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="text-gray-500 text-[15px]">حذف تاریخچه</div>
                    </button>
                </div>
                <button class="bg-gray-100 p-2 rounded-full">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90532 11.1147 8.8278C11.1147 8.8278 11.1147 8.8278 11.1147 8.8278C11.1146 8.82792 9.99588 9.94685 12.0245 11.9755C14.0525 14.0035 15.1714 12.8861 15.1722 12.8853C15.1722 12.8853 15.1722 12.8853 15.1722 12.8853C16.0947 11.9628 17.4714 11.7277 18.5209 12.3134L19.6838 12.9624C21.2686 13.8468 21.4557 16.0692 20.0628 17.4622C19.2258 18.2992 18.2004 18.9505 17.0669 18.9934C15.1588 19.0658 11.9183 18.5829 8.6677 15.3323C5.41713 12.0817 4.93421 8.84122 5.00655 6.93309C5.04952 5.7996 5.7008 4.77423 6.53781 3.93723C7.93076 2.54428 10.1532 2.73144 11.0376 4.31617Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
                <button @click="create_meeting" v-if="cameraIcon" class="bg-gray-100 p-2 rounded-full">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C17 6.56878 17 8.21252 17 11.5V12.5C17 15.7875 17 17.4312 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5V11.5Z" stroke="#1C274C" stroke-width="1.5"/>
                        <path d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z" stroke="#1C274C" stroke-width="1.5"/>
                    </svg>
                </button>
            </div>
            <div class="flex gap-3 items-center">
                <div class="flex flex-col items-end">
                    <div v-if="contactName">سارا احمدی</div>
                    <div v-if="groupName">گروه تولید</div>
                    <div v-if="channelName">کانال تولید</div>
                    <div v-if="myName">شما</div>
                    <div v-if="contactName" class="text-[#3B85CE] text-sm text-left">آنلاین</div>
                    <div v-if="groupName" class="text-gray-400 text-xs text-left">(۶۰ عضو فعال)</div>
                    <div v-if="channelName" class="text-gray-400 text-xs text-left">(۶۰ عضو فعال)</div>
                </div>
                <button @click="go_group_profile" v-if="groupImg" class="me-1.5">
                    <img class="h-12 w-12 rounded-full" src="../assets/photos/monkey.jpg" alt="">
                </button>
                <button @click="go_contact_profile" v-if="contactImg" class="me-1.5">
                    <img class="h-12 w-12 rounded-full" src="../assets/photos/images.jpg" alt="">
                </button>
                <button @click="show_your_profile" v-if="yourImg" class="me-1.5">
                    <img class="h-12 w-12 rounded-full" src="../assets/photos/images.jpg" alt="">
                </button>
                <button v-if="channelImg" class="me-1.5">
                    <img class="h-12 w-12 rounded-full" src="../assets/photos/monkey.jpg" alt="">
                </button>
                <button @click="go_back">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
    </div>
</template>

<script setup>
import { stringify } from 'postcss';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const menu = ref(false)
const props = defineProps({
    contactName:{
        type: Boolean,
        default: true
    },
    groupName:{
        type: Boolean,
        default: false
    },
    contactMenuItems:{
        type: Boolean,
        default: true
    },
    groupMenuItems:{
        type: Boolean,
        default: false
    },
    groupImg:{
        type: Boolean,
        default: false
    },
    contactImg:{
        type: Boolean,
        default: true
    },
    channelMenuItems:{
        type: Boolean,
        default: false
    },
    channelName:{
        type: Boolean,
        default: false
    },
    channelImg:{
        type: Boolean,
        default: false
    },
    myName:{
        type: Boolean,
        default: false
    },
    yourImg:{
        type: Boolean,
        default: false
    },
    cameraIcon:{
        type: Boolean,
        default: true
    }
})
const go_back = () => {
    router.back(-1)
}
const menu_toggle = () => {
    menu.value = true
}
const close_menu = () => {
    menu.value = false
}
const go_group_members_page = () => {
    router.push('groupMembers')
}
const add_member = () => {
    router.push('addingMemberPage')
}
const go_group_profile =() => {
    router.push('groupProfilePage')
}
const go_contact_profile = () => {
    router.push('contactProfilePage')
}
const show_your_profile = () => {
    router.push('savedMessageProfilePage')
}
const create_meeting = () => {
    // router.push({ path: 'meetingPage', query: { pageType: props.pageType }})
    router.push('meetingPage')
}
</script>

<style>
.contact-chat-page-header{
    box-shadow: #E7F0F9 10px 5px 8px -3px;
}
</style>