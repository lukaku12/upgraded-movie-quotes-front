<template>
  <AuthWrapper>
    <div
      class="flex flex-col items-center text-white max-w-[961px] mb-10 bg-landing-background-reverse"
    >
      <header
        class="w-full h-auto text-center text-xl font-bold relative flex flex-col items-center"
      >
        <div class="w-full relative border-b-[#efefef5b] border-b py-10">
          <div>
            <h1>{{ $t("edit_movie") }}</h1>
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
        v-if="movie.length !== 0"
        v-slot="{ meta, values }"
        class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12"
      >
        <InputWithLang
          name="title_en"
          placeholder="Movie name"
          :value="movie.title.en"
          language="Eng"
        />
        <InputWithLang
          name="title_ka"
          placeholder="ფილმის სახელი"
          :value="movie.title.ka"
          language="ქარ"
        />
        <div
          class="w-full bg-transparent h-auto p-2 rounded border max-h-[100px] border-[#efefef5b] overflow-y-auto justify-center font-bold text-lg flex gap-2 flex-wrap"
        >
          <Genre v-for="genre in genres" :key="genre.id" :genre="genre" />
        </div>
        <InputWithLang
          name="director_en"
          placeholder="Director"
          :value="movie.director.en"
          language="Eng"
        />
        <InputWithLang
          name="director_ka"
          placeholder="რეჟისორი"
          :value="movie.director.ka"
          language="ქარ"
        />
        <TextArea
          name="description_en"
          placeholder="Movie description"
          :value="movie.description.en"
          language="Eng"
        />
        <TextArea
          name="description_ka"
          placeholder="ფილმის აღწერა"
          :value="movie.description.ka"
          language="ქარ"
        />
        <div class="w-full flex flex-col gap-3">
          <div class="w-full flex items-center justify-center my-5 relative">
            <img
              class="w-full aspect-square md:aspect-video rounded-xl"
              :src="
                thumbnail === ''
                  ? storageImagePath + movie.thumbnail
                  : thumbnail
              "
              alt="thumbnail"
            />
            <div
              class="absolute top-[50%] rounded-xl left-[50%] w-[135px] h-[84px] bg-[#222030] -translate-y-[50%] -translate-x-[50%] opacity-80"
            >
              <button
                class="w-full h-full flex flex-col justify-center items-center gap-2"
              >
                <Photo />{{ $t("change_photo") }}
              </button>
              <Field
                type="file"
                name="thumbnail"
                class="w-full h-full absolute z-20 top-0 left-0 opacity-0"
                @change="updateThumbnail"
              />
            </div>
          </div>
        </div>
        <button
          :disabled="!meta.valid || selectedGenres.length === 0"
          type="button"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
          @click="addMovie(meta, values)"
        >
          {{ $t("edit_movie") }}
        </button>
      </VueForm>
    </div>
  </AuthWrapper>
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
import AuthWrapper from "@/components/authenticated/Wrapper.vue";

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
    AuthWrapper,
  },
  emits: ["addMovie"],
  data() {
    return {
      movie: [],
      genres: [],
      storageImagePath: import.meta.env.VITE_LARAVEL_STORAGE_BASE_URL,
      thumbnail: "",
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapState(useGenresStore, ["selectedGenres"]),
    movieSlug() {
      return this.$route.params.movie;
    },
  },
  mounted() {
    axios.get("genres").then((res) => {
      this.genres = res.data;
    });
    axios.get(`movies/${this.movieSlug}`).then((res) => {
      this.movie = res.data;
      this.setGenres = this.movie.genres;
    });
  },
  methods: {
    ...mapActions(useGenresStore, ["clearSelectedGenres", "setGenres"]),
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
      if (values.thumbnail) {
        formData.append("thumbnail", values.thumbnail[0]);
      }

      axios.post(`movies/${this.movieSlug}`, formData).then((res) => {
        this.clearSelectedGenres();
        this.$router.push(`/movies/${this.movieSlug}`);
        let addedMovie = res.data;
        addedMovie.quotes = [];
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
