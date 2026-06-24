// // // // import React, { createContext, useEffect, useState, useContext } from 'react'
// // // // import axios from 'axios'
// // // // import { AuthContext } from './Authcontext'

// // // // export const shopdatacontext = createContext()

// // // // function shopcontext({ children }) {

// // // //     const [products, setproducts] = useState([])
// // // //     let [search,setsearch]=useState("")
// // // // let [showSearch, setShowSearch]=useState(false)

// // // // let [cartitems, setcartitems] = useState({})
// // // //     const auth = useContext(AuthContext)
// // // //     const serverurl = auth?.serverurl

// // // //     console.log("Server URL:", serverurl)

// // // //     const currency = "Rs"
// // // //     const delivery_charges = 50

// // // //     const getproducts = async () => {
// // // //         try {
// // // //             let result = await axios.get(serverurl + "/api/product/list")
// // // //             console.log(result.data)

// // // //             setproducts(result.data)
// // // //         }
// // // //         catch (error) {
// // // //             console.log("get product error", error)
// // // //         }
// // // //     }


// // // // const addtocart = async (itemsId,size)=>{
// // // //     if(!size){
// // // //         console.log("select product size ");
// // // //         return;
// // // //     }

// // // // let cartdata = structuredClone(cartitems);

// // // // if(cartdata[itemsId]){
// // // //     if(cartdata[itemsId][size]){
// // // //         cartdata[itemsId][size] += 1;

// // // //     }
// // // //     else{
// // // //         cartdata[itemsId][size] = 1;

// // // //     } else {
// // // // cartdata[itemsId]= {};
// // // // cartdata[itemsId][size] = 1;

// // // //     }
// // // //     setcartitems(cartdata)
// // // // }

// // // // const getcartcount = ()=>{
// // // //     let totalcount = 0;
// // // // for (const items in cartitems) {
// // // //     for(const item in cartitems[items]){
// // // //         try{
// // // //             if(cartitems[items][item] > 0 ){
// // // //                 totalcount += cartitem [items] [item]
// // // //             }

// // // //         }
// // // //         catch(error){
// // // //             console.log("cart count error",error)
// // // //         }
// // // //     }


// // // // }




// // // // }




























// // // //   useEffect(() => {
// // // //   if (serverurl) {
// // // //     getproducts()
// // // //   }
// // // // }, [serverurl])

// // // //     let value = {
// // // //         products,
// // // //         currency,
// // // //         delivery_charges,
// // // //         getproducts,
// // // //         search,
// // // //         setsearch,
// // // //        showSearch,
// // // //         setShowSearch,
// // // //    cartitems,
// // // //    addtocart,
// // // //    getcartcount,
// // // //    setcartitems
   
   
   
// // // //     }

// // // //     return (
// // // //         <shopdatacontext.Provider value={value}>
// // // //             {children}
// // // //         </shopdatacontext.Provider>
// // // //     )
// // // // }

// // // // export default shopcontext










// // // import React, { createContext, useEffect, useState, useContext } from 'react'
// // // import axios from 'axios'
// // // import Authcontext, { AuthContext } from './Authcontext'

// // // export const shopdatacontext = createContext()

// // // function ShopContext({ children }) {

// // //     const [products, setproducts] = useState([])
// // //     const [search, setsearch] = useState("")
// // //     const [showSearch, setShowSearch] = useState(false)
// // //     const [cartitems, setcartitems] = useState({})
// // // let {serverurl} = useContext(Authcontext)
// // // let {userdata} = useContext(Authcontext)    
    

// // //     const currency = "Rs"
// // //     const delivery_charges = 50

// // //     // ✅ Get Products
// // //     const getproducts = async () => {
// // //         try {
// // //             const result = await axios.get(serverurl + "/api/product/list")
// // //             setproducts(result.data)
// // //         } catch (error) {
// // //             console.log("get product error", error)
// // //         }
// // //     }

// // //     // ✅ Add To Cart
// // //     const addtocart = (itemsId, size) => {

// // //         if (!size) {
// // //             console.log("Select product size")
// // //             return
// // //         }

