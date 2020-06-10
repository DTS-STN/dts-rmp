<template>
  <!-- Important note:
    This component might change completely, this is just one way of sharing the URL (Engagement info).
    We might want to change this so that you can copy the URL to clipboard instead. -->
  <div class="p-3">
    <h1 class="text-2xl">
      Share
    </h1>
    <ul id="share-buttons" class="underline cursor-pointer">
      <li v-for="link in links" :key="link.id">
        <a :href="link.href + getUrl()" target="_blank">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  data() {
    return {
      links: [
        {
          id: 1,
          href: 'https://www.facebook.com/sharer.php?u=',
          text: 'Facebook'
        },
        {
          id: 2,
          href: 'https://twitter.com/intent/tweet?url=',
          text: 'Twitter'
        },
        {
          id: 3,
          href: 'https://www.linkedin.com/shareArticle?mini=true&url=',
          text: 'LinkedIn'
        }
      ]
    }
  },
  methods: {
    getUrl() {
      return this.$axios.defaults.baseURL + this.$route.fullPath
    }
  }
}
</script>

<style></style>
