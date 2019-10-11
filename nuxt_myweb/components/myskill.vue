<template>
  <div class="myskill visibility" id="myskill">
    <div class="front-end">
      <div class="skill-text">
        <h2>FRONT-END</h2>
        <p>
          第一次接觸網頁前端是大學二年級在課程當中學到
          <br />並且最後有製作出一個簡單小成品。
          <br />
          <br />因為大三的專題開始接觸大量的Java(AndroidStudio)以及JavaScript/Juery/PHP。
          <br />
          <br />目前因為參與其他專案開發，當中自學到很多新知識
          <br />例如Webpack/RWD/Vue.js框架等等。
        </p>
      </div>
      <div class="skill-chart">
        <h5>HTML / CSS / RWD</h5>
        <div class="bar">
          <div class="bar-front" data-percent="83%"></div>
        </div>
        <h5>JAVASCRIPT / JQUERY</h5>
        <div class="bar">
          <div class="bar-front" data-percent="70%"></div>
        </div>
        <h5>BOOTSTRAP</h5>
        <div class="bar">
          <div class="bar-front" data-percent="55%"></div>
        </div>
        <h5>VUE.JS(Learning...)</h5>
        <div class="bar">
          <div class="bar-front" data-percent="30%"></div>
        </div>
        <h5>ANDROID STUDIO(Java)</h5>
        <div class="bar">
          <div class="bar-front" data-percent="70%"></div>
        </div>
      </div>
    </div>
    <div class="back-end visibility">
      <div class="skill-text">
        <h2>BACK-END</h2>
        <p>
          Javascript/Firebase的Authentication、Database、Storge及架設Hosting等都相當熟悉。
          <br />
          <br />PHP/Mysql的新增/刪除/修改/查詢及資料表關聯都有撰寫過。
          <br />
          <br />Python則是在課程中學習到並且透過比賽更加深入了解。
          <br />
        </p>
      </div>
      <div class="skill-chart">
        <h5>Javascript/ FIREBASE</h5>
        <div class="bar">
          <div class="bar-back" data-percent="70%"></div>
        </div>
        <h5>PHP/ MYSQL</h5>
        <div class="bar">
          <div class="bar-back" data-percent="45%"></div>
        </div>
        <h5>PYTHON</h5>
        <div class="bar">
          <div class="bar-back" data-percent="60%"></div>
        </div>
      </div>
    </div>
    <div class="Other visibility">
      <div class="skill-text">
        <h2>OTHER</h2>
        <p>
          熟悉Github/Gitlab基本的指令操作
          <br />ex.git branch/checkout/status/commit/push等等。
          <br />
          <br />API處於自學中，嘗試利用open data做基本的測試。
          <br />
          <br />Selenium自動化測試，曾使用Katalon寫過類似自動打卡的小成品，除了WebUI.click、waitForElementVisible、setText等特定函式外，也使用的迴圈陣列等等去執行程式。
        </p>
      </div>
      <div class="skill-chart">
        <h5>GITHUB / GITLAB</h5>
        <div class="bar">
          <div class="bar-other" data-percent="60%"></div>
        </div>
        <h5>Restful API串接 (Learning...)</h5>
        <div class="bar">
          <div class="bar-other" data-percent="30%"></div>
        </div>
        <h5>SELENIUM</h5>
        <div class="bar">
          <div class="bar-other" data-percent="60%"></div>
        </div>
      </div>
    </div>
    <div class="skill-btn">
      <div class="box bg-1">
        <button
          class="button button--ujarak button--border-thin button--text-thick"
          @click="FrontClick"
        >Front-End</button>
        <button
          class="button button--ujarak button--border-thin button--text-thick"
          @click="BackClick"
        >Back-End</button>
        <button
          class="button button--ujarak button--border-thin button--text-thick"
          @click="OtherClick"
        >Other</button>
      </div>
    </div>
  </div>
</template>

<script>
var front_bar;
var back_bar;
var other_bar;
export default {
  mounted() {
     this.addbar(front_bar, ".bar-front");
  },
  methods: {
     FrontClick() {
      $('.front-end').removeClass('visibility');
      $('.back-end').addClass('visibility');
      $('.Other').addClass('visibility');
      this.addbar(front_bar, '.bar-front');
      this.cleanbar(back_bar, '.bar-back');
      this.cleanbar(other_bar, '.bar-other');
    },
    BackClick() {
      $('.front-end').addClass('visibility');
      $('.back-end').removeClass('visibility');
      $('.back-end').removeClass('visibility');
      $('.Other').addClass('visibility');
      this.addbar(back_bar, '.bar-back');
      this.cleanbar(front_bar, '.bar-front');
      this.cleanbar(other_bar, '.bar-other');
    },
     OtherClick() {
      $('.front-end').addClass('visibility');
      $('.back-end').addClass('visibility');
      // $('.Other').removeClass('visibility');
      $('.Other').removeClass('visibility');
      this.addbar(other_bar, '.bar-other');
      this.cleanbar(front_bar, '.bar-front');
      this.cleanbar(back_bar, '.bar-back');
    }, 
     addbar(bars, classname) {
      console.log('test')
      bars = [].slice.call(document.querySelectorAll(classname));
      bars.map(function(bar, index) {
        setTimeout(function() {
          bar.style.width = bar.dataset.percent;
        }, index * 200);
      });
    },
    cleanbar(bars, classname) {
      bars = [].slice.call(document.querySelectorAll(classname));
      bars.map(function (bar, index) {
        setTimeout(function () {
          bar.style.width = "0%";
        }, index);
      });
    }
    
  }

};
</script>

<style>
</style>
