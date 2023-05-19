/* globals jQuery, jb_decagon_loadmore_params */

jQuery(function ($) {
  $('.more-btn').click(function () {
    var button = $(this);

    $.ajax({
      url: jb_decagon_loadmore_params.ajaxurl, // AJAX handler
      data: {
        action: 'loadmore',
        query: jb_decagon_loadmore_params.posts, // that's how we get params from wp_localize_script() function
        nonce: jb_decagon_loadmore_params.nonce,
        page: jb_decagon_loadmore_params.current_page
      },
      type: 'POST',
      beforeSend: function (xhr) {
        button.text('Loading...');
      },
      success: function (data) {
        if (data) {
          button.text('Load More');

          $('.post')
            .last()
            .after(data);

          jb_decagon_loadmore_params.current_page++

          if (
            jb_decagon_loadmore_params.current_page ===
            +jb_decagon_loadmore_params.max_page
          ) {
            button.fadeOut();
          }
        } else {
          button.fadeOut();
        }
      }
    });
  });
});
