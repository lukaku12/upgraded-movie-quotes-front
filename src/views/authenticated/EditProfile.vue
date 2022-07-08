<template>
  <AuthWrapper>
    <div
      class="w-full flex flex-col items-center h-[calc(100vh-86px)] bg-main-background"
    >
      <h1
        class="w-full font-bold text-white text-2xl text-start hidden lg:block max-w-[936px]"
      >
        My profile
      </h1>
      <div
        v-if="dataIsFetched"
        class="w-full flex flex-col justify-center items-center h-auto bg-[#11101A] px-4 py-16 md:p-16 lg:rounded-xl relative mt-40 max-w-[936px]"
      >
        <div
          class="w-full flex flex-col justify-center items-center gap-4 mb-5"
        >
          <img
            class="absolute top-0 -translate-y-[50%] max-w-[188px] max-h-[188px]"
            src="@/assets/post/profile-picture.png"
            alt="profile-picture"
          />
          <button class="text-white text-center mt-12">Upload new photo</button>
        </div>
        <BasicInput
          title="Username"
          :on-input="TODO"
          :value="user.username || ''"
          placeholder="Enter username"
          name="username"
        ></BasicInput>
        <BasicInput
          title="Email"
          type="email"
          :on-input="TODO"
          :value="user.email || ''"
          placeholder="Enter email"
          name="email"
        ></BasicInput>
        <BasicInput
          title="Password"
          type="password"
          :on-input="TODO"
          :value="user.password || ''"
          placeholder="Enter password"
          name="password"
        ></BasicInput>
        <button
          type="button"
          class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
        >
          Save changes
        </button>
      </div>
    </div>
  </AuthWrapper>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import axios from "@/config/axios/index";
export default {
  name: "EditProfile",
  components: {
    AuthWrapper,
    BasicInput,
  },
  data() {
    return {
      user: {},
      dataIsFetched: false,
    };
  },
  mounted() {
    axios.get("user").then((res) => {
      console.log(res.data);
      this.user = res.data;
      this.dataIsFetched = true;
    });
  },
  methods: {
    TODO() {
      return;
    },
  },
};
</script>
