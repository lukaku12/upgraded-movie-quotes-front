<template>
  <div
    class="col-3 w-full flex flex-col justify-center items-center"
    :class="classes"
  >
    <div class="snippet" data-title=".dot-falling">
      <div class="stage">
        <div class="dot-falling"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingAnimation",
  props: {
    classes: {
      type: String,
      default: "h-[500px]",
    },
  },
};
</script>

<style scoped>
.dot-falling {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  box-shadow: 9999px 0 0 0 #9880ff;
  animation: dotFalling 1s infinite linear;
  animation-delay: 0.1s;
}

.dot-falling::before,
.dot-falling::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-falling::before {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: dotFallingBefore 1s infinite linear;
  animation-delay: 0s;
}

.dot-falling::after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: dotFallingAfter 1s infinite linear;
  animation-delay: 0.2s;
}

@keyframes dotFalling {
  0% {
    box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9999px 0 0 0 #9880ff;
  }
  100% {
    box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
  }
}

@keyframes dotFallingBefore {
  0% {
    box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9984px 0 0 0 #9880ff;
  }
  100% {
    box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
  }
}

@keyframes dotFallingAfter {
  0% {
    box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 10014px 0 0 0 #9880ff;
  }
  100% {
    box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
  }
}
</style>
