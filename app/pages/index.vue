<script setup>
import errorImage from '../assets/images/404.svg?raw'
</script>

<template>
  <!--
  <main class="flex flex-col justify-center">
    <HomeTwitter />
    <HomeHero />
    <HomeFeatures />
    <HomeLogos />
    <HomeCta />
  </main>
  -->
  <a
    class="
      mx-auto flex h-full w-full max-w-[600px] items-center justify-center
      [&_svg]:w-full
    "
    href="/"
    v-html="errorImage"
  />
</template>
