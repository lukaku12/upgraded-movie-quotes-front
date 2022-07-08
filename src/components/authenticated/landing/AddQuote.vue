<template>
  <div
    class="w-full lg:my-10 px-0 flex items-center text-white gap-3 max-w-4xl h-[95px] lg:h-auto"
  >
    <router-link
      :to="{ name: 'add-quote' }"
      class="w-full py-2 h-full pl-5 z-30 flex items-center lg:bg-[#23222F] lg:px-3 lg:py-2 lg:rounded gap-3"
      :class="desktopSearchBarIsOpen ? 'w-[28%]' : 'lg:w-[80%]'"
    >
      <img src="@/assets/icons/pencil-square.svg" alt="pencil-square" />
      <p>Write new quote</p>
    </router-link>
    <DesktopSearch></DesktopSearch>
  </div>
</template>

<script>
import DesktopSearch from "../DesktopSearch.vue";
import { mapState, mapActions } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";

export default {
  name: "AddQuote",
  components: { DesktopSearch },
  computed: {
    ...mapState(useStylesStore, ["desktopSearchBarIsOpen"]),
  },
  methods: {
    ...mapActions(useStylesStore, ["setDesktopSearchBarIsOpen"]),
  },
};
</script>
