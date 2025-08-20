'use client';

import {type ActionFunction} from '@/utils/types';
import {useState} from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import FormContainer from '@/components/form/FormContainer';
import ImageInput from '@/components/form/ImageInput';
import {SubmitButton} from '@/components/form/Buttons';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: ActionFunction
  text: string;
  children?: React.ReactNode;
}

function ImageInputContainer(props: ImageInputContainerProps) {
  const {image, name, action, text} = props;

  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  return (
    <div className='mb-8'>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className='rounded object-cover mb-4 w-[200px] h-[200px]'
        priority
      />
      <Button
        variant='outline'
        size='sm'
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >{text}</Button>
      {isUpdateFormVisible && <div className='max-w-md mt-4'>
        <FormContainer action={action}>
          {props.children}
          <ImageInput />
          <SubmitButton size='sm' text={text} />
        </FormContainer>
      </div>}
    </div>
  );
}

export default ImageInputContainer;