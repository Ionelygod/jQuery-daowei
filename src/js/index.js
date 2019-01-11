/**
 * Created by Fairy on 2019/1/8.
 */
$(function () {
  setTimeout(()=>{
    new Swiper('.swiper-container',{
      pagination: {
        el: '.swiper-pagination',
        bulletElement : 'li',
      },
    })
  })
   $.get('/msite',(data)=>{
     const result = data
     let html = ''
     result.map((item,index)=>{
       html += `<a href="javascript:;">${item.serviceIndex}</a>`
     })
     $('.ulleft').append(html)


     $(result).each((index,li)=>{
       let html1 = '<div class="box1"><div class="fff"><div class="servicebody">'
         html1 += `<div class="navigation"><span class="serviceIndex">${li.serviceIndex}</span><span class="serviceType">`
         $(li.serviceType).each((item,index)=>{
           html1 += `<a href="javascript:;">${index}</a>`
         })
         html1 += `</span></div><div class="servicetags"><div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=20" style="font-size: 18px">更多服务&gt;</a></span>
                </div><div class="row">`
         $(li.shopList).each((n,i)=>{
           html1 += `<a class="form-group">
                        <div class="member-container">
                        <img src="${i.imgUrl}" class="serviceImg" width="210px" height="210px">
                            <div class="serviceName">${i.serviceName}</div>
                            <div class="description">${i.description}</div>
                            <div class="price"><span style="font-size: 20px">${i.price}元/小时</span><span class="btn">查看详情</span></div>
                        </div>
                    </a>`
         })
       html1 += '</div></div></div></div></div>'

       $('.content').append(html1)
     })

     $('.full_banner .ulleft a').each((index,item)=>{
       console.log(index,item);
       $(item)
         .mouseenter(()=>{
         console.log('111');
          let html3 = '<ul>'
          $(data).eq(index)[0].serviceType.map((item,index)=>{
            html3 += `<li><a href="javascript:;" target="_blank">${item}</a></li>`
          })
           html3 += '</ul>'
           $('.full_banner .ulleft .ulright>ul').remove();
          $('.full_banner .ulleft .ulright').append(html3)
           //$('.ulright>ul').addClass("active");
       })
         $('.ulleft .ulright>ul a').mouseleave(()=>{
             $('.full_banner .ulleft .ulright>ul').remove();
           })
        $('.ulleft').mouseleave(()=>{
          $('.full_banner .ulleft .ulright>ul').remove();
        })

     })
   });

    const $header = $('.sticky-wrapper')
  $(window).scroll(function(){
      if($(this).scrollTop() > 71){
        $header.addClass('on')
      }else{
        $header.removeClass('on')
      }
  })
})
