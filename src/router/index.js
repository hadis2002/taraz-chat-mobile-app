import { createRouter, createWebHistory } from 'vue-router'
import personalInformationLoginBox from '../views/personalInformationLoginBox.vue'
import addressLoginBox from '../views/addressLoginBox.vue'
import communicationWaysLoginBox from '@/views/communicationWaysLoginBox.vue'
import chatPage from '../views/chatPage.vue'
import headerOfPages from '../components/headerOfPages.vue'
import footerOfPages from '../components/footerOfPages.vue'
import notificationPage from '@/views/notificationPage.vue'
import contactChatPage from '../views/contactChatPage.vue'
import profilePage from '../views/profilePage.vue'
import blockedUsers from '../views/blockedUsers.vue'
import contactsContent from '../components/contactsContent.vue'
import groupsContent from '../components/groupsContent.vue'
import channelsContent from '../components/channelsContent.vue'
import archivedContent from '../components/archivedContent.vue'
import savedMessageContent from '../components/savedMessageContent.vue'
import groupChatPage from '../views/groupChatPage.vue'
import headerOfChatPage from '../components/headerOfChatPage.vue'
import footerOfChatPage from '../components/footerOfChatPage.vue'
import rowChats from '../components/rowChats.vue'
import groupMembers from '@/views/groupMembers.vue'
import addingMemberPage from '@/views/addingMemberPage.vue'
import groupProfilePage from '@/views/groupProfilePage.vue'
import contactProfilePage from '@/views/contactProfilePage.vue'
import channelChatPage from '@/views/channelChatPage.vue'
import savedMessageChatPage from '../views/savedMessageChatPage.vue'
import savedMessageProfilePage from '../views/savedMessageProfilePage.vue'
import informationLoginBox from '@/components/informationLoginBox.vue'
import mediaBox from '../components/mediaBox.vue'
import contactBox from '../components/contactBox.vue'
import archivedUsers from '../views/archivedUsersPage.vue'
import meetingPage from '@/views/meetingPage.vue'
import secondPageOfMeeting from '@/views/secondPageOfMeeting.vue'
import thirdPageOfMeeting from '../views/thirdPageOfMeeting.vue'
import fourthPageOfMeeting from '../views/fourthPageOfMeeting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personalInformationLoginBox',
      component: personalInformationLoginBox
    },
    {
      path: '/addressLoginBox',
      name: 'addressLoginBox',
      component: addressLoginBox
    },
    {
      path: '/communicationWaysLoginBox',
      name: 'communicationWaysLoginBox',
      component: communicationWaysLoginBox
    },
    {
      path: '/chatPage',
      name: 'chatPage',
      component: chatPage
    },
    {
      path: '/headerOfPages',
      name: 'headerOfPages',
      component: headerOfPages
    },
    {
      path: '/footerOfPages',
      name: 'footerOfPages',
      component: footerOfPages
    },
    {
      path: '/contactsContent',
      name: 'contactsContent',
      component: contactsContent
    },
    {
      path: '/notificationPage',
      name: 'notificationPage',
      component: notificationPage
    },
    {
      path: '/contactChatPage',
      name: 'contactChatPage',
      component: contactChatPage
    },
    {
      path: '/profilePage',
      name: 'profilePage',
      component: profilePage
    },
    {
      path: '/blockedUsers',
      name: 'blockedUsers',
      component: blockedUsers
    },
    {
      path: '/groupsContent',
      name: 'groupsContent',
      component: groupsContent
    },
    {
      path: '/channelsContent',
      name: 'channelsContent',
      component: channelsContent
    },
    {
      path: '/archivedContent',
      name: 'archivedContent',
      component: archivedContent
    },
    {
      path: '/savedMessageContent',
      name: 'savedMessageContent',
      component: savedMessageContent
    },
    {
      path: '/groupChatPage',
      name: 'groupChatPage',
      component: groupChatPage
    },
    {
      path: '/headerOfChatPage',
      name: 'headerOfChatPage',
      component: headerOfChatPage
    },
    {
      path: '/footerOfChatPage',
      name: 'footerOfChatPage',
      component: footerOfChatPage
    },
    {
      path: '/rowChats',
      name: 'rowChats',
      component: rowChats
    },
    {
      path: '/groupMembers',
      name: 'groupMembers',
      component: groupMembers
    },
    {
      path: '/addingMemberPage',
      name: 'addingMemberPage',
      component: addingMemberPage
    },
    {
      path: '/groupProfilePage',
      name: 'groupProfilePage',
      component: groupProfilePage
    },
    {
      path: '/contactProfilePage',
      name: 'contactProfilePage',
      component: contactProfilePage
    },
    {
      path: '/channelChatPage',
      name: 'channelChatPage',
      component: channelChatPage
    },
    {
      path: '/savedMessageChatPage',
      name: 'savedMessageChatPage',
      component: savedMessageChatPage
    },
    {
      path: '/savedMessageProfilePage',
      name: 'savedMessageProfilePage',
      component: savedMessageProfilePage
    },
    {
      path: '/informationLoginBox',
      name: 'informationLoginBox',
      component: informationLoginBox
    },
    {
      path: '/mediaBox',
      name: 'mediaBox',
      component: mediaBox
    },
    {
      path: '/contactBox',
      name: 'contactBox',
      component: contactBox
    },
    {
      path: '/archivedUsers',
      name: 'archivedUsers',
      component: archivedUsers
    },
    {
      path: '/meetingPage',
      name: 'meetingPage',
      component: meetingPage
    },
    {
      path: '/secondPageOfMeeting',
      name: 'secondPageOfMeeting',
      component: secondPageOfMeeting
    },
    {
      path: '/thirdPageOfMeeting',
      name: 'thirdPageOfMeeting',
      component: thirdPageOfMeeting
    },
    {
      path: '/fourthPageOfMeeting',
      name: 'fourthPageOfMeeting',
      component: fourthPageOfMeeting
    },
  ]
})

export default router
