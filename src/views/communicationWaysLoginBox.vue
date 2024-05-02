<!-- third page of login -->
<template>
  <div dir="rtl" class="flex flex-col h-screen bg-neutral-100">
    <div class="h-[30%]">
        <div class="login-background flex flex-col justify-center items-center w-full h-full rounded-b-[15%]">
          <div class=" flex flex-col gap-3 mb-[8%]">
            <div class="flex justify-center">
                <img src="../assets/photos/logo.png" alt="">
            </div>
            <div class="text-xl text-[#2375c8] font-extrabold">ورود به سامانه تراز</div>
          </div>
        </div>
    </div>
    <div class="h-[70%] justify-around flex flex-col items-center">
      <div :class="boxHeight" class="information-box flex flex-col relative bg-white p-5 -mt-[50%] w-[83%] rounded-2xl shadow">
        <div class="h-[14%]">
          <div class="text-[#2375c8] font-semibold border-b border-gray-100 pb-1">راه های ارتباطی</div>
        </div>
        <div class="flex pt-5 gap-1.5 flex-col h-[77%]">
              <div
                v-for="(item, index) in communicationWays"
                :key="index"
                class="flex w-full gap-3 max-h-[45%]"
              >
                  <select
                    v-model="typeComWays"
                    class="flex text-center py-[3%] bg-white border border-gray-200 w-[25%] rounded text-sm disabled:opacity-50"
                  >
                    <option selected class="w-full">
                      نوع
                    </option>
                    <!-- <div> -->
                    <option>
                      <div>
                        تلگرام
                      </div>
                    </option>
                    <option>
                       
                      <div>تلفن</div>
                    </option>
                    <option>
                      
                      <div>جیمیل</div>
                    </option>
                    <option>
                       
                      <div>اینستاگرام</div>
                    </option>
                    <!-- </div> -->
                  </select>
                <!-- </div> -->
                <div class="w-[80%] flex items-center relative">
                  <input
                  @keyup.enter="append_to_com_ways"
                    @keyup="show_green_tick"
                    v-model="contentComWays"
                    class="rounded border w-full h-full p-[4%] border-gray-200 placeholder:text-gray-300 placeholder:text-xs"
                    type="text"
                    placeholder="آدرس ارتباطی خود را وارد نمایید"
                  />
                  <button class="absolute left-0 pe-2">
                  <svg v-if="grayTickComWays" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12.9023" r="10" stroke="#e0e0e0" stroke-width="1.5"/>
                    <path d="M8.5 13.4023L10.5 15.4023L15.5 10.4023" stroke="#E0E0E0"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                  <svg @click="append_to_com_ways" v-if="greenTickComWays" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12.9023" r="10" stroke="#00c247" stroke-width="1.5"/>
                    <path d="M8.5 13.4023L10.5 15.4023L15.5 10.4023" stroke="#00c247"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                </div>
                <div v-if="inputAlert" class="flex w-full items-center gap-2 bg-red-50 text-sm rounded border border-red-400 p-3 absolute -bottom-[60%] right-0 left-0">
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#D66145" stroke-width="1.5"/>
                      <path d="M12 17V11" stroke="#D66145" stroke-width="1.5" stroke-linecap="round"/>
                      <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#D66145"/>
                    </svg>
                  </div>
                  <div class="text-red-700">لطفا آدرس ارتباطی خود را وارد نمایید.</div>
                </div>
              </div>
              <div class="pt-2 h-[100%] flex flex-col gap-2 overflow-auto">
              <div v-for="item in editableCommunicationWays" :key="item" class="flex items-center">

                              <div class="flex items-center gap-2.5 w-[80%]">
                                <div>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1979 5.04728C18.358 4.0767 17.386 3.31009 16.4795 3.69182L2.22923 9.69195C1.23554 10.1103 1.18463 11.5468 2.22994 11.9801C3.00334 12.3007 4.18698 12.7708 5.37408 13.1622C6.3478 13.4832 7.40929 13.7812 8.25964 13.8655C8.49245 14.144 8.78545 14.4115 9.08312 14.6563C9.53895 15.0312 10.0879 15.418 10.6545 15.7882C11.7891 16.5296 13.0481 17.239 13.8967 17.7C14.9108 18.2508 16.1248 17.6165 16.3071 16.5112L18.1979 5.04728ZM3.82741 10.8274L16.4305 5.52078L14.6658 16.221C13.8337 15.7685 12.6342 15.0909 11.5661 14.393C11.0258 14.0399 10.5323 13.6902 10.1417 13.369C10.0026 13.2546 9.88487 13.1505 9.78679 13.0572L13.0877 9.7562C13.4131 9.43079 13.4131 8.90312 13.0877 8.5777C12.7623 8.25226 12.2346 8.25226 11.9092 8.5777L8.294 12.1929C7.6828 12.1147 6.83077 11.8875 5.89594 11.5794C5.17651 11.3421 4.45315 11.0727 3.82741 10.8274Z" fill="#757575"/>
                                  </svg>
                                </div>
                                <div class="text-gray-700 text-sm">{{ item.type }}</div>
                                <div class="text-gray-700 text-sm">{{ item.content }}</div>
                              </div>
                              <div class="w-[20%] flex items-center gap-4 justify-center">
                                <button @click="edit_row_com_ways(item.id)">
                                  <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021" stroke="gray" stroke-width="1.5"/>
                                  </svg>
                                </button>
                                <button @click="remove_row_com_ways(item)">
                                  <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L15 15M1.00003 15L8.00003 8L15 1" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
              </div>
        </div>
        <button :class="rotateArrow" @click="show_more_communication_ways" v-if="arrowToggle" class="flex absolute bottom-3 right-0 w-full left-0 h-[10%] justify-center mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9L12 15L5 9" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
      </div>
      <div :class="footerHeight" class="flex items-center justify-between w-full px-9">
        <button @click="go_main_page" class="text-white bg-[#2375c8] rounded px-10 py-1.5">
            تایید
        </button>
        <button @click="go_back_address_box" class="text-[#2375c8] border border-[#2375c8] rounded-full p-1.5">
            <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2375c8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const grayTickComWays = ref(true)
