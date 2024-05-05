<template>
  <div dir="rtl" class="h-screen bg-neutral-100">
    <headerOfChatPage :camera-icon="false" :contact-name="false" :my-name="true" :your-img="true" :contact-img="false"></headerOfChatPage>
    <rowChats :option-color-menu="'#fff'" :row-bg-channel="'bg-[#1a96f0] text-white rounded-xl'" :row-chat="false" :channel-row-chat-width="'w-[100%]'"></rowChats>
    <footerOfChatPage></footerOfChatPage>
  </div>
</template>

<script setup>
import headerOfChatPage from '@/components/headerOfChatPage.vue';
import rowChats from '@/components/rowChats.vue';
import footerOfChatPage from '@/components/footerOfChatPage.vue';
</script>

<style>

</style>