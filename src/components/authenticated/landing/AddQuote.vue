<template>
  <div
    class="w-full lg:my-10 px-0 flex items-center text-white gap-3 max-w-4xl h-[95px] lg:h-auto"
  >
    <router-link
      :to="{ name: 'add-quote' }"
      class="w-full py-2 h-full pl-5 flex items-center lg:bg-[#23222F] lg:px-3 lg:py-2 lg:rounded gap-3"
      :class="desktopSearchBarIsOpen ? 'w-[28%]' : 'lg:w-[80%]'"
    >
      <img src="@/assets/icons/pencil-square.svg" alt="pencil-square" />
      <p>Write new quote</p>
    </router-link>
    <button
      v-if="!desktopSearchBarIsOpen"
      class="relative hidden lg:flex justify-center items-center text-center lg:w-[20%] lg:pl-4 lg:gap-4 opacity-100 hover:opacity-70 font-bold"
      @click="setDesktopSearchBarIsOpen(true)"
    >
      <img
        class="w-[20px] h-[20px]"
        src="@/assets/icons/search.svg"
        alt="search"
      />
      Search By
    </button>
    <div
      v-if="desktopSearchBarIsOpen"
      class="w-[72%] hidden lg:block relative animate-pop-up"
    >
      <input
        class="text-white w-full pl-9 h-[37px] border-[#efefef5b] border-b-2 bg-transparent focus:outline-none"
        type="text"
        placeholder="Enter @ to search movies, Enter # to search quotes "
      />
      <img
        class="w-[20px] h-[20px] left-1 top-1.5 absolute"
        src="@/assets/icons/search.svg"
        alt="search"
      />
      <button
        class="w-[20px] h-[20px] opacity-80 right-0 top-1.5 absolute hover:opacity-100"
        @click="setDesktopSearchBarIsOpen(false)"
      >
        x
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";

export default {
  name: "AddQuote",
  computed: {
    ...mapState(useStylesStore, ["desktopSearchBarIsOpen"]),
  },
  methods: {
    ...mapActions(useStylesStore, ["setDesktopSearchBarIsOpen"]),
  },
};
</script>
