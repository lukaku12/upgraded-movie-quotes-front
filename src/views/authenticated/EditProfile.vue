<template>
  <section
    class="w-full h-full flex flex-col items-center overflow-y-auto bg-[#222030]"
  >
    <AuthHeader></AuthHeader>
    <div
      class="w-full h-full flex justify-center lg:justify-start bg-[#0f0e14]"
    >
      <Navigation></Navigation>
      <div class="w-full h-full">
        <MobileSearch></MobileSearch>
        <Notifications></Notifications>
        <div class="w-full flex flex-col items-center h-[calc(100vh-86px)] bg-main-background">
          <h1 class="w-full font-bold text-white text-2xl text-start hidden lg:block  max-w-[936px]">My profile</h1>
          <div class="w-full flex flex-col justify-center items-center h-auto bg-[#11101A] px-4 py-16 md:p-16 lg:rounded-xl relative mt-40 max-w-[936px]">
              <div class="w-full flex flex-col justify-center items-center gap-4 mb-5">
                <img class="max-w-[188px] absolute top-0 -translate-y-[50%]" src="@/assets/post/profile-picture2.png" alt="profile-picture">
                <button class="text-white text-center mt-12">Upload new photo</button>
              </div>
              <BasicInput title="Username" on-input="" value="" placeholder="Enter username" name="username"></BasicInput>
              <BasicInput title="Email" type="email" on-input="" value="" placeholder="Enter email" name="email"></BasicInput>
              <BasicInput title="Password" type="password" on-input="" value="" placeholder="Enter password" name="password"></BasicInput>
              <button
                type="button"
                class="bg-[#E31221] border border-[#E31221] mt-7 font-bold px-7 py-1 rounded-[4px] text-white"
              >
                Save changes
              </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AuthHeader from "@/components/authenticated/BasicHeader.vue";
import Navigation from "@/components/authenticated/Sidebar.vue";
import MobileSearch from "@/components/authenticated/MobileSearch.vue";
import Notifications from "@/components/authenticated/Notifications.vue";
import BasicInput from "@/components/Inputs/BasicInput.vue";
export default {
  name: "EditProfile",
  components: {
    BasicInput,
    MobileSearch,
    AuthHeader,
    Navigation,
    Notifications,
  },
};
</script>