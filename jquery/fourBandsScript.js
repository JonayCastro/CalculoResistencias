$(document).ready(function(){
    $(document).on('change', '.color-select', function(){
        var bandId = '#band'+$(this).attr('id');
        $(bandId).css('background-color',color);
    });

});