<template>
  <div>
    <div>
      <img :src="currentImg.url" :alt="currentImg.name" loading="lazy" width="700px" />
    </div>
    <ul class="cat__list">
      <li v-for="img in imgCatList" :key="img.id" class="cat__item">
        <img
          @click="currentImgIndex = img.id"
          :src="img.url"
          :alt="img.name"
          loading="lazy"
          width="300px"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GaleryComp',
  data() {
    return {
      imgCatList: [
        {
          id: 0,
          name: 'cat1',
          url: 'https://itd1.mycdn.me/image?id=879118792016&t=20&plc=WEB&tkn=*xrJUBaySSE0xMXskwsHWLRvwl1A'
        },
        {
          id: 1,
          name: 'cat2',
          url: 'https://crosti.ru/patterns/00/06/a0/26_picture_90c96049.jpg'
        },
        {
          id: 2,
          name: 'cat3',
          url: 'https://zverushki.media/wp-content/uploads/2021/10/ves-kotenka-po-mesyacam-tablica-6.jpg'
        }
      ],
      currentImgIndex: 0
    }
  },
  computed: {
    currentImg() {
      return this.imgCatList[this.currentImgIndex]
    }
  }
}
</script>

<style scoped lang="scss"></style>
