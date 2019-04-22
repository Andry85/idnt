(function($){



    /*********************************************************/
    /* Start Mobile menu */
    /********************************************************/

    $('.mobileNavi__burger').click(function(){
        $(this).toggleClass("close");
        $(this).next('.mobileNaviList').slideToggle();
    });
    /*********************************************************/
    /* End  Mobile menu   */
    /********************************************************/

    /*********************************************************/
        /* Start Warning */
    /********************************************************/

    $('.warning__cloze').click(function(){
        $(this).parent('.warning').slideUp();
        var heightHeader = $('.header').height();
        $('.content').css('marginTop', heightHeader);
    });
    /*********************************************************/
    /* End  Warning */
    /********************************************************/


    /*********************************************************/
        /* Start Stick Header */
    /********************************************************/
        function fixheightHeader() {
            var heightHeader = $('.sticky-header').height();
            $('.content').css('marginTop', heightHeader);
        };
        fixheightHeader();    

        $(window).resize(function(){
            fixheightHeader();
        });
    /*********************************************************/
    /* End  Stick Header */
    /********************************************************/


    /*********************************************************/
        /* Start night mode */
    /********************************************************/
        var currentTime = new Date().getHours();

        function timeCheck() {
         if (currentTime > 18 || currentTime < 6) {
            document.getElementsByTagName("BODY")[0].classList.add('night');
         }
        }
        
        timeCheck();
    /*********************************************************/
    /* End  night mode */
    /********************************************************/


})(jQuery);

