<template>
  <div
    :class="searchBarIsOpen ? 'visible' : 'hidden'"
    class="fixed w-screen top-0 left-0 h-5/6 min-h-[500px] bg-[#12101A] lg:hidden"
  >
    <div class="flex gap-6 p-[15px] border-[#EFEFEF4D] border-b-2 w-full flex">
      <button @click="setSearchBarIsOpen(false)">
        <img class="min-w-min" src="@/assets/icons/left-arrow.svg" alt="left-arrow" />
      </button>
      <input
        class="text-white focus:outline-0 bg-transparent font-bold py-1"
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
        <p> to search quotes</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";
import { mapState } from "pinia";

export default {
  name: "MobileSearch",
  computed: {
    ...mapState(useStylesStore, ["searchBarIsOpen"]),
  },
  methods: {
    ...mapActions(useStylesStore, ["setSearchBarIsOpen"]),
  },
};
</script>
