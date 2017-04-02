$(document).ready(function() {
  $('a').tooltip({
    placement: 'top'
  });

  $(".widget-trigger").click(function(){
	  var target = $(this).next();
	  $(this).next().slideToggle('slow');
	  $(this).closest('.widget-gray').find('.fa-chevron-up, .fa-chevron-down').toggleClass('fa-chevron-up fa-chevron-down');
  });
});
