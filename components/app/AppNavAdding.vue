<template>
  <div id="navContainer" class="mx-12 mt-12">
    <div>
      <div id="navContainer">
        <div class="mt-16">
          <h2 class="newAdd font-display">
            {{ $t('app.add') }}
          </h2>
          <div>
            <p class="orange requireFields t-2 font-body">
              {{ $t('form.required') }}
            </p>
          </div>
        </div>
        <AppEngConToggle :search="false" />
      </div>
    </div>
  </div>
</template>

<script>
import AppEngConToggle from '@/components/app/AppEngConToggle'
export default {
  components: {
    AppEngConToggle
  }
}
</script>

<style>
.newAdd {
  font-weight: 600;
  font-size: 48px;
  color: #426177;
}
.requireFields {
  font-weight: 700;
  font-style: normal;
  color: #d87c4f;
}
.left {
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  background-color: white;
  border: 0.5px groove #ccccccd7;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: 0;
  @apply cursor-pointer font-display;
}
.right {
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  background-color: white;
  border: 0.5px groove #ccccccd7;
  /* border-left: 0px !important; */
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: 0;
  @apply cursor-pointer font-display;
}
.orange {
  background-image: url('../../assets/images/orange-star.png');
  background-repeat: no-repeat;
  @apply mt-6 pl-6 pr-4 font-bold;
}
.fontNoto {
  font-family: 'Noto Sans', 'DejaVu Serif', 'Roboto slab', 'sans-serif',
    'Helvetica Neue';
}
</style>
