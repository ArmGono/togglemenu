/*!
 * jquery.togglemenu.js 1.0
 *
 * Copyright 2017, Gevorg mkrtchyan
 * Released under the GPL v3 License
 *
 * Date: Mart 29, 2017
 */
(function ($, window) {
  "use strict";
  $.fn.togglemenu = $.fn.toggleMenu = function (options) {

    // Defaults
    var settings = $.extend({
      'breakpoint': 960,
      'title': 'Меню',
      'selector': 'ul.menu',
      'burger': $('<i class="toggle-menu-burger"></i>'),
      'burgerStyles': {},
      'jsHide': true,
      'appendItems': false,
      'appendBlock': {},
      'burgerParent': false
    }, options);
    var _toggleMenu = {};
    _toggleMenu.hide = function ($item) {
      if (settings.jsHide) {
        $item.hide();
      } else {
        $item.addClass('toggle-menu-hide');
      }
    }
    _toggleMenu.show = function ($item) {
      if (settings.jsHide) {
        $item.show();
      } else {
        $item.removeClass('toggle-menu-hide');
      }
    }
    _toggleMenu.check = function ($obj, width) {
      var breakpoint = settings.breakpoint;
      if (width < breakpoint) {
        settings.body.addClass('toggle-menu-is-mobile');
        settings.body.removeClass('toggle-menu-is-desktop');
        _toggleMenu.hide($obj);
        _toggleMenu.show(settings.burger);
      } else {
        settings.body.removeClass('toggle-menu-is-mobile');
        settings.body.addClass('toggle-menu-is-desktop');
        _toggleMenu.show($obj);
        _toggleMenu.hide(settings.burger);
      }
    };
    _toggleMenu.append = function ($element, item) {
      if (typeof item === 'string') {
        $element.append(item);
      } else if (typeof item === 'object') {
        $.each(item, function (i, html) {
          $element.append(html);
        });
      }

    };
    return this.each(function () {
      // Store the object
      var $this = $(this);
      settings.body = $('body');
      settings.body.addClass('toggle-menu-inited');
      var $menu = $(settings.selector, $this).clone();
      if (settings.appendItems) {
        _toggleMenu.append($menu, settings.appendItems);
      }
      var $burger = settings.burger;
      if (!$.isEmptyObject(settings.burgerStyles)) {
        $burger.css(settings.burgerStyles);
      }
      _toggleMenu.hide($burger);
      if (!settings.burgerParent) {
        $this.after($burger);
      } else {
        $burger.appendTo($(settings.burgerParent));
      }
      $this.addClass('toggle-menu-wrap');
      var $mobileMenu = $('<div />').addClass('toggle-menu-mobile');
      var $content = $('<div id="toggle-menu-content"></div>');
      $mobileMenu.append('<div class="toggle-menu-title">' + settings.title + '</div>');
      var $close = $('<a href="#close-menu" class="toggle-menu-close"><span>Закрыть</span></a>');
      $content.append($menu)
      if (!$.isEmptyObject(settings.appendBlock)) {
        $content.append(settings.appendBlock);
      }
      $mobileMenu.append($close).append($content);
      $mobileMenu.addClass('toggle-menu-mobile').addClass('toggle-menu-mobile-hide').appendTo(settings.body);
      settings.body.removeClass('toggle-menu-opened');
      var $window = $(window);
      $window.resize(function () {
        var width = $window.width();
        _toggleMenu.check($this, $window.width());
        $mobileMenu.addClass('toggle-menu-mobile-hide');
        settings.body.removeClass('toggle-menu-opened');
      }).resize();
      $burger.on('click', function (e) {
        e.preventDefault();
        $mobileMenu.toggleClass('toggle-menu-mobile-hide');
        settings.body.toggleClass('toggle-menu-opened');
      });
      $close.on('click', function (e) {
        e.preventDefault();
        $mobileMenu.addClass('toggle-menu-mobile-hide');
        settings.body.removeClass('toggle-menu-opened');
      });
    });
  };
})(jQuery, window);