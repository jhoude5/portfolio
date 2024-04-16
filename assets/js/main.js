function onMobileClick(e) {
    if($(".nav-trigger-label").hasClass('opened')){
        $(".nav-trigger").trigger('click');
        $(".nav-trigger-label").removeClass('opened');
        $(".btn-close").removeClass('opened');
        
    } else {
        $(".nav-trigger-label").addClass('opened');
        $(".btn-close").addClass('opened');
    }
    
    
}