var version;function t_initZoom(){var t,e,o,r,n;document.querySelector(".t-zoomer__wrapper")||(window.tzoominited=!0,window.tzoomopenonce=!1,window.isDoubletapScaleAdded=!1,t=document.querySelectorAll("[data-zoomable]"),t=Array.prototype.slice.call(t).filter(function(t){return"yes"===t.getAttribute("data-zoomable")&&!t.classList.contains("t-slds__thumbs_gallery")&&""!==t.getAttribute("data-img-zoom-url")}),Array.prototype.forEach.call(t,function(t){t.classList.add("t-zoomable")}),(t=document.createElement("div")).classList.add("t-zoomer__wrapper"),(e=document.createElement("div")).classList.add("t-zoomer__container"),(o=document.createElement("div")).classList.add("t-zoomer__bg"),r=t_zoom__createCloseBtn(),n=t_zoom__createScaleBtn(),t.appendChild(e),t.appendChild(o),t.appendChild(r),t.appendChild(n),document.body&&document.body.insertAdjacentElement("beforeend",t),t_zoom__initFullScreenImgOnClick(),t_zoom__closeAndSlideCarousel())}function t_zoom__createCloseBtn(){var t=document.createElement("div");t.classList.add("t-zoomer__close"),t.style.display="none";return t.insertAdjacentHTML("beforeend",'<svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41421 -0.000151038L0 1.41406L21.2132 22.6273L22.6274 21.2131L1.41421 -0.000151038Z" fill="black"/><path d="M22.6291 1.41421L21.2148 0L0.00164068 21.2132L1.41585 22.6274L22.6291 1.41421Z" fill="black"/></svg>'),t}function t_zoom__createScaleBtn(){var t=document.createElement("div"),e=(t.classList.add("t-zoomer__scale"),t.classList.add("showed"),"");e+='<svg class="icon-increase" width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">';return t.insertAdjacentHTML("beforeend",'<svg class="icon-increase" width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.832 22L17.8592 17.0273" stroke="black" stroke-width="2" stroke-linecap="square"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.58591 3.7511C0.917768 7.41924 0.917768 13.367 4.58591 17.0352C8.25405 20.7033 14.2019 20.7033 17.87 17.0352C21.5381 13.367 21.5381 7.41924 17.87 3.7511C14.2019 0.0829653 8.25405 0.0829653 4.58591 3.7511Z" stroke="black" stroke-width="2"/><path d="M6.25781 10.3931H16.2035" stroke="black" stroke-width="2"/><path d="M11.2305 15.3662V5.42053" stroke="black" stroke-width="2"/></svg><svg class="icon-decrease" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9961 22L17.0233 17.0273" stroke="black" stroke-width="2" stroke-linecap="square"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.74997 3.7511C0.0818308 7.41924 0.0818308 13.367 3.74997 17.0352C7.41811 20.7033 13.3659 20.7033 17.0341 17.0352C20.7022 13.367 20.7022 7.41924 17.0341 3.7511C13.3659 0.0829653 7.41811 0.0829653 3.74997 3.7511Z" stroke="black" stroke-width="2"/><path d="M5.41797 10.3931H15.3637" stroke="black" stroke-width="2"/></svg>'),t}function t_zoom__initFullScreenImgOnClick(){document.addEventListener("click",function(t){t=t.target.closest('.t-zoomable:not([data-img-zoom-url=""]), .t-slds__thumbs_gallery-zoomable');t&&t_zoomHandler(t)});var t=window.t_zoom__isMobile?"orientationchange":"resize";window.addEventListener(t,function(){document.body.classList.contains("t-zoomer__show")&&t_zoom_checkForScale()})}function t_zoom__closeAndSlideCarousel(){var t=document.querySelector(".t-zoomer__close");t&&(t.addEventListener("click",function(){t_zoom_close()}),document.addEventListener("keydown",function(t){if(document.body.classList.contains("t-zoomer__show"))switch(t.keyCode){case 27:t.preventDefault(),t_zoom_close();break;case 37:t_zoom__setEventOnBtn("prev");break;case 39:t_zoom__setEventOnBtn("next")}}))}function t_zoomHandler(t){document.body.classList.add("t-zoomer__show");document.querySelector(".t-popup_show")&&document.body.classList.add("t-zoomer__active");var e=document.querySelector(".t-zoomer__container"),o=document.createElement("div"),r=(o.classList.add("t-carousel__zoomed"),document.createElement("div")),n=(r.classList.add("t-carousel__zoomer__slides"),document.createElement("div")),i=(n.classList.add("t-carousel__zoomer__inner"),document.createElement("div")),i=(i.classList.add("t-carousel__zoomer__track"),n.appendChild(i),t_zoom_createSliderArrow("left")),a=t_zoom_createSliderArrow("right"),i=(r.appendChild(i),r.appendChild(a),r.appendChild(n),o.appendChild(r),e&&(e.innerHTML=""),e&&e.appendChild(o),t.closest(".r"));if(!document.querySelector(".t-carousel__zoomer__track")||!i)return!1;t_zoom__addingImgsIntoCarousel(t);a=document.querySelector(".t-zoomer__close");a&&(a.style.display="flex"),t_zoom_setModalColor(i),t_zoom__createAndLoopSlider(t),t_zoom__getEventOnBtn(),document.body.classList.add("t-zoomer__show_fixed"),t_zoom__initSingleZoom(),t_zoom_checkForScale(),t_zoom_lockScroll(),window.t_zoom__isMobile?(t_zoom_initSwipe(),t_zoom_initCloseSwipe(),window.addEventListener("orientationchange",t_zoom__updateActiveSlidePos)):window.addEventListener("resize",t_zoom__updateActiveSlidePos),window.tzoomopenonce=!0,t_zoom__initEventsonMobile()}function t_zoom__updateActiveSlidePos(){setTimeout(function(){var t,e=document.querySelector(".t-carousel__zoomer__track");e&&(t=e.querySelector(".t-carousel__zoomer__item.active").offsetLeft,e.style.transform="translateX("+-t+"px)")},300)}function t_zoom_createSliderArrow(t){var e=document.createElement("div"),o=(e.classList.add("t-carousel__zoomer__control"),e.classList.add("t-carousel__zoomer__control_"+t),e.setAttribute("data-zoomer-slide","left"===t?"prev":"next"),document.createElement("div")),r=(o.classList.add("t-carousel__zoomer__arrow__wrapper"),o.classList.add("t-carousel__zoomer__arrow__wrapper_"+t),document.createElement("div"));return r.classList.add("t-carousel__zoomer__arrow"),r.classList.add("t-carousel__zoomer__arrow_"+t),r.classList.add("t-carousel__zoomer__arrow_small"),o.appendChild(r),e.appendChild(o),e}function t_zoom_initSwipe(){var t,n,a,l=document.querySelectorAll(".t-carousel__zoomer__item"),c=document.querySelector(".t-zoomer__wrapper");1<l.length&&(t=new Hammer(c,{domEvents:!0,inputClass:Hammer.TouchInput,cssProps:{touchCollout:"default"},recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]}),n=null,a=!1,window.tzoomopenonce||(t.on("panstart",function(){var t=document.querySelector(".t-carousel__zoomer__track");"y"!==t.getAttribute("data-on-transition")?t&&(n=t.getBoundingClientRect().left,t.style.transition="none"):n=null,a=t_zoom__isScaled(c)}),t.on("panmove",function(t){var e=document.querySelector(".t-carousel__zoomer__track"),o=e.getAttribute("data-on-transition"),r=c.getAttribute("data-on-drag");"y"===o||"y"===r||1!==t.maxPointers||a||(40<Math.abs(t.deltaX)&&e.setAttribute("data-on-drag","y"),n&&(o=n+t.deltaX,e.style.transform="translateX("+o+"px)"))}),t.on("panend",function(t){var e,o,r=document.querySelector(".t-carousel__zoomer__track"),n=(r.setAttribute("data-on-drag",""),r.getAttribute("data-on-transition")),i=c.getAttribute("data-on-drag");"y"===n||"y"===i||1!==t.maxPointers||a||(r.style.transition="",n=Math.abs(t.velocityX),i=r.offsetLeft,o=l[0].offsetWidth,e=r.querySelector(".t-carousel__zoomer__item.active").offsetLeft,.6<(o=(o-Math.abs(i+e))/n/1e3)?o=.6:o<.2&&(o=.2),r.style.transitionDuration=o+"s",t.velocityX<-.5||t.deltaX<-80?(t_zoom_unscale(),t_zoom_showSlide("next"),t_zoom_checkForScale()):.5<t.velocityX||80<t.deltaX?(t_zoom_unscale(),t_zoom_showSlide("prev"),t_zoom_checkForScale()):t_zoom_showSlide())})))}function t_zoom__initEventsonMobile(){var e;window.t_zoom__isMobile&&(t_zoom_setHideControlsTimer(),e=document.querySelector(".t-zoomer__wrapper"),["touchstart","touchmove","touchend","mousemove"].forEach(function(t){e.addEventListener(t,t_zoom_setHideControlsTimer)}),window.addEventListener("orientationchange",t_zoom__updateSlidesHeight))}function t_zoom__updateSlidesHeight(){var o,r=document.querySelectorAll(".t-carousel__zoomer__item .t-carousel__zoomer__img"),n=document.querySelector(".t-zoomer__wrapper");n&&r.length&&(o=n.getAttribute("data-max-comment-height"),o=parseInt(o,10),isNaN(o)||setTimeout(function(){var e,t=document.querySelector(".t-carousel__zoomer__item.active");t&&(t=n.offsetHeight-t.offsetHeight,e=document.documentElement.clientHeight-(t+o),Array.prototype.forEach.call(r,function(t){t.style.maxHeight=e+"px"}))},300))}function t_zoom__initSingleZoom(){var t;1===document.querySelectorAll(".t-carousel__zoomer__item").length&&(t=document.querySelectorAll(".t-carousel__zoomer__control"),Array.prototype.forEach.call(t,function(t){t.style.display="none"}))}function t_zoom__getEventOnBtn(){[{name:"right",direction:"next"},{name:"left",direction:"prev"}].forEach(function(t){document.querySelector(".t-carousel__zoomer__control_"+t.name).addEventListener("click",function(){t_zoom__setEventOnBtn(t.direction)})})}function t_zoom__setEventOnBtn(t){var e=document.querySelector(".t-carousel__zoomer__track"),o=document.querySelector(".t-zoomer__wrapper"),e=e.getAttribute("data-on-transition"),o=o.getAttribute("data-on-drag");"y"!==e&&"y"!==o&&(t_zoom_unscale(),setTimeout(function(){t_zoom_showSlide(t),t_zoom_checkForScale()}))}function t_zoom__addingImgsIntoCarousel(t){var s,_,e=t.closest(".r"),d=e?e.querySelectorAll(".t-zoomable:not(.t-slds__thumbs_gallery):not(.tn-atom__slds-img)"):[],m=((e?e.querySelector(".t-slds"):null)&&((t=t.closest(".t-slds"))&&(d=t.querySelectorAll(".t-zoomable:not(.t-slds__thumbs_gallery)")),t&&t.querySelector(".tn-elem__gallery__video-wrapper")&&(d=Array.prototype.slice.call(d)).splice(-1,1)),"827"===e.getAttribute("data-record-type")),u=(m&&(t=e.querySelector(".t827__overlay-title"),e=e.querySelector(".t827__overlay-descr"),s=t?t.style.fontFamily:"",_=e?e.style.fontFamily:""),document.querySelector(".t-carousel__zoomer__track")),p="y"===window.lazy;Array.prototype.forEach.call(d,function(t,e){var o,r,n=t.getAttribute("data-img-zoom-url"),i="",a="",n=n?n.split(","):"",t=("IMG"!==t.nodeName&&"DIV"!==t.nodeName||(i=t.getAttribute("title")||"",a=t.getAttribute("data-img-zoom-descr")||""),i&&((o=document.createElement("div")).classList.add("t-zoomer__title"),o.classList.add("t-descr"),o.classList.add("t-descr_xxs"),m&&s&&(o.style.fontFamily=s),o.textContent=i),a&&((r=document.createElement("div")).classList.add("t-zoomer__descr"),r.classList.add("t-descr"),r.classList.add("t-descr_xxs"),m&&_&&(r.style.fontFamily=_),r.textContent=a),document.createElement("div")),l=(t.classList.add("t-carousel__zoomer__item"),document.createElement("div")),c=(l.classList.add("t-carousel__zoomer__wrapper"),document.createElement("img"));c.classList.add("t-carousel__zoomer__img"),p?(c.classList.add("t-img"),c.setAttribute("data-original",n),0!==e&&e!==d.length-1||c.setAttribute("data-lazy-rule","skip")):c.src=n,t.appendChild(l),l.appendChild(c),(i||a||window.t_zoom__isMobile)&&((e=document.createElement("div")).classList.add("t-zoomer__comments"),i&&e.appendChild(o),a&&e.appendChild(r),t.appendChild(e)),u.appendChild(t)})}function t_zoom__createAndLoopSlider(t){var i,a,l,e=document.querySelector(".t-carousel__zoomer__track"),o=document.querySelector(".t-zoomer__wrapper"),r=document.querySelectorAll(".t-carousel__zoomer__item");o&&r.length&&(i=o.offsetHeight-r[0].offsetHeight,window.t_zoom__isMobile&&(a=Array.prototype.reduce.call(r,function(t,e){e=e.querySelector(".t-zoomer__comments"),e=e?e.offsetHeight:0;return t=t<e?e:t},0),o.setAttribute("data-max-comment-height",a)),l="y"===window.lazy,Array.prototype.forEach.call(r,function(t){var e=t.querySelector(".t-carousel__zoomer__img"),o=e.getAttribute(l?"data-original":"src"),t=t.querySelector(".t-zoomer__comments"),r=t?t.offsetHeight:0,n=(window.t_zoom__isMobile&&(r=a),i+r),t=(t&&(t.style.height=r+"px"),e.style.maxHeight=document.documentElement.clientHeight-n+"px",o&&-1!==o.indexOf(".svg")&&(e.style.width=window.innerWidth+"px"),document.querySelectorAll(".t-carousel__zoomer__arrow__wrapper"));Array.prototype.forEach.call(t,function(t){t.style.top=r?"calc(50% - "+r/2+"px)":"50%"})}),Array.prototype.forEach.call(r,function(t,e){t.setAttribute("data-zoomer-slide-number",e)}),1<r.length&&t_zoom_loopSlider(),(t=(r=(o=t.getAttribute("data-img-zoom-url"))?document.querySelector(".t-carousel__zoomer__img["+(l?"data-original":"src")+'="'+o+'"]'):null)?r.closest(".t-carousel__zoomer__item"):null)&&(o=!!t&&t.offsetLeft,t.classList.add("active"),t_zoom__hideInnactiveSlides(t,e),e.style.transition="none",e.style.transform="translateX("+-o+"px)",setTimeout(function(){e.style.transition=""},200)),l&&t_onFuncLoad("t_lazyload_update",t_lazyload_update))}function t_zoom__hideInnactiveSlides(t,e){var o;!t||(e=Array.prototype.slice.call(e.querySelectorAll(".t-carousel__zoomer__item:not(:first-child):not(:last-child)"))).length<=6||(t=t_zoom__getCurrentSlideIndex(t),(o=[t]).push(0===t?e.length:t-1),o.push(t===e.length?0:t+1),e.forEach(function(t){var e=t_zoom__getCurrentSlideIndex(t),e=-1!==o.indexOf(e)?"remove":"add";t.classList[e]("t-carousel__zoomer__item-innactive")}))}function t_zoom__getCurrentSlideIndex(t){return t&&parseInt(t.getAttribute("data-zoomer-slide-number"),10)||0}function t_zoom_showSlide(t){var e=document.querySelector(".t-carousel__zoomer__track"),o=e.querySelectorAll(".t-carousel__zoomer__item"),r=e.querySelector(".t-carousel__zoomer__item.active"),n=0,i="y"===e.getAttribute("data-cached-zoom"),t=(Array.prototype.forEach.call(o,function(t,e){t===r&&(n=e)}),"next"!==t&&"prev"!==t||(n=("next"===t?n+1:o.length+(n-1))%o.length,e.setAttribute("data-on-transition","y"),window.t_zoom__isMobile&&"0s"===getComputedStyle(e).transitionDuration&&!i&&(e.style.transition="")),o[n].offsetLeft);r.classList.remove("active"),o[n].classList.add("active"),e.style.transform="translateX("+-t+"px)",t_zoom__hideInnactiveSlides(o[n],e),i&&(e.removeAttribute("data-cached-zoom"),t=new Event("transitionend"),e.dispatchEvent(t)),"y"===window.lazy&&(t_onFuncLoad("t_lazyload_update",t_lazyload_update),(i=o[n].querySelector("img"))&&!i.src&&setTimeout(function(){t_onFuncLoad("t_lazyload_update",t_lazyload_update)},200))}function t_zoom_transitForLoop(t){var o,e=document.querySelector(".t-carousel__zoomer__track"),r=document.querySelectorAll(".t-carousel__zoomer__item");if(!t)return 1;"start"===t&&(o=r.length-2),t=r[o="end"===t?1:o].offsetLeft,Array.prototype.forEach.call(r,function(t,e){e===o?t.classList.add("active"):t.classList.remove("active")}),e.style.transition="none",e.style.transform="translateX("+-t+"px)",setTimeout(function(){e.style.transition="","y"===window.lazy&&t_onFuncLoad("t_lazyload_update",t_lazyload_update)})}function t_zoom_loopSlider(){var e=document.querySelector(".t-carousel__zoomer__track"),r=e.querySelectorAll(".t-carousel__zoomer__item"),t=r[0].cloneNode(!0),o=r[r.length-1].cloneNode(!0),n=(t.classList.remove("active"),o.classList.remove("active"),t_zoom__updateClonedImgSrc(r[0],r[r.length-1],t,o),e.insertBefore(o,e.firstChild),e.appendChild(t),(r=e.querySelectorAll(".t-carousel__zoomer__item")).length);["transitionend","webkitTransitionEnd","oTransitionEnd"].forEach(function(t){e.addEventListener(t,function(){var o=0;Array.prototype.forEach.call(r,function(t,e){t.classList.contains("active")&&(o=e)}),0===o&&t_zoom_transitForLoop("start"),o===n-1&&t_zoom_transitForLoop("end"),e.setAttribute("data-on-transition","")})})}function t_zoom__updateClonedImgSrc(t,e,o,r){var n,i,a,l,c;"y"===window.lazy&&(n=t.querySelector("img"),i=e.querySelector("img"),a=o.querySelector("img"),l=r.querySelector("img"),(t=[n,i,a,l]).some(function(t){return!t})||"MutationObserver"in window&&(c=new MutationObserver(function(t){t.forEach(function(t){var e;"attributes"===t.type&&"src"===t.attributeName&&(t.target===n&&(e=a),t.target===i&&(e=l),t.target===a&&(e=n),t.target===l&&(e=i),t.target.src&&!e.src&&(e.src=t.target.src))})}),t.forEach(function(t){c.observe(t,{attributes:!0})})))}function t_zoom_initCloseSwipe(){var o,r=document.querySelector(".t-zoomer__wrapper"),n=document.querySelector(".t-carousel__zoomer__track"),i=!1,t=new Hammer(r,{domEvents:!0,inputClass:Hammer.TouchInput,cssProps:{touchCollout:"default"},recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_VERTICAL}]]});t.on("panstart",function(){o=r.offsetTop,r.style.position="none",i=t_zoom__isScaled(r)}),t.on("panmove",function(t){var e=Math.abs(t.deltaY);"y"===n.getAttribute("data-on-drag")&&"y"!==r.getAttribute("data-on-drag")||!(-120<t.angle&&t.angle<-60||t.angle<120&&60<t.angle)||1!==t.maxPointers||i||(40<e&&r.setAttribute("data-on-drag","y"),e=o+t.deltaY,r.style.transform="translateY("+e+"px)")}),t.on("panend",t_zoom_closeSwipeHandler)}function t_zoom_closeSwipeHandler(t){var e=document.querySelector(".t-zoomer__wrapper"),o=t_zoom__isScaled(e);e.style.transition="transform 300ms ease-out",Math.abs(t.deltaY)<40&&(e.style.transform=""),"y"!==e.getAttribute("data-on-drag")||1!==t.maxPointers||o||(t.deltaY<-200||t.velocityY<-.3?(e.style.transform="translateY(-100vh)",setTimeout(function(){t_zoom_close(),e.style.transform=""},300)):200<t.deltaY||.3<t.velocityY?(e.style.transform="translateY(100vh)",setTimeout(function(){t_zoom_close(),e.style.transform=""},300)):e.style.transform=""),e.setAttribute("data-on-drag","")}function t_zoom_checkForScale(){var t,e=document.querySelector(".t-carousel__zoomer__item.active .t-carousel__zoomer__img:not(.loaded)");e&&(t=!!(t=document.getElementById("allrecords"))&&"yes"===t.getAttribute("data-tilda-lazy"),"y"===window.lazy||t?(t=Date.now(),t_zoom__waitImgForScale(e,t,function(){t_zoom_checkToScaleInit(e)})):e.complete?t_zoom_checkToScaleInit(e):e.onload=function(){t_zoom_checkToScaleInit(e)})}function t_zoom__waitImgForScale(t,e,o){t.src&&t.naturalWidth&&t.naturalHeight?o():Date.now()-e<3e3?setTimeout(function(){t_zoom__waitImgForScale(t,e,o)},500):(console.warn("zoomed image isn't complete, natural width: "+t.naturalWidth+", natural height: "+t.naturalHeight),o())}function t_zoom_checkToScaleInit(t){var e=window.innerWidth,o=window.innerHeight,r=document.querySelector(".t-zoomer__wrapper"),n=(r.classList.remove("zoomer-no-scale"),t.hasAttribute("data-original-svg-height")||t.hasAttribute("data-original-svg-width"));-1===t.src.indexOf(".svg")||window.isIE||n?o<t.naturalHeight||e<t.naturalWidth?(!window.isDoubletapScaleAdded&&window.t_zoom__isMobile&&t_zoom_doubletapScaleInit(),t_zoom_scale_init()):(document.querySelector(".t-zoomer__scale").style.display="",r.classList.add("zoomer-no-scale")):t_zoom_fetchSVG(t,o,e)}function t_zoom_fetchSVG(o,r,n){var t=o.src;fetch(t).then(function(t){return t.text()}).then(function(t){var e=document.createElement("div"),t=(document.body.insertAdjacentElement("beforeend",e),e.innerHTML=t,e.querySelector("svg"));o.setAttribute("data-original-svg-height",t.getBBox().height.toString()),o.setAttribute("data-original-svg-width",t.getBBox().width.toString()),o.style.width=t.getBBox().width+"px",o.style.height=t.getBBox().height+"px",r<t.getBBox().height||n<t.getBBox().width?(!window.isDoubletapScaleAdded&&window.t_zoom__isMobile&&t_zoom_doubletapScaleInit(),t_zoom_scale_init()):document.querySelector(".t-zoomer__scale").style.display="",document.body.removeChild(e)})}function t_zoom_scale_init(){var i=document.querySelector(".t-zoomer__wrapper"),t=document.querySelector(".t-zoomer__scale");t.style.display="block","y"!==t.getAttribute("data-zoom-scale-init")&&(t.setAttribute("data-zoom-scale-init","y"),i.addEventListener("click",function(t){var e=document.querySelector(".t-carousel__zoomer__item.active .t-carousel__zoomer__img"),o=document.querySelector(".t-carousel__zoomer__track"),r=document.querySelector(".t-carousel__zoomer__inner"),n=!i.classList.contains("zoomer-no-scale");(window.t_zoom__isMobile&&t.target.closest(".t-zoomer__scale")&&n||!window.t_zoom__isMobile&&n&&!t.target.closest(".t-zoomer__close, .t-carousel__zoomer__control"))&&(o.setAttribute("data-on-transition",""),o.style.transition="none",o.style.transform="none",e.style.maxHeight="",i.classList.contains("scale-active")?t_zoom_unscale():(i.classList.add("scale-active"),r.classList.add("scale-active"),window.t_zoom__isMobile?t_zoom_mobileZoomPositioningInit(e):t_zoom_desktopZoomPositioningInit(e,t)))},!1))}function t_zoom_doubletapScaleInit(){window.isDoubletapScaleAdded=!0;var r=document.querySelector(".t-zoomer__wrapper");new Hammer(r,{domEvents:!0,inputClass:Hammer.TouchInput,cssProps:{touchCollout:"default"},recognizers:[[Hammer.Tap]]}).on("tap",function(t){var e,o;2===t.tapCount&&document.body.classList.contains("t-zoomer__show")&&!t.target.closest(".t-carousel__zoomer__control")&&(t=document.querySelector(".t-carousel__zoomer__item.active .t-carousel__zoomer__img"),e=document.querySelector(".t-carousel__zoomer__inner"),o=document.querySelector(".t-carousel__zoomer__track"),t.style.maxHeight="",o.style.transition="none",o.style.transform="none",r.classList.contains("scale-active")?t_zoom_unscale():(r.classList.add("scale-active"),e.classList.add("scale-active"),t_zoom_mobileZoomPositioningInit(t)))})}function t_zoom_desktopZoomPositioningInit(e,t){var o,r,n,i,a=(window.innerWidth-e.offsetWidth)/2,l=(window.innerHeight-e.offsetHeight)/2,c=e.getAttribute("data-original-svg-width")||e.naturalWidth,s=e.getAttribute("data-original-svg-height")||e.naturalHeight;function _(t,e){n=100*(void 0!==t.touches?t.touches[0]:t).clientX/window.innerWidth,i=-(n*(e.offsetWidth-window.innerWidth))/100,e.style.left=i+"px"}function d(t,e){o=100*(void 0!==t.touches?t.touches[0]:t).clientY/window.innerHeight,r=-(o*(e.offsetHeight-window.innerHeight))/100,e.style.top=r+"px"}e.style.left=a+"px",e.style.top=l+"px",window.innerWidth<c&&window.innerHeight<s?(n=100*t.clientX/window.innerWidth,i=-(n*(c-window.innerWidth))/100,o=100*t.clientY/window.innerHeight,r=-(o*(s-window.innerHeight))/100,e.style.left=i+"px",e.style.top=r+"px",window.t_zoom__isMobile?e.ontouchmove=function(t){_(t,e),d(t,e)}:e.onmousemove=function(t){_(t,e),d(t,e)}):window.innerWidth<c?(n=100*t.clientX/window.innerWidth,i=-(n*(c-window.innerWidth))/100,e.style.left=i+"px",window.t_zoom__isMobile?e.ontouchmove=function(t){_(t,e)}:e.onmousemove=function(t){_(t,e)}):window.innerHeight<s&&(o=100*t.clientY/window.innerHeight,r=-(o*(s-window.innerHeight))/100,e.style.top=r+"px",window.t_zoom__isMobile?e.ontouchmove=function(t){d(t,e)}:e.onmousemove=function(t){d(t,e)})}function t_zoom_mobileZoomPositioningInit(o){var r=(window.innerWidth-o.offsetWidth)/2,n=(window.innerHeight-o.offsetHeight)/2,i=(o.style.left=r+"px",o.style.top=n+"px",{x:0,y:0}),a={},l={};o.ontouchstart=function(t){a=t_zoom_getTouchEventXY(t)},o.ontouchmove=function(t){var t=t_zoom_getTouchEventXY(t),e=1.5*(t.x-a.x),t=1.5*(t.y-a.y);l.x=i.x+e,l.y=i.y+t,l.x>-r&&(l.x=-r),l.x<r&&(l.x=r),l.y>-n&&(l.y=-n),l.y<n&&(l.y=n),o.offsetHeight<window.innerHeight&&(l.y=0),o.style.transform="translate("+l.x+"px, "+l.y+"px)"},o.ontouchend=function(){i.x=l.x,i.y=l.y},o.ontouchcancel=function(){i.x=l.x,i.y=l.y}}function t_zoom_getTouchEventXY(t){var e={x:0,y:0};return"touchstart"!==t.type&&"touchmove"!==t.type&&"touchend"!==t.type&&"touchcancel"!==t.type||(t=t.touches[0]||t.changedTouches[0],e.x=t.pageX,e.y=t.pageY),e}function t_zoom_close(){t_zoom_unscale(),document.body.classList.remove("t-zoomer__show"),document.body.classList.remove("t-zoomer__show_fixed");var t=document.querySelector(".t-zoomer__container");t&&(t.innerHTML=""),setTimeout(function(){document.body.classList.remove("t-zoomer__active")},200),t_zoom_unlockScroll(),window.t_zoom__isMobile?(window.removeEventListener("orientationchange",t_zoom__updateSlidesHeight),window.removeEventListener("orientationchange",t_zoom__updateActiveSlidePos)):window.removeEventListener("resize",t_zoom__updateActiveSlidePos)}function t_zoom_unscale(){var t,e,o,r=document.querySelectorAll(".t-zoomer__wrapper.scale-active, .t-carousel__zoomer__inner.scale-active"),n=(Array.prototype.forEach.call(r,function(t){t.classList.remove("scale-active")}),document.querySelector(".t-carousel__zoomer__item.active")),i=document.querySelector(".t-carousel__zoomer__track"),a=document.querySelector(".t-zoomer__wrapper");n&&(t=n.querySelector(".t-carousel__zoomer__img"),e=n.querySelector(".t-zoomer__comments"),a&&(o=a.offsetHeight-n.offsetHeight,e=e?e.offsetHeight:0,o=o+(e=window.t_zoom__isMobile?a.getAttribute("data-max-comment-height")||e:e),t.onmousemove=null,t.ontouchmove=null,t.style.transform="",t.style.left="",t.style.top="",t.style.maxHeight=document.documentElement.clientHeight-o+"px")),void 0!==n.offsetLeft&&void 0!==n.offsetTop&&(a=n.offsetLeft,i.style.transform="translateX("+-a+"px)"),r.length&&i.setAttribute("data-cached-zoom","y"),setTimeout(function(){i.style.transition=""},100)}function t_zoom_lockScroll(){var t=/(android)/i.test(navigator.userAgent);(window.t_zoom__isiOS&&11===window.t_zoom__iOSMajorVersion&&!window.MSStream||t)&&!document.body.classList.contains("t-body_scroll-locked")&&(t=window.pageYOffset,document.body.classList.add("t-body_scroll-locked"),document.body.style.top="-"+t+"px",document.body.setAttribute("data-popup-scrolltop",t.toString()))}function t_zoom_unlockScroll(){var t=/(android)/i.test(navigator.userAgent);(window.t_zoom__isiOS&&11===window.t_zoom__iOSMajorVersion&&!window.MSStream||t)&&document.body.classList.contains("t-body_scroll-locked")&&(t=document.body.getAttribute("data-popup-scrolltop"),document.body.classList.remove("t-body_scroll-locked"),document.body.style.top="",document.body.removeAttribute("data-popup-scrolltop"),window.scrollTo(0,Number(t)))}function t_zoom_setModalColor(t){var e,o,r="#ffffff",n="#000000",i=t.getAttribute("data-bg-color"),i=t_zoom_hexToRgb(i=i||r),t=(document.getElementById("allrecords")!==document.querySelector(".t-store__product-snippet")&&document.getElementById("allrecords").contains(document.querySelector(".t-store__product-snippet"))&&t&&(i=t.style.backgroundColor),document.querySelector(".t-zoomer__container")),a=document.querySelectorAll(".t-zoomer__wrapper svg"),l=document.querySelectorAll(".t-zoomer__close, .t-zoomer__scale"),c=t.querySelectorAll(".t-carousel__zoomer__arrow__wrapper"),s=document.querySelectorAll(".t-zoomer__title, .t-zoomer__descr"),i="black"===t_zoom_luma_rgb(i)?n:r;i==n?(e=r,o="rgba(1, 1, 1, 0.3)",Array.prototype.forEach.call(c,function(t){t.classList.add("t-carousel__zoomer__arrow__wrapper_dark")})):(e=n,o="rgba(255, 255, 255, 0.3)",Array.prototype.forEach.call(c,function(t){t.classList.remove("t-carousel__zoomer__arrow__wrapper_dark")})),Array.prototype.forEach.call(l,function(t){t.style.background=o}),t.style.backgroundColor=i,t.style.color=e,Array.prototype.forEach.call(a,function(t){"none"===t.getAttribute("fill")?t.setAttribute("fill","none"):t.setAttribute("fill",e);t=t.querySelectorAll("path");0<t.length&&Array.prototype.forEach.call(t,function(t){t.getAttribute("stroke")&&t.setAttribute("stroke",e),t.getAttribute("fill")&&t.setAttribute("fill",e)})}),Array.prototype.forEach.call(s,function(t){t.style.color=e})}function t_zoom_luma_rgb(t){var e=Array.isArray(t);if(void 0===t)return"black";if(0!==t.indexOf("rgb")&&!e)return"black";e=e?t:t.split("(")[1].split(")")[0].split(",");return e.length<3||.2126*e[0]+.7152*e[1]+.0722*e[2]<128?"black":"white"}function t_zoom_hexToRgb(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,o,r){return e+e+o+o+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),e=t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null;return t?[e.r,e.g,e.b]:null}function t_zoom_setHideControlsTimer(){var t=document.querySelectorAll(".t-carousel__zoomer__arrow__wrapper, .t-zoomer__scale");Array.prototype.forEach.call(t,function(t){t.classList.remove("t-zoomer__hide-animation")}),setTimeout(function(){Array.prototype.forEach.call(t,function(t){t.classList.add("t-zoomer__hide-animation")})})}function t_zoom__isScaled(t){return window.visualViewport&&1!==window.visualViewport.scale||t.classList.contains("scale-active")}window.t_zoom__isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),window.t_zoom__isMobile||(window.t_zoom__isMobile=navigator.userAgent.indexOf("Macintosh")&&"ontouchend"in document),window.t_zoom__isiOS=/iPhone|iPad|iPod/i.test(navigator.userAgent),window.t_zoom__iOSMajorVersion=0,window.t_zoom__isiOS&&null!==(version=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))&&(window.t_zoom__iOSMajorVersion=parseInt(version[1],10)),t_onReady(function(){window.tzoominited||t_initZoom()}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(Element.prototype.matches.call(e,t))return e;e=e.parentElement||e.parentNode}return null});