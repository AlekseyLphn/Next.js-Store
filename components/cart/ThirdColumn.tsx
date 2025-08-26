'use client';

import {useState} from 'react';
import SelectProductAmount, {
  Mode,
} from '@/components/single-product/SelectProductAmount';
import FormContainer from '@/components/form/FormContainer';
import {removeCartItemAction, updateCartItemAction} from '@/utils/actions';
import {SubmitButton} from '@/components/form/Buttons';
import {toast} from 'sonner';

function ThirdColumn(
  {
    quantity,
    id,
  }: {
    quantity: number;
    id: string;
  },
) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);
  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast('Calculating...');
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    toast(result.message);
    setIsLoading(false);
  };


  return (
    <div className='md:ml-8'>
      <SelectProductAmount
        mode={Mode.CartItem}
        amount={amount}
        setAmount={handleAmountChange}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' className='mt-4' text='remove' />
      </FormContainer>
    </div>
  );
}

export default ThirdColumn;