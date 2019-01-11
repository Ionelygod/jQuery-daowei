(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Created by Fairy on 2019/1/9.
 */
$(function () {
  $.get('/comments', function (data) {
    //http://www.jq22.com/jquery-info20292
    var num = data.length; //const num = 200

    var bigArr = [];
    var smallArr = [];
    data.forEach(function (item, index) {
      if (smallArr.length == 0) {
        bigArr.push(smallArr);
      }

      smallArr.push(item);

      if (smallArr.length == 10) {
        smallArr = [];
      }
    });
    $('#content').html(template('temp', {
      data: bigArr[0]
    }));
    Helper.ui.page('#page', {
      total: num,
      pageSize: 10,
      showTotal: true,
      showTo: true,
      change: function change(i) {
        // createContent( i, 0 );
        console.log(i - 1);
        $('#content').html(template('temp', {
          data: bigArr[i - 1]
        }));
      }
    }); // var arr = [];
    // for (var i=0;i<data.length;i++){
    //   arr.push(i)
    // }
    // //arr.length 为100 说明分页需要的总数量为100 这个个人感觉没什么用，还不如直接给个具体数值 100好使呢。
    // $('#ht-page').pagination({
    //   dataSource: arr,
    //   callback: function(data, pagination) { //回调函数 当我们点击页数执行的方法
    //     console.log(data,pagination)　　//pagination对象 有我们需要的当前选择页数。
    //   }
    // })

    var $header = $('.sticky-wrapper');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 71) {
        $header.addClass('on');
      } else {
        $header.removeClass('on');
      }
    });
  });
});
},{}]},{},[1])