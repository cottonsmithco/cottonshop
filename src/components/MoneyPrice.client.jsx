import {Money} from '@shopify/hydrogen/client';

export default function MoneyPrice({money}) {
  return (
    <Money className="text-pink-600 text-md font-black" money={money}>
      {({amount, currencyNarrowSymbol, currencyCode}) => (
        <>
          {currencyNarrowSymbol}
          {amount}
        </>
      )}
    </Money>
  );
}
