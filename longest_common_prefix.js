var longestCommonPrefix = function(strs) {
    var arr = strs.sort(function(a, b) {return a.length - b.length})
    var LCP = "";

    for(var i = 0; i < arr[0].length; i++) {
        var iChar = arr[0].charAt(i);

        // if (i > 0) iChar = LCP

        var sharesLCP = true;
        for(var j = 1; j < arr.length; j++) {
            if (!arr[j].includes(iChar)) {
                sharesLCP = false
                break;
            }
        }
        if(sharesLCP) {
            LCP = LCP.concat(iChar)
        } else {
            LCP = ""
        }
    }
    return LCP
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))