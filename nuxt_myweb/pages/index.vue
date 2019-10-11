<template>
  <div class="container">
    <navbar></navbar>
    <myself></myself>
    <mydata></mydata>
    <hr />
    <myExperience></myExperience>
    <hr />
    <myskill></myskill>
    <callme></callme>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <!-- Your customer chat code -->
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="113720326704164"
      theme_color="#6699cc"
      logged_in_greeting="你好，有需要什麼幫助的嗎?"
      logged_out_greeting="你好，有需要什麼幫助的嗎?"
    ></div>
  </div>
</template>

<script>
import $ from "jquery";
import navbar from "~/components/header.vue";
import myself from "~/components/myself_text.vue";
import mydata from "~/components/myData.vue";
import myExperience from "~/components/myExperience.vue";
import myskill from "~/components/myskill.vue";
import callme from "~/components/callme.vue";

export default {
  mounted() {
    $(window).scroll(function() {
      var scrollVal = $(this).scrollTop();
      if (scrollVal >= 1000) {
        $(".myExperience").addClass(".w3-container w3-animate-bottom");
      }
      if (scrollVal >= 1400) {
        $(".myskill").removeClass("visibility");
        $(".myskill").addClass(".w3-container w3-animate-bottom");
      }
    });
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: "v4.0"
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    // 導覽列 點擊 錨點
    // $("a[href*=#]:not([href=#])").click(function() {
    //   var target = $(this.hash);
    //   $("html,body").animate(
    //     {
    //       scrollTop: target.offset().top
    //     },
    //     800
    //   );
    //   return false;
    // });
  },
  methods: {},
  components: {
    navbar,
    myself,
    mydata,
    myExperience,
    myskill,
    callme
  }
};
</script>

<style>
</style>
