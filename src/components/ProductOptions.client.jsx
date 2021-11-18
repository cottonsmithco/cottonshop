import {useProduct} from '@shopify/hydrogen/client';

export default function ProductOptions() {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  return (
    <>
      {options.map(({name, values}) => {
        return (
          <fieldset key={name} className="mt-8">
            
            <div className="flex items-center flex-wrap gap-4">
              {values.map((value) => {
                const checked = selectedOptions[name] === value;
                const id = `option-${name}-${value}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      className="sr-only"
                      type="radio"
                      id={id}
                      name={`option[${name}]`}
                      value={value}
                      checked={checked}
                      onChange={() => setSelectedOption(name, value)}
                    />
                    
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </>
  );
}
