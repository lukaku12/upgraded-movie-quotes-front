<template>
  <div class="w-screen h-screen fixed top-0 left-0 bg-[#0000007c] z-50"></div>
  <div
    class="fixed w-screen bg-landing-background-reverse h-auto top-0 right-0 pb-10 text-white z-50 max-w-[961px] md:left-[50%] md:translate-x-[-50%] md:top-[100px] md:rounded-[12px] font-bold"
  >
    <div class="flex flex-col items-center">
      <header
        class="w-full h-auto text-center text-xl font-bold relative flex flex-col items-center"
      >
        <div class="w-full relative border-b-[#efefef5b] border-b py-10">
          <div>
            <h1>Write New Quote</h1>
            <router-link
              :to="{ name: 'home' }"
              class="absolute right-5 top-1/2 -translate-y-[50%] opacity-80 hover:opacity-100"
              ><img src="@/assets/icons/close.svg" alt=""
            /></router-link>
          </div>
        </div>
        <div class="flex items-center gap-3 py-10 w-10/12">
          <img src="@/assets/post/profile-picture.png" alt="profile-picture" />
          <p>Nino Tabagari</p>
        </div>
      </header>
      <main class="w-10/12 h-auto flex flex-col gap-3">
        <TextArea
          placeholder="Start create new quote"
          language="Eng"
        ></TextArea>
        <TextArea placeholder="ახალი ციტატა" language="ქარ"></TextArea>
        <div class="w-full flex flex-col gap-3">
          <button class="bg-black w-full py-6 px-5 text-start flex gap-4">
            <img src="@/assets/icons/photo.svg" alt="" />
            Upload photo
          </button>
          <button
            class="bg-black w-full py-6 px-5 text-start flex justify-between"
          >
            <div class="flex gap-4 justify-center">
              <img
                class="w-[24px] h-[24px]"
                src="@/assets/icons/camera-reels.svg"
                alt="camera"
              />
              Choose movie
            </div>
            <img src="@/assets/icons/down-arrow.svg" alt="" />
          </button>
        </div>
        <button
          type="button"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
        >
          Post
        </button>
      </main>
    </div>
  </div>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
export default {
  name: "AddQuote",
  components: {
    TextArea,
  },
};
</script>
