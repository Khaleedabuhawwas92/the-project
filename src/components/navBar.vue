<template lang="pug">
#nav
  nav.navbar.navbar-expand-lg.navbar-mainbg
    a.navbar-brand.navbar-logo(href="#") مؤسسة شرق العالم العربي للنقل البري
    button.navbar-toggler(
      type="button",
      data-toggle="collapse",
      data-target="#navbarSupportedContent",
      aria-controls="navbarSupportedContent",
      aria-expanded="false",
      aria-label="Toggle navigation"
    )
      i.fas.fa-bars.text-white
    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.ml-auto
        .hori-selector
          .left
          .right
        li.nav-item
          router-link.router-style(to="/reports") 
            i.far.fa-repeat
            | التقارير
        li.nav-item
          router-link.router-style(to="/about") 
            i.fas.fa-tachometer-alt
            | المعلومات الاساسية
        li.nav-item.active
          router-link.router-style(to="/") 
            i.far.fa-home
            |
            | الحركات اليومية
</template>
<script>
import $ from "jquery";
export default {
  name: "Navbar",
};
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function () {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  setTimeout(function () {
    test();
  });
});
</script>
<style scoped lang="scss">
#app {
  /*----------multi-level-accordian-menu------------*/
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
  i {
    margin-right: 3px;
  }
  .navbar-logo {
    padding: 15px;
    color: #fff;
  }
  .navbar-mainbg {
    background-color: #5161ce;
    padding: 0px;
  }
  #navbarSupportedContent {
    overflow: hidden;
    position: relative;
    ul {
      padding: 0px;
      margin: 0px;
      li {
        a {
          i {
            margin-right: 10px;
          }
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 20px;
          display: block;
          padding: 20px 20px;
          transition-duration: 0.6s;
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
        }
      }
    }
    li {
      list-style-type: none;
      float: left;
    }
    > ul {
      > li.active {
        > a {
          color: #5161ce;
          background-color: transparent;
          transition: all 0.7s;
        }
      }
    }
    a {
      &:not(:only-child) {
        &:after {
          content: "\f105";
          position: absolute;
          right: 20px;
          top: 10px;
          font-size: 14px;
          font-family: "Font Awesome 5 Free";
          display: inline-block;
          padding-right: 3px;
          vertical-align: middle;
          font-weight: 900;
          transition: 0.5s;
        }
      }
    }
    .active {
      > a {
        &:not(:only-child) {
          &:after {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  .hori-selector {
    display: inline-block;
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-top: 10px;
    .right {
      position: absolute;
      width: 25px;
      height: 25px;
      background-color: #fff;
      bottom: 10px;
      right: -25px;
      &:before {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #5161ce;
        bottom: 0;
        right: -25px;
      }
    }
    .left {
      position: absolute;
      width: 25px;
      height: 25px;
      background-color: #fff;
      bottom: 10px;
      left: -25px;
      &:before {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #5161ce;
        bottom: 0;
        left: -25px;
      }
    }
  }
  @media (max-width: 991px) {
    #navbarSupportedContent {
      ul {
        li {
          a {
            padding: 12px 30px;
          }
        }
      }
    }
    .hori-selector {
      margin-top: 0px;
      margin-left: 10px;
      border-radius: 0;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      .left {
        right: 10px;
        top: -25px;
        left: auto;
        &:before {
          left: -25px;
          top: -25px;
        }
      }
      .right {
        right: 10px;
        bottom: -25px;
        &:before {
          bottom: -25px;
          left: -25px;
        }
      }
    }
  }
}

#nav {
  padding: 20px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 15px;
    text-decoration: none;
    transition-duration: 0.4s;
  }
}
#nav[data-v-7ba5bd90] {
  padding: 0;
}
</style>