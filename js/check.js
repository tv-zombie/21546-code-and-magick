function getMessage(a, b) {

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    if (Array.isArray(a) && Array.isArray(b)) {
        var sum = [];
        for (var i = 0; i < a.length; i++) {
            sum.push(a[i] + b[i]);
        }  return sum;      
    } else if (Array.isArray(a)) {
        var sum = 0;
        for (var i = 0; i < a.length; i++) {
            sum += a[i];
        }  return "Я прошел " + sum + " шагов";
    } else if (isNumeric(a)) {
        return "Я прыгнул на " + a * 100 + " сантиметров";
    } else if (!!a == true) {
        return "Я попал в " + b;
    } else if (!!a == false) return "Я никуда не попал";

};
