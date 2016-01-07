// Script for 
$(document).ready(function($) {
    $('.accordion').find('.accordion-toggle').click(function(){
        // Expand or collapse this panel
        $(this).next().slideToggle('fast');
        
        var indicatorChar = $(this).find('.accordion-indicator').text();
        indicatorChar = indicatorChar == '+' ? '-' : '+';
        $(this).find('.accordion-indicator').text(indicatorChar);
    });
});
