<template lang="pug">
.settings-box.hide-sttings
  .toggle-setting
    i.fa.fa-wrench
  .setting-content.text-center
    .option-box.color-option
      h4.option-title Color Themes
      - var themes = ['green-theme', 'bule-theme', 'red-theme', 'defult-theme'];
      ul.list-unstyled
        each theme in themes
          li(data-theme=theme)
    .option-box.font-option
      h4.option-title Font Option
      - var fonts = ['open', 'public', 'roboto', 'sourse'];
      select.form-option
        each font in fonts
          option(value=font)= font + ' Font'
    .option-box.sidebar-option
      h4.option-title Sidebar Option
      - var SidebarBackgrounds = ['sidebar-gray', 'sidebar-balck', 'sidebar-offWhaite'];
      ul.list-unstyled
        each background in SidebarBackgrounds
          li(data-background=background)
</template>
<script>
import $ from "jquery";
export default {
  name: "SideBar",
};

$(function () {
  $(".toggle-setting").on("click", function () {
    $(this).find("i").toggleClass("icon-spin");
    $(this).parent(".settings-box").toggleClass("hide-sttings");
  });
  // Switch Color Themes
  var classesThemes = [];
  $(".color-option li").each(function () {
    classesThemes.push($(this).data("theme"));
  });

  $(".color-option li").on("click", function () {
    $("body").removeClass(classesThemes.join(" "));
    localStorage.setItem("myColor", $(this).data("theme"));
    var color = localStorage.getItem("myColor");
    $("body").addClass(color);
  });
});

//Setting Options
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.settings-box {
  position: fixed;
  top: 0;
  right: 0;
  width: 210px;
  height: 100%;
  background-color: #ecf0f1;
  z-index: 20;
  padding: 20px;
  transition-duration: 0.3s;

  .option-title {
    font-size: 19px;
    font-weight: bold;
    color: #777;
  }

  &.hide-sttings {
    right: -250px;
  }

  .toggle-setting {
    position: absolute;
    right: 250px;
    top: 122px;
    background-color: #ecf0f1;
    padding: 10px;
    cursor: pointer;
    font-size: 29px;
    border-radius: 10px 0 0 10px;
  }

  .color-option {
    ul {
      $colors: #27ae60, #2980b9, #c0392b, #160c0b;
      text-align: left;
      @for $i from 1 through length($colors) {
        li:nth-child(#{$i}) {
          background-color: nth($colors, $i);
        }
      }

      li {
        width: 20px;
        height: 20px;
        opacity: 0.8;
        cursor: pointer;
        border-radius: 50%;
        display: inline-block;
        margin: 8px;

        &.active {
          opacity: 1;
        }
      }
    }
  }

  .font-option {
    select {
      text-transform: capitalize;
    }
  }

  .sidebar-option {
    margin-top: 20px;

    ul {
      $colors: #777, #212120, #ebebeb;

      @for $i from 1 through length($colors) {
        li:nth-child(#{$i}) {
          background-color: nth($colors, $i);
        }
      }

      li {
        width: 20px;
        height: 20px;
        opacity: 0.8;
        cursor: pointer;
        border-radius: 50%;
        display: inline-block;
        margin: 8px;

        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
