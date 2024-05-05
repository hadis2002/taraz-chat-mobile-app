<template>
   <div class="flex flex-col px-6 my-3 relative">
      <div class="bg-white px-4 py-1 cursor-pointer flex rounded-lg">
         <div v-touch:hold="select_group" @click="go_group_chat_page" class="flex gap-3 items-center w-full">
            <div class="w-14 h-16 flex items-center">
               <img class="h-[72%] w-full rounded-full" :src="group.img" alt="">
            </div>
            <div class="flex flex-col w-full">
               <div class="flex justify-between items-center">
                  <div class="">{{ group.name }}</div>
               </div>
               <div class="text-sm text-gray-500">{{ group.text.substring(0,37) }}</div>
            </div>
         </div>
         <div v-if="checkBoxGroup">
            <input @change="change_status_checkbox($event,group.id)" class="h-[65%]" type="checkbox">
         </div>
      </div>
   </div>
</template>

<script setup>
import { defineEmits , defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const emit = defineEmits(['select_group_emit' , 'updateListGroup'])
const props = defineProps({
   checkBoxGroup:{
      type:Boolean,
      default:false
   },
   group:{
      type:Object,
      default:{}
   }
})
const go_group_chat_page = () => {
   if(props.checkBoxGroup == false){
      router.push('groupChatPage')
   }
   return
}
const select_group = () => {
   emit('select_group_emit')
}
const change_status_checkbox = (e,id) => {
   emit('updateListGroup',e.target.checked,id)
}
</script>

<style>

</style>