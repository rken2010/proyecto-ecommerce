import Item from '../Item';

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