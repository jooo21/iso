$(document).ready(function(){ 

    //isotope
	var $wrap = $(".wrap");
	var $filter = $(".filter a");	
	$wrap.isotope({	
		 itemSelector : '.item',
		 masonry : {
			  columnWidth : 300,
			  rowHeight: 230
			}		  
	});	

	//sort
	$filter.on("click",function(e){
		e.preventDefault();
		var $this = $(this);
		$filter.removeClass("on");
		$this.addClass("on");
	    var selector = $this.attr('data-filter');
	    $wrap.isotope({ filter: selector });	 
	});	

});
