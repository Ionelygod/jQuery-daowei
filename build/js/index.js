(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Created by Fairy on 2019/1/8.
 */
$(function () {
  setTimeout(function () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li'
      }
    });
  });
  $.get('/msite', function (data) {
    var result = data;
    var html = '';
    result.map(function (item, index) {
      html += "<a href=\"javascript:;\">".concat(item.serviceIndex, "</a>");
    });
    $('.ulleft').append(html);
    $(result).each(function (index, li) {
      var html1 = '<div class="box1"><div class="fff"><div class="servicebody">';
      html1 += "<div class=\"navigation\"><span class=\"serviceIndex\">".concat(li.serviceIndex, "</span><span class=\"serviceType\">");
      $(li.serviceType).each(function (item, index) {
        html1 += "<a href=\"javascript:;\">".concat(index, "</a>");
      });
      html1 += "</span></div><div class=\"servicetags\"><div class=\"tagsListHeader\"><span class=\"lookMore\"><a href=\"/fuwu?category=20\" style=\"font-size: 18px\">\u66F4\u591A\u670D\u52A1&gt;</a></span>\n                </div><div class=\"row\">";
      $(li.shopList).each(function (n, i) {
        html1 += "<a class=\"form-group\">\n                        <div class=\"member-container\">\n                        <img src=\"".concat(i.imgUrl, "\" class=\"serviceImg\" width=\"210px\" height=\"210px\">\n                            <div class=\"serviceName\">").concat(i.serviceName, "</div>\n                            <div class=\"description\">").concat(i.description, "</div>\n                            <div class=\"price\"><span style=\"font-size: 20px\">").concat(i.price, "\u5143/\u5C0F\u65F6</span><span class=\"btn\">\u67E5\u770B\u8BE6\u60C5</span></div>\n                        </div>\n                    </a>");
      });
      html1 += '</div></div></div></div></div>';
      $('.content').append(html1);
    });
    $('.full_banner .ulleft a').each(function (index, item) {
      console.log(index, item);
      $(item).mouseenter(function () {
        console.log('111');
        var html3 = '<ul>';
        $(data).eq(index)[0].serviceType.map(function (item, index) {
          html3 += "<li><a href=\"javascript:;\" target=\"_blank\">".concat(item, "</a></li>");
        });
        html3 += '</ul>';
        $('.full_banner .ulleft .ulright>ul').remove();
        $('.full_banner .ulleft .ulright').append(html3); //$('.ulright>ul').addClass("active");
      });
      $('.ulleft .ulright>ul a').mouseleave(function () {
        $('.full_banner .ulleft .ulright>ul').remove();
      });
      $('.ulleft').mouseleave(function () {
        $('.full_banner .ulleft .ulright>ul').remove();
      });
    });
  });
  var $header = $('.sticky-wrapper');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 71) {
      $header.addClass('on');
    } else {
      $header.removeClass('on');
    }
  });
});
},{}]},{},[1])