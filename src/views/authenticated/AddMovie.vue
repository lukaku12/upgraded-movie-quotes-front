<template>
  <div class="w-screen h-screen fixed top-0 left-0 bg-[#0000007c] z-50"></div>
  <div
    class="fixed overflow-y-auto top-[84px] max-h-[calc(100vh-84px)] max-h-screen w-screen bg-landing-background-reverse md:max-h-[calc(100vh-180px)] md:top-[50%] right-0 pb-10 text-white z-50 max-w-[961px] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:rounded-[12px] font-bold"
  >
    <div class="flex flex-col items-center">
      <header
        class="w-full h-auto text-center text-xl font-bold relative flex flex-col items-center"
      >
        <div class="w-full relative border-b-[#efefef5b] border-b py-10">
          <div>
            <h1>{{ $t("add_movie") }}</h1>
            <router-link
              to="/movies"
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
          <p>{{ user.username }}</p>
        </div>
      </header>
      <VueForm class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12">
        <InputWithLang name="titleEn" placeholder="Movie name" language="Eng" />
        <InputWithLang
          name="titleKa"
          placeholder="ფილმის სახელი"
          language="ქარ"
        />
        <div
          class="w-full bg-transparent h-[46px] p-2 pr-14 rounded border border-[#efefef5b] focus:outline-none font-bold text-lg"
        ></div>
        <InputWithLang
          name="directorEn"
          placeholder="Director"
          language="Eng"
        />
        <InputWithLang
          name="directorEn"
          placeholder="რეჟისორი"
          language="ქარ"
        />
        <TextArea
          name="descEn"
          placeholder="Movie discription"
          language="Eng"
        />
        <TextArea name="descKa" placeholder="ფილმის აღწერა" language="ქარ" />
        <div class="w-full flex flex-col gap-3">
          <div
            class="bg-transparent w-full py-6 px-5 text-start flex gap-4 items-center justify-between border-[#efefef5b] border rounded"
          >
            <span class="flex gap-4 items-center">
              <Photo />
              {{ $t("upload_image") }}
            </span>
            <button class="px-3 py-2 h-full bg-purple-900">
              {{ $t("choose_file") }}
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
        >
          {{ $t("add_movie") }}
        </button>
      </VueForm>
    </div>
  </div>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import { Form as VueForm } from "vee-validate";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import Photo from "@/components/icons/Photo.vue";
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user/user";
import InputWithLang from "@/components/Inputs/InputWithLang.vue";
export default {
  name: "AddMovie",
  components: {
    InputWithLang,
    TextArea,
    VueForm,
    CloseIcon,
    Photo,
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
};
</script>
