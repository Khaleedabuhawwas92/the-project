<template  lang="pug">
- var pageTitle = 'الحركات اليومية ';
- var description = 'جميع معلومات التطبيق';
.contant-home
  include ../assets/layout/page-head.pug
  .container
    .row
      .col-sm-4
        .card
          a(href="/downlode-permissions")
            .card-body
              h5.card-title اذن تحميل
              p.card-text With supporting text below as a natural lead-in to additional content.

      .col-sm-4
        .card
          a(href="/invoices")
            .card-body
              h5.card-title فاتورة
              p.card-text With supporting text below as a natural lead-in to additional content.

      .col-sm-4
        .card
          a(href="/lading")
            .card-body
              h5.card-title بوالص شحن
              p.card-text With supporting text below as a natural lead-in to additional content.
    .row
      .col-sm-4
        .card
          a(href="/receipt-voucher")
            .card-body
              h5.card-title سندات قبض
              p.card-text With supporting text below as a natural lead-in to additional content.

      .col-sm-4
        .card
          a(href="/entry-bounds")
            .card-body
              h5.card-title سندات قيد
              p.card-text With supporting text below as a natural lead-in to additional content.

      .col-sm-4
        .card
          a(href="/exchange")
            .card-body
              h5.card-title سندات صرف
              p.card-text With supporting text below as a natural lead-in to additional content.
</template>

<script>
export default {
  name: "Home",
  props: {
    mas: String,
  },
};
</script>
<style scoped lang="scss">
.contant-home {
  text-align: center;
  margin-top: 15px;
  .card {
    margin-bottom: 62px;
    :hover {
      background-color: #ecf0f1;
    }
    a {
      text-decoration: none;
      color: rgb(29, 31, 29);
    }
  }
  .page-head {
    margin-bottom: 150px;
    margin-top: 80px;
  }
}
</style>
