<template>
  <div
    class="flex flex-col w-screen h-screen justify-center items-center bg-login-background text-white"
  >
    <svg
      class="ghost"
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="137"
      viewBox="0 0 122 137"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M116.567 55.5C116.567 61.1609 115.758 66.624 114.254 71.7691L119.757 77.6776C122.546 80.6715 122.379 85.3592 119.385 88.1478C116.391 90.9364 111.703 90.7699 108.915 87.7759L108.014 86.8088L95.5675 105C84.3675 120.6 92.9008 132.833 98.5675 137C54.1675 134.6 27.0675 102 19.0675 86H19.281C18.4823 84.7308 17.732 83.4252 17.0328 82.0862L11.7345 85.8526C8.39031 88.23 3.75206 87.4462 1.37474 84.102C-1.00264 80.7578 -0.218883 76.1196 3.12535 73.7422L11.8222 67.5597C11.0007 63.677 10.5675 59.6415 10.5675 55.5C10.5675 24.8482 34.2964 0 63.5675 0C92.8386 0 116.567 24.8482 116.567 55.5Z"
        fill="#6C757D"
      />
      <path
        d="M41 44C47.6274 44 53 38.6274 53 32C53 25.3726 47.6274 20 41 20C34.3726 20 29 25.3726 29 32C29 38.6274 34.3726 44 41 44Z"
        fill="white"
      />
      <path
        d="M80 50C86.6274 50 92 44.6274 92 38C92 31.3726 86.6274 26 80 26C73.3726 26 68 31.3726 68 38C68 44.6274 73.3726 50 80 50Z"
        fill="white"
      />
      <path
        class="eye"
        d="M44.5 37C46.433 37 48 35.433 48 33.5C48 31.567 46.433 30 44.5 30C42.567 30 41 31.567 41 33.5C41 35.433 42.567 37 44.5 37Z"
        fill="#070707"
      />
      <path
        class="eye"
        d="M75.5 41C77.433 41 79 39.433 79 37.5C79 35.567 77.433 34 75.5 34C73.567 34 72 35.567 72 37.5C72 39.433 73.567 41 75.5 41Z"
        fill="#070707"
      />
      <path
        class="mouth"
        d="M52.5 81C56.6421 81 60 75.8513 60 69.5C60 63.1487 56.6421 58 52.5 58C48.3579 58 45 63.1487 45 69.5C45 75.8513 48.3579 81 52.5 81Z"
        fill="white"
      />
    </svg>
    <svg
      class="my-10"
      xmlns="http://www.w3.org/2000/svg"
      width="117"
      height="14"
      viewBox="0 0 117 14"
      fill="none"
    >
      <ellipse cx="58" cy="7" rx="58" ry="7" fill="#F0F0F0" class="ghost-pad" />
    </svg>
    <h1 class="text-[24px] font-extrabold mb-5">Whoops!</h1>
    <p class="mb-8 font-semibold">{{ $t("not_found") }}</p>
    <router-link
      :to="{ name: 'home' }"
      class="bg-[#E31221] mb-10 py-[7px] px-6 rounded-[4px] text-white font-semibold"
    >
      {{ $t("return_home") }}
    </router-link>
  </div>
</template>

<style scoped>
.ghost {
  animation: ghost 2s infinite;
}
.eye {
  animation: eye 4s infinite;
}
.mouth {
  animation: mouth 2s infinite;
}
.ghost-pad {
  animation: ghost-pad 2s infinite;
}

@keyframes ghost-pad {
  0% {
    fill: #f0f0f0;
  }
  50% {
    fill: #6c757d;
  }
  100% {
    fill: #f0f0f0;
  }
}

@keyframes ghost {
  0% {
    transform: rotateZ(0);
  }
  50% {
    transform: rotateZ(15deg) translateY(-10px);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes mouth {
  0% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(5px) scale(0.8);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

@keyframes eye {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
