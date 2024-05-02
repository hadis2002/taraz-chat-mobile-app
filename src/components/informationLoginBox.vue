<template>
    <div>
        <div v-if="informationBox" class="h-[55%] flex justify-center">
          <div class="info-box bg-white w-[85%] h-fit px-3 py-2 -mt-[19%] rounded-lg">
            <button @click="show_personal_information_box" class="flex border-b border-gray-50 w-full items-center p-3.5 justify-between focus:rounded-lg focus:bg-blue-50">
              <div class="flex items-center gap-3">
                <div class="bg-[#CEE0F3] p-1.5 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.99935" cy="5.00033" r="3.33333" stroke="#2375C8" stroke-width="1.5"/>
                    <path d="M16.6673 14.583C16.6673 16.6541 16.6673 18.333 10.0007 18.333C3.33398 18.333 3.33398 16.6541 3.33398 14.583C3.33398 12.5119 6.31875 10.833 10.0007 10.833C13.6825 10.833 16.6673 12.5119 16.6673 14.583Z" stroke="#2375C8" stroke-width="1.5"/>
                  </svg>
                </div>
                <div>اطلاعات شخصی</div>
              </div>
              <div>
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L9 12L15 19" stroke="#afafaf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
            <button @click="show_address_box" class="flex w-full border-b border-gray-50 items-center p-3.5 justify-between focus:rounded-lg focus:bg-blue-50">
              <div class="flex items-center gap-3">
                <div class="bg-[#CEE0F3] p-1.5 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3462_4658)">
                      <path d="M4.16602 7.09585C4.16602 4.09758 6.77769 1.66699 9.99935 1.66699C13.221 1.66699 15.8327 4.09758 15.8327 7.09585C15.8327 10.0706 13.9709 13.5419 11.0661 14.7833C10.3889 15.0727 9.60979 15.0727 8.93263 14.7833C6.02781 13.5419 4.16602 10.0706 4.16602 7.09585Z" stroke="#2375C8" stroke-width="1.5"/>
                      <path d="M11.6673 7.49967C11.6673 8.42015 10.9211 9.16634 10.0007 9.16634C9.08018 9.16634 8.33398 8.42015 8.33398 7.49967C8.33398 6.5792 9.08018 5.83301 10.0007 5.83301C10.9211 5.83301 11.6673 6.5792 11.6673 7.49967Z" stroke="#2375C8" stroke-width="1.5"/>
                      <path d="M17.4665 12.917C18.0209 13.4191 18.3327 13.985 18.3327 14.5837C18.3327 16.6547 14.6017 18.3337 9.99935 18.3337C5.39698 18.3337 1.66602 16.6547 1.66602 14.5837C1.66602 13.985 1.97778 13.4191 2.53224 12.917" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_3462_4658">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>آدرس</div>
              </div>
              <div>
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L9 12L15 19" stroke="#afafaf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
            <button @click="show_communication_ways_box" class="flex w-full items-center p-3.5 justify-between focus:rounded-lg focus:bg-blue-50">
              <div class="flex items-center gap-3">
                <div class="bg-[#CEE0F3] p-1.5 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4179 11.1328L12.8891 10.601L13.4179 11.1328ZM13.7975 10.7555L14.3263 11.2873L13.7975 10.7555ZM15.8113 10.4915L15.4531 11.1504V11.1504L15.8113 10.4915ZM17.4034 11.357L17.0452 12.0159L17.4034 11.357ZM17.852 14.0695L18.3809 14.6013L17.852 14.0695ZM16.6683 15.2465L16.1394 14.7147L16.6683 15.2465ZM15.5642 15.8046L15.6338 16.5514H15.6338L15.5642 15.8046ZM7.34678 12.2725L7.8756 11.7406L7.34678 12.2725ZM3.33639 4.78833L2.5876 4.83089L2.5876 4.83089L3.33639 4.78833ZM8.73192 5.99815L9.26074 6.52998V6.52998L8.73192 5.99815ZM8.86252 3.78656L9.46292 3.33709V3.33709L8.86252 3.78656ZM7.8117 2.38289L7.2113 2.83236L7.2113 2.83236L7.8117 2.38289ZM5.21853 2.14602L5.74734 2.67785L5.74734 2.67785L5.21853 2.14602ZM3.91053 3.44659L3.38171 2.91475L3.38171 2.91475L3.91053 3.44659ZM10.0533 9.58136L10.5821 9.04952L10.0533 9.58136ZM13.9467 11.6647L14.3263 11.2873L13.2686 10.2236L12.8891 10.601L13.9467 11.6647ZM15.4531 11.1504L17.0452 12.0159L17.7616 10.698L16.1695 9.83257L15.4531 11.1504ZM17.3232 13.5376L16.1394 14.7147L17.1971 15.7784L18.3809 14.6013L17.3232 13.5376ZM15.4946 15.0579C14.3163 15.1677 11.2293 15.0752 7.8756 11.7406L6.81797 12.8043C10.5423 16.5075 14.0964 16.6947 15.6338 16.5514L15.4946 15.0579ZM7.8756 11.7406C4.67167 8.55488 4.14998 5.886 4.08518 4.74578L2.5876 4.83089C2.67304 6.33435 3.34749 9.35353 6.81797 12.8043L7.8756 11.7406ZM9.02172 6.76764L9.26074 6.52998L8.2031 5.46631L7.96409 5.70396L9.02172 6.76764ZM9.46292 3.33709L8.41209 1.93342L7.2113 2.83236L8.26212 4.23603L9.46292 3.33709ZM4.68971 1.61418L3.38171 2.91475L4.43934 3.97843L5.74734 2.67785L4.68971 1.61418ZM8.4929 6.2358C7.96409 5.70396 7.96337 5.70467 7.96266 5.70539C7.96241 5.70563 7.96169 5.70635 7.96121 5.70684C7.96023 5.70782 7.95924 5.70882 7.95824 5.70984C7.95623 5.71188 7.95417 5.714 7.95205 5.7162C7.94781 5.7206 7.94335 5.72533 7.93869 5.73039C7.92937 5.74051 7.91926 5.75195 7.90852 5.76477C7.88705 5.79039 7.86305 5.82153 7.83804 5.85844C7.78788 5.93248 7.73403 6.02918 7.68858 6.14979C7.59568 6.39637 7.54809 6.71594 7.60851 7.10536C7.72629 7.86458 8.2442 8.84023 9.52444 10.1132L10.5821 9.04952C9.3998 7.87396 9.13754 7.17684 9.09077 6.8754C9.07948 6.80262 9.08063 6.75297 9.08358 6.72349C9.08652 6.69412 9.09172 6.68007 9.09226 6.67866C9.09291 6.67691 9.0903 6.6844 9.07986 6.69981C9.07471 6.70741 9.06769 6.71689 9.05823 6.72818C9.0535 6.73382 9.04815 6.73994 9.04209 6.74651C9.03907 6.74979 9.03586 6.7532 9.03247 6.75672C9.03078 6.75848 9.02904 6.76027 9.02724 6.76209C9.02635 6.763 9.02544 6.76392 9.02452 6.76484C9.02406 6.7653 9.02336 6.766 9.02313 6.76623C9.02243 6.76694 9.02172 6.76764 8.4929 6.2358ZM9.52444 10.1132C10.8052 11.3867 11.7852 11.9 12.5453 12.0166C12.9348 12.0764 13.254 12.0293 13.5003 11.9376C13.6208 11.8927 13.7176 11.8394 13.7917 11.7897C13.8287 11.765 13.86 11.7412 13.8857 11.7199C13.8985 11.7092 13.91 11.6992 13.9202 11.6899C13.9253 11.6853 13.93 11.6809 13.9344 11.6767C13.9366 11.6745 13.9388 11.6725 13.9408 11.6705C13.9418 11.6695 13.9429 11.6685 13.9438 11.6675C13.9443 11.6671 13.9451 11.6663 13.9453 11.6661C13.946 11.6654 13.9467 11.6647 13.4179 11.1328C12.8891 10.601 12.8898 10.6003 12.8905 10.5996C12.8907 10.5994 12.8914 10.5987 12.8919 10.5982C12.8928 10.5973 12.8938 10.5964 12.8947 10.5955C12.8965 10.5937 12.8983 10.592 12.9001 10.5903C12.9036 10.587 12.907 10.5838 12.9103 10.5808C12.9169 10.5748 12.9231 10.5695 12.9287 10.5648C12.94 10.5554 12.9494 10.5485 12.9569 10.5435C12.9722 10.5333 12.9792 10.531 12.9767 10.5319C12.9745 10.5328 12.9594 10.5382 12.9287 10.5412C12.8979 10.5442 12.8469 10.5453 12.7727 10.534C12.4661 10.4869 11.7638 10.2246 10.5821 9.04952L9.52444 10.1132ZM8.41209 1.93342C7.51994 0.741698 5.76129 0.548682 4.68971 1.61418L5.74734 2.67785C6.13328 2.29411 6.83184 2.32548 7.2113 2.83236L8.41209 1.93342ZM4.08518 4.74578C4.07139 4.503 4.18169 4.23462 4.43934 3.97843L3.38171 2.91475C2.91666 3.37716 2.54267 4.04031 2.5876 4.83089L4.08518 4.74578ZM16.1394 14.7147C15.9248 14.9281 15.7049 15.0382 15.4946 15.0579L15.6338 16.5514C16.2825 16.4909 16.8097 16.1635 17.1971 15.7784L16.1394 14.7147ZM9.26074 6.52998C10.1275 5.66816 10.1896 4.30774 9.46292 3.33709L8.26212 4.23603C8.56287 4.63777 8.51394 5.15723 8.2031 5.46631L9.26074 6.52998ZM17.0452 12.0159C17.6586 12.3493 17.7409 13.1224 17.3232 13.5376L18.3809 14.6013C19.5614 13.4275 19.1931 11.4762 17.7616 10.698L17.0452 12.0159ZM14.3263 11.2873C14.6053 11.0098 15.0598 10.9366 15.4531 11.1504L16.1695 9.83257C15.2202 9.31649 14.0389 9.45773 13.2686 10.2236L14.3263 11.2873Z" fill="#2375C8"/>
                  </svg>
                </div>
                <div>راه های ارتباطی</div>
              </div>
              <div>
                <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L9 12L15 19" stroke="#afafaf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div v-if="personalInformationBox" class="flex h-[55%] justify-center">
          <div class="personal-information bg-white px-4 py-5 flex -mt-[27%] flex-col gap-3 h-fit w-[85%] rounded-lg">
            <div class="flex items-center justify-between">
              <div class="text-[#2375C8] text-lg">اطلاعات شخصی</div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">نام</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="سارا">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">نام خانوادگی</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="احمدی">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">نام کاربری</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="@sara">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">نام شرکت</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="@sara">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">شماره تلفن</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="093245878653">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">ایمیل</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="sara22@gmail.com">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="addressBox" class="flex h-[55%] justify-center">
          <div class="address-box bg-white px-4 py-5 flex -mt-[22%] flex-col gap-4 h-fit w-[85%] rounded-lg">
            <div class="flex items-center justify-between">
              <div class="text-[#2375C8] text-lg">آدرس</div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">کشور</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="ایران">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">شهر</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="تهران">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">نام کاربری</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="@sara">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">آدرس شرکت</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="تهران , ونک">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="" class="text-gray-400 text-sm">کد پستی شرکت</label>
                <div class="relative flex items-center">
                  <input type="text" class="bg-[#FAFAFA] rounded px-3 py-1.5 w-full placeholder:text-gray-500 placeholder:text-[14px]" placeholder="93245878653">
                  <button class="absolute left-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1740_203725)">
                        <path d="M9.57339 2.71912L10.1913 2.1012C11.2151 1.07739 12.875 1.07739 13.8988 2.1012C14.9226 3.125 14.9226 4.78491 13.8988 5.80871L13.2809 6.42663M9.57339 2.71912C9.57339 2.71912 9.65063 4.03219 10.8092 5.19079C11.9678 6.34939 13.2809 6.42663 13.2809 6.42663M9.57339 2.71912L3.89256 8.39994C3.50778 8.78472 3.3154 8.97711 3.14994 9.18923C2.95477 9.43947 2.78743 9.71022 2.6509 9.99669C2.53517 10.2395 2.44913 10.4977 2.27705 11.0139L1.54788 13.2014M13.2809 6.42663L7.60008 12.1075C7.2153 12.4922 7.02291 12.6846 6.81079 12.8501C6.56055 13.0453 6.2898 13.2126 6.00333 13.3491C5.76047 13.4649 5.50236 13.5509 4.98613 13.723L2.79862 14.4521M2.79862 14.4521L2.2639 14.6304C2.00986 14.7151 1.72978 14.6489 1.54043 14.4596C1.35108 14.2702 1.28496 13.9902 1.36964 13.7361L1.54788 13.2014M2.79862 14.4521L1.54788 13.2014" stroke="#E0E0E0" stroke-width="1.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1740_203725">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="communicationWaysBox" class="flex flex-col gap-5 h-[55%] items-center">
            <div :class="boxHeight" class="address-box flex flex-col gap-4 h-fit relative -mt-[27%] bg-white px-4 py-5 w-[85%] rounded-lg">
        <div class="h-[14%]">
          <div class="text-[#2375c8] text-lg">راه های ارتباطی</div>
        </div>
        <div class="flex pt-5 gap-1.5 flex-col h-[77%]">
              <div
                v-for="(item, index) in communicationWays"
                :key="index"
                class="flex w-full gap-3 max-h-[45%]"
              >
                  <select
                    v-model="typeComWays"
                    class="flex text-center bg-white border border-gray-200 w-[25%] rounded text-sm disabled:opacity-50"
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
              <div class="pt-2 h-[100%] flex flex-col gap-1.5 overflow-auto">
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
            <div class="flex w-full px-8 items-center gap-2">
              <input type="checkbox">
              <label class="text-sm text-gray-500" for="">اطلاعات این بخش برای کاربران نمایش داده شود.</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref , defineEmits } from 'vue';
