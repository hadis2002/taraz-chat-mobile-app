<template>
  <div class="h-[80%] px-8 py-5 flex flex-col overflow-auto">
            <div v-for="chat in rowChats" :key="chat" class="flex flex-col gap-7 my-3">
                <div v-if="rowChat" class="flex flex-col gap-1 w-[83%]">
                    <div v-if="groupMembersImg" class="flex pb-1 items-center gap-3">
                      <div class="">
                        <img class="rounded-full h-9 w-9" src="../assets/photos/monkey.jpg" alt="">
                      </div>
                      <div>شما</div>
                    </div>
                    <div v-if="selectedMessages" class="flex justify-end">
                        <input type="checkbox">
                    </div>
                    <div v-touch:hold="select_message" class="flex flex-col cursor-pointer w-[100%] px-5 py-2 text-white rounded-b-2xl rounded-e-2xl bg-[#1a96f0]">
                        <div class="dropdown flex justify-end pb-5">
                    <Popper placement="bottom-start" offsetDistance="0" class="align-middle !h-0">
                        <button type="button" class="btn btn-gray-600 dropdown-toggle">
                            <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="5" cy="12" r="2" stroke="#ffffff" stroke-width="1.5"/>
                              <circle cx="12" cy="12" r="2" stroke="#ffffff" stroke-width="1.5"/>
                              <circle cx="19" cy="12" r="2" stroke="#ffffff" stroke-width="1.5"/>
                            </svg>
                            <icon-caret-down class="ltr:ml-1 rtl:mr-1 inline-block" />
                        </button>
                        <template #content="{ close }">
                            <ul @click="close()" class="whitespace-nowrap bg-white py-3 w-[145%] translate-x-[30%] translate-y-[-7%] shadow rounded-lg flex flex-col">
                                <li class="flex justify-end px-5 pt-3 pb-1 cursor-pointer">
                                  <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L15 15M1.00003 15L8.00003 8L15 1" stroke="#8f8f8f" stroke-width="1.5" stroke-linecap="round"/>
                                  </svg>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12L9.5 7M4.5 12L9.5 17M4.5 12L14.5 12C16.1667 12 19.5 13 19.5 17" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <a class="text-gray-500 text-[15px]" href="javascript:;">پاسخ</a>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9983 4.10955L13.9775 6.75775C15.154 7.8035 15.7422 8.32638 15.7422 8.99998C15.7422 9.67358 15.154 10.1965 13.9775 11.2422L10.9983 13.8904C10.4613 14.3677 10.1928 14.6064 9.97138 14.507C9.75 14.4076 9.75 14.0483 9.75 13.3298V11.5714C7.05 11.5714 4.125 12.8571 3 15C3 8.14283 7 6.42855 9.75 6.42855V4.67011C9.75 3.95162 9.75 3.59237 9.97138 3.49295C10.1928 3.39354 10.4613 3.63221 10.9983 4.10955Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <a class="text-gray-500 text-[15px]" href="javascript:;">ارسال</a>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021" stroke="#757575" stroke-width="1.5"/>
                                  </svg>
                                  <a class="text-gray-500 text-[15px]" href="javascript:;">ویرایش</a>
                                </li>
                                <li @click="remove_message" class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5001 6H3.5" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M18.8346 8.5L18.3747 15.3991C18.1977 18.054 18.1092 19.3815 17.2442 20.1907C16.3792 21 15.0488 21 12.388 21H11.6146C8.95382 21 7.62342 21 6.75841 20.1907C5.8934 19.3815 5.8049 18.054 5.62791 15.3991L5.16797 8.5" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M9.5 11L10 16" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M14.5 11L14 16" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#757575" stroke-width="1.5"/>
                                  </svg>
                                  <a class="text-gray-500 text-[15px]" href="javascript:;">حذف</a>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#757575" stroke-width="1.5"/>
                                    <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill="#757575"/>
                                    <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#757575"/>
                                  </svg>
                                  <a class="text-gray-500 text-[15px]" href="javascript:;">استیکر</a>
                                </li>
                            </ul>
                        </template>
                    </Popper>
                        </div>
                        <transition enter-active-class="duration-200 ease-out" enter-from-class="transform opacity-0 translate-[100%]" enter-to-class="opacity-100" leave-active-class="duration-300 ease-in translate-[100%]" leave-from-class="opacity-100" leave-to-class="transform opacity-0" name="fade">
                            <div v-if="confirmRemoveMessage" class="bg-[#00000017] flex justify-center items-center fixed w-full h-full top-0 left-0">
                                <div class="bg-white rounded-lg w-[83%] p-5 gap-8 text-gray-500 flex flex-col">
                                    <div class="text-[15px]">آیا می خواهید این پیام را حذف کنید؟</div>
                                    <div class="flex items-center gap-3">
                                        <div>
                                            <button @click="close_confirm_modal" class="bg-sky-600 text-white rounded px-7 py-1">تایید</button>
                                        </div>
                                        <div>
                                            <button @click="close_confirm_modal" class="border border-sky-600 rounded text-sky-600 px-5 py-0.5">انصراف</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <div class="">{{ chat.myText }}</div>
                        <div class="text-left text-sm">
                            <div>10:24:44am</div>
                        </div>
                    </div>
                    <div>
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33334 11.5L5.95239 14.5L12.5 7" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.6668 7.05212L9.52377 14.5521L9.16684 14.0834" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                </div>
                <div :class="channelRowChatWidth" class="flex flex-col gap-1 ms-auto">
                    <div v-if="groupMembersImg" class="flex pb-1 items-center justify-end gap-3">
                      <div>{{ chat.yourName }}</div>
                      <div class="">
                        <img class="rounded-full h-9 w-9" src="../assets/photos/selfie.jpg" alt="">
                      </div>
                    </div>
                    <div v-if="selectedMessages" class="flex">
                        <input type="checkbox" class="border border-gray-200">
                    </div>
                    <div :class="rowBgChannel" v-touch:hold="select_message" class="flex flex-col cursor-pointer w-[100%] px-5 py-2">
                        <div v-if="menuDetailsChannel" class="dropdown flex justify-end pb-5">
                    <Popper placement="bottom-start" offsetDistance="0" class="align-middle !h-0">
                        <button type="button" class="btn btn-gray-600 dropdown-toggle">
                            <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="5" cy="12" r="2" :stroke="optionColorMenu" stroke-width="1.5"/>
                              <circle cx="12" cy="12" r="2" :stroke="optionColorMenu" stroke-width="1.5"/>
                              <circle cx="19" cy="12" r="2" :stroke="optionColorMenu" stroke-width="1.5"/>
                            </svg>
                            <icon-caret-down class="ltr:ml-1 rtl:mr-1 inline-block" />
                        </button>
                        <template #content="{ close }">
                            <ul @click="close()" class="whitespace-nowrap bg-white py-3 w-[145%] translate-x-[30%] translate-y-[-7%] shadow rounded-lg flex flex-col">
                                <li class="flex justify-end px-5 pt-3 pb-1 cursor-pointer">
                                  <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L15 15M1.00003 15L8.00003 8L15 1" stroke="#8f8f8f" stroke-width="1.5" stroke-linecap="round"/>
                                  </svg>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12L9.5 7M4.5 12L9.5 17M4.5 12L14.5 12C16.1667 12 19.5 13 19.5 17" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <a class="text-gray-500 text-[15px]" href="javascript:;">پاسخ</a>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9983 4.10955L13.9775 6.75775C15.154 7.8035 15.7422 8.32638 15.7422 8.99998C15.7422 9.67358 15.154 10.1965 13.9775 11.2422L10.9983 13.8904C10.4613 14.3677 10.1928 14.6064 9.97138 14.507C9.75 14.4076 9.75 14.0483 9.75 13.3298V11.5714C7.05 11.5714 4.125 12.8571 3 15C3 8.14283 7 6.42855 9.75 6.42855V4.67011C9.75 3.95162 9.75 3.59237 9.97138 3.49295C10.1928 3.39354 10.4613 3.63221 10.9983 4.10955Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <a class="text-gray-500 text-[15px]" href="javascript:;">ارسال</a>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#757575" stroke-width="1.5"/>
                                    <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill="#757575"/>
                                    <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#757575"/>
                                  </svg>
                                  <a class="text-gray-500 text-[15px]" href="javascript:;">استیکر</a>
                                </li>
                            </ul>
                        </template>
                    </Popper>
                        </div>
                        <div>{{ chat.yourText }}</div>
                        <div class="text-sm text-left">10:24:44am</div>
                    </div>
                </div>
                <div v-if="rowChat" class="flex">
                    <div class="flex flex-col gap-1 w-[65%]">
                        <div class="flex justify-between gap-2">
                          <div v-if="groupMembersImg" class="flex w-[85%] pb-2 items-center gap-3">
                            <div class="">
                              <img class="rounded-full h-9 w-9" src="../assets/photos/selfie.jpg" alt="">
                            </div>
                            <div>شما</div>
                          </div>
                          <div class="flex justify-end items-end ms-auto w-[15%]">
                            <div class="flex items-center gap-1">
                              <div v-if="selectedMessages" class="flex">
                                <input type="checkbox">
                              </div>
                              <div class="dropdown flex justify-end pb-5">
                    <Popper placement="bottom-start" offsetDistance="0" class="align-middle !h-0">
                        <button type="button" class="btn flex gap-1 btn-gray-600 dropdown-toggle">
                            <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="5" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                              <circle cx="12" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                              <circle cx="19" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                            </svg>
                            <icon-caret-down class="ltr:ml-1 rtl:mr-1 inline-block" />
                        </button>
                        <template #content="{ close }">
                            <ul @click="close()" class="whitespace-nowrap bg-white py-3 w-[145%] translate-x-[30%] translate-y-[-7%] shadow rounded-lg flex flex-col">
                                <li class="flex justify-end px-5 pt-3 pb-1 cursor-pointer">
                                  <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L15 15M1.00003 15L8.00003 8L15 1" stroke="#8f8f8f" stroke-width="1.5" stroke-linecap="round"/>
                                  </svg>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12L9.5 7M4.5 12L9.5 17M4.5 12L14.5 12C16.1667 12 19.5 13 19.5 17" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <a class="text-gray-500 text-[16px]" href="javascript:;">پاسخ</a>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9983 4.10955L13.9775 6.75775C15.154 7.8035 15.7422 8.32638 15.7422 8.99998C15.7422 9.67358 15.154 10.1965 13.9775 11.2422L10.9983 13.8904C10.4613 14.3677 10.1928 14.6064 9.97138 14.507C9.75 14.4076 9.75 14.0483 9.75 13.3298V11.5714C7.05 11.5714 4.125 12.8571 3 15C3 8.14283 7 6.42855 9.75 6.42855V4.67011C9.75 3.95162 9.75 3.59237 9.97138 3.49295C10.1928 3.39354 10.4613 3.63221 10.9983 4.10955Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <a class="text-gray-500 text-[16px]" href="javascript:;">ارسال</a>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021" stroke="#757575" stroke-width="1.5"/>
                                  </svg>
                                  <a class="text-gray-500 text-[16px]" href="javascript:;">ویرایش</a>
                                </li>
                                <li @click="remove_message" class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5001 6H3.5" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M18.8346 8.5L18.3747 15.3991C18.1977 18.054 18.1092 19.3815 17.2442 20.1907C16.3792 21 15.0488 21 12.388 21H11.6146C8.95382 21 7.62342 21 6.75841 20.1907C5.8934 19.3815 5.8049 18.054 5.62791 15.3991L5.16797 8.5" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M9.5 11L10 16" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M14.5 11L14 16" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#757575" stroke-width="1.5"/>
                                  </svg>
                                  <a class="text-gray-500 text-[16px]" href="javascript:;">حذف</a>
                                </li>
                                <li class="flex items-center gap-2 p-2.5 cursor-pointer">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#757575" stroke-width="1.5"/>
                                    <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill="#757575"/>
                                    <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#757575"/>
                                  </svg>
                                  <a class="text-gray-500 text-[16px]" href="javascript:;">استیکر</a>
                                </li>
                            </ul>
                        </template>
                    </Popper>
                              </div>
                            </div>
                          </div>                          
                        </div>
                        <div v-touch:hold="select_message" class="flex items-center cursor-pointer gap-2 pe-5 ps-1 py-1 bg-[#1a96f0] rounded-full">
                            <div class="bg-sky-700 rounded-full p-2">
                                <svg class="w-5 h-5" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1628 5.83709C17.3876 8.02928 19 9.12538 19 11.0001C19 12.8748 17.3876 13.9709 14.1628 16.1631C13.2726 16.7682 12.3897 17.338 11.5783 17.8128C10.8665 18.2293 10.0604 18.6602 9.2258 19.0831C6.00859 20.7134 4.39999 21.5286 2.95724 20.6261C1.5145 19.7236 1.38338 17.8342 1.12114 14.0555C1.04698 12.9868 1 11.9392 1 11.0001C1 10.0609 1.04698 9.01333 1.12114 7.9447C1.38338 4.16597 1.5145 2.2766 2.95725 1.37408C4.39999 0.471553 6.00859 1.28672 9.2258 2.91706C10.0604 3.34 10.8665 3.77085 11.5783 4.18738C12.3897 4.66216 13.2726 5.23193 14.1628 5.83709Z" stroke="white" stroke-width="1.5"/>
                                </svg>
                            </div>
                            <div class="text-white">00:14</div>
                            <div class="w-full h-full flex items-center">
                                <div class="w-full bg-white bg-opacity-60 h-[3%]"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-sm text-left">
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>10:24:44am</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref , defineEmits } from 'vue';
const emit = defineEmits(['select_message_emit'])
const confirmRemoveMessage = ref(false)
const props = defineProps({
  selectedMessages:{
    type: Boolean,
    default:false
  },
  groupMembersImg:{
    type: Boolean,
    default:false
  },
  rowChat:{
    type: Boolean,
    default:true
  },
  channelRowChatWidth:{
    type: String,
    default:'w-[83%]'
  },
  rowBgChannel:{
    type: String,
    default:'bg-white rounded-b-2xl rounded-s-2xl'
  },
  menuDetailsChannel:{
    type: Boolean,
    default:true
  },
  optionColorMenu:{
    type: String,
    default:'#1C274C'
  }
}) 
import Popper from "vue3-popper";
const rowChats = ref([
    {myText: 'سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'سارا'},
    {myText: 'سلام صبح بخیر سلام صبح بخیر سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'رها'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام صبح بحیر کاربر معمولی چت وارد کن سلام صبح بحیر کاربر معمولی چت وارد ', yourName:'علی'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'حدیث'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام سلام صبح بحیر کاربر معمولی چت وارد کن سلام صبح بحیر کاربر معمولی چت وار شب بخیر', yourName:'امیر'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'مهراد'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'سارا'},
    {myText: 'سلام صبح بخیر سلام صبح بخیر سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'رها'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'علی'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'حدیث'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام شب بخیر', yourName:'امیر'},
    {myText: 'سلام صبح بخیر', yourText: 'سلام شب سلام صبح بحیر کاربر معمولی چت وارد کن سلام صبح بحیر کاربر معمولی چت وارد بخیر', yourName:'مهراد'},
])
const remove_message = () => {
    setTimeout(() => confirmRemoveMessage.value = true , 200)
}
const close_confirm_modal = () => {
    confirmRemoveMessage.value = false
}
const select_message = () => {
  // props.selectedMessages = true
  emit('select_message_emit')
}
</script>

<style>

</style>