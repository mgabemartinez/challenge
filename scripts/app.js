$(document).ready(function($) {  

  // Popover
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  // Sortable List
  $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  })

});