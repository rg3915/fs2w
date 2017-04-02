$(document).ready(function() {
  $('a').tooltip({
    placement: 'top'
  });

  // // Iniciando as divs minimizadas
  for (var i = 1; i <= 16; i++) {
    $("#widget-body" + i).slideToggle("fast");
  }

  var widgetSlideToggle = function(e) {
    var targetId = $(this).data('targetId');
    var widgetBodyId = "#widget-body" + targetId;
    var toggleId = "#toggle" + targetId;

    $(widgetBodyId).slideToggle("slow");

    $(toggleId).toggleClass(function() {
      if ($(this).is('.fa fa-chevron-down')) {
        return '.fa fa-chevron-up';
      } else {
        return '.fa fa-chevron-down';
      }
    });
  };

  $(".widget-trigger").click(widgetSlideToggle);

});