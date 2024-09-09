<template>
  <div>
    <div ref="nanogallery2" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100vh'
    },
    galleryMosaic: {
      type: Array,
      required: false,
      default: () => [
        {"c": 1, "r": 1, "w": 3, "h": 2},
        {"c": 1, "r": 3, "w": 1, "h": 1},
        {"c": 2, "r": 3, "w": 1, "h": 1},
        {"c": 3, "r": 3, "w": 1, "h": 1},
      ]
    }
  },
  data() {
    return {
      current360ImageUrl: ''
    };
  },
  mounted() {
    this.initGallery();
  },
  methods: {
    initGallery() {
      let gallery = $(this.$refs.nanogallery2).nanogallery2({
        thumbnailWidth: 360,
        thumbnailBaseGridHeight: 200,
        galleryDisplayMode: 'rows',
        galleryMaxRows: 1,
        galleryTheme: {
          thumbnail: {
            background: '#444',
            backgroundImage: 'linear-gradient(315deg, #111 0%, #445 90%)',
            borderColor: '#fff',
            borderRadius: '10px',
            labelOpacity: 1,
            labelBackground: 'rgba(34, 34, 34, 0)',
            titleColor: '#fff',
            titleBgColor: 'transparent',
            titleShadow: '',
            descriptionColor: '#ccc',
            descriptionBgColor: 'transparent',
            descriptionShadow: '',
            stackBackground: '#aaa'
          },
        },
        galleryMosaic: this.galleryMosaic,
        items: this.items.map(
          img => ({
            src: img, srct: img
          })
        )
      });
    },
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
