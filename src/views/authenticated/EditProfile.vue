<template>
  <AuthWrapper>
    <div
      class="w-full flex flex-col min-h-[calc(100vh-86px)] bg-main-background"
    >
      <h1
        class="w-full font-bold text-white text-2xl text-start hidden lg:block max-w-[936px]"
      >
        {{ $t("my_profile") }}
      </h1>
      <VueForm
        v-slot="{ values, meta }"
        class="w-full flex flex-col justify-center items-center h-auto bg-[#11101A] px-4 py-16 md:p-16 lg:rounded-xl relative mt-40 max-w-[936px]"
      >
        <div
          class="w-full flex flex-col justify-center items-center gap-4 mb-5"
        >
          <ProfilePicture
            classes="absolute top-0 -translate-y-[50%] max-w-[188px] max-h-[188px] rounded-[50%] aspect-square"
            :src="picture === '' ? storageImagePath + user.picture : picture"
          />
          <button class="text-white text-center mt-12 relative">
            {{ $t("upload_new_photo") }}
            <Field
              type="file"
              name="picture"
              class="w-full h-full absolute z-20 top-0 left-0 opacity-0"
              @change="updatePicture"
            />
          </button>
        </div>
        <BasicInput
          :title="$t('username')"
          :value="user.username"
          :placeholder="$t('enter_username')"
          rules="required|min:3|max:20"
          name="username"
        />
        <BasicInput
          :title="$t('email')"
          type="email"
          :value="user.email || ''"
          :placeholder="$t('enter_email')"
          rules="required|email"
          name="email"
        />
        <div class="w-full my-4">
          <button
            type="button"
            class="underline text-blue-800 font-normal"
            @click="showPassword"
          >
            Change Password
          </button>
        </div>
        <div v-if="passwordsAreVisible" class="w-full">
          <BasicInput
            :title="$t('password')"
            type="password"
            :placeholder="$t('new_password_placeholder')"
            rules="required|min:6|max:20"
            name="password"
          />

          <BasicInput
            :title="$t('confirm_password')"
            type="password"
            :placeholder="$t('confirm_password')"
            rules="required|min:6|max:20"
            name="confirm_password"
          />
        </div>
        <button
          type="button"
          :disabled="!meta.valid"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
          @click="EditProfile(meta, values)"
        >
          {{ $t("save_changes") }}
        </button>
      </VueForm>
    </div>
    <PopupMessage
      v-if="apiErrors"
      :message="apiErrors"
      text-color="text-red-600"
    />
  </AuthWrapper>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/stores/user/user";
import { Form as VueForm, Field } from "vee-validate";
import ProfilePicture from "@/components/authenticated/ProfilePicture.vue";
import axios from "@/config/axios";
import PopupMessage from "@/components/authenticated/PopupMessage.vue";
export default {
  name: "EditProfile",
  components: {
    AuthWrapper,
    BasicInput,
    ProfilePicture,
    Field,
    VueForm,
    PopupMessage,
  },
  data() {
    return {
      storageImagePath: import.meta.env.VITE_LARAVEL_STORAGE_BASE_URL,
      picture: "",
      passwordsAreVisible: false,
      apiErrors: "",
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  mounted() {
    this.updateUser();
  },
  methods: {
    ...mapActions(useUserStore, ["setUser"]),
    EditProfile(_, values) {
      const formData = new FormData();
      if (values.username !== this.user.username) {
        formData.append("username", values.username);
      }
      if (values.picture) {
        formData.append("picture", values.picture[0]);
      }
      if (this.passwordsAreVisible) {
        formData.append("password", values.password);
        formData.append("confirm_password", values.confirm_password);
      }
      axios
        .post("user", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          this.updateUser();
        })
        .catch((error) => {
          this.apiErrors = error.response.data.message;
          setTimeout(() => {
            this.apiErrors = "";
          }, 3000);
          console.log(error.response.data.message);
        });
    },
    updatePicture(e) {
      this.picture = URL.createObjectURL(e.target.files[0]);
    },
    updateUser() {
      axios.get("user").then((response) => {
        this.setUser(response.data);
      });
    },
    showPassword() {
      this.passwordsAreVisible = !this.passwordsAreVisible;
    },
  },
};
</script>
