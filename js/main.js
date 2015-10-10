(function() {

  window.App = {
    // ----------
    init: function() {

        galleryTitles = ['Afghanistan', 'Pakistan', 'Russia', 'India'];

        $('.flex-item').mouseenter(function() {
            $(this).append('<div class="gallery-title">' + galleryTitles[0] + '</div>');
        });

        $('.flex-item').mouseleave(function() {
            $(this).children('div').remove();
        });
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();
