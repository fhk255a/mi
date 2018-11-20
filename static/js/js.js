
  function ajaxData(file,fun){
    $.ajax({
      url:"../static/"+file,
      data:{},
      success:(data)=>{
        fun(data);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  $('html').css('font-size',$(window).width()/7.2+'px');
