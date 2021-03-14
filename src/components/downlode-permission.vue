<template lang="pug">
- var pageTitle = ' اذن التحميل';
- var description = '  تعريف جميع الاصول المراد ادخالها';
.contant-about
  include ../assets/layout/page-head.pug
  include ../assets/layout/Model/downlodePermissionModel.pug
  .container-fluid
    .row
      .col-12
        .card-header
          .card-tools
            .input-group.input-group-md(style="width: 350px")
              input#myInput.form-control(
                type="text",
                name="table_search",
                placeholder="Search"
              )
              .input-group-append
                button#myInput.btn.btn-default(type="submit")
                  i.fas.fa-search
              button.btn.btn-primary(
                type="button",
                data-toggle="modal",
                data-target="#exampleModal",
                data-whatever="@getbootstrap",
                title=" + Enter"
              ) اضافة
                i#add-driver.fa.fa-plus

        // /.card-header
        .card-body.table-responsive
          table#one.table.table-hover.text-nowrap
            thead
              tr
                th ID
                th المستخدم
                th التاريخ
                th الحالة
                th السبب
                th Action
            tbody
              tr
                td 183
                td John Doe
                td 11-7-2014
                td
                  span.tag.tag-success Approved
                td Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.
                td 
                  .btn.btn-primary edit
              tr
                td 219
                td Alexander Pierce
                td 11-7-2014
                td
                  span.tag.tag-warning Pending
                td Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.
                td 
                  .btn.btn-primary edit
              tr
                td 657
                td Bob Doe
                td 11-7-2014
                td
                  span.tag.tag-primary Approved
                td خالد ابو حواس فور ايفير
                td 
                  .btn.btn-primary edit
              tr
                td 175
                td Mike Doe
                td 11-7-2014
                td
                  span.tag.tag-danger Denied
                td Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.
                td 
                  .btn.btn-primary edit
        // /.card-body
        // /.card
</template>

<script>
import $ from "jquery";
export default {
  name: "downlodePermission",
  computed: {},
  watch: {},
  methods: {
    sortBy: function (sortKey) {
      this.reverse = this.sortKey == sortKey ? !this.reverse : false;
      this.sortKey = sortKey;
    },
  },
};

// To swaping between input use enter
$(document).ready(function () {
  $("input , textarea").keypress(function (e) {
    if (e.which == 13) {
      var index = $("input[type='text'] ,textarea ").index(this);
      $("input[type='text'] ,textarea")
        .eq(index + 1)
        .focus();

      e.preventDefault();
    }
  });
  // this code is commit to genrate new row
  $(this).keypress(function (e) {
    if (e.which == 32) {
      addInput();
      e.preventDefault();
    }
  });
  $(this).keypress(function (e) {
    if (e.which == 43) {
      $("#add-driver").click();
      e.preventDefault();
    }
  });

  var counter = 0;
  var btn = document.getElementById("add");
  var form = document.getElementById("driver-info");
  var addInput = function () {
    counter++;
    var input = document.createElement("input");
    // var input1 = document.createElement("input");
    // var input2 = document.createElement("input");
    input.classList.add("col-md-3 , .form-control");
    input.id = "text";
    input.type = "text";
    input.placeholder = "Input number " + counter;
    form.appendChild(input);
  };
  btn.addEventListener(
    "click",
    function () {
      addInput();
    }.bind(this)
  );
  $("#close").click(function (e) {
    e.preventDefault();
  });
});

$(function () {});
</script>

<style lang="scss">
.contant-about {
  transition-duration: 0.4s;
  text-align: center;
  margin-top: 15px;
  .modal-title {
    margin: auto;
  }

  .modal-dialog {
    direction: rtl;
    margin: 80px auto;
  }
  .card-body {
    direction: rtl;
  }
  .card-header {
    direction: rtl;
  }

  .fa.fa-plus {
    padding-right: 12px;
  }
  .page-head {
    margin-bottom: 150px;
    margin-top: 80px;
  }
}
</style>