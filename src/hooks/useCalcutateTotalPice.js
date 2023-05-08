/* global BigInt */
import {useEffect} from 'react';

function useCalcutateTotalPice(items, callback) {
  useEffect(() => {
    const prices = items.reduce((acc, item) => {
      if (item.marked.state && item.price !== '') {
        acc.push(item.price);
      }
      return acc;
    }, []);

    function calculateTotalCost(prices) {
      const integerPart = [];
      const fractionalPart = [];

      prices.forEach((item) => {
        const [integer = '', fraction = ''] = item.split('.');
        integerPart.push(integer);

        // We round the fraction in advance so that at the moment when the user marks the product as assembled
        // and decides to edit the price, the already rounded fraction is included in the calculation
        if (fraction.length >= 2) {
          fractionalPart.push(fraction.slice(0, 2));
        } else if (fraction.length === 1) {
          fractionalPart.push(fraction + '0');
        }
      });

      const sumInteger = integerPart.reduce((acc, val) => acc + BigInt(val), 0n);
      const sumFractions = fractionalPart.reduce((acc, val) => acc + Number(val), 0);

      // Converted the sum of fractions to separate the integer part from the fractional
      const convertSumFractions = sumFractions / 100;

      // From the converted sum of fractions, separated the integer part from the fractional
      const [integer = '', fraction = ''] = String(convertSumFractions).split('.');

      // I add the sum of integers obtained from the original number and the integer obtained
      // as a result of adding the fractional parts of the original number,
      // convert the addition result into a string and add the fractional part
      // (depending on the sum of the fractional part, I round it up to hundredths by adding "0" to it).
      // If the fractional part is missing, I append ".00" to the end
      // so that the result displays the entire amount along with hundredths.
      if (fraction.length === 2) {
        return String(sumInteger + BigInt(integer)) + '.' + fraction;
      } else if (fraction.length === 1) {
        return String(sumInteger + BigInt(integer)) + '.' + fraction + '0';
      } else {
        return String(sumInteger + BigInt(integer)) + '.00';
      }
    }

    if (prices.length === 0) {
      callback('0.00');
    } else {
      callback(calculateTotalCost(prices));
    }
  }, [items, callback]);
}

export default useCalcutateTotalPice;
