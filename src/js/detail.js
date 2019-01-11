/**
 * Created by Fairy on 2019/1/9.
 */
$(function () {
  $.get('/comments',(data)=>{


    //http://www.jq22.com/jquery-info20292

    const num = data.length
    //const num = 200
    const bigArr = []
    let smallArr = []
    data.forEach((item,index) => {
      if(smallArr.length == 0){
        bigArr.push(smallArr)
      }

      smallArr.push(item)
      
      if(smallArr.length == 10){
        smallArr = []
      }
    })
    $('#content').html(template('temp',{data:bigArr[0]}))

    Helper.ui.page('#page', {
      total: num,
      pageSize: 10,
      showTotal: true,
      showTo: true,
      change: function ( i ) {
        // createContent( i, 0 );
        console.log(i -1);
        $('#content').html(template('temp',{data:bigArr[i-1]}))
      }
    });
    // var arr = [];
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




    const $header = $('.sticky-wrapper')
    $(window).scroll(function(){
      if($(this).scrollTop() > 71){
        $header.addClass('on')
      }else{
        $header.removeClass('on')
      }
    })

  })
})