// // //         let cartdata = structuredClone(cartitems)

// // //         if (cartdata[itemsId]) {
// // //             if (cartdata[itemsId][size]) {
// // //                 cartdata[itemsId][size] += 1
// // //             } else {
// // //                 cartdata[itemsId][size] = 1
// // //             }
// // //         } else {
// // //             cartdata[itemsId] = {}
// // //             cartdata[itemsId][size] = 1
// // //         }

// // //         setcartitems(cartdata)

// // // if(userdata){
// // //     try{
// // //         await axios.post(serverurl + "/api/cart/add",{itemId,size}, {withCredentials:true})
// // //     }

// // // catch(error){
// // //     console.log(error);
// // // }



// // // }





// // //     }

// // //     // ✅ Get Cart Count
// // //     const getcartcount = () => {
// // //         let totalcount = 0

// // //         for (const itemId in cartitems) {
// // //             for (const size in cartitems[itemId]) {
// // //                 try {
// // //                     if (cartitems[itemId][size] > 0) {
// // //                         totalcount += cartitems[itemId][size]
// // //                     }
// // //                 } catch (error) {
// // //                     console.log("cart count error", error)
// // //                 }
// // //             }
// // //         }

// // //         return totalcount
// // //     }

// // //     // ✅ Load Products when serverurl available
// // //     useEffect(() => {
// // //         if (serverurl) {
// // //             getproducts()
// // //         }
// // //     }, [serverurl])

// // //     // ✅ Context Value
// // //     const value = {
// // //         products,
// // //         currency,
// // //         delivery_charges,
// // //         getproducts,
// // //         search,
// // //         setsearch,
// // //         showSearch,
// // //         setShowSearch,
// // //         cartitems,
// // //         addtocart,
// // //         getcartcount,
// // //         setcartitems
// // //     }

// // //     return (
// // //         <shopdatacontext.Provider value={value}>
// // //             {children}
// // //         </shopdatacontext.Provider>
// // //     )
// // // }

// // // export default ShopContext

// // import React, { createContext, useEffect, useState, useContext } from 'react'
// // import axios from 'axios'
// // import Authcontext, { AuthContext } from './Authcontext'

// // export const shopdatacontext = createContext()

// // function ShopContext({ children }) {

// //     const [products, setproducts] = useState([])
// //     const [search, setsearch] = useState("")
// //     const [showSearch, setShowSearch] = useState(false)
// //     const [cartitems, setcartitems] = useState({})

// //     // ✅ Dono ek hi jagah se lo
// //     const { serverurl, userdata } = useContext(AuthContext)

// //     const currency = "Rs"
// //     const delivery_charges = 50

// //     // ✅ Products lao
// //     const getproducts = async () => {
// //         try {
// //             const result = await axios.get(serverurl + "/api/product/list")
// //             setproducts(result.data)
// //         } catch (error) {
// //             console.log("get product error", error)
// //         }
// //     }

  
// //     // ✅ Cart count
// //     const getcartcount = () => {
// //         let totalcount = 0
// //         for (const itemId in cartitems) {
// //             for (const size in cartitems[itemId]) {
// //                 try {
// //                     if (cartitems[itemId][size] > 0) {
// //                         totalcount += cartitems[itemId][size]
// //                     }
// //                 } catch (error) {
// //                     console.log("cart count error", error)
// //                 }
// //             }
// //         }
// //         return totalcount
// //     }
    

// // // ✅ Yeh function add karo
// // const loadcart = async () => {
// //     try {
// //         const token = localStorage.getItem("token");
// //         const res = await axios.get(serverurl + "/api/cart/get", {
// //             headers: { token }
// //         });

// //         setcartitems(res.data || {});
// //         console.log("✅ Cart Loaded from DB:", res.data);
// //     } catch (error) {
// //         console.log("Load cart error:", error.response?.data || error.message);
// //     }
// // };

// // const addtocart = async (itemsId, size) => {
// //     if (!size) {
// //         alert("Size select karo!");
// //         return;
// //     }

