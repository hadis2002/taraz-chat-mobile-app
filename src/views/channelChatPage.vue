<template>
  <div dir="rtl" class="h-screen bg-neutral-100">
    <headerOfChatPage :channel-name="true" :channel-img="true" :channel-menu-items="true" :contact-img="false" :group-img="false" :group-menu-items="false" :contact-menu-items="false" :group-name="false" :contact-name="false"></headerOfChatPage>
    <rowChats :menu-details-channel="false" :row-bg-channel="'bg-[#1a96f0] text-white rounded-xl gap-2 py-2.5'" :row-chat="false" :channel-row-chat-width="'w-full'" class="h-[90%]"></rowChats>
  </div>
</template>

<script setup>
import headerOfChatPage from '@/components/headerOfChatPage.vue';
import rowChats from '@/components/rowChats.vue';
</script>

<style>

</style>