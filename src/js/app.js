$(function () {
    const member = $('.ourTeam_member');
    const windowTeam = $('.ourTeam');
    const header = $('.ourTeam__header');
    const container = $('.ourTeam__container');
    const popup = $('.popup');
    const next = $('.next');
    const prev = $('.prev');
    const positionSlides = $('.popup__slides');
    const slidesNumber = 10;
    const cross = $('.cross');

    member.on('click', function(){
        windowTeam.addClass('overlay');
        windowTeam.removeClass('ourTeam');
        header.hide();
        container.hide();
        popup.css('display', 'flex');
        const slideWidth = $('.popup__slide').css('width');
        const id = $(this).data('id');
        const leftPositions = (id * (-parseInt(slideWidth))) + 'px';
        positionSlides.css('left', leftPositions);
    });

    next.on('click', function(){
        const slideWidth = $('.popup__slide').css('width');
        const totalWidth = ((parseInt(slideWidth) * (-slidesNumber)) + 'px');
        positionSlides.animate({ left: '-=' + slideWidth }, 1000,
        function() {
            if (positionSlides.css('left') === totalWidth) {
                positionSlides.css('left', 0);
            }
        });
    });

    prev.on('click', function(){
        const slideWidth = $('.popup__slide').css('width');
        const totalWidth = ((parseInt(slideWidth) * (-slidesNumber)) + 'px');
        if (positionSlides.css('left') !== '0px') {
            positionSlides.animate({ left: '+=' + slideWidth }, 1000,
                function () {
                    if (positionSlides.css('left') === '0px') {
                        positionSlides.css('left', totalWidth);
                    }
                });
        } else{
            positionSlides.css('left', totalWidth);
            positionSlides.animate({ left: '+=' + slideWidth }, 1000);
        }
    });

    cross.on('click', function(){
        windowTeam.removeClass('overlay');
        windowTeam.addClass('ourTeam');
        header.show();
        container.show();
        popup.hide();
    })
})