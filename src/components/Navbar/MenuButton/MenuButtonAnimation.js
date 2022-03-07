/* from https://codepen.io/JakobVesely/pen/ExejoK */
import $ from "jquery";
var duration = 100;
var easing = "swing";

$(function () {
    $('#burgerButton').on('click', function () {
        if (is_fold($(this))) {
            fold_in($(this));
        } else {
            fold_out($(this));
        }
    });
});

function is_fold($el) {
    if ($el.hasClass('fold_out')) {
        return true;
    } else {
        return false;
    }
}

function fold_out($el) {
    $el.addClass('fold_out');
    $el.removeClass('fold_in');

    $el.find('.outer_line').animate({ 'top': '6px' }, duration, function () {
        $el.find('.inner_line').hide();
        setTimeout(function () {
            $('#line1').animateRotate(0, 45, duration, easing, function () { });
            $('#line3').animateRotate(0, -45, duration, easing, function () { });
        }, 100);
    });
}

function fold_in($el) {
    $el.addClass('fold_in');
    $el.removeClass('fold_out');

    $('#line1').animateRotate(45, 0, duration, easing, function () { });
    $('#line3').animateRotate(-45, 0, duration, easing, function () {
        $el.find('.inner_line').show(80, function () {

            $el.find('#line1').animate({ 'top': '0px' }, duration);
            $el.find('#line3').animate({ 'top': '12px' }, duration);
        });
    });
}

$.fn.animateRotate = function (angle1, angle2, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function (i, e) {
        args.step = function (now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({ deg: angle1 }).animate({ deg: angle2 }, args);
    });
};
/* End of Snippet */