// //     // Local UI update
// //     let cartdata = structuredClone(cartitems);
// //     if (!cartdata[itemsId]) cartdata[itemsId] = {};
// //     cartdata[itemsId][size] = (cartdata[itemsId][size] || 0) + 1;
// //     setcartitems(cartdata);

// //     // Backend Call
// //     if (userdata) {
// //         try {
// //             const token = localStorage.getItem("token");

// //             const res = await axios.post(
// //                 serverurl + "/api/cart/add",
// //                 { itemId: itemsId, size },
// //                 { headers: { token } }
// //             );

// //             console.log("✅ Backend Success");

// //             // ✅ Important: Database se fresh cart load karo
// //             await loadcart();

// //         } catch (error) {
// //             console.log("❌ Backend Error:", error.response?.data || error.message);
// //         }
// //     }
// // };









// // const updatecart = async (itemId, size, quantity) => {
// //     // Local state update
// //     let cartdata = structuredClone(cartitems);
// //     if (!cartdata[itemId]) cartdata[itemId] = {};
    
// //     if (quantity <= 0) {
// //         delete cartdata[itemId][size];
// //     } else {
// //         cartdata[itemId][size] = quantity;
// //     }
// //     setcartitems(cartdata);

// //     // Backend update
// //     if (userdata) {
// //         try {
// //             const token = localStorage.getItem("token");
// //             await axios.post(
// //                 serverurl + "/api/cart/update",
// //                 { itemId, size, quantity },
// //                 { headers: { token } }
// //             );
// //         } catch (error) {
// //             console.log("Update cart error:", error);
// //         }
// //     }
// // };
















// //     useEffect(() => {
// //         if (serverurl) {
// //             getproducts()
// //         }
// //          if (userdata) {
// //         loadcart(); // ✅ User logged in ho toh cart load karo
// //     }
// // }, [serverurl, userdata]);


// //     const value = {
// //         products,
// //         currency,
// //         delivery_charges,
// //         getproducts,
// //         search,
// //         setsearch,
// //         showSearch,
// //         setShowSearch,
// //         cartitems,
// //         addtocart,
// //         getcartcount,
// //         setcartitems
// //     ,updatecart,
// //     }

// //     return (
// //         <shopdatacontext.Provider value={value}>
// //             {children}
// //         </shopdatacontext.Provider>
// //     )
// // }

// // export default ShopContext
// import React, { createContext, useEffect, useState, useContext } from 'react'
// import axios from 'axios'
// import { AuthContext } from './Authcontext'

// export const shopdatacontext = createContext()

// function ShopContext({ children }) {

//     const [products, setproducts] = useState([])
//     const [search, setsearch] = useState("")
//     const [showSearch, setShowSearch] = useState(false)
//     const [cartitems, setcartitems] = useState({})

//     const { serverurl, userdata } = useContext(AuthContext)

//     const currency = "Rs"
//     const delivery_charges = 50

//     // Get Products
//     const getproducts = async () => {
//         try {
//             const result = await axios.get(serverurl + "/api/product/list")
//             setproducts(result.data)
//         } catch (error) {
//             console.log("get product error", error)
//         }
//     }

//     // Load Cart from Database
//     const loadcart = async () => {
//         try {
//             const token = localStorage.getItem("token")
//             if (!token) return;

//             const res = await axios.get(serverurl + "/api/cart/get", {
//                 headers: { token }
//             })

//             setcartitems(res.data || {})
//             console.log("✅ Cart Loaded from DB:", res.data)
//         } catch (error) {
//             console.log("Load cart error:", error.response?.data || error.message)
//         }
//     }

//     // Add To Cart
//    const addtocart = async (itemsId, size) => {
//     if (!size) {
//         alert("Size select karo!");
//         return;
//     }

//     console.log("🚀 Add to Cart Called");

//     // 1. Local Update
//     let cartdata = structuredClone(cartitems);
//     if (!cartdata[itemsId]) cartdata[itemsId] = {};
//     cartdata[itemsId][size] = (cartdata[itemsId][size] || 0) + 1;
//     setcartitems(cartdata);

