<template>
  <div class="w-screen h-screen fixed top-0 left-0 bg-[#0000007c] z-50"></div>
  <div
    class="fixed overflow-y-auto h-[calc(100vh-84px)] max-h-[calc(100vh-84px)] w-screen bg-landing-background-reverse md:h-auto top-[84px] right-0 pb-10 text-white z-50 max-w-[961px] md:auto md:left-[50%] md:translate-x-[-50%] md:rounded-[12px] font-bold"
  >
    <div class="flex flex-col items-center">
      <header
        class="w-full h-auto text-center text-xl font-bold relative flex flex-col items-center"
      >
        <div class="w-full relative border-b-[#efefef5b] border-b py-10">
          <div>
            <h1>{{ $t("write_new_quote") }}</h1>
            <router-link
              :to="{ name: 'home' }"
              class="absolute right-5 top-1/2 -translate-y-[50%] opacity-80 hover:opacity-100"
              ><CloseIcon
            /></router-link>
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
        <TextArea
          name="title_en"
          placeholder="Start create new quote"
          language="Eng"
        ></TextArea>
        <TextArea
          name="title_ka"
          placeholder="ახალი ციტატა"
          language="ქარ"
        ></TextArea>

        <div class="relative">
          <button
            class="bg-black w-full py-6 px-5 text-start flex gap-4 items-center"
          >
            <Photo />
            {{ $t("upload_image") }}
          </button>
          <Field
            type="file"
            name="thumbnail"
            rules="required"
            class="w-full h-full absolute z-20 top-0 left-0 opacity-0"
            @change="updateThumbnail"
          />
          <img
            v-if="thumbnail"
            class="h-full top-0 right-0 z-30 absolute aspect-square md:aspect-video"
            :src="thumbnail"
            alt="thumbnail"
          />
        </div>

        <div
          class="w-full flex flex-col"
          :class="
            fetchedMoviesAreVisible ? 'outline outline-1 outline-gray-600' : ''
          "
        >
          <button
            type="button"
            :class="fetchedMoviesAreVisible ? 'outline- outline-gray-600' : ''"
            class="bg-black w-full py-6 px-5 text-start flex justify-between items-center relative"
            @click="fetchMovies"
          >
            <span class="flex gap-4 justify-center items-center">
              <CameraReelsSvg fill-color="#FFFFFF" />
              {{ $t("choose_movie") }}
            </span>
            <DownArrow
              v-if="!fetchingMovies"
              :classes="fetchedMoviesAreVisible ? 'rotate-180 transition' : ''"
            />
            <LoadingAnimation
              v-else
              classes="h-[8px] w-[12px] absolute right-7"
            />
          </button>
          <section
            v-if="fetchedMoviesAreVisible"
            class="mt-0.5 max-h-[200px] overflow-y-scroll"
          >
            <div
              v-for="movie in movies"
              :key="movie.id"
              class="flex w-full py-1 h-auto bg-black gap-6 items-center cursor-pointer hover:outline outline-1 outline-gray-600"
              @click="selectMovie(movie)"
            >
              <img
                class="h-full max-h-[108px] max-w-[155px] rounded-lg aspect-square md:aspect-video"
                :src="
                  'http://127.0.0.1:8000/storage/thumbnails/' + movie.thumbnail
                "
                alt="post-image"
              />
              <div class="flex flex-col gap-2">
                <div class="flex h-auto items-center justify-center">
                  <CameraReelsSvg fill-color="#FFFFFF" />
                  <h1 class="text-xs md:text-xl mx-3">
                    {{
                      $i18next.language === "en"
                        ? movie.title.en
                        : movie.title.ka
                    }}
                    ({{ movie.created_at.substring(0, 4) }})
                  </h1>
                </div>
                <p class="text-xs md:text-xl">
                  {{ $t("director") }}: Nick cassavetes
                </p>
              </div>
            </div>
          </section>
        </div>
        <div
          v-if="chosenMovie.length !== 0 && !fetchedMoviesAreVisible"
          class="flex w-full py-1 h-auto bg-black gap-6 items-center hover:outline outline-1 outline-gray-600"
        >
          <img
            class="h-full max-h-[108px] max-w-[155px] rounded-lg aspect-square md:aspect-video"
            :src="
              'http://127.0.0.1:8000/storage/thumbnails/' +
              chosenMovie.thumbnail
            "
            alt="post-image"
          />
          <div class="flex flex-col gap-2">
            <div class="flex h-auto items-center justify-center">
              <CameraReelsSvg fill-color="#FFFFFF" />
              <h1 class="text-xs md:text-xl mx-3">
                {{
                  $i18next.language === "en"
                    ? chosenMovie.title.en
                    : chosenMovie.title.ka
                }}
                ({{ chosenMovie.created_at.substring(0, 4) }})
              </h1>
            </div>
            <p class="text-xs md:text-xl">
              {{ $t("director") }}: Nick cassavetes
            </p>
          </div>
        </div>
        <button
          type="button"
          :disabled="!meta.valid || chosenMovie.length === 0"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
          @click="createQuote(meta, values)"
        >
          {{ $t("post") }}
        </button>
      </VueForm>
    </div>
  </div>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import { Field } from "vee-validate";
import CameraReelsSvg from "@/components/icons/CameraReels.vue";
import { Form as VueForm } from "vee-validate";
import axios from "@/config/axios/index.js";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import Photo from "@/components/icons/Photo.vue";
import DownArrow from "@/components/icons/DownArrow.vue";
import { mapState } from "pinia/dist/pinia";
import { useUserStore } from "@/stores/user/user";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import ProfilePicture from "@/components/authenticated/ProfilePicture.vue";
export default {
  name: "AddQuote",
  components: {
    LoadingAnimation,
    CameraReelsSvg,
    TextArea,
    VueForm,
    CloseIcon,
    Photo,
    Field,
    DownArrow,
    ProfilePicture,
  },
  data() {
    return {
      thumbnail: "",
      movies: [],
      fetchingMovies: false,
      chosenMovie: [],
      fetchedMoviesAreVisible: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  mounted() {
    document.querySelector("html").style.overflowY = "hidden";
  },
  unmounted() {
    document.querySelector("html").style.overflowY = "auto";
  },
  methods: {
    createQuote(meta, values) {
      console.log(values);
      if (!meta.valid || this.chosenMovie.length === 0) return;
      const formData = new FormData();
      formData.append("title_en", values.title_en);
      formData.append("title_ka", values.title_ka);
      formData.append("movie_id", this.chosenMovie.id);
      formData.append("thumbnail", values.thumbnail[0]);
      axios
        .post("quotes/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.$router.push({
            path: "/",
            name: "home",
            params: { apiSuccess: response.data },
            props: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateThumbnail(e) {
      this.thumbnail = URL.createObjectURL(e.target.files[0]);
    },
    fetchMovies() {
      if (this.movies.length !== 0) {
        this.fetchedMoviesAreVisible = !this.fetchedMoviesAreVisible;
        return;
      }
      this.fetchingMovies = true;
      axios
        .get("movies")
        .then((res) => {
          console.log(res);
          this.movies = res.data;
          this.fetchingMovies = false;
          this.fetchedMoviesAreVisible = true;
        })
        .catch((err) => {
          console.log(err);
          this.fetchingMovies = false;
        });
      console.log("fetching movies");
    },
    selectMovie(movie) {
      this.chosenMovie = movie;
      this.fetchedMoviesAreVisible = false;
    },
  },
};
</script>
