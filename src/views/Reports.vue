<template lang="pug">
- var pageTitle = 'التقارير اليومية ';
- var description = '  استعلام';
  .content-reports
    include ../assets/layout/page-head.pug
    .container-fluid
      .row
        .col-sm-4
          .card
            .card-body.text-right
              h5.card-title قائمة باسماء السائقون
              p.card-text With supporting text below as a natural lead-in to additional content.
              a.btn.btn-primary(href="#") Go somewhere
        .col-sm-4
          .card
            .card-body.text-right
              h5.card-title كشف حساب لشركة بين تاريخين
              p.card-text With supporting text below as a natural lead-in to additional content.
              a.btn.btn-primary(href="#") Go somewhere
        .col-sm-4
          .card
            .card-body.text-right
              h5.card-title بوالص شحن لفاتورة معينة
              p.card-text With supporting text below as a natural lead-in to additional content.
              a.btn.btn-primary(href="#") Go somewhere
      .row
        .col-sm-4
          .card
            .card-body.text-right
              h5.card-title كشف سندات الصرف بين تاريخين
              p.card-text With supporting text below as a natural lead-in to additional content.
              a.btn.btn-primary(href="/about") Go somewhere
        .col-sm-4
          .card
            .card-body.text-right
              h5.card-title كشف سندات القبض بين تاريخين
              p.card-text With supporting text below as a natural lead-in to additional content.
              a.btn.btn-primary(href="#") Go somewhere
        .col-sm-4
          .card
            .card-body.text-right
              h5.card-title Special title treatment
              p.card-text With supporting text below as a natural lead-in to additional content.
              a.btn.btn-primary(href="/") Go somewhere
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.content-reports {
  text-align: center;
  margin-top: 15px;
  .page-head {
    margin-bottom: 150px;
    margin-top: 80px;
  }

  .size {
    width: 250px;
    text-align: center;
  }
}
</style>