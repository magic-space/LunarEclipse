import Items from "../../data/Items.dummy"

const Inventory = () => {
    return (
        <>
            {Items.map(item => (
                <div>{item.name} - ID: {item.id}<br />Typ: {item.type}<br />Weight: {item.weight}</div>
            ))}
        </>);
}

export default Inventory;