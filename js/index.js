$('.main').on("click", function() {
    console.log(this);

    $('.rightleaf').find(".hiddenrightleaf").css("display", "none");
    $('.rightleaf').find(".year").css("display", "block");
    $('.rightleaf').css({'z-index': "0"});
    $('.rightleaf').siblings().css({'z-index': "1"});
    $('.rightleaf').css("background", "#A4D7F4");
    $('.leftleaf').removeClass("bigrightleaf bigleftleaf");
    $('.leftleaf').find(".hiddenrightleaf").css("display", "none");
    $('.leftleaf').find(".year").css("display", "block");
    $('.leftleaf').css({'z-index': "0"});
    $('.leftleaf').siblings().css({'z-index': "1"});
    $('.leftleaf').css("background", "#A4D7F4"); 
    $('.rightleaf').removeClass("bigrightleaf bigleftleaf"); 
});

// makes the right leaves expand
$(".rightleaf").on("click", function(e) {
    e.stopPropagation();
    console.log(this);
    $(this).css("background", "#621B4B");
	$(this).css({'z-index': "1"});
	$(this).siblings().css({'z-index': "0"});
 	$(this).find(".hiddenrightleaf").show("fast");
 	$(this).find(".year").css("display", "none");
	$(this).addClass("bigrightleaf");
	$(this).siblings().removeClass("bigrightleaf bigleftleaf");

	resetrightleaf($(this).siblings());
    $(this).focus();
});

// makes the left leaves expand
$(".leftleaf").on("click", function(e) {
    e.stopPropagation();
	$(this).css("background", "#621B4B");
	$(this).css({'z-index': "1"});
	$(this).siblings().css({'z-index': "0"});
 	$(this).find(".hiddenleftleaf").show("fast");
 	$(this).find(".year").css("display", "none");
	$(this).addClass("bigleftleaf");
	$(this).siblings().removeClass("bigrightleaf bigleftleaf");

	resetleftleaf($(this).siblings());
    $(this).focus();
});

//makes the right reset
 function resetrightleaf(targetLeaf) {
    
    targetLeaf.find(".hiddenrightleaf").css("display", "none");
    targetLeaf.find(".year").css("display", "block");
    targetLeaf.css({'z-index': "0"});
    targetLeaf.siblings().css({'z-index': "1"});
    targetLeaf.css("background", "#A4D7F4");

 }

 //makes the left reset
  function resetleftleaf(targetLeaf) {
     
     targetLeaf.find(".hiddenleftleaf").css("display", "none");
     targetLeaf.find(".year").css("display", "block");
     targetLeaf.css({'z-index': "0"});
     targetLeaf.siblings().css({'z-index': "1"});
     targetLeaf.css("background", "#A4D7F4");

  }