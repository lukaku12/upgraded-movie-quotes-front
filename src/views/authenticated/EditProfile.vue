<template>
  <AuthWrapper>
    <div
      class="w-full flex flex-col items-center h-[calc(100vh-86px)] bg-main-background"
    >
      <h1
        class="w-full font-bold text-white text-2xl text-start hidden lg:block max-w-[936px]"
      >
        {{ $t("my_profile") }}
      </h1>
      <div
        class="w-full flex flex-col justify-center items-center h-auto bg-[#11101A] px-4 py-16 md:p-16 lg:rounded-xl relative mt-40 max-w-[936px]"
      >
        <div
          class="w-full flex flex-col justify-center items-center gap-4 mb-5"
        >
          <ProfilePicture
            classes="absolute top-0 -translate-y-[50%] max-w-[188px] max-h-[188px] rounded-[50%] aspect-square"
          />
          <button class="text-white text-center mt-12">
            {{ $t("upload_new_photo") }}
          </button>
        </div>
        <BasicInput
          :title="$t('username')"
          :on-input="TODO"
          :value="user.username || ''"
          :placeholder="$t('enter_username')"
          name="username"
        ></BasicInput>
        <BasicInput
          :title="$t('email')"
          type="email"
          :on-input="TODO"
          :value="user.email || ''"
          :placeholder="$t('enter_email')"
          name="email"
        ></BasicInput>
        <BasicInput
          :title="$t('password')"
          type="password"
          :on-input="TODO"
          :value="user.password || ''"
          :placeholder="$t('enter_password')"
          name="password"
        ></BasicInput>
        <button
          type="button"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
        >
          {{ $t("save_changes") }}
        </button>
      </div>
    </div>
  </AuthWrapper>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/stores/user/user";
import ProfilePicture from "@/components/authenticated/ProfilePicture.vue";
export default {
  name: "EditProfile",
  components: {
    AuthWrapper,
    BasicInput,
    ProfilePicture,
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  methods: {
    ...mapActions(useUserStore, ["setUser"]),
    TODO() {
      return;
    },
  },
};
</script>
