// ==UserScript==
// @name         Mr. Deep Fakes Video Downloader Script (Windows)
// @namespace    https://github.com/blackopsoperative
// @version      0.1
// @description  Written on the tin.
// @author       blackopsoperative
// @match        https://mrdeepfakes.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mrdeepfakes.com
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @grant        GM_download
// ==/UserScript==

var $ = window.jQuery;

(function() {
    'use strict';
    let videoFrame = setInterval(() => {
      if ($("video.fp-engine").length) {
        let src = $("video.fp-engine").attr("src");
        clearInterval(videoFrame);
        let uncleanfn = "MrDeepFakes downloads/" + $(".headline:eq(1)").text().trim()
        let cleanfn = uncleanfn.replace("'", "").replace(".", "")
        GM_download(src, cleanfn + ".mp4");
        window.close();
      }
    });

})();
