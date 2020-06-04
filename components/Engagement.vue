<template>
  <div class="p-3">
    <nuxt-link :to="'./list/' + id">
      <div>
        <span>Title: {{ title }}</span>
      </div>
    </nuxt-link>
    <br />
    <p>Share</p>
    <ul class="list-disc underline p-3">
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
  name: 'Engagament',
  props: {
    id: {
      default: -1,
      type: Number
    },
    title: {
      default: 'Unknown',
      type: String
    }
  },
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
