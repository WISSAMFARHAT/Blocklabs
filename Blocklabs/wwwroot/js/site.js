var exports = {};
var side = document.querySelector("#contentside");
var menuBurger = document.querySelector(".menu");
var content = side.innerHTML;
if (content)
    side.remove();
menuBurger.addEventListener("click", function () {
    document.querySelector("html").classList.add("_noscroll");
    CorePopup.open(content);
    $("#closeSide").on('click', function () {
        document.querySelector("html").classList.remove("_noscroll");
        var menuClose = document.querySelector(".sidebar");
        menuClose.remove();
    });
});
window.addEventListener('scroll', function () {
    checkScrollHeight();
});
function checkScrollHeight() {
    var scrollHeight = window.scrollY;
    var html = document.querySelector('html');
    if (scrollHeight > 55) {
        html.classList.add('_scroll');
    }
    else {
        html.classList.remove('_scroll');
    }
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFtQixDQUFDO0FBQ3RFLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFtQixDQUFDO0FBRXJFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFFL0IsSUFBSSxPQUFPO0lBQ1AsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWxCLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDakMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pELFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDeEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzVELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFtQixDQUFDO1FBRXZFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUM5QixpQkFBaUIsRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxpQkFBaUI7SUFDdEIsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTVDLElBQUksWUFBWSxHQUFHLEVBQUUsRUFBRTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNqQztTQUFNO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEM7QUFDTCxDQUFDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlUG9wdXAgfSBmcm9tIFwiLi9jbG91ZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50c2lkZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgbWVudUJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBzaWRlLmlubmVySFRNTDtcclxuXHJcbmlmIChjb250ZW50KVxyXG4gICAgc2lkZS5yZW1vdmUoKTtcclxuXHJcbm1lbnVCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQoXCJfbm9zY3JvbGxcIilcclxuICAgIENvcmVQb3B1cC5vcGVuKGNvbnRlbnQpO1xyXG5cclxuICAgICQoXCIjY2xvc2VTaWRlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX25vc2Nyb2xsXCIpXHJcbiAgICAgICAgY29uc3QgbWVudUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICBtZW51Q2xvc2UucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGNoZWNrU2Nyb2xsSGVpZ2h0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tTY3JvbGxIZWlnaHQoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XHJcblxyXG4gICAgaWYgKHNjcm9sbEhlaWdodCA+IDU1KSB7XHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdfc2Nyb2xsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnX3Njcm9sbCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==

var exports = {};
var fadeIn;
var RefreshFadeElements = function () {
    var fadeInElements = document.querySelectorAll('.--fadein');
    fadeInElements.forEach(function (element) {
        fadeIn.observe(element);
    });
};
var InitializeFadeAnimation = function () {
    fadeIn = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting)
                return;
            if (entry.target.classList.contains('_animateOn')) {
                entry.target.classList.remove('_animateOn');
                entry.target.classList.add('_animate');
            }
            entry.target.classList.add('--fadein-animate');
            fadeIn.unobserve(entry.target);
            setTimeout(function () {
                entry.target.classList.remove('--fadein');
                entry.target.classList.remove('--fadein-animate');
            }, 1500);
        });
    }, {
        rootMargin: "0px 0px -30px 0px"
    });
    RefreshFadeElements();
};
var fadersleft = document.querySelectorAll(".fade-left");
var fadersright = document.querySelectorAll(".fade-right");
var faderin = document.querySelectorAll(".fadein");
var faderout = document.querySelectorAll(".fadeout");
var appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};
var appearScroll = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("_appear");
            //appearScroll.unobserve(entry.target);
        }
        else {
            entry.target.classList.remove("_appear");
        }
    });
}, appearOptions);
if (fadersleft) {
    fadersleft.forEach(function (fader) {
        appearScroll.observe(fader);
    });
}
if (fadersright) {
    fadersright.forEach(function (fader) {
        appearScroll.observe(fader);
    });
}
if (faderin) {
    faderin.forEach(function (fader) {
        appearScroll.observe(fader);
    });
}
if (faderout) {
    faderout.forEach(function (fader) {
        appearScroll.observe(fader);
    });
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,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V0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7UUFDckIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQTtDQUNMO0FBRUQsSUFBSSxPQUFPLEVBQUU7SUFDVCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztRQUNqQixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0NBQ0w7QUFDRCxJQUFJLFFBQVEsRUFBRTtJQUNWLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1FBQ2xCLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUE7Q0FDTCIsImZpbGUiOiJhbmltYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZmFkZUluO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZnJlc2hGYWRlRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBmYWRlSW5FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4tLWZhZGVpbicpO1xyXG5cclxuICAgIGZhZGVJbkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZmFkZUluLm9ic2VydmUoZWxlbWVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEluaXRpYWxpemVGYWRlQW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZmFkZUluID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX2FuaW1hdGVPbicpKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX2FuaW1hdGVPbicpXHJcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnX2FuaW1hdGUnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnLS1mYWRlaW4tYW5pbWF0ZScpO1xyXG4gICAgICAgICAgICBmYWRlSW4udW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCctLWZhZGVpbicpO1xyXG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJy0tZmFkZWluLWFuaW1hdGUnKTtcclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sIHtcclxuICAgICAgICByb290TWFyZ2luOiBcIjBweCAwcHggLTMwcHggMHB4XCJcclxuICAgIH0pO1xyXG5cclxuICAgIFJlZnJlc2hGYWRlRWxlbWVudHMoKTtcclxufVxyXG5cclxuY29uc3QgZmFkZXJzbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1sZWZ0XCIpO1xyXG5jb25zdCBmYWRlcnNyaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1yaWdodFwiKTtcclxuY29uc3QgZmFkZXJpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZWluXCIpO1xyXG5jb25zdCBmYWRlcm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZW91dFwiKTtcclxuXHJcbmNvbnN0IGFwcGVhck9wdGlvbnMgPSB7XHJcbiAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICByb290TWFyZ2luOiBcIjBweCAwcHggLTEwMHB4IDBweFwiXHJcbn1cclxuXHJcbmNvbnN0IGFwcGVhclNjcm9sbCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiX2FwcGVhclwiKTtcclxuICAgICAgICAgICAgLy9hcHBlYXJTY3JvbGwudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJfYXBwZWFyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59LFxyXG4gICAgYXBwZWFyT3B0aW9uc1xyXG4pO1xyXG5cclxuaWYgKGZhZGVyc2xlZnQpIHtcclxuICAgIGZhZGVyc2xlZnQuZm9yRWFjaChmYWRlciA9PiB7XHJcbiAgICAgICAgYXBwZWFyU2Nyb2xsLm9ic2VydmUoZmFkZXIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuaWYgKGZhZGVyc3JpZ2h0KSB7XHJcbiAgICBmYWRlcnNyaWdodC5mb3JFYWNoKGZhZGVyID0+IHtcclxuICAgICAgICBhcHBlYXJTY3JvbGwub2JzZXJ2ZShmYWRlcik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5pZiAoZmFkZXJpbikge1xyXG4gICAgZmFkZXJpbi5mb3JFYWNoKGZhZGVyID0+IHtcclxuICAgICAgICBhcHBlYXJTY3JvbGwub2JzZXJ2ZShmYWRlcik7XHJcbiAgICB9KVxyXG59XHJcbmlmIChmYWRlcm91dCkge1xyXG4gICAgZmFkZXJvdXQuZm9yRWFjaChmYWRlciA9PiB7XHJcbiAgICAgICAgYXBwZWFyU2Nyb2xsLm9ic2VydmUoZmFkZXIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbiJdfQ==
