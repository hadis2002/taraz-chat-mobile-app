<template>
  <div dir="rtl" class="h-screen flex flex-col">
    <div class="h-[45%]">
        <img class="h-full w-full" src="../assets/photos/meet.jpg" alt="">
    </div>
    <div class="h-[55%] justify-between px-7 py-5 flex flex-col">
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
                <button @click="copy_url">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4941 12.1667H11.5008C13.5141 12.1667 15.1675 10.52 15.1675 8.50001C15.1675 6.48668 13.5208 4.83334 11.5008 4.83334H10.4941" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.50065 4.83334H5.50065C3.48065 4.83334 1.83398 6.48001 1.83398 8.50001C1.83398 10.5133 3.48065 12.1667 5.50065 12.1667H6.50065" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.83398 8.5H11.1673" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div>لینک</div>
            </div>
            <div>
                <div @click="copy" class="relative flex items-center">
                    <input type="text" disabled v-model="text" class="border border-gray-200 bg-white w-full rounded-lg p-3 text-right text-xs"/>
                    <button v-if="copyIcon" class="absolute end-3">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1740_214108)">
                                <path d="M4.24414 7.78194C4.24414 5.78096 4.24414 4.78048 4.86576 4.15885C5.48739 3.53723 6.48787 3.53723 8.48885 3.53723H10.6112C12.6122 3.53723 13.6127 3.53723 14.2343 4.15885C14.8559 4.78048 14.8559 5.78096 14.8559 7.78194V11.3192C14.8559 13.3202 14.8559 14.3207 14.2343 14.9423C13.6127 15.5639 12.6122 15.5639 10.6112 15.5639H8.48885C6.48787 15.5639 5.48739 15.5639 4.86576 14.9423C4.24414 14.3207 4.24414 13.3202 4.24414 11.3192V7.78194Z" stroke="#616161" stroke-width="1.59176"/>
                                <path d="M4.2454 13.4415C3.07326 13.4415 2.12305 12.4913 2.12305 11.3192V7.07446C2.12305 4.4065 2.12305 3.07252 2.95188 2.24369C3.78071 1.41486 5.11469 1.41486 7.78265 1.41486H10.6125C11.7846 1.41486 12.7348 2.36507 12.7348 3.53721" stroke="#616161" stroke-width="1.59176"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1740_214108">
                                <rect width="16.9788" height="16.9788" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button v-if="successCopyIcon" class="absolute end-3 border rounded-full border-[#1AC859]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 12.9L10.1429 16.5L18 7.5" stroke="#1AC859" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <button class="text-white bg-[#2375C8] rounded px-7 py-1">تایید</button>
            <button @click="go_back_third_page_of_meeting" class="border border-[#2375C8] rounded-full p-1.5">
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
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()
import { ref } from 'vue';
const router = useRouter()
const text = ref('https://join.skype.com/GaaDJ1dOLMRf')
const copyIcon = ref(true)
const successCopyIcon = ref(false)
const go_back_third_page_of_meeting = () => {
    router.push('thirdPageOfMeeting')
}
const copy = async () => {
      try {
        await toClipboard(text.value)
        console.log('Copied to clipboard')
        copyIcon.value = false
        successCopyIcon.value = true
        setTimeout(() => successCopyIcon.value = false , 2000 )
        setTimeout(() => copyIcon.value = true , 2000 )
      } catch (e) {
        console.error(e)
      }
    }
</script>

<style>

</style>