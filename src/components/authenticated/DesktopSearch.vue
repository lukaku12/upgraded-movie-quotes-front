<template>
  <button
    v-if="!desktopSearchBarIsOpen"
    class="relative hidden lg:flex justify-center items-center text-center lg:w-[20%] lg:pl-4 lg:gap-4 opacity-100 hover:opacity-70 font-bold"
    :class="closedSearchBarWidth"
    @click="setDesktopSearchBarIsOpen(true)"
  >
    <Search />
    {{ searchTitle }}
  </button>
  <div
    v-if="desktopSearchBarIsOpen"
    class="w-[70%] hidden lg:block relative animate-pop-up"
    :class="openedSearchBarWidth"
  >
    <input
      :value="searchValue || searchWithSymbol || ''"
      class="text-white w-full pl-9 pr-5 h-[37px] border-[#efefef5b] border-b-2 bg-transparent focus:outline-none"
      type="text"
      :placeholder="placeholder"
      autofocus
      @input="searchMovie"
    />
    <Search styling="absolute top-1" />
    <button
      class="w-[20px] h-[20px] opacity-80 right-0 top-1.5 absolute hover:opacity-100"
      @click="setDesktopSearchBarIsOpen(false)"
    >
      <CloseIcon />
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";
import Search from "@/components/icons/Search.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
export default {
  name: "DesktopSearch",
  components: { CloseIcon, Search },
  props: {
    openedSearchBarWidth: {
      type: String,
      default: "w-[72%]",
    },
    closedSearchBarWidth: {
      type: String,
      default: "w-[20%]",
    },
    searchValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter @ to search movies, Enter # to search quotes",
    },
    searchTitle: {
      type: String,
      default: "Search By",
    },
  },
  emits: ["searchMovie", "search"],
  data() {
    return {
      searchedText: this.$route.query.value,
    };
  },
  computed: {
    ...mapState(useStylesStore, ["desktopSearchBarIsOpen"]),
    searchWithSymbol() {
      if (this.$route.query.type === "movie") {
        return "@" + this.searchedText;
      } else if (this.$route.query.type === "quote") {
        return "#" + this.searchedText;
      }
      return "";
    },
  },
  methods: {
    ...mapActions(useStylesStore, ["setDesktopSearchBarIsOpen"]),
    searchMovie(e) {
      this.$emit("searchMovie", e);
      this.$emit("search", e);
    },
  },
};
</script>
