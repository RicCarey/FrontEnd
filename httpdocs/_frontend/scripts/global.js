/* ==========================================================================
Document ready calls
========================================================================== */
$(document).ready(function () {

    /* Fast click */
    FastClick.attach(document.body);

    /* Placeholder pollyfill */
    $('form').find('input, textarea').placeholder();

    /* Selectbox plugin */
    $('#content').find('select').select2({
        minimumResultsForSearch: -1,
        // Add our 'needsclick' to each item, so FastClick doesn't get applied
        formatResult: function (result, container, query, escapeMarkup) {
            container.addClass('needsclick');
            return result.text;
        }
    });

    $('#content').find(".select2-container").find(".select2-focusser, .select2-search").hide();

    /* Date picker */
    $('.datefield').datepicker();

    /* CMS floated images */
    $('.rich_text_area').find('img').each(function () {
        var img = $(this);
        if (img.css('float') === 'left') {
            img.addClass('img_float_left');
        }
        else if (img.css('float') === 'right') {
            img.addClass('img_float_right');
        }
    });

    /* Smooth anchor scrolling */
    $("#content").find('.rich_text_area').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, "slow");
                return false;
            }
        }
    });

});


/* ==========================================================================
Window Load Calls
========================================================================== */
$(window).load(function () {

  
});

/* =======================================================================

Enquire JS

======================================================================= */

/* Desk
========================================================================== */
enquire.register("screen and (min-width:980px)", {

    match: function () {
        primaryNavDesk();
        equalize('match');
    },

    unmatch: function () {
        destoryPrimaryDesktopNav();
    }

}, true);

/* Desk & Lap
========================================================================== */
enquire.register("screen and (min-width:768px)", {
    match: function () {
      
    },

    unmatch: function () {
       
    }
}, true);

/* Lap & Palm
========================================================================== */
enquire.register("screen and (max-width:979px)", {

    match: function () {
 
    },

    unmatch: function () {
      
    }

});

/* Lap
========================================================================== */
enquire.register("screen and (min-width:768px) and (max-width:979px)", {

    match: function () {
     
    },

    unmatch: function () {
    }

});

/* Palm
========================================================================== */
enquire.register("screen and (max-width:767px)", {

    match: function () {
      
    },

    unmatch: function () {
    
    }

});
