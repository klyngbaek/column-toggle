(function($) {
    $.fn.columnToggle = function() {
        this.each(function(index, elem) {
            $('thead th div div', (this)).each(
                    function(index, elem) {
                        console.log(index);
                        var con = $(this).html();
                        $('#main-legend').append(
                                '<div class="revealed">' + con + '</div>');
                        $('#main-legend div').last().click(
                                function() {
                                    var col = index + 1;
                                    $(
                                            '.main th:nth-child(' + col
                                                    + '), .main td:nth-child('
                                                    + col + ')').toggleClass(
                                            'hidden');
                                    $(this).toggleClass('revealed');
                                });
                    });
            $('#main-legend').append('<div class="revealed">HIDE ALL</div>');
            $('#main-legend div').last().click(function() {
                console.log('afd');
                $('.main th, .main td').addClass('hidden');
                $('#main-legend div').removeClass('revealed');
            });
            $('#main-legend').append('<div class="revealed">SHOW ALL</div>');
            $('#main-legend div').last().click(function() {
                $('.main th, .main td').removeClass('hidden');
                $('#main-legend div').addClass('revealed');
            });
        });
        return this;
    };
})(jQuery);