'use client';


import {usePathname} from 'next/navigation';
import {toggleFavoriteAction} from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import {CardSubmitButton} from '@/components/form/Buttons';

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null;
}

function FavoriteToggleForm(
  {productId, favoriteId}: FavoriteToggleFormProps,
) {
  const pathName = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathName,
  });


  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
}

export default FavoriteToggleForm;