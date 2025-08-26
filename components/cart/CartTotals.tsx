import {Cart, Product} from '@prisma/client';
import {formatCurrency} from '@/utils/format';
import {Separator} from '@/components/ui/separator';
import {Card, CardTitle} from '@/components/ui/card';
import FormContainer from '@/components/form/FormContainer';
import {createOrderAction} from '@/utils/actions';
import {SubmitButton} from '@/components/form/Buttons';
import {CartItem} from '@/utils/types';


function CartTotals({cart}: {
  cart: Cart;
}) {
  const {cartTotal, shipping, tax, orderTotal} = cart;
  return (
    <div>
      <Card className='p-8 gap-0'>
        <CartTotalRow label='Subtotal' amount={cartTotal} />
        <CartTotalRow label='Shipping' amount={shipping} />
        <CartTotalRow label='Tax' amount={tax} />
        <CardTitle className='mt-8'>
          <CartTotalRow label='Order Total' amount={orderTotal} lasRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text='Place Order' className='w-full mt-8' />
      </FormContainer>
    </div>
  );
}

function CartTotalRow(
  {
    label,
    amount,
    lasRow,
  }: {
    label: string,
    amount: number,
    lasRow?: boolean
  }) {
  return (
    <>
      <p className='flex justify-between text-sm'>
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lasRow ? null : <Separator className='mt-2' />}
    </>
  );
}

export default CartTotals;