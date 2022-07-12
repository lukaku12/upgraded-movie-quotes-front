<template>
  <div
    ref="container"
    class="fixed animate-pop-up bottom-5 right-5 px-5 py-4 bg-[#222030] rounded-2xl font-bold z-40"
    :class="textColor"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "PopupMessage",
  props: {
    message: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: false,
      default: "text-green-400",
    },
  },
  mounted() {
    setTimeout(() => {
      if (this.$refs.container) {
        this.$refs.container.classList.add("animate-disappear");
      }
      setTimeout(() => {
        if (this.$refs.container) {
          this.$refs.container.classList.add("hidden");
        }
      }, 500);
    }, 3000);
  },
};
</script>
