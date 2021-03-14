<template lang="pug">
- var pageTitle = '  معلومات البوليصة';
- var description = ' ادخال معلومات البوليصة ';
.containt-form
  include ../../assets/layout/page-head.pug
  include ../../assets/layout/billsOfLading.pug
</template>
<script>
import $ from "jquery";
$(document).ready(function () {
  // Swaping Between The Input Use The Enter
  $("input , textarea ,select").keypress(function (e) {
    if (e.which == 13) {
      var index = $("input ,textarea,select ").index(this);
      $("input ,textarea,select")
        .eq(index + 1)
        .focus();
      e.preventDefault();
    }
  });
  // To Take Time Defulte
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  var today = day + "/" + month + "/" + now.getFullYear();

  $("#inputDate").val(today);
  $("#inputClientDate").val(today);
  $("#inputDateCompany").val(now.getFullYear());
});
export default {};
</script>
<style scoped lang="scss">
.containt-form {
  transition-duration: 0.4s;
  text-align: right;
  margin-top: 15px;

  .page-head {
    text-align: center;
  }
  .card.card-danger {
    direction: rtl;
    text-align: right;
  }
  .card-header {
    background-color: #bdc3c7;
  }
  .card.card-primary {
    margin-bottom: 50px;
  }
}
</style>