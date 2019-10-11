<template>
  <header>
    <div class="myself-text">
      <h1>賴哲彥 Kevin</h1>
      <p>
        對於新的知識感興趣
        <br />樂於分享技術及各種想法
        <br />嚮往可以互相成長
        <br />互相學習的團隊
      </p>
      <br />
      <br />
      <br />
      <br />
      <div class="bg-3">
        <button
          class="button button--rayen button--border-thick button--text-thick"
          data-text="Read More"
          onclick="window.open('memberAPI.html','_blank')"
        >
          <span>MyProduct</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scope>
header {
  width: 100%;
  height: 100vh;
  background: url(https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2Fbanner1.png?alt=media&token=cc6528e3-d605-4602-ade3-ae86d412c120)
    no-repeat 50% 50%;
  background-size: cover;
  background-attachment: fixed;
}

</style>
