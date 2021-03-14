<template lang="pug">
- var pageTitle = ' الفواتير';
- var description = '  تعريف جميع الاصول المراد ادخالها';
.contant-about
  include ../assets/layout/page-head.pug
  .container-fluid
    .row
      .col-12
        .card
          .card-header
            h3.card-title Table
            .card-tools
              .input-group.input-group-md(style="width: 350px")
                input.form-control.float-left(
                  type="text",
                  name="table_search",
                  placeholder="Search"
                )

                .input-group-append
                  button.btn.btn-default(type="submit")
                    i.fas.fa-search
                .btn.btn-primary اضافة
                  i.fa.fa-plus

          // /.card-header
          .card-body.table-responsive.p-0
            table.table.table-hover.text-nowrap
              thead
                tr
                  th ID
                  th User
                  th Date
                  th Status
                  th Reason
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
                  td Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.
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
export default {
  name: "Invoices",
};
</script>

<style lang="scss">
.contant-about {
  transition-duration: 0.4s;
  text-align: center;
  margin-top: 15px;
  .card-body {
    direction: rtl;
  }
  .card-header {
    direction: rtl;
  }
  .modal-dialog {
    margin: 200px auto;
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