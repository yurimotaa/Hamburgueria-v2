import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../contexts/CartContext';

// eslint-disable-next-line consistent-return
const CartProductCard = () => {
  const { listCart, deleteProduct } = useContext(CartContext);

  if (listCart.length > 0) {
    return listCart.map((product) => (
      <StyledCartProductCard key={crypto.randomUUID()}>
        <div className='imageBox'>
          <img src={product.img} alt={product.name} />
        </div>
        <div className='contentBox'>
          <StyledTitle tag='h3' $fontSize='three'>
            {product.name}
          </StyledTitle>
          <button
            type='button'
            aria-label='Remover'
            onClick={() => deleteProduct(product)}
          >
            <MdDelete size={24} />
          </button>
        </div>
      </StyledCartProductCard>
    ));
  }
};

export default CartProductCard;
