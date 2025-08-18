import {fetchSingleProduct} from '@/utils/actions';
import {formatCurrency} from '@/utils/format';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import Image from 'next/image';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import ProductRating from '@/components/single-product/ProductRating';
import AddToCart from '@/components/single-product/AddToCart';

async function SingleProductPage({params}: {
  params: Promise<{ id: string }>
}) {
  const {id: productId} = (await params);

  const product = await fetchSingleProduct(productId);
  const {name, image, company, description, price} = product;
  const dollarAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <div className='relative  h-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
            className='w-full rounded object-cover'
          />
        </div>
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{name}</h1>
            <FavoriteToggleButton productId={productId} />
          </div>
          <ProductRating productId={productId} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
            {dollarAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart productId={productId} />
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;