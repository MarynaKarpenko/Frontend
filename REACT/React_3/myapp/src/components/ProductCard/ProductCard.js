import ProductImage from "../ProductImage/ProductImage";
import ProductInfo from "../ProductInfo/ProductInfo";
import style from './ProductCard.module.css'
import cardImage from './media/images/123.jpg'

function ProductCard(props) {

  const {title, image, price, brand, description} = props

  return (
    <div className={style.product_card_wrapper}>
      <img width='150' src={cardImage}></img>
      <ProductImage title={title} image={image}/>
      <ProductInfo price={price} brand={brand} description={description}/>
    </div>
  );
}

export default ProductCard;