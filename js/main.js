$(document).ready(function () {
    let currentFloor = 2; /* переменная текущего этажа */
    let counterUp = $(".counter_up"); /* кнопка увеличения этажа */
    let counterDown = $(".counter_down"); /* кнопка уменьшениея этажа */
    let floorPath = $(".main-image path"); /* подсветка этажа дома в СВГ */

    function Count() {
        let usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}) /* форматируем переменную с этажем, чтобы было 01 */
        $(".counter").text(usCurrentFloor); /* */
        floorPath.removeClass("current-floor"); /* удаляем активный класс этажа */
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /* подсветить этаж */
    }

    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor"); /* получаем значение текужего этажа */
        $(".counter").text(currentFloor); /* записываем знпчение этажа в счетчкик */
    });

    /* отследить клик по кнопке вверх*/
    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            Count();
        }
    });

    /* отследить клик по кнопке вниз*/
    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            Count();
        }
    });
});