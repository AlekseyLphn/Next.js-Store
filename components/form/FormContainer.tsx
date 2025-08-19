'use client';

import {ReactNode, useActionState, useEffect} from 'react';
import {toast} from 'sonner';
import {type ActionFunction} from '@/utils/types';

const initialState = {
  message: '',
};

function FormContainer({action, children}: {
  action: ActionFunction,
  children: ReactNode
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);


  return (
    <form action={formAction}>
      {children}
    </form>
  );
}

export default FormContainer;
