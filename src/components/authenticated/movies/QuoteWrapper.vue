<template>
  <div
    v-if="dataIsFetched"
    class="w-full bg-landing-background-reverse pb-10 text-white z-50 md:max-w-[1024px] min-h-[calc(100vh-86px)]"
  >
    <div class="flex flex-col items-center lg:my-10">
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
                <img src="@/assets/icons/pen.svg" alt="pen" />
              </router-link>
              <p v-if="viewQuote">|</p>
              <router-link v-if="viewQuote" to="">
                <img src="@/assets/icons/trash.svg" alt="trash" />
              </router-link>
              <router-link
                v-else
                to=""
                class="flex gap-2 items-center h-[18px]"
              >
                <img src="@/assets/icons/trash.svg" alt="trash" />
                <h1 class="text-sm h-full">Delete</h1>
              </router-link>
            </div>
            <h1>{{ name }}</h1>
            <router-link
              :to="'/movies/' + movieSlug"
              class="absolute right-5 top-1/2 -translate-y-[50%] opacity-80 hover:opacity-100"
              ><img src="@/assets/icons/close.svg" alt="close"
            /></router-link>
          </div>
        </div>
        <div class="flex items-center gap-3 py-10 w-10/12 md:w-11/12">
          <img
            class="max-w-[52px] max-h-[52px]"
            src="@/assets/post/profile-picture.png"
            alt="profile-picture"
          />
          <p>Nino Tabagari</p>
        </div>
      </header>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteWrapper",
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
  },
};
</script>
