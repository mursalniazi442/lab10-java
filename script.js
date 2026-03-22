

// Part 1: Product Class
//This class represents a product with name, price and quantity

class Product {

    constructor(name, price, quantity) {
//constructor to initialize product details
        this.name = name;

        this.price = price;

        this.quantity = quantity;

    }

//calculates total value (price x quantity)

    getTotalValue() {

        return this.price * this.quantity;

    }

//Returns product details as a string

    toString() {

        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;

    }



    // Part 3: Static Method

    static applyDiscount(products, discount) {

        products.forEach(product => {

            product.price = product.price - (product.price * discount);

        });

    }

}





// Part 2: PerishableProduct

class PerishableProduct extends Product {

    constructor(name, price, quantity, expirationDate) {

        super(name, price, quantity);

        this.expirationDate = expirationDate;

    }



    toString() {

        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;

    }

}




// Part 4: Store Class

class Store {

    constructor() {

        this.inventory = [];

    }



    addProduct(product) {

        this.inventory.push(product);

    }



    getInventoryValue() {

        let total = 0;

        this.inventory.forEach(product => {

            total += product.getTotalValue();

        });

        return total;

    }



    findProductByName(name) {

        for (let product of this.inventory) {

            if (product.name === name) {

                return product;

            }

        }

        return null;

    }

}



// Part 5: Testing

let p1 = new Product("Apple", 2.5, 50);

let p2 = new Product("Bread", 3, 20);

let p3 = new Product("Juice", 4, 15);



let p4 = new PerishableProduct("Milk", 1.5, 10, "2024-12-31");

let p5 = new PerishableProduct("Yogurt", 2, 25, "2024-11-20");



let store = new Store();



store.addProduct(p1);

store.addProduct(p2);

store.addProduct(p3);

store.addProduct(p4);

store.addProduct(p5);



console.log("Total value before discount:", store.getInventoryValue());



Product.applyDiscount(store.inventory, 0.15);



console.log("Total value after discount:", store.getInventoryValue());



let found = store.findProductByName("Milk");



if (found) {

    console.log(found.toString());

} else {

    console.log("Not found");

}

