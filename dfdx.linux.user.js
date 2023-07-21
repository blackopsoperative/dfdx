// ==UserScript==
// @name         Mr. Deep Fakes Video Downloader Script (Linux)
// @namespace    https://github.com/blackopsoperative
// @version      0.1
// @description  Written on the tin.
// @author       blackopsoperative
// @match        https://mrdeepfakes.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mrdeepfakes.com
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @grant        GM_openInTab
// ==/UserScript==

var $ = window.jQuery;

(function() {
    'use strict';

    //var elements = document.getElementsByClassName('fp-player');

    //for (var i = 0, len = elements.length; i < len; i++) {
    //   var child = elements[i].querySelector('.fp-engine');

    //do stuff with child
    //}

    let videoFrame = setInterval(() => {
      if ($("video.fp-engine").length) {
        let src = $("video.fp-engine").attr("src");
        clearInterval(videoFrame);
        console.log(src)
        let uncleanfn = "~/MrDeepFakes downloads/" + $(".headline:eq(1)").text().trim()
        console.log(uncleanfn)
        let cleanfn = uncleanfn.replace("'", "").replace(".", "")
        console.log(cleanfn)
        GM_download(src, cleanfn + ".mp4");
        window.close();
      }
    });

})();
