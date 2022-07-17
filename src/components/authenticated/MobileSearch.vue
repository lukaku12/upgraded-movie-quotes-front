<template>
  <div
    :class="searchBarIsOpen ? 'visible' : 'hidden'"
    class="fixed w-screen top-0 left-0 h-5/6 min-h-[500px] bg-[#12101A] lg:hidden  z-1000 animate-pop-up"
  >
    <div class="flex gap-6 p-[15px] z-1000 border-[#EFEFEF4D] border-b-2 w-full">
      <button @click="setSearchBarIsOpen(false)">
        <LeftArrow />
      </button>
      <input
        class="text-white focus:outline-0 bg-transparent font-bold py-1 w-full"
        type="text"
        placeholder="Search"
      />
    </div>
    <div class="w-full flex flex-col items-start gap-12 ml-12 mt-10">
      <div class="flex text-[#EFEFEF99] gap-1">
        <p>Enter</p>
        <p class="text-white font-bold">@</p>
        <p>to search movies</p>
      </div>
      <div class="flex text-[#EFEFEF99] gap-1">
        <p>Enter</p>
        <p class="text-white font-bold">#</p>
        <p>to search quotes</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";
import { mapState } from "pinia";
import LeftArrow from "../icons/LeftArrow.vue";

export default {
  name: "MobileSearch",
  components: { LeftArrow },
  computed: {
    ...mapState(useStylesStore, ["searchBarIsOpen"]),
  },
  methods: {
    ...mapActions(useStylesStore, ["setSearchBarIsOpen"]),
  },
};
</script>
