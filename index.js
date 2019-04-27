function dropDownMenu() {
    $('.navBar').mouseenter(function(event) {
        $('.dropDownItem').addClass('dropDownStyle')
    });
    $('.navBar').mouseleave(function(event) {
        $('.dropDownItem').removeClass('dropDownStyle')
    });
}

dropDownMenu();