<template>
  <div class="main">
    <div>
      <div id="app">
        <v-app id="inspire">
          <v-row align="center" justify="center">
            <v-card height="800" width="600">
              <v-row justify="center">
                <v-btn
                  color="success"
                  class="mt-12"
                  @click="overlay = !overlay"
                >
                  Show Overlay
                </v-btn>
                <v-overlay :absolute="absolute" :value="overlay">
                  <CreateForm />
                  <v-btn color="success" @click="overlay = false">
                    Hide Overlay
                  </v-btn>
                </v-overlay>
              </v-row>
            </v-card>
          </v-row>
        </v-app>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      absolute: true,
      overlay: false
    }
  }
}
</script>

<style>
.main {
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  @apply pt-12 text-center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
