<template>
  <div
    class="w-full lg:my-10 px-0 flex items-center text-white gap-3 max-w-[1054px] h-[95px] lg:h-auto"
  >
    <router-link
      :to="{ name: 'add-quote' }"
      class="w-full py-2 h-full pl-5 z-30 flex items-center lg:bg-[#23222F] lg:px-3 lg:py-2 lg:rounded gap-3"
      :class="desktopSearchBarIsOpen ? 'w-[28%]' : 'lg:w-[80%]'"
    >
      <PencilSquare />
      <p>{{ $t("write_new_quote") }}</p>
    </router-link>
    <DesktopSearch :search-title="$t('search')" @search="(e) => search(e)" />
  </div>
</template>

<script>
import DesktopSearch from "../DesktopSearch.vue";
import { mapState, mapActions } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";
import PencilSquare from "@/components/icons/PencilSquare.vue";

export default {
  name: "AddQuote",
  components: { DesktopSearch, PencilSquare },
  computed: {
    ...mapState(useStylesStore, ["desktopSearchBarIsOpen"]),
  },
  methods: {
    ...mapActions(useStylesStore, ["setDesktopSearchBarIsOpen"]),
    search(e) {
      const event = e;
      if (this.desktopSearchBarIsOpen) {
        document.body.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            const searchValue = event.target.value;
            let filteredSearchValue;
            let searchType;
            if (searchValue.includes("@")) {
              searchType = "&type=movie";
              filteredSearchValue = searchValue.replace("@", "");
            } else if (searchValue.includes("#")) {
              searchType = "&type=quote";
              filteredSearchValue = searchValue.replace("#", "");
            } else {
              return;
            }
            const searchRoute = `/search?value=${
              filteredSearchValue + searchType
            }`;
            this.$router.push(searchRoute);
          }
        });
      }
    },
  },
};
</script>
