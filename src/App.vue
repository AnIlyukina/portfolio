<script setup>
import UICursor from './components/UICursor.vue';

import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { createScrollRevealDirective } from "vue-scroll-reveal";

const vScrollReveal = createScrollRevealDirective({
  distance: "80px",
  delay: 400,
  duration: 2500,
});

</script>

<template>
  <u-i-cursor/>
  <section class="sec-1" v-scroll-reveal="{ delay: 600, origin: 'bottom' }">
    <div class="container">
      <h2 class="main-title" v-scroll-reveal="{ delay: 500, origin: 'left' }">
        Reveal Elemets On Scroll
      </h2>
      <div class="content">
        <div class="image" v-scroll-reveal="{ delay: 600, origin: 'bottom' }">
          <img src="./assets/image.png" alt="" />
        </div>
        <div class="text-box" v-scroll-reveal="{ delay: 700, origin: 'right' }">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            consequuntur ea rerum qui dolorum laudantium officiis nam minus
            quidem vel modi in accusamus commodi, iusto autem iste. Atque,
            voluptatum inventore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At consequuntur ea rerum qui dolorum laudantium
            officiis nam minus quidem vel modi in accusamus commodi, iusto autem
            iste. Atque, voluptatum inventore.
          </p>
        </div>
      </div>
      <div class="media-icons">
        <li v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
          <a href="#">
            <svg-icon class="icon" :fa-icon="faTelegram" :size="30"></svg-icon>
          </a>
        </li>
        <li  v-scroll-reveal="{ delay: 700, origin: 'bottom' }">
          <a href="#">
            <svg-icon class="icon" :fa-icon="faInstagram" :size="30"></svg-icon>
          </a>
        </li>
        <li  v-scroll-reveal="{ delay: 1100, origin: 'bottom' }">
          <a href="#">
            <svg-icon class="icon" :fa-icon="faTwitter" :size="30"></svg-icon>
          </a>
        </li>
        <li v-scroll-reveal="{ delay: 1300, origin: 'bottom' }">
          <a href="#" >
            <svg-icon class="icon" :fa-icon="faYoutube" :size="30"></svg-icon>
          </a>
        </li>
      </div>
    </div>
  </section>

  <section class="sec-2" v-scroll-reveal="{ delay: 500, origin: 'top' }">
    <div class="container">
      <h3
        class="section-title"
        v-scroll-reveal="{ delay: 500, origin: 'left' }"
      >
        Lorem Ipsum
      </h3>
      <div class="content">
        <div class="image" v-scroll-reveal="{ delay: 500, origin: 'top' }">
          <img src="./assets/image.png" alt="" />
        </div>
        <div class="info" v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
          <h4 class="info-title">Description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            consequuntur ea rerum qui dolorum laudantium officiis nam minus
            quidem vel modi in accusamus commodi, iusto autem iste. Atque,
            voluptatum inventore. Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="sec-3" v-scroll-reveal="{ delay: 500, origin: 'top' }">
    <div class="container">
      <h3
        class="section-title"
        v-scroll-reveal="{ delay: 500, origin: 'left' }"
      >
        Lorem Ipsum
      </h3>
      <div class="content">
        <div class="media-info">
          <li v-scroll-reveal="{ delay: 500, origin: 'left' }">
            <a href="#">
              <svg-icon class="icon" :fa-icon="faTelegram" :size="30" />
              Telegram
            </a>
          </li>
          <li v-scroll-reveal="{ delay: 700, origin: 'left' }">
            <a href="#">
              <svg-icon class="icon" :fa-icon="faInstagram" :size="30" />
              Instagram
            </a>
          </li>
          <li v-scroll-reveal="{ delay: 900, origin: 'left' }">
            <a href="#">
              <svg-icon class="icon" :fa-icon="faFacebook" :size="30" />
              Facebook
            </a>
          </li>
          <li v-scroll-reveal="{ delay: 1100, origin: 'left' }">
            <a href="#">
              <svg-icon class="icon" :fa-icon="faTwitter" :size="30" />
              Twitter
            </a>
          </li>
          <li v-scroll-reveal="{ delay: 1300, origin: 'left' }">
            <a href="#">
              <svg-icon class="icon" :fa-icon="faYoutube" :size="30" />
              Youtube
            </a>
          </li>
        </div>
        <div class="image" v-scroll-reveal="{ delay: 500, origin: 'top' }">
          <img src="./assets/image.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
