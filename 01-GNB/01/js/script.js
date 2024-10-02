$(function () {
    // 대상을 변수에 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");

    // 메뉴에 마우스가 들어왔을때
    $menu.on("mouseenter", function () {
        $submenu.slideDown();
    });

    // 메뉴에 마우스가 나갔을떄
    $menu.on("monuseleave", function () {
        $submenu.slideUp();
    });
});
