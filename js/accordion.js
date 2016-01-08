// Expands/collapses accordion elements
// Currently has no animation because height: auto in the accordion-content classes screws up jQuery's height calculations
$(document).ready(function($) {
    var toggles = $('.accordion').find('.accordion-toggle');

    // Make the contents of the first toggle visible by default
    toggles.first().next('.accordion-content').addClass('default');
    toggles.first().find('.accordion-indicator').text('\u229D');

    // Add a method to expand the panel on click    
    toggles.click(function(){
        // Expand or collapse this panel
        $(this).next('.accordion-content').toggle();
        
        // Note: '\u229D' is the "circled dash" symbol and '\u2295' is the "circled plus" symbol
        // See http://unicode-table.com/en/#2295
        var indicatorChar = $(this).find('.accordion-indicator').text();
        indicatorChar = indicatorChar == '\u2295' ? '\u229D' : '\u2295';
        $(this).find('.accordion-indicator').text(indicatorChar);
    });
});
