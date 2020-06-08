<template>
  <!-- Important note:
    This component might change completely, this is just one way of sharing the URL (Engagement info).
    We might want to change this so that you can copy the URL to clipboard instead. -->
  <div class="p-3">
    <h1 class="text-2xl">
      Share
    </h1>
    <ul class="underline cursor-pointer">
      <li>
        <a id="facebook-button" target="_blank" @click="facebookShare">
          Facebook
        </a>
      </li>
      <li>
        <a id="twitter-button" target="_blank" @click="twitterShare">
          Twitter
        </a>
      </li>
      <li>
        <a id="linkedIn-button" target="_blank" @click="linkedInShare">
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  methods: {
    // For more info on sharing: https://css-tricks.com/simple-social-sharing-links/
    // We might want to encode the URl before sharing.
    facebookShare() {
      document.getElementById(
        'facebook-button'
      ).href = `https://www.facebook.com/sharer.php?u=${document.URL}`
    },
    twitterShare() {
      document.getElementById(
        'twitter-button'
      ).href = `https://twitter.com/intent/tweet?url=${document.URL}`
    },
    linkedInShare() {
      document.getElementById(
        'linkedIn-button'
      ).href = `https://www.linkedin.com/shareArticle
                ?mini=true
                &url=${document.URL}`
    }
  }
}
</script>

<style></style>
