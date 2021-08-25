
    // function onLoadCartNumbers(){
    //     let productNumbers = localStorage.getItem('cartNumbers');
    //     if(productNumbers){
    //         document.querySelector('.cart span').textContent = productNumbers;
    //     }

    // }
    // function cartNumbers(event){
        
    //     let productNumbers = localStorage.getItem('cartNumbers');

        
    //     productNumbers = parseInt(productNumbers);
        
    //     if(productNumbers){
    
    //      localStorage.setItem('cartNumbers', productNumbers + 1);
    //     document.querySelector('.cart span').textContent = productNumbers+ 1;

    // }
    // else{
    //     localStorage.setItem('cartNumbers', 1);
    //     document.querySelector('.cart span').textContent = 1;
    // }
    // setItems(event);
    
    // }
    // let cartItems = [];
    
    // function setItems (event){
    //  console.log("Hi");
    //  cartItems.push(localStorage.getItem('productsInCart'));
    // // cartItems = localStorage.setItem('productsInCart', cartItems);
    //   console.log("your cart items are", cartItems);
    // //   cartItems = JSON.parse(cartItems);
       
    //     if(cartItems != null){
          
            
    //             cartItems = {
    //                 ...cartItems,
    //                 [events.tag]: event
    //             }
         
    //         cartItems[events.tag].inCart += 1; 
    //     }
        
    //     else{
    //         event.inCart = 1;

    //          cartItems = {
    //         [events.tag]: event
    //     }
    // }
    // console.log("Hiddddd",cartItems);
    //     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        
    // }

    // function totalCost(event){
    //     // console.log("The Event price is", event.price);
        
    //     let cartCost = localStorage.getItem('totalCost')
       
    //     let price = localStorage.getItem(event.price);
        
    //     // console.log(typeof cartCost);

    //     if(cartCost != null){
        
    //     cartCost = parseInt(cartCost);
    //     price = parseInt(event.price);

    //     localStorage.setItem("totalCost", cartCost + price);

    //     }
    //     else{
    //     localStorage.setItem("totalCost", event.price);
    //     }
        
    //     // console.log("cart cost", cartCost );
    

    // }

    
    
    // function displayCart(){
        
    //     cartItems.push(JSON.parse(localStorage.getItem("productsInCart")));

    //     // console.log(cartItems);
    //     // cartItems = JSON.parse(cartItems);
    //     // console.log(cartItems);
    //     let eventContainer = document.querySelector(".products-container");
    //     // console.log(cartItems);
    //     if(cartItems && eventContainer){
    //         eventContainer.innerHTML = '';
    //         Object.values(cartItems).map(item =>{
    //         eventContainer.innerHTML += `
    //         <div class="product">
    //         <ion-icon name="close-circle"></ion-icon>
    //         ${item.image}>
    //         <span>${item.eventName}</span>
    //         </div
            
    //         <div class="price">${item.price}00</div>
            
    //         <div class="quantity">
    //         <ion-icon name="caret-back-circle"></ion-icon>
    //         <span>${item.inCart}</span>
    //         <ion-icon name="caret-forward-circle"></ion-icon>
    //         </div>
            
    //         <div class=total>
    //         ${item.inCart * item.price},00
    //         </div>
    //         `

    //         });
            
    //     }
    // }
    // displayCart();

    // onLoadCartNumbers();