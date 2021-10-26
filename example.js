jQuery(document).ready(function( $ ){
	jQuery(document).on( 'wbk_timeslots_rendered', function(){
     	jQuery('.wbk-slot-time').each(function(){
             if( jQuery(this).html() == '10:00 - 15:00<br>' ){
                 jQuery(this).html('Turno de mañana');
             }
             if( jQuery(this).html() == '16:00 - 20:00<br>' ){
                 jQuery(this).html('Turno de tarde');
             }
             if( jQuery(this).html() == '10:00 - 13:00<br>' ){
                 jQuery(this).html('Turno de mañana');
             }
             if( jQuery(this).html() == '14:00 - 17:00<br>' ){
                 jQuery(this).html('Turno mediodía');
             }
             if( jQuery(this).html() == '17:00 - 20:00<br>' ){
                 jQuery(this).html('Turno mediodía');
             }
        });
    }); 
});
