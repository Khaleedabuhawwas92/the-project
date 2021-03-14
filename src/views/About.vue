<template lang="pug">
- var pageTitle = ' المعلومات الاساسية';
- var description = '  تعريف جميع الاصول المراد ادخالها';
  .contant-about
    include ../assets/layout/page-head.pug
    .container-fluid
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss">
.contant-about {
  transition-duration: 0.4s;
  text-align: center;
  margin-top: 15px;
  .page-head {
    margin-bottom: 150px;
    margin-top: 80px;
  }
}
</style>