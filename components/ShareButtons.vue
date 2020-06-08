<template>
  <!-- Important note:
    This component might change completely, this is just one way of sharing the URL (Engagement info).
    We might want to change this so that you can copy the URL to clipboard instead. -->
  <div class="p-3">
    <h1 class="text-2xl">
      Share
    </h1>
    <ul id="share-buttons" class="underline cursor-pointer" />
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  mounted() {
    const links = {
      Facebook: 'https://www.facebook.com/sharer.php?u=',
      Twitter: 'https://twitter.com/intent/tweet?url=',
      LinkedIn: 'https://www.linkedin.com/shareArticle?mini=true&url='
    }
    const ul = document.querySelector('#share-buttons')
    for (const [key, value] of Object.entries(links)) {
      const li = document.createElement('li')
      ul.appendChild(li)
      li.innerHTML += `<a href="${value + document.URL}" target="_blank"">
          ${key}
        </a>`
    }
  }
}
</script>

<style></style>
