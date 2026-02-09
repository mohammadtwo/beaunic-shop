
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export function Product() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');
  const mostsaled = searchParams.get('mostsaled');
  const latest = searchParams.get('latest');

  useEffect(() => {
    if (productId) {
      console.log('Viewing product with ID:', productId);
   
    } else if (mostsaled === 'true') {
      console.log('Viewing most sold products');
   
    } else if (latest === 'true') {
      console.log('Viewing latest cosmetics products');
    
    } else {
      console.log('Viewing all products');
     
    }
  }, [productId, mostsaled, latest]);

  return (
    <div className="p-4">
      {productId ? (
        <div>
        </div>
      ) : mostsaled === 'true' ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">پرفروش ترین محصولات</h1>
        </div>
      ) : latest === 'true' ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">جدیدترین های ارایشی</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">محصولات</h1>
        </div>
      )}
    </div>
  );
}