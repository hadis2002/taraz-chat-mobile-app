<template>
   <div class="flex flex-col relative my-3 px-6">
      <div class="bg-white px-4 py-1 cursor-pointer flex rounded-lg"> 
         <div @click="go_saved_message_chat_page" class="w-full flex gap-3 items-center">
            <div class="w-14 h-16 flex items-center">
               <img class="h-[72%] w-full rounded-full" :src="message.img" alt="">
            </div>
            <div class="w-full">شما</div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const go_saved_message_chat_page = () => {
   router.push('savedMessageChatPage')
}
const props = defineProps({
   message:{
      type: Object,
      default: {}
   }
})
</script>

<style>

</style>