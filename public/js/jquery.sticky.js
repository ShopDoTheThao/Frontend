// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('width', '')
              .css('position', '')
              .css('top', '');
            s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('width', s.stickyElement.width())
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i];
        if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
          s.stickyElement.css('width', $(s.getWidthFrom).width());
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName 
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom,
            responsiveWidth: o.responsiveWidth
          });
        });
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var unstickyElement = $(this);

          var removeIdx = -1;
          for (var i = 0; i < sticked.length; i++)
          {
            if (sticked[i].stickyElement.get(0) == unstickyElement.get(0))
            {
                removeIdx = i;
            }
          }
          if(removeIdx != -1)
          {
            sticked.splice(removeIdx,1);
            unstickyElement.unwrap();
            unstickyElement.removeAttr('style');
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }

  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);



// java script
// (function() {
//   var defaults = {
//     topSpacing: 0,
//     bottomSpacing: 0,
//     className: 'is-sticky',
//     wrapperClassName: 'sticky-wrapper',
//     center: false,
//     getWidthFrom: '',
//     responsiveWidth: false
//   };
//   var sticked = [];
//   var windowHeight = window.innerHeight;
//   var $window = window;
//   var $document = document;

//   function scroller() {
//     var scrollTop = $window.pageYOffset || $document.documentElement.scrollTop;
//     var documentHeight = Math.max(
//       $document.body.scrollHeight,
//       $document.body.offsetHeight,
//       $document.documentElement.clientHeight,
//       $document.documentElement.scrollHeight,
//       $document.documentElement.offsetHeight
//     );
//     var dwh = documentHeight - windowHeight;
//     var extra = scrollTop > dwh ? dwh - scrollTop : 0;

//     for (var i = 0; i < sticked.length; i++) {
//       var s = sticked[i];
//       var elementTop = s.stickyWrapper.offsetTop;
//       var etse = elementTop - s.topSpacing - extra;

//       if (scrollTop <= etse) {
//         if (s.currentTop !== null) {
//           s.stickyElement.style.width = '';
//           s.stickyElement.style.position = '';
//           s.stickyElement.style.top = '';
//           s.stickyElement.dispatchEvent(new CustomEvent('sticky-end', { detail: s }));
//           s.stickyElement.parentNode.classList.remove(s.className);
//           s.currentTop = null;
//         }
//       } else {
//         var newTop =
//           documentHeight -
//           s.stickyElement.offsetHeight -
//           s.topSpacing -
//           s.bottomSpacing -
//           scrollTop -
//           extra;
//         if (newTop < 0) {
//           newTop = newTop + s.topSpacing;
//         } else {
//           newTop = s.topSpacing;
//         }
//         if (s.currentTop !== newTop) {
//           s.stickyElement.style.width = s.stickyElement.offsetWidth + 'px';
//           s.stickyElement.style.position = 'fixed';
//           s.stickyElement.style.top = newTop + 'px';

//           if (s.getWidthFrom) {
//             s.stickyElement.style.width = document.querySelector(s.getWidthFrom).offsetWidth + 'px';
//           }

//           s.stickyElement.dispatchEvent(new CustomEvent('sticky-start', { detail: s }));
//           s.stickyElement.parentNode.classList.add(s.className);
//           s.currentTop = newTop;
//         }
//       }
//     }
//   }

//   function resizer() {
//     windowHeight = window.innerHeight;

//     for (var i = 0; i < sticked.length; i++) {
//       var s = sticked[i];
//       if (s.getWidthFrom && s.responsiveWidth) {
//         s.stickyElement.style.width = document.querySelector(s.getWidthFrom).offsetWidth + 'px';
//       }
//     }
//   }

//   function init(options) {
//     var o = Object.assign({}, defaults, options);

//     var stickyElements = document.querySelectorAll('[data-sticky]');
//     stickyElements.forEach(function(element) {
//       var stickyElement = element;

//       var stickyId = stickyElement.getAttribute('id');
//       var wrapperId = stickyId
//         ? stickyId + '-' + defaults.wrapperClassName
//         : defaults.wrapperClassName;
//       var wrapper = document.createElement('div');
//       wrapper.setAttribute('id', stickyId + '-sticky-wrapper');
//       wrapper.classList.add(o.wrapperClassName);
//       stickyElement.parentNode.insertBefore(wrapper, stickyElement);
//       wrapper.appendChild(stickyElement);

//       if (o.center) {
//         stickyElement.parentNode.style.width = stickyElement.offsetWidth + 'px';
//         stickyElement.parentNode.style.marginLeft = 'auto';
//         stickyElement.parentNode.style.marginRight = 'auto';
//       }

//       if (getComputedStyle(stickyElement).float === 'right') {
//         stickyElement.style.float = 'none';
//         stickyElement.parentNode.style.float = 'right';
//       }

//       var stickyWrapper = stickyElement.parentNode;
//       stickyWrapper.style.height = stickyElement.offsetHeight + 'px';
//       sticked.push({
//         topSpacing: o.topSpacing,
//         bottomSpacing: o.bottomSpacing,
//         stickyElement: stickyElement,
//         currentTop: null,
//         stickyWrapper: stickyWrapper,
//         className: o.className,
//         getWidthFrom: o.getWidthFrom,
//         responsiveWidth: o.responsiveWidth
//       });
//     });

//     $window.addEventListener('scroll', scroller, false);
//     $window.addEventListener('resize', resizer, false);

//     setTimeout(scroller, 0);
//   }

//  function unstick() {
//     var unstickyElements = document.querySelectorAll('[data-sticky]');
//     unstickyElements.forEach(function(element) {
//       var unstickyElement = element;

//       var removeIdx = -1;
//       for (var i = 0; i < sticked.length; i++) {
//         if (sticked[i].stickyElement === unstickyElement) {
//           removeIdx = i;
//         }
//       }
//       if (removeIdx !== -1) {
//         var s = sticked[removeIdx];
//         sticked.splice(removeIdx, 1);
//         var wrapper = s.stickyWrapper;
//         wrapper.parentNode.insertBefore(unstickyElement, wrapper);
//         wrapper.parentNode.removeChild(wrapper);
//         unstickyElement.removeAttribute('style');
//       }
//     });
//   }

//   init.prototype.update = scroller;
//   init.prototype.unstick = unstick;

//   window.addEventListener('DOMContentLoaded', function() {
//     new init();
//   });
// })();