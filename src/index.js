module.exports = function reverse(n) {
    let res = "";
    n = String(String(n).split(", ")).split("");
    for (let i = n.length - 1; i >= 0; i--) {
        res += n[i];
    }
    return +res.split(" ").join("");
};

// function reverse(n) {}

// console.log(reverse(12345));
