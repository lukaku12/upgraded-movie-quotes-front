<template>
  <div
    v-if="dataIsFetched"
    class="w-full text-white z-50 md:max-w-[1024px] min-h-[calc(100vh-86px)] lg:min-h-[calc(100vh-126px)]"
  >
    <div
      class="flex flex-col items-center lg:my-10 bg-landing-background-reverse pb-10"
    >
      <header
        class="w-full h-auto text-center text-xl font-bold relative flex flex-col items-center"
      >
        <div class="w-full relative border-b-[#efefef5b] border-b py-10">
          <div class="flex w-full justify-center">
            <div
              class="absolute top-[50%] left-5 flex gap-4 items-center -translate-y-[50%]"
            >
              <router-link
                v-if="viewQuote"
                :to="'/movies/' + movieSlug + '/quote/' + quoteId + '/edit'"
              >
                <Pen />
              </router-link>
              <p v-if="viewQuote">|</p>
              <button v-if="viewQuote" @click="deleteQuote">
                <Trash />
              </button>
              <router-link
                v-else
                to=""
                class="flex gap-2 items-center h-[18px]"
              >
                <Trash />
                <h1 class="text-sm h-full">Delete</h1>
              </router-link>
            </div>
            <h1>{{ name }}</h1>
            <router-link
              :to="'/movies/' + movieSlug"
              class="absolute right-5 top-1/2 -translate-y-[50%] opacity-80 hover:opacity-100"
              ><CloseIcon />
            </router-link>
          </div>
        </div>
        <div class="flex items-center gap-3 py-10 w-10/12 md:w-11/12">
          <img
            class="max-w-[52px] max-h-[52px] rounded-[50%] aspect-square"
            :src="'http://127.0.0.1:8000/storage/thumbnails/' + user.picture"
            alt="profile-picture"
          />
          <p>{{ user.username }}</p>
        </div>
      </header>
      <slot />
    </div>
  </div>
</template>

<script>
import Pen from "@/components/icons/Pen.vue";
import Trash from "@/components/icons/Trash.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import axios from "@/config/axios";
export default {
  name: "QuoteWrapper",
  components: { Pen, Trash, CloseIcon },
  props: {
    name: {
      type: String,
      default: "",
    },
    movieSlug: {
      type: String,
      required: true,
    },
    quoteId: {
      type: String,
      default: "",
    },
    dataIsFetched: {
      type: Boolean,
      required: true,
    },
    viewQuote: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    }
  },
  methods: {
    deleteQuote() {
      axios
        .delete("movies/" + this.movieSlug + "/quote/" + this.quoteId)
        .then((response) => {
          console.log(response);
          this.$router.push("/movies/" + this.movieSlug);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
