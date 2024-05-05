<template>
   <div dir="rtl" class="h-screen bg-neutral-100">
        <headerOfPages></headerOfPages>
        <div class="w-[100%] h-[77%]">
         <div class="flex flex-col h-full w-[100%]">
         <TabGroup>
            <div class="tab-box bg-white text-[90%] h-[8%] px-3 overflow-auto">
               <TabList>
                <Tab 
                 @click="tab_toggle"

      >
                همه گفت و گو ها
    </Tab>
    <Tab
        @click="tab_toggle"
        class=""
      >
      مخاطبین
    </Tab>
    <Tab
        @click="tab_toggle"
        class=""
      >
      گروه ها
    </Tab>   
    <Tab
        @click="tab_toggle"
        class=""
      >
      کانال ها
    </Tab> 
    <Tab
       @click="tab_toggle"
        class=""
      >
      آرشیو ها
    </Tab>    
    <Tab
        @click="tab_toggle"
        class=""
      >
       پیام های من
    </Tab> 

               </TabList>
            </div>
            <div class="h-[92%] flex flex-col justify-center">
               <TabPanels class="h-[100%]">
                <TabPanel class="h-full py-3 overflow-auto">
                  <div v-if="checkBoxContactVisibility" class="flex gap-2 py-2 px-7 items-center">
                    <input type="checkbox">
                    <label class="text-gray-400">انتخاب همه</label>
                  </div>
                  <div>
                    <div class="flex px-6 py-3 justify-between items-center">
                    <div class="text-[#2375C8] px-4 font-bold">
                        <ul class="list-disc">
                        <li>مخاطبین</li>
                        </ul>
                    </div>
                    <button :class="visibilityContacts ? 'rotate-180' : 'rotate-0' " @click="show_more_contacts">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3218 8.06944C16.6362 7.79988 16.6727 7.3264 16.4031 7.01191C16.1335 6.69741 15.6601 6.66099 15.3456 6.93056L16.3218 8.06944ZM10.0003 12.5L9.51223 13.0694C9.7931 13.3102 10.2076 13.3102 10.4884 13.0694L10.0003 12.5ZM4.65509 6.93056C4.34059 6.66099 3.86712 6.69741 3.59755 7.01191C3.32798 7.3264 3.3644 7.79988 3.6789 8.06944L4.65509 6.93056ZM15.3456 6.93056L9.51223 11.9306L10.4884 13.0694L16.3218 8.06944L15.3456 6.93056ZM10.4884 11.9306L4.65509 6.93056L3.6789 8.06944L9.51223 13.0694L10.4884 11.9306Z" fill="#2375C8"/>
                        </svg>
                    </button>
                    </div>
                    <contactsContent v-for="contact in contactsLength" :key="contact" :contact="contact" :check-box-contact="checkBoxContactVisibility" @updateListContact="updateListContact" @select_contacts_emit="select_contacts_emit"></contactsContent>
                  </div>
                  <div>
                    <div class="flex px-6 py-3 justify-between items-center">
                      <div class="text-[#2375C8] px-4 font-bold">
                          <ul class="list-disc">
                          <li>گروه</li>
                          </ul>
                      </div>
                      <button :class="visibilityGroups ? 'rotate-180' : 'rotate-0' " @click="show_more_groups">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.3218 8.06944C16.6362 7.79988 16.6727 7.3264 16.4031 7.01191C16.1335 6.69741 15.6601 6.66099 15.3456 6.93056L16.3218 8.06944ZM10.0003 12.5L9.51223 13.0694C9.7931 13.3102 10.2076 13.3102 10.4884 13.0694L10.0003 12.5ZM4.65509 6.93056C4.34059 6.66099 3.86712 6.69741 3.59755 7.01191C3.32798 7.3264 3.3644 7.79988 3.6789 8.06944L4.65509 6.93056ZM15.3456 6.93056L9.51223 11.9306L10.4884 13.0694L16.3218 8.06944L15.3456 6.93056ZM10.4884 11.9306L4.65509 6.93056L3.6789 8.06944L9.51223 13.0694L10.4884 11.9306Z" fill="#2375C8"/>
                          </svg>
                      </button>
                    </div>
                    <groupsContent v-for="group in groupsLength" :key="group" :group="group" :check-box-group="checkBoxGroupVisibility" @updateListGroup="updateListGroup" @select_group_emit="select_group_emit"></groupsContent>
                  </div>
                  <div>
                    <div class="flex px-6 py-3 justify-between items-center">
                      <div class="text-[#2375C8] px-4 font-bold">
                        <ul class="list-disc">
                        <li>کانال</li>
                        </ul>
                      </div>
                      <button :class="visibilityChannels ? 'rotate-180' : 'rotate-0'" @click="show_more_channels">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3218 8.06944C16.6362 7.79988 16.6727 7.3264 16.4031 7.01191C16.1335 6.69741 15.6601 6.66099 15.3456 6.93056L16.3218 8.06944ZM10.0003 12.5L9.51223 13.0694C9.7931 13.3102 10.2076 13.3102 10.4884 13.0694L10.0003 12.5ZM4.65509 6.93056C4.34059 6.66099 3.86712 6.69741 3.59755 7.01191C3.32798 7.3264 3.3644 7.79988 3.6789 8.06944L4.65509 6.93056ZM15.3456 6.93056L9.51223 11.9306L10.4884 13.0694L16.3218 8.06944L15.3456 6.93056ZM10.4884 11.9306L4.65509 6.93056L3.6789 8.06944L9.51223 13.0694L10.4884 11.9306Z" fill="#2375C8"/>
                        </svg>
                      </button>
                    </div>
                    <channelsContent v-for="channel in channelsLength" :key="channel" :channel="channel"></channelsContent>
                  </div>
                  <div>
                    <div class="flex px-6 py-3 justify-between items-center">
                    <div class="text-[#2375C8] px-4 font-bold">
                        <ul class="list-disc">
                        <li>آرشیو</li>
                        </ul>
                    </div>
                    <button :class="visibilityArchived ? 'rotate-180' : 'rotate-0'" @click="show_more_archived">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3218 8.06944C16.6362 7.79988 16.6727 7.3264 16.4031 7.01191C16.1335 6.69741 15.6601 6.66099 15.3456 6.93056L16.3218 8.06944ZM10.0003 12.5L9.51223 13.0694C9.7931 13.3102 10.2076 13.3102 10.4884 13.0694L10.0003 12.5ZM4.65509 6.93056C4.34059 6.66099 3.86712 6.69741 3.59755 7.01191C3.32798 7.3264 3.3644 7.79988 3.6789 8.06944L4.65509 6.93056ZM15.3456 6.93056L9.51223 11.9306L10.4884 13.0694L16.3218 8.06944L15.3456 6.93056ZM10.4884 11.9306L4.65509 6.93056L3.6789 8.06944L9.51223 13.0694L10.4884 11.9306Z" fill="#2375C8"/>
                        </svg>
                    </button>
                    </div>
                    <archivedContent v-for="chat in archivedLength" :key="chat" :chat="chat"></archivedContent>
                  </div>
                </TabPanel>
                <TabPanel class="h-full py-3 overflow-auto">
                  <div v-if="checkBoxContactVisibility" class="flex gap-2 py-2 px-7 items-center">
                    <input type="checkbox">
                    <label class="text-gray-400">انتخاب همه</label>
                  </div>
                  <contactsContent v-for="contact in contactsTab" :key="contact" :contact="contact" :check-box-contact="checkBoxContactVisibility" @updateListContact="updateListContact" @select_contacts_emit="select_contacts_emit"></contactsContent>
                </TabPanel>
                <TabPanel class="h-full py-3 overflow-auto">
                  <div v-if="checkBoxGroupVisibility" class="flex gap-2 py-2 px-7 items-center">
                    <input type="checkbox">
                    <label class="text-gray-400">انتخاب همه</label>
                  </div>
                  <groupsContent v-for="group in groupsTab" :key="group" :group="group" :check-box-group="checkBoxGroupVisibility" @updateListGroup="updateListGroup" @select_group_emit="select_group_emit"></groupsContent>
                </TabPanel>
                <TabPanel class="h-full py-3 overflow-auto">
                  <div v-if="checkBoxChannelVisibility" class="flex gap-2 py-2 px-7 items-center">
                    <input type="checkbox">
                    <label class="text-gray-400">انتخاب همه</label>
                  </div>
                  <channelsContent v-for="channel in channelsTab" :key="channel" :channel="channel" :check-box-channel="checkBoxChannelVisibility" @updateListChannel="updateListChannel" @select_channel_emit="select_channel_emit"></channelsContent>
                </TabPanel>
                <TabPanel class="h-full py-3 overflow-auto">
                  <div v-if="checkBoxArchivedVisibility" class="flex gap-2 py-2 px-7 items-center">
                    <input type="checkbox">
                    <label class="text-gray-400">انتخاب همه</label>
                  </div>
                  <archivedContent v-for="chat in archived" :key="chat" :chat="chat" :check-box-archived="checkBoxArchivedVisibility" @updateListArchived="updateListArchived" @select_archived_emit="select_archived_emit"></archivedContent>
                </TabPanel>
                <TabPanel class="h-full py-3 overflow-auto">
                  <savedMessageContent v-for="message in savedMessages" :key="message" :message="message"></savedMessageContent>
                </TabPanel>
               </TabPanels>
            </div>
         </TabGroup>
         </div>
        </div>
        <footerOfPages v-if="footerBox"></footerOfPages>
        <transition  enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0 translate-y-[50%] duration-100" enter-to-class="opacity-100" leave-active-class="duration-300 ease-in" leave-from-class="opacity-100" leave-to-class="transform translate-y-[50%] opacity-0" name="fade">
          <div v-if="detailsFooter" class="h-[10%] fixed bottom-0 w-full">
          <div class="bg-[#0A66C2] rounded-t-2xl w-full h-full">
            <div @click="close_details_footer" class="h-[30%]">
              <div class="border-b-2 z-50 border-white w-[25%] mx-auto border-opacity-65 pt-3"></div>
            </div>
            <div class="flex items-center h-[60%] px-5">
              <div class="flex gap-8 items-start">
              <button @click="remove_modal" class="flex items-center gap-1.5">
                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5001 6H3.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M18.8337 8.5L18.3737 15.3991C18.1967 18.054 18.1082 19.3815 17.2432 20.1907C16.3782 21 15.0478 21 12.387 21H11.6136C8.95284 21 7.62244 21 6.75743 20.1907C5.89242 19.3815 5.80393 18.054 5.62693 15.3991L5.16699 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M9.5 11L10 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M14.5 11L14 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="white" stroke-width="1.5"/>
                  </svg>
                </div>
                <div class="text-white">حذف</div>
              </button>
              <button v-if="archivedBtn" class="flex items-center gap-1.5">
                <div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3619_7630)">
                      <path d="M1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5C12.5355 1.5 14.3033 1.5 15.4017 2.59835C16.5 3.6967 16.5 5.46447 16.5 9" stroke="white" stroke-width="1.5"/>
                      <path d="M1.5 10.5C1.5 8.3998 1.5 7.3497 1.90873 6.54754C2.26825 5.84193 2.84193 5.26825 3.54754 4.90873C4.3497 4.5 5.3998 4.5 7.5 4.5H10.5C12.6002 4.5 13.6503 4.5 14.4525 4.90873C15.1581 5.26825 15.7317 5.84193 16.0913 6.54754C16.5 7.3497 16.5 8.3998 16.5 10.5C16.5 12.6002 16.5 13.6503 16.0913 14.4525C15.7317 15.1581 15.1581 15.7317 14.4525 16.0913C13.6503 16.5 12.6002 16.5 10.5 16.5H7.5C5.3998 16.5 4.3497 16.5 3.54754 16.0913C2.84193 15.7317 2.26825 15.1581 1.90873 14.4525C1.5 13.6503 1.5 12.6002 1.5 10.5Z" stroke="white" stroke-width="1.5"/>
                      <path d="M9 12.75L9 8.25M9 8.25L10.5 10.125M9 8.25L7.5 10.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_3619_7630">
                        <rect width="18" height="18" rx="5" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="text-white">آرشیو</div>
              </button>
              <button v-if="exitFromArchived" class="flex items-center gap-1.5">
                <div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3615_6530)">
                      <path d="M1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5C12.5355 1.5 14.3033 1.5 15.4017 2.59835C16.5 3.6967 16.5 5.46447 16.5 9" stroke="white" stroke-width="1.5"/>
                      <path d="M1.5 10.5C1.5 8.3998 1.5 7.3497 1.90873 6.54754C2.26825 5.84193 2.84193 5.26825 3.54754 4.90873C4.3497 4.5 5.3998 4.5 7.5 4.5H10.5C12.6002 4.5 13.6503 4.5 14.4525 4.90873C15.1581 5.26825 15.7317 5.84193 16.0913 6.54754C16.5 7.3497 16.5 8.3998 16.5 10.5C16.5 12.6002 16.5 13.6503 16.0913 14.4525C15.7317 15.1581 15.1581 15.7317 14.4525 16.0913C13.6503 16.5 12.6002 16.5 10.5 16.5H7.5C5.3998 16.5 4.3497 16.5 3.54754 16.0913C2.84193 15.7317 2.26825 15.1581 1.90873 14.4525C1.5 13.6503 1.5 12.6002 1.5 10.5Z" stroke="white" stroke-width="1.5"/>
                      <path d="M9 8.25L9 12.75M9 12.75L10.5 10.875M9 12.75L7.5 10.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_3615_6530">
                        <rect width="18" height="18" rx="5" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="text-white">خروج از آرشیو</div>
              </button>
              <div v-if="confirmRemoveModal" class="bg-black fixed w-full h-full flex justify-center items-center top-0 left-0 bg-opacity-30">
                <div class="bg-white px-5 py-5 gap-7 flex flex-col w-[70%] rounded-lg">
                  <div>آیا از حذف مخاطب اطمینان دارید؟</div>
                  <div class="flex gap-2">
                    <button @click="confirm_remove" class="bg-[#0A66C2] text-white px-7 py-1 rounded">تایید</button>
                    <button @click="cancel_removing" class="border border-[#0A66C2] text-[#0A66C2] px-5 rounded py-1">انصراف</button>
                  </div>
                </div>
              </div>
              <button v-if="blockBtn" @click="block_user" class="flex items-center gap-1.5">
                <div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3615_6755)">
                        <path d="M16.5 12C16.5 9.87868 16.5 8.81802 15.841 8.15901C15.182 7.5 14.1213 7.5 12 7.5H6C3.87868 7.5 2.81802 7.5 2.15901 8.15901C1.5 8.81802 1.5 9.87868 1.5 12C1.5 14.1213 1.5 15.182 2.15901 15.841C2.81802 16.5 3.87868 16.5 6 16.5H12C14.1213 16.5 15.182 16.5 15.841 15.841C16.5 15.182 16.5 14.1213 16.5 12Z" stroke="white" stroke-width="1.5"/>
                        <path d="M13.5 7.5V6C13.5 3.51472 11.4853 1.5 9 1.5C6.51472 1.5 4.5 3.51472 4.5 6V7.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_3615_6755">
                          <rect width="18" height="18" fill="white" transform="matrix(-1 0 0 1 18 0)"/>
                        </clipPath>
                      </defs>
                  </svg>
                </div>
                <div class="text-white">مسدود کردن</div>
              </button>
              </div>
            </div>
          </div>
          </div>
        </transition>
   </div>
