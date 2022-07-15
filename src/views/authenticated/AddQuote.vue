<template>
  <div class="w-screen h-screen fixed top-0 left-0 bg-[#0000007c] z-50"></div>
  <div
    class="fixed overflow-y-auto max-h-screen w-screen bg-landing-background-reverse h-auto top-[100px] right-0 pb-10 text-white z-50 max-w-[961px] md:left-[50%] md:translate-x-[-50%] md:rounded-[12px] font-bold"
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
              ><CloseIcon
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
      <VueForm
        v-slot="{ meta, values }"
        class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12"
      >
        <TextArea
          name="titleEn"
          placeholder="Start create new quote"
          language="Eng"
        ></TextArea>
        <TextArea
          name="titleKa"
          placeholder="ახალი ციტატა"
          language="ქარ"
        ></TextArea>
        <div class="w-full flex flex-col gap-3">
          <button
            class="bg-black w-full py-6 px-5 text-start flex gap-4 items-center"
          >
            <Photo />
            Upload photo
          </button>
          <button
            class="bg-black w-full py-6 px-5 text-start flex justify-between"
          >
            <div class="flex gap-4 justify-center items-center">
              <CameraReelsSvg fill-color="#FFFFFF" />
              Choose movie
            </div>
            <DownArrow />
          </button>
        </div>
        <button
          type="submit"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
          @click="createQuote(meta, values)"
        >
          Post
        </button>
      </VueForm>
    </div>
  </div>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import CameraReelsSvg from "@/components/icons/CameraReels.vue";
import { Form as VueForm } from "vee-validate";
import axios from "@/config/axios/index.js";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import Photo from "@/components/icons/Photo.vue";
import DownArrow from "@/components/icons/DownArrow.vue";
export default {
  name: "AddQuote",
  components: {
    CameraReelsSvg,
    TextArea,
    VueForm,
    CloseIcon,
    Photo,
    DownArrow,
  },
  methods: {
    createQuote(meta, values) {
      console.log(meta, values);
      if (!meta.valid) return;
      axios
        .post("quotes/create", {
          titleEn: values.titleEn,
          titleKa: values.titleKa,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
