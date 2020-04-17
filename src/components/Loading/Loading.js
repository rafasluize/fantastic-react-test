import React, { useState, useEffect } from 'react';
import './loading.scss';
import { loadingService } from '../../rxjs/services';

export default function Loading() {

  const [ show, setShow ] = useState(false);

  useEffect(() => {
    const subscription = loadingService.getLoading().subscribe((value) => {
      setShow(value);
    });

    return () => {
      subscription.unsubscribe();
    }
  });
  
  return(
    <div id="loading" className={`${ show ? '' : 'd-none'}`}>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}