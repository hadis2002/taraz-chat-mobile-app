<template>
   <div class="flex flex-col relative my-3 px-6">
      <div class="bg-white px-4 py-1 cursor-pointer flex rounded-lg">
         <div v-touch:hold="select_channel" @click="go_channel_chat_page" class="flex items-center gap-3 w-full">
            <div class="w-14 h-16 flex items-center">
               <img class="h-[72%] w-full rounded-full" :src="channel.img" alt="">
            </div>
            <div class="flex flex-col w-full">
               <div class="flex justify-between items-center">
                  <div class="">{{ channel.name }}</div>
               </div>
               <div class="text-sm text-gray-500">{{ channel.text.substring(0,37) }}</div>
            </div>
         </div>
         <div v-if="checkBoxChannel">
            <input @change="change_status_checkbox($event,channel.id)" class="h-[65%]" type="checkbox">
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineEmits , defineProps } from 'vue';
const emit = defineEmits(['select_channel_emit' , 'updateListChannel'])
const router = useRouter()
const props = defineProps({
   checkBoxChannel:{
      type:Boolean,
      default:false
   },
   channel:{
      type:Object,
      default:{}
   }
})
const go_channel_chat_page = () => {
   if(props.checkBoxChannel == false){
      router.push('channelChatPage')
   }
   return
}
const select_channel = () => {
   emit('select_channel_emit')
}
const change_status_checkbox = (e,id) => {
   emit('updateListChannel',e.target.checked,id)
}
</script>

<style>

</style>