$(function () {
    // 대상을 변수에 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300;

    // 메뉴에 마우스가 들어왔을때
    $menu.on("mouseenter", function () {
        // stop() : 현재 진행 중인 애니메이션 즉시 중지
        $(this).find($submenu).stop().slideDown(duration);
        $(this).addClass9("on");
    });

    // 메뉴에 마우스가 나갔을떄
    $menu.on("mouseleave", function () {
        $submenu.stop().slideUp(duration);
    });
});
