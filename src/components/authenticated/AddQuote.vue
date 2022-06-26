<template>
  <div
    class="w-full lg:my-10 px-0 flex items-center text-white gap-3 max-w-4xl h-[95px] lg:h-auto"
  >
    <button
      class="w-full py-2 h-full pl-5 lg:w-[85%] flex items-center lg:bg-[#23222F] lg:px-3 lg:py-2 lg:rounded gap-3"
    >
      <img src="@/assets/icons/pencil-square.svg" alt="pencil-square" />
      <p>Write new quote</p>
    </button>
    <div class="relative hidden lg:flex lg:w-[15%] lg:pl-4 lg:gap-4">
      <img
        class="w-[20px] h-[20px]"
        src="@/assets/icons/search.svg"
        alt="search"
      />
      <p>Search By</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddQuote",
};
</script>
