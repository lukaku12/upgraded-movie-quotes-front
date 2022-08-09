<template>
  <div class="w-screen h-screen fixed top-0 left-0 bg-[#0000007c] z-50"></div>
  <div
    class="fixed overflow-y-auto top-[84px] max-h-[calc(100vh-84px)] w-screen bg-landing-background-reverse md:max-h-[calc(100vh-180px)] md:top-[50%] right-0 pb-10 text-white z-50 max-w-[961px] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:rounded-[12px] font-bold"
  >
    <div class="flex flex-col items-center">
      <header
        class="w-full h-auto text-center text-xl font-bold relative flex flex-col items-center"
      >
        <div class="w-full relative border-b-[#efefef5b] border-b py-10">
          <div>
            <h1>{{ $t("add_movie") }}</h1>
            <button
              type="button"
              class="absolute right-5 top-1/2 -translate-y-[50%] opacity-80 hover:opacity-100"
              @click="goToMoviesPage"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div class="flex items-center gap-3 py-10 w-10/12 md:w-11/12">
          <ProfilePicture
            classes="max-w-[52px] max-h-[52px] rounded-[50%] aspect-square"
          />
          <p>{{ user.username }}</p>
        </div>
      </header>
      <VueForm
        v-slot="{ meta, values }"
        class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12"
      >
        <InputWithLang
          id="title_en"
          name="title_en"
          placeholder="Movie name"
          language="Eng"
        />
        <InputWithLang
          id="title_ka"
          name="title_ka"
          placeholder="ფილმის სახელი"
          language="ქარ"
        />
        <div
          class="w-full bg-transparent h-auto p-2 rounded border max-h-[100px] border-[#efefef5b] overflow-y-auto justify-center font-bold text-lg flex gap-2 flex-wrap"
        >
          <Genre v-for="genre in genres" :key="genre.id" :genre="genre" />
        </div>
        <InputWithLang
          id="director_en"
          name="director_en"
          placeholder="Director"
          language="Eng"
        />
        <InputWithLang
          id="director_ka"
          name="director_ka"
          placeholder="რეჟისორი"
          language="ქარ"
        />
        <TextArea
          id="description_en"
          name="description_en"
          placeholder="Movie description"
          language="Eng"
        />
        <TextArea
          id="description_ka"
          name="description_ka"
          placeholder="ფილმის აღწერა"
          language="ქარ"
        />
        <div class="w-full flex flex-col gap-3">
          <div
            class="bg-transparent w-full py-6 px-5 text-start flex gap-4 items-center justify-between border-[#efefef5b] border rounded relative"
          >
            <span class="flex gap-4 items-center">
              <Photo />
              {{ $t("upload_image") }}
              <img
                v-if="thumbnail"
                class="aspect-square md:aspect-video rounded-xl absolute h-full w-[170px] right-2"
                :src="thumbnail"
                alt="thumbnail"
              />
            </span>
            <button
              type="button"
              class="px-3 py-2 h-full bg-purple-900 relative"
            >
              {{ $t("choose_file") }}
              <Field
                id="thumbnail"
                type="file"
                name="thumbnail"
                rules="required"
                class="absolute w-full h-full top-0 left-0 opacity-0"
                @change="updateThumbnail"
              />
            </button>
          </div>
        </div>
        <button
          id="addMovie"
          :disabled="!meta.valid || selectedGenres.length === 0"
          type="button"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
          @click="addMovie(meta, values)"
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
import Genre from "@/components/authenticated/movies/Genre.vue";
import { Field } from "vee-validate";
import { useGenresStore } from "@/stores/genres/genres";
import axios from "@/config/axios";
import { mapActions } from "pinia/dist/pinia.esm-browser";
import ProfilePicture from "@/components/authenticated/ProfilePicture.vue";

export default {
  name: "AddMovie",
  components: {
    InputWithLang,
    TextArea,
    VueForm,
    CloseIcon,
    Photo,
    Genre,
    Field,
    ProfilePicture,
  },
  emits: ["addMovie"],
  data() {
    return {
      genres: [],
      thumbnail: "",
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapState(useGenresStore, ["selectedGenres"]),
  },
  mounted() {
    document.querySelector("html").style.overflowY = "hidden";
    axios.get("genres").then((res) => {
      this.genres = res.data;
    });
  },
  unmounted() {
    document.querySelector("html").style.overflowY = "auto";
  },

  methods: {
    ...mapActions(useGenresStore, ["clearSelectedGenres"]),
    addMovie(meta, values) {
      if (!meta.valid || this.selectedGenres.length === 0) return;
      const formData = new FormData();
      formData.append("title_en", values.title_en);
      formData.append("title_ka", values.title_ka);
      formData.append("director_en", values.director_en);
      formData.append("director_ka", values.director_ka);
      formData.append("description_en", values.description_en);
      formData.append("description_ka", values.description_ka);
      formData.append("genres", JSON.stringify(this.selectedGenres));
      formData.append("thumbnail", values.thumbnail[0]);

      axios.post("movies", formData).then((res) => {
        this.clearSelectedGenres();
        this.$router.push({ name: "movies" });
        let addedMovie = res.data;
        addedMovie.quotes = [];
        this.$emit("addMovie", res.data);
      });
    },
    updateThumbnail(e) {
      this.thumbnail = URL.createObjectURL(e.target.files[0]);
    },
    goToMoviesPage() {
      this.clearSelectedGenres();
      this.$router.push({ name: "movies" });
    },
  },
};
</script>
