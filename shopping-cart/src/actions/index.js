
export const inventoryReduce=(id)=>({
    type:"INVENTORY_REDUCE",
    id 
 })

 export const addTocart=(id)=>({
  type:"ADD_TO_CART",
  id
 })

 export const removeProduct=(id)=>({
     type:"REMOVE_PRODUCT",
     id
 })
 export const inventoryInit=(id,inventory)=>({
     type:"INVENTORY_INIT",
     id,
     inventory
 })