//     // 2. Backend Call
//     try {
//         const token = localStorage.getItem("token");
//         const res = await axios.post(
//             serverurl + "/api/cart/add",
//             { itemId: itemsId, size },
//             { headers: { token } }
//         );

//         console.log("✅ Backend Response:", res.data);

//         // 3. Database se fresh cart lao
//         const loadRes = await axios.get(serverurl + "/api/cart/get", {
//             headers: { token }
//         });

//         setcartitems(loadRes.data || {});
//         console.log("✅ Final Cart from DB:", loadRes.data);

//     } catch (error) {
//         console.log("❌ Error:", error.response?.data || error.message);
//     }
// };




// const getusercart = async () =>{
//     try{
//         const result = await axios.post(serverurl + '/api/cart/get',{},{withCredentials:true   }  

//         )
//         setcartitems(result.data)

//     }
//     catch(error){
//         console.log(error)
//     }
// }















//     // Update Cart (quantity change ke liye)
//     // const updatecart = async (itemId, size, quantity) => {
//     //     let cartdata = structuredClone(cartitems)
//     //     if (!cartdata[itemId]) cartdata[itemId] = {}

//     //     if (quantity <= 0) {
//     //         delete cartdata[itemId][size]
//     //     } else {
//     //         cartdata[itemId][size] = quantity
//     //     }

//     //     setcartitems(cartdata)

//     //     if (userdata) {
//     //         try {
//     //             const token = localStorage.getItem("token")
//     //             await axios.post(
//     //                 serverurl + "/api/cart/update",
//     //                 { itemId, size, quantity },
//     //                 { headers: { token } }
//     //             )
//     //         } catch (error) {
//     //             console.log("Update cart error:", error)
//     //         }
//     //     }
//     // }

//     // Get Cart Count
    
// //     const updatequantity = async () => {

// // let cartdata = structuredClone(cartitems);
// // cartdata [itemId][size] = quantity
// // setcartitems(cartdata)
    

// // if(userdata){
// //     try{
// //         await axios.post(serverurl + '/api/cart/update',{itemId,size,quantity},{withCredentials:true})
// //     }
// //     catch(error){
// //         console.log(error)
// //     }
// // }



// // }

// const updatequantity = async (itemId, size, quantity) => {
//     let cartdata = structuredClone(cartitems);
//     cartdata[itemId][size] = quantity;
//     setcartitems(cartdata);

//     if (userdata) {
//         try {
//             const token = localStorage.getItem("token");
//             await axios.post(
//                 serverurl + '/api/cart/update',
//                 { itemId, size, quantity },
//                 { headers: { token } }
//             );
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }







    
    
//     const getcartamount = async () => {

// let totalamount = 0;
// for(const items in cartitems){
//     let iteminfo = products.find((product) => product._id === items);
//     for(const item in cartitems[items]){
//         try {
//             if(cartitems[items][item] > 0) {
//                 totalamount += iteminfo.price * cartitems[items][item];
//             }
            
//         }
//         catch(error){

//             }
//     }
// }
//     return totalamount;


//     }
    
    
    
    
    
    
    
    
    
    
    
//     const getcartcount = () => {
//         let totalcount = 0
//         for (const itemId in cartitems) {
//             for (const size in cartitems[itemId]) {
//                 if (cartitems[itemId][size] > 0) {
//                     totalcount += cartitems[itemId][size]
//                 }
//             }
//         }
//         return totalcount
//     }

//     // Load Products + Cart
//     useEffect(() => {
//         if (serverurl) {
//             getproducts()
//         }
//     }, [serverurl])

//     useEffect(() => {
//         if (userdata && serverurl) {
//             loadcart()
//         }
//     }, [userdata, serverurl])


// useEffect(()=>{
//     getusercart()
// },[])







//     const value = {
//         products,
//         currency,
//         delivery_charges,
//         getproducts,
//         search,
//         setsearch,
//         showSearch,
//         setShowSearch,
//         cartitems,
//         addtocart,
//         getcartcount,
//         setcartitems,
//         // updatecart,
//      updatequantity,
//         loadcart,
//         getcartamount
        
//     }

