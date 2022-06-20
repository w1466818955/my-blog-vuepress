<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: "Valine",
  mounted: function () {
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.window = window;
      window.AV = require("leancloud-storage");
    }

    new Valine({
      el: "#vcomments",
      appId: "NLUnCzbEA4YoTCiJf0gnhD29-gzGzoHsz", // your appId
      appKey: "3QQ5F1qeSEqnyujvXexrivHc", // your appKey
      notify: false,
      verify: false,
      avatar: "mm",
      placeholder: "请输入您的评论...",
    });
  },
};
</script>
