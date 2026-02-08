/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if(billAmount <= 0 || serviceRating < 1 || serviceRating > 5 || !Number.isInteger(serviceRating)){
    return null;
  }
  let tipPercentage;
  tipPercentage = serviceRating === 1 ? 5 : serviceRating === 2 ? 10 : serviceRating === 3 ? 15 : serviceRating === 4 ? 20 : 25;
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  return {
    tipPercentage,
    tipAmount: Math.round(tipAmount * 100) / 100,
    totalAmount: Math.round(totalAmount * 100) / 100
  };
}
