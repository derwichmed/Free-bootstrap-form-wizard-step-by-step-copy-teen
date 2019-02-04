$(function (){
    nbrStep = 0;
    $('.form_wizard .form_footer input').click(function (){
        if($(this).attr('class') == "nxt_step btn btn-primary"){
            if(nbrStep == $('.form_wizard .header_steps .item').length - 2){
                $('.nxt_step').hide();
                $('.submit_btn').show();
            }
            nbrStep = nbrStep + 1;
            img_src = $('.form_wizard .header_steps .item .image').eq(nbrStep - 1).attr('img-check');
            $('.form_wizard .header_steps .item .image').eq(nbrStep - 1).attr('src',img_src);
            desc_class_loding = $('.form_wizard .header_steps .item .desc_step').eq(nbrStep - 1)
                    .attr('class-loding');
            desc_class_check = $('.form_wizard .header_steps .item .desc_step').eq(nbrStep - 1)
                    .attr('class-check');
            $('.form_wizard .header_steps .item .desc_step').eq(nbrStep - 1)
                    .removeClass(desc_class_loding);
            $('.form_wizard .header_steps .item .desc_step').eq(nbrStep - 1)
                    .addClass(desc_class_check);
            
            
            img_src = $('.form_wizard .header_steps .item .image').eq(nbrStep).attr('img-loding');
            $('.form_wizard .header_steps .item .image').eq(nbrStep).attr('src',img_src);
            
         }
         else{
            nbrStep = nbrStep - 1;
            $('.nxt_step:hidden').show();
            $('.submit_btn:visible').hide();
            if(nbrStep < 0){
                nbrStep = 0;
            }
            img_src = $('.form_wizard .header_steps .item .image').eq(nbrStep + 1).attr('img-disable');
            $('.form_wizard .header_steps .item .image').eq(nbrStep + 1).attr('src',img_src);
            
            img_src = $('.form_wizard .header_steps .item .image').eq(nbrStep).attr('img-loding');
            $('.form_wizard .header_steps .item .image').eq(nbrStep).attr('src',img_src);
            desc_class_loding = $('.form_wizard .header_steps .item .desc_step').eq(nbrStep)
                    .attr('class-loding');
            desc_class_check = $('.form_wizard .header_steps .item .desc_step').eq(nbrStep)
                    .attr('class-check');
            $('.form_wizard .header_steps .item .desc_step').eq(nbrStep)
                    .removeClass(desc_class_check);
            $('.form_wizard .header_steps .item .desc_step').eq(nbrStep)
                    .addClass(desc_class_loding);
            
         }
         $('.form_wizard_content .form_item:visible').hide();
         $('.form_wizard_content .form_item').eq(nbrStep).show();
         if($(window).width() <= 800){
             $('.mobile_backgroud_effect').show();
             $('.form_wizard .header_steps').show();
       
         }
    });
    
    $('.steps_header_exit img').click(function (){
       $('.form_wizard .header_steps').fadeOut("slow");
       $('.mobile_backgroud_effect').hide();
    });
});