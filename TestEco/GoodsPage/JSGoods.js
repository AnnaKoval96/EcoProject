jQuery(document).ready(function($) {
    $('.buy').on('click', function(e) {
        e.preventDefault();

        $('body').toggleClass('expanded');
    })
});