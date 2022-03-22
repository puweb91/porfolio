$(document).ready(function () {
    $('.chart').easyPieChart({
        size: 87,
        animate: 2500,
        barColor: function (percent) {
            return (percent < 61 ? '#59b65b' : percent < 81 ? '#ed6205' : percent > 80 ? '#d5130a' : '#d5130a');
        },
        trackColor: '#e0e1e7',
        scaleColor: '#bbbdc9',
        scaleLength: 0,
        trackWidth: 15,
        lineWidth: 15,
        lineCap: 'square',
        easing: 'easeOutCubic',
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    var usage_values = [60, 80];
    var actual = usage_values[0];
    var capacity = usage_values[1];
    $('.slider-usage .actual').animate({"width": actual + '%'}, 2000, 'easeOutQuart');
    $('.slider-usage .capacity').animate({"width": capacity + '%'}, 2000, 'easeOutQuart');
    $('.slider-usage').slider({
        min: 0,
        max: 100,
        step: 1,
        values: usage_values,
        slide: function (event, ui) {
            event.preventDefault();
        }
    });
});