const emit = defineEmits(['show_personal_information_box_emit' , 'show_address_box_emit' , 'show_communication_ways_box_emit'])
// const personalInformationBox = ref(false)
// const communicationWaysBox = ref(false)
// const informationBox = ref(true)
const inputAlert = ref(false)
const grayTickComWays = ref(true)
const greenTickComWays = ref(false)
const contentComWays = ref('')
const typeComWays = ref('نوع')
let isEditingComWays = false
let currentIdEditing = ref(0)
const arrowToggle = ref(false)
const boxHeight = ref('h-[42%]')
const rotateArrow = ref('rotate-0')
const editableCommunicationWays = ref([])
const communicationWays = ref([
  {
    type: "",
    value: "tarazgroup.com",
  },
  ]);
  const props = defineProps({
    personalInformationBox:{
        type: Boolean,
        default:false
    },
    informationBox:{
        type: Boolean,
        default:true
    },
    addressBox:{
        type: Boolean,
        default:false
    },
    communicationWaysBox:{
        type: Boolean,
        default:false
    }
  })
const show_personal_information_box = () => {
  emit('show_personal_information_box_emit')
//   informationBox.value = false
}
const show_address_box = () => {
    emit('show_address_box_emit')
}
const show_communication_ways_box = () => {
    emit('show_communication_ways_box_emit')
}
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
const show_more_communication_ways = () => {
  if(boxHeight.value == 'h-[42%]'){
    boxHeight.value = 'h-[50%] translate-y-[1%]'
    rotateArrow.value = 'rotate-180'
  }
  else{
    boxHeight.value = 'h-[42%]'
    rotateArrow.value = 'rotate-0'
  }
}
</script>

<style>

</style>