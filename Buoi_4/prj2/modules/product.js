export const TAX = 0.1;

export function calculateTax(price) {
    return price * TAX;
}

export default function calculateTotal(price) {
    return price + calculateTax(price);
}