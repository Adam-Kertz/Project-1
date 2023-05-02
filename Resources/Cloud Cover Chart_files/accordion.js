(function($, Drupal) {
  // Custom functions and variables can go here
  Drupal.behaviors.custom_js_libraries_accordion = {
    attach:function() {
        $("#accordion").accordion({
          autoHeight: false,
          collapsible: true,
          active: false
        });
        $(".accordion").accordion({
            autoHeight: false,
            collapsible: true,
            active: false
        });
    }
  };
}(jQuery, Drupal));