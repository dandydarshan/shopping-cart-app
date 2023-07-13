import './Card.css';
import StarOutline from "./StarOutline";
import StarFilled from "./StarFilled";
import StarHalf from "./StarHalf";


const Card = (props:any)=>{
    const stars = [1,2,3,4,5];
    const getDiscountedPrice=()=>{
        return Math.round((props.product.price - (props.product.price * props.product.discountPercentage / 100)));
    }

return(<div className='card-container'>
     <div className='card-brand'>{props.product.brand}</div>
     <img className='card-image' src={props.product.thumbnail}/>
     <div className='card-description'>{props.product.description}</div>
     <div className='card-title'>{props.product.title}</div>
     <div className='card-price'>
        <span className='card-price-title'>Price:</span>
        <span className='card-price-discounted'>${getDiscountedPrice()}</span>
        <span className='card-price-actual'>${props.product.price}</span>
     </div>
     <div>
        {[...Array(5)].map((x, i) =>
            ((i + 1) <= props.product.rating?<StarFilled/> : (props.product.rating % 1 !==0 && Math.round(props.product.rating)===(i + 1))?<StarHalf/>:<StarOutline/>)
        )}
     </div>
</div>)
}

export default Card;