//     return (
//         <shopdatacontext.Provider value={value}>
//             {children}
//         </shopdatacontext.Provider>
//     )
// }

// export default ShopContext
import React, { createContext, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './Authcontext'

export const shopdatacontext = createContext()

function ShopContext({ children }) {

    const [products, setproducts] = useState([])
    const [search, setsearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [cartitems, setcartitems] = useState({})

    const { serverurl, userdata } = useContext(AuthContext)

    const currency = "Rs"
    const delivery_charges = 50

    // ✅ Get Products
    const getproducts = async () => {
        try {
            const result = await axios.get(serverurl + "/api/product/list")
            setproducts(result.data)
        } catch (error) {
            console.log("get product error", error)
        }
    }

    // ✅ Load Cart from Database
    const loadcart = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return

            const res = await axios.get(serverurl + "/api/cart/get", {
                headers: { token }
            })

            setcartitems(res.data || {})
            console.log("✅ Cart Loaded from DB:", res.data)
        } catch (error) {
            console.log("Load cart error:", error.response?.data || error.message)
        }
    }

    // ✅ Add To Cart
    const addtocart = async (itemsId, size) => {
        if (!size) {
            alert("Size select karo!")
            return
        }

        // Local Update
        let cartdata = structuredClone(cartitems)
        if (!cartdata[itemsId]) cartdata[itemsId] = {}
        cartdata[itemsId][size] = (cartdata[itemsId][size] || 0) + 1
        setcartitems(cartdata)

        // Backend Call
        try {
            const token = localStorage.getItem("token")
            if (!token) return

            await axios.post(
                serverurl + "/api/cart/add",
                { itemId: itemsId, size },
                { headers: { token } }
            )

            console.log("✅ Cart Added to Backend")
            await loadcart()

        } catch (error) {
            console.log("❌ Add to cart error:", error.response?.data || error.message)
        }
    }

    // ✅ Update Cart Quantity
    const updatequantity = async (itemId, size, quantity) => {
        let cartdata = structuredClone(cartitems)

        if (!cartdata[itemId]) cartdata[itemId] = {}

        if (quantity <= 0) {
            delete cartdata[itemId][size]
        } else {
            cartdata[itemId][size] = quantity
        }

        setcartitems(cartdata)

        try {
            const token = localStorage.getItem("token")
            if (!token) return

            await axios.post(
                serverurl + "/api/cart/update",
                { itemId, size, quantity },
                { headers: { token } }
            )

            console.log("✅ Cart Updated")
        } catch (error) {
            console.log("Update cart error:", error.response?.data || error.message)
        }
    }

    // ✅ Get Cart Count
    const getcartcount = () => {
        let totalcount = 0
        for (const itemId in cartitems) {
            for (const size in cartitems[itemId]) {
                if (cartitems[itemId][size] > 0) {
                    totalcount += cartitems[itemId][size]
                }
            }
        }
        return totalcount
    }

    // ✅ Get Cart Amount
    const getcartamount = () => {
        let totalamount = 0
        for (const items in cartitems) {
            let iteminfo = products.find((product) => product._id === items)
            if (!iteminfo) continue
            for (const item in cartitems[items]) {
                try {
                    if (cartitems[items][item] > 0) {
                        totalamount += iteminfo.price * cartitems[items][item]
                    }
                } catch (error) {
                    console.log("cart amount error", error)
                }
            }
        }
        return totalamount
    }

    // ✅ Single useEffect - No conflict, no race condition
   useEffect(() => {
    if (serverurl) {
        getproducts()
        const token = localStorage.getItem("token")
        if (token) {
            loadcart()
        }
    }
}, [serverurl])

    const value = {
        products,
        currency,
        delivery_charges,
        getproducts,
        search,
        setsearch,
        showSearch,
        setShowSearch,
        cartitems,
        addtocart,
        getcartcount,
        setcartitems,
        updatequantity,
        loadcart,
        getcartamount
    }

    return (
        <shopdatacontext.Provider value={value}>
            {children}
        </shopdatacontext.Provider>
    )
}

export default ShopContext