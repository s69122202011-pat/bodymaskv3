/* =====================================================
   BODYMASK PATTY
   JAVASCRIPT
===================================================== */


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,

        name: "Pink Glow Body Mask",

        category: "mask",

        price: 299,

        oldPrice: 349,

        discount: 15
    },


    {
        id: 2,

        name: "Soft Skin Body Scrub",

        category: "scrub",

        price: 259,

        oldPrice: 299,

        discount: 13
    },


    {
        id: 3,

        name: "Moisture Body Lotion",

        category: "lotion",

        price: 289,

        oldPrice: 329,

        discount: 12
    },


    {
        id: 4,

        name: "SET A - Glow Set",

        category: "set",

        price: 699,

        oldPrice: 847,

        discount: 17
    },


    {
        id: 5,

        name: "SET B - Premium Set",

        category: "set",

        price: 899,

        oldPrice: 1136,

        discount: 21
    }

];



/* =====================================================
   CART
===================================================== */

let cart = [];



/* =====================================================
   SHOW PRODUCTS
===================================================== */

function showProducts(data) {

    const productList =
        document.getElementById("productList");


    productList.innerHTML = "";


    data.forEach(product => {


        let visual = "";


        /* IF / ELSE
           ใช้ตรวจสอบประเภทสินค้า
        */

        if (product.category === "mask") {

            visual = `
                <span>
                    BODYMASK<br>
                    PATTY
                </span>
            `;

        }

        else if (product.category === "scrub") {

            visual = `
                <span>
                    BODYMASK
                </span>
            `;

        }

        else if (product.category === "lotion") {

            visual = `
                <span>
                    BODY<br>
                    MASK
                </span>
            `;

        }

        else {

            visual = `
                <span>
                    BODYMASK<br>
                    SET
                </span>
            `;

        }


        /* CREATE CARD */

        productList.innerHTML += `

            <div class="product">

                <div class="product-img">

                    <div class="discount-badge">

                        -${product.discount}%

                    </div>

                    ${visual}

                </div>


                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>


                    <div class="price">

                        ฿${product.price}

                        <span class="old">

                            ฿${product.oldPrice}

                        </span>

                    </div>


                    <p>
                        ✦ SPECIAL OFFER
                    </p>


                    <button
                        onclick="
                        addToCart(
                            '${product.name}',
                            ${product.price}
                        )">

                        เพิ่มลงตะกร้า

                    </button>

                </div>

            </div>

        `;

    });

}



/* =====================================================
   FILTER PRODUCT
===================================================== */

function filterProducts(category) {


    /* IF / ELSE */

    if (category === "all") {

        showProducts(products);

        return;

    }


    const result =
        products.filter(
            product =>
                product.category === category
        );


    showProducts(result);

}



/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(name, price) {

    cart.push({

        name: name,

        price: price

    });


    updateCart();


    alert(
        `${name} เพิ่มลงตะกร้าแล้ว`
    );

}



/* =====================================================
   ADD SET
===================================================== */

function addSet(name, price) {

    cart.push({

        name: name,

        price: price

    });


    updateCart();


    alert(
        `${name} เพิ่มลงตะกร้าแล้ว`
    );

}



/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");


    cartCount.textContent =
        cart.length;

}



/* =====================================================
   SET A
===================================================== */


/*

SET A =
{
    Body Mask,
    Body Scrub,
    Body Lotion
}

*/


const setA = new Set([

    "Body Mask",

    "Body Scrub",

    "Body Lotion"

]);



/* =====================================================
   SET B
===================================================== */


/*

SET B =
{
    Body Mask,
    Body Scrub,
    Body Lotion,
    Gift Packaging
}

*/


const setB = new Set([

    "Body Mask",

    "Body Scrub",

    "Body Lotion",

    "Gift Packaging"

]);



/* =====================================================
   UNION
===================================================== */


/*

Union คือ

A ∪ B

นำสมาชิกของ Set A
และ Set B มารวมกัน

โดยไม่ให้ข้อมูลซ้ำ

*/


function union(setA, setB) {

    return new Set([
        ...setA,
        ...setB
    ]);

}



/* =====================================================
   INTERSECTION
===================================================== */


/*

Intersection คือ

A ∩ B

หาสิ่งที่อยู่ใน
Set A และ Set B พร้อมกัน

*/


function intersection(setA, setB) {

    return new Set(

        [...setA].filter(
            item =>
                setB.has(item)
        )

    );

}



/* =====================================================
   DIFFERENCE
===================================================== */


/*

Difference คือ

A - B

หาสิ่งที่อยู่ใน A
แต่ไม่มีใน B

*/


function difference(setA, setB) {

    return new Set(

        [...setA].filter(
            item =>
                !setB.has(item)
        )

    );

}



/* =====================================================
   SET RESULT
===================================================== */

function showSetLogic() {


    const unionResult =
        union(setA, setB);


    const intersectionResult =
        intersection(setA, setB);


    const differenceResult =
        difference(setA, setB);


    const result =
        document.getElementById(
            "logicResult"
        );


    result.innerHTML = `

        <b>Union (A ∪ B)</b><br>

        ${[
            ...unionResult
        ].join(", ")}

        <br><br>


        <b>
            Intersection (A ∩ B)
        </b><br>

        ${[
            ...intersectionResult
        ].join(", ")}

        <br><br>


        <b>
            Difference (A - B)
        </b><br>

        ${[
            ...differenceResult
        ].join(", ")}

    `;

}



/* =====================================================
   IF / ELSE : PREMIUM LOGIC
===================================================== */


/*

ใช้ If / Else
ตรวจสอบราคาสินค้า

ถ้าราคา >= 500
แสดงว่า Premium

ถ้าต่ำกว่า 500
แสดงว่า Standard

*/


function productLevel(price) {


    if (price >= 500) {

        return "Premium";

    }

    else {

        return "Standard";

    }

}



/* =====================================================
   แสดงสินค้าเมื่อเปิดเว็บ
===================================================== */

showProducts(products);



/* =====================================================
   แสดงผล SET LOGIC
===================================================== */

showSetLogic();
