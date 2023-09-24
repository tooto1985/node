$(function($) {
    function toggle_panel_visibility($lateral_panel, $background_layer, $body) {
        if ($lateral_panel.hasClass('speed-in')) {
            $lateral_panel.removeClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                $body.removeClass('overflow-hidden');
            });
            $background_layer.removeClass('is-visible');
        } else {
            $lateral_panel.addClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                $body.addClass('overflow-hidden');
            });
            $background_layer.addClass('is-visible');
        }
    }

    function move_navigation($navigation, $MQ) {
        if ($(window).width() >= $MQ) {
            $navigation.detach();
            $navigation.appendTo('header');
        } else {
            $navigation.detach();
            $navigation.insertAfter('header');
        }
    }
    var $L = 1200,
        $menu_navigation = $('#main-nav'),
        $cart_trigger = $('#cd-cart-trigger'),
        $hamburger_icon = $('#cd-hamburger-menu'),
        $lateral_cart = $('#cd-cart'),
        $shadow_layer = $('#cd-shadow-layer');
    $hamburger_icon.on('click', function(event) {
        event.preventDefault();
        $lateral_cart.removeClass('speed-in');
        toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'));
    });
    $cart_trigger.on('click', function(event) {
        event.preventDefault();
        $menu_navigation.removeClass('speed-in');
        toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
    });
    $shadow_layer.on('click', function() {
        $shadow_layer.removeClass('is-visible');
        if ($lateral_cart.hasClass('speed-in')) {
            $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                $('body').removeClass('overflow-hidden');
            });
            $menu_navigation.removeClass('speed-in');
        } else {
            $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                $('body').removeClass('overflow-hidden');
            });
            $lateral_cart.removeClass('speed-in');
        }
    });
    move_navigation($menu_navigation, $L);
    $(window).on('resize', function() {
        move_navigation($menu_navigation, $L);
        if ($(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
            $menu_navigation.removeClass('speed-in');
            $shadow_layer.removeClass('is-visible');
            $('body').removeClass('overflow-hidden');
        }

    });
});
$(function($) {
    function cartlist(data) {
        var html = "";
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            html += "<li>";
            html += "<span class=\"cd-qty\">1x</span><span class=\"item\">" + data[i].name + "</span>";
            html += "<div class=\"cd-price\">$" + data[i].price + "</div>";
            html += "<a href=\"#0\" class=\"cd-item-remove cd-img-replace\">Remove</a>";
            html += "</li>";
            total += data[i].price;
        }
        $(".cd-cart-items").html(html);
        $(".cd-cart-total span").text("$" + total);
    }
    $("#cd-gallery-items").on("click", "a", function(e) {
        $.getJSON("/add", {
            item: $(this).text()
        }, function(data) {
            cartlist(data);
            alert("已加入購物車！");
        });
        e.preventDefault();
    });
    $(".cd-cart-items").on("click", ".cd-item-remove", function(e) {
        var item = $(this).parent().find(".item").text();
        $.getJSON("/remove", {
            item: item
        }, function(data) {
            cartlist(data);
            alert("已刪除商品！");
        });
        e.preventDefault();
    });
    $.getJSON("/list", function(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<li>";
            html += "<img title=\"$" + data[i].price + "\" src=\"" + (data[i].img || "img/thumb.jpg") + "\">";
            html += "<a href=\"#\">" + data[i].name + "</a>";
            html += "</li>";
        }
        $("#cd-gallery-items").html(html);
    });
    $.getJSON("/bag", cartlist);
});