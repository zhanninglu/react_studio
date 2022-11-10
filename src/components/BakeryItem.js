// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
	
    
	return (
		<div class="item">
            <img src={props.item.image} alt={props.item.name} width="300" height="200"/>
            <p>{props.item.name}</p>
            <p>{props.item.description}</p>
            <div class="button">
                <p>${props.item.price}</p>
                <button onClick={() => props.add(props.item)}>Add to Cart</button>
            </div>
		</div>
	)
}
