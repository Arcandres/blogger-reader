<template>
  <Post :post="data"/>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  name: 'post',
  components: { Post },
  data() {
    return {
      data: {
        "kind": "blogger#post",
        "id": "8611549134915353489",
        "blog": {
          "id": "4964195606923028905"
        },
        "published": "2018-12-09T10:52:00-05:00",
        "updated": "2018-12-09T11:19:12-05:00",
        "etag": "\"iHf3yWDE_geBgZ8U7rgZ_xuTeAQ/dGltZXN0YW1wOiAxNTQ0MzcyMzUyMjczCm9mZnNldDogLTE4MDAwMDAwCg\"",
        "url": "http://www.arcandres.com/2018/12/reducir-fatiga-ocular-digital.html",
        "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489",
        "title": "Aplicaciones para cuidar y reducir el estrés ocular.",
        "content": "\u003cp\u003eSi eres de los pasa que \u003cb\u003elargos periodos de tiempo\u003c/b\u003e observando la pantalla, es normal que acabes con \u003cstrong\u003etensión o estrés en los ojos\u003c/strong\u003e. Así que en esta ocasión compartiré contigo 3 herramientas diferentes para \u003cb\u003eLinux\u003c/b\u003e, que te ayudaran a reducir el estrés y a \u003cstrong\u003ecuidar tu visión\u003c/strong\u003e a largo plazo.\u003c/p\u003e\n\u003cimg alt=\"Tensión ocular o estrés visual\" src=\"https://1.bp.blogspot.com/-4oI1MlqtQ24/XAlRvq4qpEI/AAAAAAAAGwU/y2FBcnVDAyIvQcBshqlOa1fn7iAiyfohwCLcBGAs/s1600/tension-ocular.jpg\"\u003c/img\u003e",
        "author": {
          "id": "g109721638102099631013",
          "displayName": "Arcandres",
          "url": "https://www.blogger.com/profile/12576833307931958242",
          "image": {
            "url": "//lh6.googleusercontent.com/-w5MK0YMSqgc/AAAAAAAAAAI/AAAAAAAAF7I/YrML2Ow7iqU/s35-c/photo.jpg"
          }
        },
        "replies": {
          "totalItems": "0",
          "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489/comments"
        },
        "labels": [
          "linux"
        ]
      }
    }
  }
}
</script>

