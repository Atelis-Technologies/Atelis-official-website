jQuery(document).ready(function ($){
    $('.c-two').each((index, element) => {
            $(element).on('click', ()=> {
                        if($(element).hasClass("active")) {
                            $(element).parent(".new-div").children(".content").css("max-height", "0px")
                            $(element).children(".ninth-vector4").css("transform", "initial");
                            $(element).removeClass("active")
                        } else {
                            $(element).parent(".new-div").children(".content").css("max-height", "200px")
                            $(element).children(".ninth-vector4").css("transform", "rotate(90deg)");
                            $(element).attr("class", "collapsible c-two active")
                        }
           });
    });
});
