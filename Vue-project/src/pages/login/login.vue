<template>
  <div class="canvasSize">
    <Login-Img></Login-Img>
    <Login-CanvasBg></Login-CanvasBg>
  </div>
</template>

<script>
import LoginCanvasBg from './components/canvasBg.vue'
import LoginImg from './components/login.vue'

export default {
  name: 'index',
  components: {
    LoginCanvasBg,
    LoginImg
  },
  data () {
    return {
      test: 'test'
    }
  },
  methods: {
  }
}
</script>

<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  color: #555;
  font-size: 14px;
  font-family: "Microsoft YaHei", "SF Pro Display", Roboto, Noto, Arial,
    "PingFang SC", sans-serif, Verdana, Helvetica;
}

td,
th,
caption {
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
i,
b,
strong {
  font-style: normal;
}

a {
  color: #555;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  border: none;
  vertical-align: middle;
}

ol,
ul,
li {
  list-style: none;
}

input,
textarea,
select,
button {
  font: 14px Verdana, Helvetica, Arial, sans-serif;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  overflow-y: scroll;
}

.canvasSize {
  /* min-height: 600px; */
  background: white;
  /* max-height: 625px; */
}
::-webkit-scrollbar {
  display: none;
}
</style>
