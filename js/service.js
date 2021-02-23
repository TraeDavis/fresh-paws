function initService(){

    $('#bath-btn').on('click', function(){
        $('#bath').show();
        $('#face').hide();
        $('#full').hide();
    });

    $('#face-btn').on('click', function(){
        $('#bath').hide();
        $('#face').show();
        $('#full').hide();
    });

    $('#full-btn').on('click', function(){
        $('#bath').hide();
        $('#face').hide();
        $('#full').show();
    });

}

window.onload = initService;