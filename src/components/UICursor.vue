<script setup>
import {onMounted} from 'vue';

console.log('.sdilfj')
onMounted(() => {
  const cursorAnimation = document.querySelector('.cursor');
  const cursors = document.querySelectorAll('.cursor');

  document.addEventListener('click', (e) => {
    let x = e.clientX
    let y = e.clientY
    console.log(x, 'x');
    console.log(y, 'y');

    cursorAnimation.style.top = y + 'px';
    cursorAnimation.style.left = x + 'px';

    cursors.forEach((cursor) => {
      cursor.classList.add('active')

      function removeCursorActive() {
        cursor.classList.remove('active')
      }

      setTimeout(removeCursorActive, 1000)
    })

    let cursorClone = cursorAnimation.cloneNode(true)
    document.querySelector('body').appendChild(cursorClone)

    setTimeout(() => {
      cursorClone.remove()
    }, 1000)
  })
})

</script>

<template>
  <div class="cursor">
    <div class="click-animation">
      <div class="shape circle big"></div>
      <div class="shape circle small"></div>
      <div class="shape triangle yellow"></div>
      <div class="shape triangle green"></div>
      <div class="shape disc"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UICursor',
};
</script>

<style scoped>

</style>