</template>

<script setup>
import headerOfPages from '@/components/headerOfPages.vue';
import footerOfPages from '@/components/footerOfPages.vue';
import contactsContent from '@/components/contactsContent.vue';
import groupsContent from '../components/groupsContent.vue'
import channelsContent from '../components/channelsContent.vue'
import archivedContent from '../components/archivedContent.vue'
import savedMessageContent from '../components/savedMessageContent.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ref , computed } from 'vue';
const visibilityContacts = ref(false)
const visibilityGroups = ref(false)
const visibilityChannels = ref(false)
const visibilityArchived = ref(false)
const archivedBtn = ref(false)
const exitFromArchived = ref(false)
const blockBtn = ref(false)
const contactsTab = ref([
   {img:'/src/assets/photos/images.jpg', name:'حدیث', text:'مسول خرید العل رفته خرید خرید کرده ...', id:1 },
   {img:'/src/assets/photos/selfie.jpg', name:'علی', text:'مسول خرید العل رفته خرید خرید کرده ...', id:2 },
   {img:'/src/assets/photos/images.jpg', name:'سارا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:3 },
   {img:'/src/assets/photos/selfie.jpg', name:'فرهاد', text:'مسول خرید العل رفته خرید خرید کرده ...', id:4 },
   {img:'/src/assets/photos/images.jpg', name:'عسل', text:'مسول خرید العل رفته خرید خرید کرده ...', id:5 },
   {img:'/src/assets/photos/monkey.jpg', name:'هانا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:6 },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:7 },
   {img:'/src/assets/photos/selfie.jpg', name:'پریا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:8 },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:9 },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:10 },
   {img:'/src/assets/photos/images.jpg', name:'پریا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:11 },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:12 },
   {img:'/src/assets/photos/monkey.jpg', name:'پریا', text:'مسول خرید العل رفته خرید خرید کرده ...', id:13 },
])
const groupsTab = ref([
   {img:'/src/assets/photos/monkey.jpg', name:'گروه تراز', text:'مسول لف خرید الع رفته خریدرید کرده...', id:1 },
   {img:'/src/assets/photos/selfie.jpg', name:'گروه فناوران', text:'مسول لف خرید الع رفته خریدرید کرده...', id:2 },
   {img:'/src/assets/photos/monkey.jpg', name:'بهسامان', text:'مسول لف خرید الع رفته خریدرید کرده...', id:3 },
   {img:'/src/assets/photos/selfie.jpg', name:'فروش', text:'مسول لف خرید الع رفته خریدرید کرده...', id:4 },
   {img:'/src/assets/photos/monkey.jpg', name:'تولید', text:'مسول لف خرید الع رفته خریدرید کرده...', id:5 },
   {img:'/src/assets/photos/monkey.jpg', name:'پشتیبانی', text:'مسول لف خرید الع رفته خریدرید کرده...', id:6 },
   {img:'/src/assets/photos/monkey.jpg', name:'استقرار', text:'مسول لف خرید الع رفته خریدرید کرده...', id:7 },
   {img:'/src/assets/photos/selfie.jpg', name:'فروش', text:'مسول لف خرید الع رفته خریدرید کرده...', id:8 },
   {img:'/src/assets/photos/monkey.jpg', name:'بازاریابی', text:'مسول لف خرید الع رفته خریدرید کرده...', id:9 },
   {img:'/src/assets/photos/monkey.jpg', name:'بازرگانی', text:'مسول لف خرید الع رفته خریدرید کرده...', id:10 },
   {img:'/src/assets/photos/selfie.jpg', name:'تولید', text:'مسول لف خرید الع رفته خریدرید کرده...', id:11 },
   {img:'/src/assets/photos/monkey.jpg', name:'اطلاعات', text:'مسول لف خرید الع رفته خریدرید کرده...', id:12 },
   {img:'/src/assets/photos/monkey.jpg', name:'ارتباطات', text:'مسول لف خرید الع رفته خریدرید کرده...', id:13 },
])
const channelsTab = ref([
   {img:'/src/assets/photos/monkey.jpg', name:'کانال تراز', text:'مسول لف خرید الع رفته خریدرید کرده...', id:1 },
   {img:'/src/assets/photos/selfie2.jpg', name:'کانال فناوران', text:'مسول لف خرید الع رفته خریدرید کرده...', id:2 },
   {img:'/src/assets/photos/monkey.jpg', name:'کانال بهسامان', text:'مسول لف خرید الع رفته خریدرید کرده...', id:3 },
   {img:'/src/assets/photos/selfie2.jpg', name:'کانال فروش', text:'مسول لف خرید الع رفته خریدرید کرده...', id:4 },
   {img:'/src/assets/photos/monkey.jpg', name:'کانال تولید', text:'مسول لف خرید الع رفته خریدرید کرده...', id:5 },
   {img:'/src/assets/photos/selfie2.jpg', name:'کانال', text:'مسول لف خرید الع رفته خریدرید کرده...', id:6 },
   {img:'/src/assets/photos/monkey.jpg', name:'استقرار', text:'مسول لف خرید الع رفته خریدرید کرده...', id:7 },
   {img:'/src/assets/photos/selfie.jpg', name:'فروش', text:'مسول لف خرید الع رفته خریدرید کرده...', id:8 },
   {img:'/src/assets/photos/monkey.jpg', name:'بازاریابی', text:'مسول لف خرید الع رفته خریدرید کرده...', id:9 },
   {img:'/src/assets/photos/monkey.jpg', name:'بازرگانی', text:'مسول لف خرید الع رفته خریدرید کرده...', id:10 },
   {img:'/src/assets/photos/selfie2.jpg', name:'تولید', text:'مسول لف خرید الع رفته خریدرید کرده...', id:11 },
   {img:'/src/assets/photos/monkey.jpg', name:'اطلاعات', text:'مسول لف خرید الع رفته خریدرید کرده...', id:12 },
   {img:'/src/assets/photos/monkey.jpg', name:'ارتباطات', text:'مسول لف خرید الع رفته خریدرید کرده...', id:13 },
])
const archived = ref([
   {img:'/src/assets/photos/images.jpg', name:'سارا', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:1 },
   {img:'/src/assets/photos/selfie2.jpg', name:'فرهاد', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:2 },
   {img:'/src/assets/photos/monkey.jpg', name:'رها', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:3 },
   {img:'/src/assets/photos/selfie2.jpg', name:'هانا', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:4 },
   {img:'/src/assets/photos/monkey.jpg', name:'علی', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:5 },
   {img:'/src/assets/photos/selfie2.jpg', name:'حدیث', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:6 },
   {img:'/src/assets/photos/monkey.jpg', name:'مهرداد', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:7 },
   {img:'/src/assets/photos/selfie.jpg', name:'مهراد', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:8 },
   {img:'/src/assets/photos/monkey.jpg', name:'پریسا', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:9 },
   {img:'/src/assets/photos/monkey.jpg', name:'امیر', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:10 },
   {img:'/src/assets/photos/selfie2.jpg', name:'پریا', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:11 },
   {img:'/src/assets/photos/monkey.jpg', name:'حسین', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:12 },
   {img:'/src/assets/photos/monkey.jpg', name:'کریم', text:'رفته ال خرید خ خرید رفته خرید کرده ...', id:13 },
])
const savedMessages = ref([
   {img:'/src/assets/photos/monkey.jpg'},
])
const listSelectedUsers = ref([])
const listSelectedGroups = ref([])
const listSelectedChannel = ref([])
const listSelectedArchived = ref([])
const footerBox = ref(true)
const detailsFooter = ref(false)
const confirmRemoveModal = ref(false)
const checkBoxContactVisibility = ref(false)
const checkBoxGroupVisibility = ref(false)
const checkBoxChannelVisibility = ref(false)
const checkBoxArchivedVisibility = ref(false)
const select_contacts_emit = () => {
  footerBox.value = false
  detailsFooter.value = true
  checkBoxContactVisibility.value = true
  blockBtn.value = true
}
const close_details_footer = () => {
  footerBox.value = true
  detailsFooter.value = false
  checkBoxContactVisibility.value = false
  checkBoxGroupVisibility.value = false
  checkBoxArchivedVisibility.value = false
  checkBoxChannelVisibility.value = false
}
const select_group_emit = () => {
  footerBox.value = false
  detailsFooter.value = true
  checkBoxGroupVisibility.value = true
  blockBtn.value = false
}
const select_channel_emit = () => {
  footerBox.value = false
  detailsFooter.value = true
  checkBoxChannelVisibility.value = true
  blockBtn.value = false
}
const select_archived_emit = () => {
  footerBox.value = false
  detailsFooter.value = true
  checkBoxArchivedVisibility.value = true
  blockBtn.value = true
}
const updateListContact = (s,u) => {
  if(s == true){
    listSelectedUsers.value.push(u)
  }
  else if(s == false){
    listSelectedUsers.value = listSelectedUsers.value.filter((contact) => u !== contact )
  }
}
const updateListGroup = (s,u) => {
  if(s == true){
    listSelectedGroups.value.push(u)
  }
  else if(s == false){
    listSelectedGroups.value = listSelectedGroups.value.filter((group) => u !== group )
  }
}
const updateListChannel = (s,u) => {
  if(s == true){
    listSelectedChannel.value.push(u)
  }
  else if(s == false){
    listSelectedChannel.value = listSelectedChannel.value.filter((channel) => u !== channel )
  }
}
const updateListArchived = (s,u) => {
  if(s == true){
    listSelectedArchived.value.push(u)
  }
  else if(s == false){
    listSelectedArchived.value = listSelectedArchived.value.filter((chat) => u !== chat )
  }
}
const confirm_remove = () => {
    if(checkBoxContactVisibility.value == true){
      detailsFooter.value = false
      footerBox.value = true
      checkBoxContactVisibility.value = false
      confirmRemoveModal.value = false    
      contactsTab.value = contactsTab.value.filter(row=>{return !listSelectedUsers.value.includes(row.id)})
      listSelectedUsers.value = []
    }
    if(checkBoxGroupVisibility.value == true){
      detailsFooter.value = false
      footerBox.value = true
      checkBoxGroupVisibility.value = false
      confirmRemoveModal.value = false    
      groupsTab.value = groupsTab.value.filter(row=>{return !listSelectedGroups.value.includes(row.id)})
      listSelectedUsers.value = []
    }
    if(checkBoxChannelVisibility.value == true){
      detailsFooter.value = false
      footerBox.value = true
      checkBoxChannelVisibility.value = false
      confirmRemoveModal.value = false    
      channelsTab.value = channelsTab.value.filter(row=>{return !listSelectedChannel.value.includes(row.id)})
      listSelectedChannel.value = []
    }
    if(checkBoxArchivedVisibility.value == true){
      detailsFooter.value = false
      footerBox.value = true
      checkBoxArchivedVisibility.value = false
      confirmRemoveModal.value = false    
      archived.value = archived.value.filter(row=>{return !listSelectedArchived.value.includes(row.id)})
      listSelectedArchived.value = []
    }
}
const remove_modal = () => {
  confirmRemoveModal.value = true
}
const cancel_removing = () => {
  detailsFooter.value = false
  footerBox.value = true
  checkBoxContactVisibility.value = false
  checkBoxGroupVisibility.value = false
  checkBoxChannelVisibility.value = false
  checkBoxArchivedVisibility.value = false
  confirmRemoveModal.value = false
}
const contactsLength = computed(() => {
    if (visibilityContacts.value) return contactsTab.value
        return contactsTab.value.slice(0, 3);
});
const groupsLength = computed(() => {
    if (visibilityGroups.value) return groupsTab.value
        return groupsTab.value.slice(0, 3);
});
const channelsLength = computed(() => {
    if (visibilityChannels.value) return channelsTab.value
        return channelsTab.value.slice(0, 3);
});
const archivedLength = computed(() => {
    if (visibilityArchived.value) return archived.value
        return archived.value.slice(0, 3);
});
const show_more_groups = () => {
    visibilityGroups.value = !visibilityGroups.value
}
const show_more_contacts = () => {
    visibilityContacts.value = !visibilityContacts.value
}
const show_more_channels = () => {
    visibilityChannels.value = !visibilityChannels.value
}
const show_more_archived = () => {
    visibilityArchived.value = !visibilityArchived.value
}
const tab_toggle = () => {
  checkBoxArchivedVisibility.value = false
  checkBoxChannelVisibility.value = false
  checkBoxContactVisibility.value = false
  checkBoxGroupVisibility.value = false
  footerBox.value = true
  detailsFooter.value = false
}
</script>

<style>
[role=tablist]{
   color: rgb(175, 175, 175);
   display: flex;
   overflow: auto;
   gap:40px;
   height: 100%;
   width: max-content;
   padding: 0 20px;
}
[role=tab]{
    width: max-content;
}
[role=tab]:focus{
    border-bottom: 3px solid #3B85CE ;
    background-color: #F2F9FF ;
    color: #3B85CE;
    padding: 0 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.tab-box{
    box-shadow: #E7F0F9 10px 5px 8px -3px;
    scrollbar-width: none;
}
</style>