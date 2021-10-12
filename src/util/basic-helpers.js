export function trimNumber(num, decimalLength = 2) {
    return (Math.round(num * 100) / 100).toFixed(decimalLength);
}