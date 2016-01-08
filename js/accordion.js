// Script for 
$(document).ready(function($) {
    var toggles = $('.accordion').find('.accordion-toggle');

    // Make the contents of the first toggle visible by default
    toggles.first().next('.accordion-content').addClass('default');
    toggles.first().find('.accordion-indicator').text('-');

    // Add a method to expand the panel on click    
    toggles.click(function(){
        // Expand or collapse this panel
        $(this).next('.accordion-content').toggle();
        
        var indicatorChar = $(this).find('.accordion-indicator').text();
        indicatorChar = indicatorChar == '+' ? '-' : '+';
        $(this).find('.accordion-indicator').text(indicatorChar);
    });
});
