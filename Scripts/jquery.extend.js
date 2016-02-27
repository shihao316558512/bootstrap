/*******
made by shihao
2015.04.03
*******/
//$.tools = {
//    getQueryString: function (name) {
//        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//        var r = window.location.search.substr(1).match(reg);
//        if (r != null) return unescape(r[2]); return null;
//    },
//    validateInt: function (value) {
//        var reg = /^\d+$/;
//        if (value.constructor === String) {
//            var re = value.match(reg);
//            if (re != null) {
//                return true;
//            } else {
//                return false;
//            }
//        }
//        return false;
//    },
//    validateFloat: function (value) {
//        var reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/;
//        if (value.constructor === String) {
//            var re = value.match(reg);
//            if (re != null) {
//                return true;
//            } else {
//                return false;
//            }
//        }
//        return false;
//    }
//}
$.tools = (function () {
    /*
    * getQueryString
    */
    var getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    };
    /*
    * validateInt
    */
    var validateInt = function (value) {
        var reg = /^\d+$/;
        if (value.constructor === String) {
            var re = value.match(reg);
            if (re != null) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    };
    /*
    * validateFloat
    */
    var validateFloat = function (value) {
        var reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/;
        if (value.constructor === String) {
            var re = value.match(reg);
            if (re != null) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    };


    return {
        getQueryString: getQueryString
    , validateInt: validateInt
    , validateFloat: validateFloat
    };

})();


