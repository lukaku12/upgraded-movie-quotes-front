<template>
  <keep-alive>
    <img
      :class="classes + ' min-w-[32px] min-h-[32px] ' + extraClasses"
      :src="src"
      alt="profile-picture"
    />
  </keep-alive>
</template>

<script>
import defaultProfilePicture from "@/assets/images/default-profile-picture.png";
import { useUserStore } from "@/stores/user/user";
import { mapState } from "pinia";

export default {
  name: "ProfilePicture",
  props: {
    classes: {
      type: String,
      required: true,
    },
    extraClasses: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      defaultProfilePicture,
      storageImagePath: import.meta.env.VITE_LARAVEL_STORAGE_BASE_URL,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    src() {
      if (this.imgSrc || this.user.picture) {
        return this.storageImagePath + (this.imgSrc || this.user.picture);
      }
      return defaultProfilePicture;
    },
  },
};
</script>
