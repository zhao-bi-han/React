import data from '../api/data.json';
const products = (state = data, action) => {
    switch (action.type) {
        case "INVENTORY_REDUCE":
            return state.map((product) => {
                return product.id == action.id ? { ...product, num: product.num == 0 ? 0 : product.num - 1 } : product;
            })
        case "INVENTORY_INIT":
            return state.map((product) => {
                return product.id == action.id ? { ...product, num: product.num+action.inventory } : product;
            })
        default:
            return state
    }
}

export default products;