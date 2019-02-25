// JavaScript Document
$(function(){
	 var n=0;
	function my(){
		if(n<2){
			n=n+1;
			$(".zd_banner img").hide();
			$(".zd_banner img").eq(n).show()
			 $(".zd_banner em i").removeClass("zd_actvie")
	  		 $(".zd_banner em i").eq(n).addClass("zd_actvie")
		}
		else{
			n=0;
			$(".zd_banner img").hide();
			$(".zd_banner img").eq(n).show()
			$(".zd_banner em i").removeClass("zd_actvie")
	  	 $(".zd_banner em i").eq(n).addClass("zd_actvie")
			}
		}
	  var m=setInterval(my,5000)
	  $(".zd_banner").hover(function(){
		  clearInterval(m)
		  },function(){
			  m=setInterval(my,5000)
			  })
	$(".zd_banner").hover(function(){
		$(".zd_banner p").show()
		},function(){
		$(".zd_banner p").hide()
			})  
   $(".zd_banner em i").click(function(){
	   var a=$(".zd_banner em i").index(this)
	   $(".zd_banner em i").removeClass("zd_actvie")
	   $(this).addClass("zd_actvie")
	   $(".zd_banner img").hide();
	   $(".zd_banner img").eq(a).show()
	   
	   })
      var b=0;
    $(".zd_banner .check-left").click(function(){
		if(b<2){
			b=b+1;
			$(".zd_banner img").hide();
			$(".zd_banner img").eq(b).show()
			 $(".zd_banner em i").removeClass("zd_actvie")
	  		 $(".zd_banner em i").eq(b).addClass("zd_actvie")
		}
		else{
			b=0;
			$(".zd_banner img").hide();
			$(".zd_banner img").eq(b).show()
			$(".zd_banner em i").removeClass("zd_actvie")
	  	 $(".zd_banner em i").eq(b).addClass("zd_actvie")
			}
		})
		
		$(".zd_banner .check-right").click(function(){
		if(b<3&&b>0){
			b=b-1;
			$(".zd_banner img").hide();
			$(".zd_banner img").eq(b).show()
			 $(".zd_banner em i").removeClass("zd_actvie")
	  		 $(".zd_banner em i").eq(b).addClass("zd_actvie")
		}
		else{
			b=2;
			$(".zd_banner img").hide();
			$(".zd_banner img").eq(b).show()
			$(".zd_banner em i").removeClass("zd_actvie")
	  	    $(".zd_banner em i").eq(b).addClass("zd_actvie")
			}
		})
	
      $(".zd_topmain input").click(function(){ 
		  $(".zd_topmain .float-right").toggle()
		  })
		  
		if($(window).width()<450){ 
		 $(" .zd_topmain a").click(function(){ 
			 $(this).attr("href",null)
			 $(this).find("span").css("display","block").show()
			 })  
		}
	})
	