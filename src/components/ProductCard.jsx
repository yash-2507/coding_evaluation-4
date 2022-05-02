import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
    return (
        <>
            <Flex data-testid="single-product-item" key={item.id}>
                {/* display item info here  */}
                <h3>{item.title}</h3>
                <img src={item.image} alt="" />
                <h2>{item.brand}</h2>
                <p>Price: {item.price}</p>
            </Flex>
        </>
    );
};
