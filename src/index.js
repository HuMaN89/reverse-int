module.exports = function reverse(n) {
    let str = "";
    n = String(n);
    if (n[0] === "-") n = n.slice(1);
    for (let i = n.length - 1; i >= 0; i--) {
        str += n[i];
    }
    return str;
};
