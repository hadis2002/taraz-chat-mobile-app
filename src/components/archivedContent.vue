<template>
   <div class="flex flex-col relative my-3 px-6">
      <div class="bg-white px-4 py-1 cursor-pointer flex rounded-lg">
         <div v-touch:hold="select_archived" @click="go_archived_chat_page" class="flex items-center gap-3 w-full">
            <div class="w-14 h-16 flex items-center">
               <img class="h-[72%] w-full rounded-full" :src="chat.img" alt="">
            </div>
            <div class="flex flex-col w-full">
               <div class="flex justify-between items-center">
                  <div class="">{{ chat.name }}</div>
               </div>
               <div class="text-sm text-gray-500">{{ chat.text.substring(0,39) }}</div>
            </div>
         </div>
         <div v-if="checkBoxArchived">
            <input @change="change_status_checkbox($event,chat.id)" class="h-[65%]" type="checkbox">
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineEmits , defineProps } from 'vue';
const emit = defineEmits(['select_archived_emit' , 'updateListArchived'])
const router = useRouter()
const props = defineProps({
   checkBoxArchived:{
      type:Boolean,
      default:false
   },
   chat:{
      type: Object,
      default: {}
   }
})
const go_archived_chat_page = () => {
   if(props.checkBoxArchived == false){
      router.push('contactChatPage')
   }
   return
}
const select_archived = () => {
   emit('select_archived_emit')
}
const change_status_checkbox = (e,id) => {
   emit('updateListArchived',e.target.checked,id)
}
</script>

<style>

</style>