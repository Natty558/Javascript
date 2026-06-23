const calculateBill = (months) => {
    let total = months * 10;

    if (months >= 12) {
        total -= 20;
    }

    return total;
};

console.log(calculateBill(6));   // 60
console.log(calculateBill(12));  // 100