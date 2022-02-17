import Item from "../Item/Item.js"

const ItemList = ({ catalogo }) => {
    return (
        <>
            {catalogo.map((catalogo) => (
                <Item {...catalogo} key={catalogo.id} />
            ))}
        </>
    );
};

export default ItemList;