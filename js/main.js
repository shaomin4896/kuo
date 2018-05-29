$(document).ready(function () {
    //#region  init
    M.AutoInit();
    //#endregion
    //#region top a click
    $('#memeries').click(function () {
        $('.default').hide('slow');
        $('.default').removeClass( "default" );
        $('.memeries').show('slow');
        $('.memeries').addClass("default");
    });
    $('#growup').click(function () {
        $('.default').hide('slow');
        $('.default').removeClass( "default" );
        $('.growup').show('slow');
        $('.growup').addClass("default");
    });
    $('#talk').click(function () {
        $('.default').hide('slow');
        $('.default').removeClass( "default" );
        $('.talk').show('slow');
        $('.talk').addClass("default");
    });
    $('#memeries').click();
    //#endregion
    
    $('#lock').keyup(function(){
        if($(this).val()=="IamXiaoYu"){
            $('#unlock').hide('slow');
            $('#fordad').show('slow');
        }
    });
    
})
