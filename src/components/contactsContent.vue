<template>
      <div class="flex flex-col my-3 px-6">
         <div class="bg-white cursor-pointer px-4 py-1 flex rounded-lg">
            <div v-touch:hold="select_contacts" @click="go_contact_chat_page" class="flex w-full gap-3 items-center">
               <div class="w-14 h-16 flex items-center">
                  <img class="h-[72%] w-full rounded-full" :src="contact.img" alt="">
               </div>
               <div class="flex flex-col w-full">
                  <div class="flex justify-between items-center">
                     <div class="">{{ contact.name }}</div>
                  </div>
                  <div class="text-sm text-gray-500 ">{{ contact.text.substring(0,38) }}</div>
               </div>
            </div>
            <div v-if="checkBoxContact">
               <input @change="change_status_checkbox($event,contact.id)" class="h-[65%]" type="checkbox">
            </div>
         </div>
      </div>
</template>

<script setup>
import { defineEmits , defineProps , ref } from 'vue';
import { useRouter } from 'vue-router';
const emit = defineEmits(['select_contacts_emit' , 'updateListContact'])
const router = useRouter()
const props = defineProps({
   checkBoxContact:{
      type:Boolean,
      default:false
   },
   contact:{
      type:Object,
      default:{}
   }
})
const go_contact_chat_page = () => {
   if(props.checkBoxContact == false){
      router.push('contactChatPage')
   }
   return
}
const select_contacts = () => {
   emit('select_contacts_emit')
}
const change_status_checkbox = (e,id) => {
   emit('updateListContact',e.target.checked,id)
}
</script>

<style>

</style>