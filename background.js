const blockedSites = [
"chotot.com",
"voz.vn",
"facebook.com",
"tinhte.vn",
"news.google.com",
"instagram.com",
"9gag.com",
"vnexpress.net",
"kenh14.vn"
];

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        var isCanceled = false;
        for(const item of blockedSites) {
            if (details.url.indexOf(item) != -1) {
                isCanceled = true;
                break;
            }
        }

        return { cancel: isCanceled };
    },
    { urls: ["<all_urls>"] },
    ["blocking"]);