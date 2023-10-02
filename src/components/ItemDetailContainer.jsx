import { useParams } from "react-router-dom";
import { useCakeByName } from "../hooks/useCakeByName";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const cake = useCakeByName(id);

    if (!cake) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{cake.name}</h1>
            <img
                width={"500px"}
                src={cake.image}
                alt={cake.name}
            />
            <p>Precio</p>
            ${cake.price}
            <p>Descripción</p>
            {cake.details}
        </div>
    );
};