<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>
<script setup lang="ts">
import planeImg from "../assets/plane.png";
import { reactive, defineProps, PropType } from "vue";
import { IPlane } from "../game";

const { plane } = defineProps({
  plane: {
    type: Object as PropType<IPlane>,
    required: true,
  },
});

window.addEventListener("keydown", (e) => {
  if (e.code === 'Space') {
    plane.attack()
  }
  switch (e.code) {
    case "ArrowUp":
      plane.moveUp();
      break;
    case "ArrowDown":
      plane.moveDown();
      break;
    case "ArrowLeft":
      plane.moveLeft();
      break;
    case "ArrowRight":
      plane.moveRight();
      break;
    default:
      break;
  }
});
</script>

<style scoped lang=""></style>
