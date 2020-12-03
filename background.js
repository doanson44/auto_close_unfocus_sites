const blockedSites = [
    "chotot.com",
    "vnexpress.net",
    "shopee.vn",
    "lazada.vn",
    "kenh14.vn",
    "phimmoi",
    "genk.vn",
    "tinhte.vn"
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