const greenTickComWays = ref(false)
const contentComWays = ref('')
const typeComWays = ref('نوع')
let isEditingComWays = false
let currentIdEditing = ref(0)
const arrowToggle = ref(false)
const boxHeight = ref('h-[42%]')
const rotateArrow = ref('rotate-0')
const footerHeight = ref('-mb-[35%]')
const inputAlert = ref(false)
const router = useRouter()
const editableCommunicationWays = ref([])
const communicationWays = ref([
  {
    type: "",
    value: "tarazgroup.com",
  },
  ]);
  const show_green_tick = () => {
    if(contentComWays.value.length > 0){
      greenTickComWays.value = true
      grayTickComWays.value = false
    }
    else{
      greenTickComWays.value = false
      grayTickComWays.value = true
    }
}
const append_to_com_ways = () => {
  if(isEditingComWays == true && editableCommunicationWays.value.length > 1 ){
    const obj = editableCommunicationWays.value.find( (row) => row.id == currentIdEditing.value )
    obj.type = typeComWays.value
    obj.content = contentComWays.value
  }
  else{
    if( contentComWays.value.trim().length <= 0){
      inputAlert.value = true
      setTimeout(() => inputAlert.value = false , 3000)
      return  
    }
    
    let obj = {
    id: new Date().getTime(),
    type: typeComWays.value,
    content: contentComWays.value
  }
  editableCommunicationWays.value.push(obj)
  if (editableCommunicationWays.value.length > 2) arrowToggle.value = true
  }
  isEditingComWays = false
  contentComWays.value = ""
}
const edit_row_com_ways = (_id) => { 
  isEditingComWays = true
  currentIdEditing.value = _id
  const obj = editableCommunicationWays.value.find((row) => row.id == _id )
  typeComWays.value = obj.type
  contentComWays.value = obj.content
}
const remove_row_com_ways = (item) => {
  editableCommunicationWays.value = editableCommunicationWays.value.filter((row) => item !== row);
}
const go_back_address_box = () => {
    router.push('addressLoginBox')
}
const show_more_communication_ways = () => {
  if(boxHeight.value == 'h-[42%]'){
    boxHeight.value = 'h-[50%] translate-y-[1%]'
    footerHeight.value = '-mb-[31%]'
    rotateArrow.value = 'rotate-180'
  }
  else{
    boxHeight.value = 'h-[42%]'
    footerHeight.value = '-mb-[35%]'
    rotateArrow.value = 'rotate-0'
  }
}
const go_main_page = () => {
  router.push('chatPage')
}
</script>
