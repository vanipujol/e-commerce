const CategoryItem = ({isActive = false, name}) => {
    const sayCategory = () => {
        alert(`La categoría es: ${name}`);
    };

    return (
        <a className={`nav-link ${isActive ? "active" : null}`} aria-current="page" href="#" onClick={sayCategory}>{name}</a>
    );
};

export default CategoryItem

