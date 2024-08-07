import { useState, useEffect, createContext } from "react";

//create context
const CartContext = createContext();

//provider function that passes the props to children
const CartProvider = ({ children }) => {

    //these are the states and props and functions we need to pass
    const [allItems, setAllItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    //fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/');
                if (!response.ok) {
                    throw new Error(`HTTP error, Status: ${response.status}`);
                }
                const items = await response.json();
                const itemsWithQty = items.map((item) => {
                    return item = { ...item, qty: 0 }
                })
                setAllItems(itemsWithQty);
                console.log(itemsWithQty);
            }
            catch (error) {
                console.log("An error occured ", error);
            }
        }
        fetchData();
    }, [])

    //Add to cart
    const addToCartHandler = (id, quantity) => {
        setCartItems(prevCartItems => {
            const existingItem = prevCartItems.find(item => item.id === id);
            if (existingItem) {
                return prevCartItems.map((item) => (
                    item.id ? { ...item, qty: item.qty + quantity } : item
                ));
            }
            else {
                const itemToAdd = allItems.find(item => item.id === id);
                if (itemToAdd) {
                    return [...prevCartItems, { ...itemToAdd, qty: quantity }];
                }
            }
            return prevCartItems;
        })
        const total = totalQuantity + quantity;
        setTotalQuantity(total);
    }

    //remove quantity from cart
    const removeItem = (id) => {
        const filteredItems = cartItems.filter((item) => item.id !== id);
        setCartItems(filteredItems);
    }

    //increase item quantity
    const incrementQty = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                (item.id === id) ? { ...item, qty: item.qty + 1 } : item
            )
        )
    }

    //decrease item quantity
    const decrementQty = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                (item.id === id) && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
            )
        )
    }
    //returning the wrapper of providing the prop to children components
    return (
        <CartContext.Provider value={{ allItems, addToCartHandler, cartItems, totalQuantity, removeItem, incrementQty, decrementQty }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider }