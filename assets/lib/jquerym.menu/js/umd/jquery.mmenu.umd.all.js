!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){!function(e){function t(){e[n].glbl||(r={$wndw:e(window),$html:e("html"),$body:e("body")},i={},a={},o={},e.each([i,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,s=e.length;s>n;n++)t[e[n]]=t.mm(e[n])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent sub"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"),e[n]._c=i,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",s="5.5.3";if(!(e[n]&&e[n].version>s)){e[n]=function(e,t,n){this.$menu=e,this._api=["bind","init","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=t,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var s=this.$pnls.children();return this._initAddons(),this.init(s),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=s,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={init:function(e){e=e.not("."+i.nopanel),e=this._initPanels(e),this.trigger("init",e),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(e){this.$menu.find("."+i.listview).children().removeClass(i.selected),e.addClass(i.selected),this.trigger("setSelected",e)},openPanel:function(t){var s=t.parent();if(s.hasClass(i.vertical)){var a=s.parents("."+i.subopened);if(a.length)return this.openPanel(a.first());s.addClass(i.opened)}else{if(t.hasClass(i.current))return;var o=this.$pnls.children("."+i.panel),r=o.filter("."+i.current);o.removeClass(i.highest).removeClass(i.current).not(t).not(r).not("."+i.vertical).addClass(i.hidden),e[n].support.csstransitions||r.addClass(i.hidden),t.hasClass(i.opened)?t.nextAll("."+i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(t.addClass(i.highest),r.addClass(i.subopened)),t.removeClass(i.hidden).addClass(i.current),setTimeout(function(){t.removeClass(i.subopened).addClass(i.opened)},this.conf.openingInterval)}this.trigger("openPanel",t)},closePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&(t.removeClass(i.opened),this.trigger("closePanel",e))},closeAllPanels:function(){this.$menu.find("."+i.listview).children().removeClass(i.selected).filter("."+i.vertical).removeClass(i.opened);var e=this.$pnls.children("."+i.panel),t=e.first();this.$pnls.children("."+i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden),this.openPanel(t)},togglePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&this[t.hasClass(i.opened)?"closePanel":"openPanel"](e)},getInstance:function(){return this},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var s=0,i=this.cbck[n].length;i>s;s++)this.cbck[n][s].apply(e,t)},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$pnls=e('<div class="'+i.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.parent().addClass(i.wrapper);var t=[i.menu];this.opts.slidingSubmenus||t.push(i.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&t.push(this.opts.extensions),this.$menu.addClass(t.join(" "))},_initPanels:function(t){var n=this,s=this.__findAddBack(t,"ul, ol");this.__refactorClass(s,this.conf.classNames.inset,"inset").addClass(i.nolistview+" "+i.nopanel),s.not("."+i.nolistview).addClass(i.listview);var o=this.__findAddBack(t,"."+i.listview).children();this.__refactorClass(o,this.conf.classNames.selected,"selected"),this.__refactorClass(o,this.conf.classNames.divider,"divider"),this.__refactorClass(o,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(t,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var r=e(),d=t.add(t.find("."+i.panel)).add(this.__findAddBack(t,"."+i.listview).children().children(this.conf.panelNodetype)).not("."+i.nopanel);this.__refactorClass(d,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||d.addClass(i.vertical),d.each(function(){var t=e(this),s=t;t.is("ul, ol")?(t.wrap('<div class="'+i.panel+'" />'),s=t.parent()):s.addClass(i.panel);var a=t.attr("id");t.removeAttr("id"),s.attr("id",a||n.__getUniqueId()),t.hasClass(i.vertical)&&(t.removeClass(n.conf.classNames.vertical),s.add(s.parent()).addClass(i.vertical)),r=r.add(s)});var l=e("."+i.panel,this.$menu);r.each(function(){var t=e(this),s=t.parent(),o=s.children("a, span").first();if(s.is("."+i.panels)||(s.data(a.sub,t),t.data(a.parent,s)),!s.children("."+i.next).length&&s.parent().is("."+i.listview)){var r=t.attr("id"),d=e('<a class="'+i.next+'" href="#'+r+'" data-target="#'+r+'" />').insertBefore(o);o.is("span")&&d.addClass(i.fullsubopen)}if(!t.children("."+i.navbar).length&&!s.hasClass(i.vertical)){if(s.parent().is("."+i.listview))var s=s.closest("."+i.panel);else var o=s.closest("."+i.panel).find('a[href="#'+t.attr("id")+'"]').first(),s=o.closest("."+i.panel);var l=e('<div class="'+i.navbar+'" />');if(s.length){var r=s.attr("id");switch(n.opts.navbar.titleLink){case"anchor":_url=o.attr("href");break;case"panel":case"parent":_url="#"+r;break;case"none":default:_url=!1}l.append('<a class="'+i.btn+" "+i.prev+'" href="#'+r+'" data-target="#'+r+'" />').append(e('<a class="'+i.title+'"'+(_url?' href="'+_url+'"':"")+" />").text(o.text())).prependTo(t),n.opts.navbar.add&&t.addClass(i.hasnavbar)}else n.opts.navbar.title&&(l.append('<a class="'+i.title+'">'+n.opts.navbar.title+"</a>").prependTo(t),n.opts.navbar.add&&t.addClass(i.hasnavbar))}});var c=this.__findAddBack(t,"."+i.listview).children("."+i.selected).removeClass(i.selected).last().addClass(i.selected);c.add(c.parentsUntil("."+i.menu,"li")).filter("."+i.vertical).addClass(i.opened).end().not("."+i.vertical).each(function(){e(this).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened)}),c.children("."+i.panel).not("."+i.vertical).addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened);var h=l.filter("."+i.opened);return h.length||(h=r.first()),h.addClass(i.opened).last().addClass(i.current),r.not("."+i.vertical).not(h.last()).addClass(i.hidden).end().appendTo(this.$pnls),r},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(s){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var d in e[n].addons)if(o=e[n].addons[d].clickAnchor.call(t,a,r))break;if(!o&&r){var l=a.attr("href");if(l.length>1&&"#"==l.slice(0,1))try{var c=e(l,t.$menu);c.is("."+i.panel)&&(o=!0,t[a.parent().hasClass(i.vertical)?"togglePanel":"openPanel"](c))}catch(h){}}if(o&&s.preventDefault(),!o&&r&&a.is("."+i.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(s.target).parent());var p=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==l.slice(0,1));p&&s.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,p)&&t.close()}})},_initAddons:function(){for(var t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(var t in e[n].addons)e[n].addons[t].setup.call(this)},__api:function(){var t=this,n={};return e.each(this._api,function(){var e=this;n[e]=function(){var s=t[e].apply(t,arguments);return"undefined"==typeof s?n:s}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(i[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+i.divider).not("."+i.hidden)},__transitionend:function(e,t,n){var s=!1,i=function(){s||t.call(e[0]),s=!0};e.one(o.transitionend,i),e.one(o.webkitTransitionEnd,i),setTimeout(i,1.1*n)},__getUniqueId:function(){return i.mm(e[n].uniqueId++)}},e.fn[n]=function(s,i){return t(),s=e.extend(!0,{},e[n].defaults,s),i=e.extend(!0,{},e[n].configuration,i),this.each(function(){var t=e(this);if(!t.data(n)){var a=new e[n](t,s,i);t.data(n,a.__api())}})},e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints,csstransitions:function(){if("undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransitions)return Modernizr.csstransitions;var e=document.body||document.documentElement,t=e.style,n="transition";if("string"==typeof t[n])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];n=n.charAt(0).toUpperCase()+n.substr(1);for(var i=0;i<s.length;i++)if("string"==typeof t[s[i]+n])return!0;return!1}()};var i,a,o,r}}(e),!function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var i=this.opts[n],a=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),("top"==i.position||"bottom"==i.position)&&(i.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[s.offcanvas];"left"!=i.position&&r.push(s.mm(i.position)),"back"!=i.zposition&&r.push(s.mm(i.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper),this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector)}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("offcanvas slideout blocking modal background opening blocker page"),i.add("style"),a.add("resize")},clickAnchor:function(e){if(!this.opts[n])return!1;var t=this.$menu.attr("id");if(t&&t.length&&(this.conf.clone&&(t=s.umm(t)),e.is('[href="#'+t+'"]')))return this.open(),!0;if(o.$page){var t=o.$page.first().attr("id");return t&&t.length&&e.is('[href="#'+t+'"]')?(this.close(),!0):!1}}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[t].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var d=[s.opened];r.blockUI&&d.push(s.blocking),"modal"==r.blockUI&&d.push(s.modal),r.moveBackground&&d.push(s.background),"left"!=r.position&&d.push(s.mm(this.opts[n].position)),"back"!=r.zposition&&d.push(s.mm(this.opts[n].zposition)),this.opts.extensions&&d.push(this.opts.extensions),o.$html.addClass(d.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.current+" "+s.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),o.$html.addClass(s.opening),this.trigger("opening")},e[t].prototype.close=function(){if(this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(s.current).removeClass(s.opened),o.$html.removeClass(s.opened).removeClass(s.blocking).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(t.opts[n].position)).removeClass(s.mm(t.opts[n].zposition)),t.opts.extensions&&o.$html.removeClass(t.opts.extensions),o.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),t.vars.opened=!1,t.trigger("closed")},this.conf.transitionDuration),o.$html.removeClass(s.opening),this.trigger("close"),this.trigger("closing")}},e[t].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){var i=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),t.addClass(s.page+" "+s.slideout),o.$page=t,this.trigger("setPage",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){return o.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(s.opened))){var i=o.$wndw.height();(n||i!=e)&&(e=i,o.$page.css("minHeight",i))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+s.blocker+'" class="'+s.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(s.modal)||(t.closeAllOthers(),t.close())}))};var s,i,a,o}(e),!function(e){var t="mmenu",n="autoHeight";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){switch(this.opts.offCanvas.position){case"left":case"right":return}var i=this,r=this.opts[n];if(this.conf[n],o=e[t].glbl,"boolean"==typeof r&&r&&(r={height:"auto"}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),"auto"==r.height){this.$menu.addClass(s.autoheight);var d=function(e){var t=parseInt(this.$pnls.css("top"),10)||0;_bot=parseInt(this.$pnls.css("bottom"),10)||0,this.$menu.addClass(s.measureheight),e=e||this.$pnls.children("."+s.current),e.is("."+s.vertical)&&(e=e.parents("."+s.panel).not("."+s.vertical).first()),this.$menu.height(e.outerHeight()+t+_bot).removeClass(s.measureheight)};this.bind("update",d),this.bind("openPanel",d),this.bind("closePanel",d),this.bind("open",d),o.$wndw.off(a.resize+"-autoheight").on(a.resize+"-autoheight",function(){d.call(i)})}}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(){}},e[t].defaults[n]={height:"default"};var s,i,a,o}(e),!function(e){var t="mmenu",n="backButton";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var i=this,a=this.opts[n];if(this.conf[n],o=e[t].glbl,"boolean"==typeof a&&(a={close:a}),"object"!=typeof a&&(a={}),a=e.extend(!0,{},e[t].defaults[n],a),a.close){var r="#"+i.$menu.attr("id");this.bind("opened",function(){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){o.$html.hasClass(s.opened)?(e.stopPropagation(),i.close()):location.hash==r&&(e.stopPropagation(),i.open())})}}},add:function(){return window.history&&window.history.pushState?(s=e[t]._c,i=e[t]._d,void(a=e[t]._e)):void(e[t].addons[n].setup=function(){})},clickAnchor:function(){}},e[t].defaults[n]={close:!1};var s,i,a,o}(e),!function(e){var t="mmenu",n="counters";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n],o=e[t].glbl,"boolean"==typeof r&&(r={add:r,update:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("init",function(t){this.__refactorClass(e("em",t),this.conf.classNames[n].counter,"counter")}),r.add&&this.bind("init",function(t){t.each(function(){var t=e(this).data(i.parent);t&&(t.children("em."+s.counter).length||t.prepend(e('<em class="'+s.counter+'" />')))})}),r.update&&this.bind("update",function(){this.$pnls.find("."+s.panel).each(function(){var t=e(this),n=t.data(i.parent);if(n){var o=n.children("em."+s.counter);o.length&&(t=t.children("."+s.listview),t.length&&o.html(a.__filterListItems(t.children()).length))}})})},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("counter search noresultsmsg")},clickAnchor:function(){}},e[t].defaults[n]={add:!1,update:!1},e[t].configuration.classNames[n]={counter:"Counter"};var s,i,a,o}(e),!function(e){var t="mmenu",n="dividers";e[t].addons[n]={setup:function(){var i=this,r=this.opts[n];if(this.conf[n],o=e[t].glbl,"boolean"==typeof r&&(r={add:r,fixed:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("init",function(){this.__refactorClass(e("li",this.$menu),this.conf.classNames[n].collapsed,"collapsed")}),r.add&&this.bind("init",function(t){switch(r.addTo){case"panels":var n=t;break;default:var n=e(r.addTo,this.$pnls).filter("."+s.panel)}e("."+s.divider,n).remove(),n.find("."+s.listview).not("."+s.vertical).each(function(){var t="";i.__filterListItems(e(this).children()).each(function(){var n=e.trim(e(this).children("a, span").text()).slice(0,1).toLowerCase();n!=t&&n.length&&(t=n,e('<li class="'+s.divider+'">'+n+"</li>").insertBefore(this))})})}),r.collapse&&this.bind("init",function(t){e("."+s.divider,t).each(function(){var t=e(this),n=t.nextUntil("."+s.divider,"."+s.collapsed);n.length&&(t.children("."+s.subopen).length||(t.wrapInner("<span />"),t.prepend('<a href="#" class="'+s.subopen+" "+s.fullsubopen+'" />')))})}),r.fixed){var d=function(t){t=t||this.$pnls.children("."+s.current);var n=t.find("."+s.divider).not("."+s.hidden);if(n.length){this.$menu.addClass(s.hasdividers);var i=t.scrollTop()||0,a="";t.is(":visible")&&t.find("."+s.divider).not("."+s.hidden).each(function(){e(this).position().top+i<i+1&&(a=e(this).text())}),this.$fixeddivider.text(a)}else this.$menu.removeClass(s.hasdividers)};this.$fixeddivider=e('<ul class="'+s.listview+" "+s.fixeddivider+'"><li class="'+s.divider+'"></li></ul>').prependTo(this.$pnls).children(),this.bind("openPanel",d),this.bind("init",function(t){t.off(a.scroll+"-dividers "+a.touchmove+"-dividers").on(a.scroll+"-dividers "+a.touchmove+"-dividers",function(){d.call(i,e(this))})})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("collapsed uncollapsed fixeddivider hasdividers"),a.add("scroll")},clickAnchor:function(e,t){if(this.opts[n].collapse&&t){var i=e.parent();if(i.is("."+s.divider)){var a=i.nextUntil("."+s.divider,"."+s.collapsed);return i.toggleClass(s.opened),a[i.hasClass(s.opened)?"addClass":"removeClass"](s.uncollapsed),!0}}return!1}},e[t].defaults[n]={add:!1,addTo:"panels",fixed:!1,collapse:!1},e[t].configuration.classNames[n]={collapsed:"Collapsed"};var s,i,a,o}(e),!function(e){function t(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}var n="mmenu",s="dragOpen";e[n].addons[s]={setup:function(){if(this.opts.offCanvas){var a=this,o=this.opts[s],d=this.conf[s];if(r=e[n].glbl,"boolean"==typeof o&&(o={open:o}),"object"!=typeof o&&(o={}),o=this.opts[s]=e.extend(!0,{},e[n].defaults[s],o),o.open){var l,c,h,p,f,u={},v=0,m=!1,g=!1,b=0,_=0;switch(this.opts.offCanvas.position){case"left":case"right":u.events="panleft panright",u.typeLower="x",u.typeUpper="X",g="width";break;case"top":case"bottom":u.events="panup pandown",u.typeLower="y",u.typeUpper="Y",g="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":u.negative=!0,p=function(e){e>=r.$wndw[g]()-o.maxStartPos&&(v=1)};break;default:u.negative=!1,p=function(e){e<=o.maxStartPos&&(v=1)}}switch(this.opts.offCanvas.position){case"left":u.open_dir="right",u.close_dir="left";break;case"right":u.open_dir="left",u.close_dir="right";break;case"top":u.open_dir="down",u.close_dir="up";break;case"bottom":u.open_dir="up",u.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":f=function(){return this.$menu};break;default:f=function(){return e("."+i.slideout)}}var C=this.__valueOrFn(o.pageNode,this.$menu,r.$page);"string"==typeof C&&(C=e(C));var $=new Hammer(C[0],o.vendors.hammer);$.on("panstart",function(e){p(e.center[u.typeLower]),r.$slideOutNodes=f(),m=u.open_dir}).on(u.events+" panend",function(e){v>0&&e.preventDefault()}).on(u.events,function(e){if(l=e["delta"+u.typeUpper],u.negative&&(l=-l),l!=b&&(m=l>=b?u.open_dir:u.close_dir),b=l,b>o.threshold&&1==v){if(r.$html.hasClass(i.opened))return;v=2,a._openSetup(),a.trigger("opening"),r.$html.addClass(i.dragging),_=t(r.$wndw[g]()*d[g].perc,d[g].min,d[g].max)}2==v&&(c=t(b,10,_)-("front"==a.opts.offCanvas.zposition?_:0),u.negative&&(c=-c),h="translate"+u.typeUpper+"("+c+"px )",r.$slideOutNodes.css({"-webkit-transform":"-webkit-"+h,transform:h}))}).on("panend",function(){2==v&&(r.$html.removeClass(i.dragging),r.$slideOutNodes.css("transform",""),a[m==u.open_dir?"_openFinish":"close"]()),v=0})}}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?void(e[n].addons[s].setup=function(){}):(i=e[n]._c,a=e[n]._d,o=e[n]._e,void i.add("dragging"))},clickAnchor:function(){}},e[n].defaults[s]={open:!1,maxStartPos:100,threshold:50,vendors:{hammer:{}}},e[n].configuration[s]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}};var i,a,o,r}(e),!function(e){var t="mmenu",n="fixedElements";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var s=this.opts[n];this.conf[n],o=e[t].glbl,s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s);var i=function(e){var t=this.conf.classNames[n].fixed;this.__refactorClass(e.find("."+t),t,"slideout").appendTo(o.$body)};i.call(this,o.$page),this.bind("setPage",i)}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("fixed")},clickAnchor:function(){}},e[t].configuration.classNames[n]={fixed:"Fixed"};var s,i,a,o}(e),!function(e){var t="mmenu",n="iconPanels";e[t].addons[n]={setup:function(){var i=this,a=this.opts[n];if(this.conf[n],o=e[t].glbl,"boolean"==typeof a&&(a={add:a}),"number"==typeof a&&(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),a.visible++,a.add){this.$menu.addClass(s.iconpanel);for(var r=[],d=0;d<=a.visible;d++)r.push(s.iconpanel+"-"+d);r=r.join(" ");var l=function(t){var n=i.$pnls.children("."+s.panel).removeClass(r),o=n.filter("."+s.subopened);o.removeClass(s.hidden).add(t).slice(-a.visible).each(function(t){e(this).addClass(s.iconpanel+"-"+t)})};this.bind("openPanel",l),this.bind("init",function(t){l.call(i,i.$pnls.children("."+s.current)),a.hideNavbars&&t.removeClass(s.hasnavbar),t.each(function(){e(this).children("."+s.subblocker).length||e(this).prepend('<a href="#'+e(this).closest("."+s.panel).attr("id")+'" class="'+s.subblocker+'" />')})})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("iconpanel subblocker")},clickAnchor:function(){}},e[t].defaults[n]={add:!1,visible:3,hideNavbars:!1};var s,i,a,o}(e),!function(e){var t="mmenu",n="navbars";e[t].addons[n]={setup:function(){var i=this,a=this.opts[n],r=this.conf[n];if(o=e[t].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var d={};e.each(a,function(o){var l=a[o];"boolean"==typeof l&&l&&(l={}),"object"!=typeof l&&(l={}),"undefined"==typeof l.content&&(l.content=["prev","title"]),l.content instanceof Array||(l.content=[l.content]),l=e.extend(!0,{},i.opts.navbar,l);var c=l.position,h=l.height;"number"!=typeof h&&(h=1),h=Math.min(4,Math.max(1,h)),"bottom"!=c&&(c="top"),d[c]||(d[c]=0),d[c]++;var p=e("<div />").addClass(s.navbar+" "+s.navbar+"-"+c+" "+s.navbar+"-"+c+"-"+d[c]+" "+s.navbar+"-size-"+h);d[c]+=h-1;for(var f=0,u=l.content.length;u>f;f++){var v=e[t].addons[n][l.content[f]]||!1;v?v.call(i,p,l,r):(v=l.content[f],v instanceof e||(v=e(l.content[f])),v.each(function(){p.append(e(this))}))}var m=Math.ceil(p.children().not("."+s.btn).length/h);m>1&&p.addClass(s.navbar+"-content-"+m),p.children("."+s.btn).length&&p.addClass(s.hasbtns),p.prependTo(i.$menu)});for(var l in d)i.$menu.addClass(s.hasnavbar+"-"+l+"-"+d[l])}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("close hasbtns")},clickAnchor:function(){}},e[t].configuration[n]={breadcrumbSeparator:"/"},e[t].configuration.classNames[n]={panelTitle:"Title",panelNext:"Next",panelPrev:"Prev"};var s,i,a,o}(e),function(e){var t="mmenu",n="navbars",s="breadcrumbs";e[t].addons[n][s]=function(n,s,i){var a=e[t]._c,o=e[t]._d;a.add("breadcrumbs separator"),n.append('<span class="'+a.breadcrumbs+'"></span>'),this.bind("init",function(t){t.removeClass(a.hasnavbar).each(function(){for(var t=[],n=e(this),s=e('<span class="'+a.breadcrumbs+'"></span>'),r=e(this).children().first(),d=!0;r&&r.length;){r.is("."+a.panel)||(r=r.closest("."+a.panel));var l=r.children("."+a.navbar).children("."+a.title).text();t.unshift(d?"<span>"+l+"</span>":'<a href="#'+r.attr("id")+'">'+l+"</a>"),d=!1,r=r.data(o.parent)}s.append(t.join('<span class="'+a.separator+'">'+i.breadcrumbSeparator+"</span>")).appendTo(n.children("."+a.navbar))})});var r=function(){var e=this.$pnls.children("."+a.current),t=n.find("."+a.breadcrumbs),s=e.children("."+a.navbar).children("."+a.breadcrumbs);t.html(s.html())};this.bind("openPanel",r),this.bind("init",r)}}(e),function(e){var t="mmenu",n="navbars",s="close";e[t].addons[n][s]=function(n){var s=e[t]._c,i=e[t].glbl;n.append('<a class="'+s.close+" "+s.btn+'" href="#"></a>');var a=function(e){n.find("."+s.close).attr("href","#"+e.attr("id"))};a.call(this,i.$page),this.bind("setPage",a)}}(e),function(e){var t="mmenu",n="navbars",s="next";e[t].addons[n][s]=function(s){var i=e[t]._c;s.append('<a class="'+i.next+" "+i.btn+'" href="#"></a>');var a=function(e){e=e||this.$pnls.children("."+i.current);var t=s.find("."+i.next),a=e.find("."+this.conf.classNames[n].panelNext),o=a.attr("href"),r=a.html();t[o?"attr":"removeAttr"]("href",o),t[o||r?"removeClass":"addClass"](i.hidden),t.html(r)};this.bind("openPanel",a),this.bind("init",function(){a.call(this)})}}(e),function(e){var t="mmenu",n="navbars",s="prev";e[t].addons[n][s]=function(s){var i=e[t]._c;s.append('<a class="'+i.prev+" "+i.btn+'" href="#"></a>'),this.bind("init",function(e){e.removeClass(i.hasnavbar)});var a=function(){var e=this.$pnls.children("."+i.current),t=s.find("."+i.prev),a=e.find("."+this.conf.classNames[n].panelPrev);a.length||(a=e.children("."+i.navbar).children("."+i.prev));var o=a.attr("href"),r=a.html();t[o?"attr":"removeAttr"]("href",o),t[o||r?"removeClass":"addClass"](i.hidden),t.html(r)};this.bind("openPanel",a),this.bind("init",a)}}(e),function(e){var t="mmenu",n="navbars",s="searchfield";e[t].addons[n][s]=function(n){var s=e[t]._c,i=e('<div class="'+s.search+'" />').appendTo(n);"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=i}}(e),function(e){var t="mmenu",n="navbars",s="title";e[t].addons[n][s]=function(s,i){var a=e[t]._c;s.append('<a class="'+a.title+'"></a>');var o=function(e){e=e||this.$pnls.children("."+a.current);var t=s.find("."+a.title),o=e.find("."+this.conf.classNames[n].panelTitle);o.length||(o=e.children("."+a.navbar).children("."+a.title));var r=o.attr("href"),d=o.html()||i.title;t[r?"attr":"removeAttr"]("href",r),t[r||d?"removeClass":"addClass"](a.hidden),t.html(d)};this.bind("openPanel",o),this.bind("init",function(){o.call(this)})}}(e),!function(e){function t(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var n="mmenu",s="searchfield";e[n].addons[s]={setup:function(){var d=this,l=this.opts[s],c=this.conf[s];r=e[n].glbl,"boolean"==typeof l&&(l={add:l}),"object"!=typeof l&&(l={}),l=this.opts[s]=e.extend(!0,{},e[n].defaults[s],l),this.bind("close",function(){this.$menu.find("."+i.search).find("input").blur()}),this.bind("init",function(n){if(l.add){switch(l.addTo){case"panels":var s=n;break;default:var s=e(l.addTo,this.$menu)}s.each(function(){var t=e(this);if(!t.is("."+i.panel)||!t.is("."+i.vertical)){if(!t.children("."+i.search).length){var n=c.form?"form":"div",s=e("<"+n+' class="'+i.search+'" />');if(c.form&&"object"==typeof c.form)for(var a in c.form)s.attr(a,c.form[a]);s.append('<input placeholder="'+l.placeholder+'" type="text" autocomplete="off" />'),t.hasClass(i.search)?t.replaceWith(s):t.prepend(s).addClass(i.hassearch)}if(l.noResults){var o=t.closest("."+i.panel).length;if(o||(t=d.$pnls.children("."+i.panel).first()),!t.children("."+i.noresultsmsg).length){var r=t.children("."+i.listview).first();e('<div class="'+i.noresultsmsg+'" />').append(l.noResults)[r.length?"insertAfter":"prependTo"](r.length?r:t)}}}}),l.search&&e("."+i.search,this.$menu).each(function(){var n=e(this),s=n.closest("."+i.panel).length;if(s)var r=n.closest("."+i.panel),c=r;else var r=e("."+i.panel,d.$menu),c=d.$menu;var h=n.children("input"),p=d.__findAddBack(r,"."+i.listview).children("li"),f=p.filter("."+i.divider),u=d.__filterListItems(p),v="> a",m=v+", > span",g=function(){var t=h.val().toLowerCase();r.scrollTop(0),u.add(f).addClass(i.hidden).find("."+i.fullsubopensearch).removeClass(i.fullsubopen).removeClass(i.fullsubopensearch),u.each(function(){var n=e(this),s=v;(l.showTextItems||l.showSubPanels&&n.find("."+i.next))&&(s=m),e(s,n).text().toLowerCase().indexOf(t)>-1&&n.add(n.prevAll("."+i.divider).first()).removeClass(i.hidden)}),l.showSubPanels&&r.each(function(){var t=e(this);d.__filterListItems(t.find("."+i.listview).children()).each(function(){var t=e(this),n=t.data(a.sub);t.removeClass(i.nosubresults),n&&n.find("."+i.listview).children().removeClass(i.hidden)})}),e(r.get().reverse()).each(function(t){var n=e(this),o=n.data(a.parent);o&&(d.__filterListItems(n.find("."+i.listview).children()).length?(o.hasClass(i.hidden)&&o.children("."+i.next).not("."+i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch),o.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("."+i.divider).first().removeClass(i.hidden)):s||(n.hasClass(i.opened)&&setTimeout(function(){d.openPanel(o.closest("."+i.panel))},1.5*(t+1)*d.conf.openingInterval),o.addClass(i.nosubresults)))}),c[u.not("."+i.hidden).length?"removeClass":"addClass"](i.noresults),this.update()};h.off(o.keyup+"-searchfield "+o.change+"-searchfield").on(o.keyup+"-searchfield",function(e){t(e.keyCode)||g.call(d)}).on(o.change+"-searchfield",function(){g.call(d)})})}})},add:function(){i=e[n]._c,a=e[n]._d,o=e[n]._e,i.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"),o.add("change keyup")},clickAnchor:function(){}},e[n].defaults[s]={add:!1,addTo:"panels",search:!0,placeholder:"Search",noResults:"No results found.",showTextItems:!1,showSubPanels:!0},e[n].configuration[s]={form:!1};var i,a,o,r}(e),!function(e){var t="mmenu",n="sectionIndexer";e[t].addons[n]={setup:function(){var i=this,r=this.opts[n];this.conf[n],o=e[t].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("init",function(t){if(r.add){switch(r.addTo){case"panels":var n=t;break;default:var n=e(r.addTo,this.$menu).filter("."+s.panel)}n.find("."+s.divider).closest("."+s.panel).addClass(s.hasindexer)}if(!this.$indexer&&this.$pnls.children("."+s.hasindexer).length){this.$indexer=e('<div class="'+s.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),
this.$indexer.children().on(a.mouseover+"-sectionindexer "+s.touchstart+"-sectionindexer",function(){var t=e(this).attr("href").slice(1),n=i.$pnls.children("."+s.current),a=n.find("."+s.listview),o=!1,r=n.scrollTop(),d=a.position().top+parseInt(a.css("margin-top"),10)+parseInt(a.css("padding-top"),10)+r;n.scrollTop(0),a.children("."+s.divider).not("."+s.hidden).each(function(){o===!1&&t==e(this).text().slice(0,1).toLowerCase()&&(o=e(this).position().top+d)}),n.scrollTop(o!==!1?o:r)});var o=function(e){i.$menu[(e.hasClass(s.hasindexer)?"add":"remove")+"Class"](s.hasindexer)};this.bind("openPanel",o),o.call(this,this.$pnls.children("."+s.current))}})},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("indexer hasindexer"),a.add("mouseover touchstart")},clickAnchor:function(e){return e.parent().is("."+s.indexer)?!0:void 0}},e[t].defaults[n]={add:!1,addTo:"panels"};var s,i,a,o}(e),!function(e){var t="mmenu",n="toggles";e[t].addons[n]={setup:function(){var i=this;this.opts[n],this.conf[n],o=e[t].glbl,this.bind("init",function(t){this.__refactorClass(e("input",t),this.conf.classNames[n].toggle,"toggle"),this.__refactorClass(e("input",t),this.conf.classNames[n].check,"check"),e("input."+s.toggle+", input."+s.check,t).each(function(){var t=e(this),n=t.closest("li"),a=t.hasClass(s.toggle)?"toggle":"check",o=t.attr("id")||i.__getUniqueId();n.children('label[for="'+o+'"]').length||(t.attr("id",o),n.prepend(t),e('<label for="'+o+'" class="'+s[a]+'"></label>').insertBefore(n.children("a, span").last()))})})},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("toggle check")},clickAnchor:function(){}},e[t].configuration.classNames[n]={toggle:"Toggle",check:"Check"};var s,i,a,o}(e)});