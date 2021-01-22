// Bài 9
class Product {
    constructor(id, name, categoryID, saleDate, qulity, isDelete) {
        this.id = id;
        this.name = name;
        this.categoryID = categoryID;
        this.saleDate = saleDate;
        this.qulity = qulity;
        this.isDelete = isDelete;
    }

    get infor() {
        return this.id + "  " + this.name + "  " + this.categoryID + " " + this.saleDate + "  " + this.qulity + "  " + this.isDelete
    } new
}
// Bài 10
var product = [
    new Product(1, "CPU", 1, '2021-1-21', 1, true),
    new Product(2, "KeyBroad", 2, '2021-1-21', 2, true),
    new Product(3, "Phone", 3, '2021-1-21', 3, false),
    new Product(4, "Laptop", 4, '2021-1-21', 4, true),
    new Product(5, "VGA", 5, '2021-1-23', 5, false),
    new Product(6, "SSD", 6, '2021-1-22', 6, true),
    new Product(7, "HDD", 7, '2021-1-21', 7, false),
    new Product(8, "RAM", 8, '2021-1-21', 8, true),
    new Product(9, "Mouse", 9, '2021-1-21', 9, false),
    new Product(10, "Screen", 10, '2021-1-21', 10, true)
]

for (let index = 0; index < product.length; index++) {
    console.log(product[index].infor)
}
// Bài 11
function findProductByIdEs6(listproduct, idproduct) {
    var nameproduct = null;
    listproduct.forEach(temp => {
        // if (temp.id == idproduct) {
        nameproduct = temp.name;
        // }
    });

    return nameproduct;
}
console.log("Bai 11 es6", findProductByIdEs6(product, 7));

function findProductByIdFor(listproduct, idproduct) {
    var nameproduct = null;
    for (let index = 0; index < listproduct.length; index++) {
        if (listproduct[index].id == idproduct) {
            nameproduct = listproduct[index].name
        }
    }

    return nameproduct;
}
console.log("Bai 11 for", findProductByIdFor(product, 2));
//Bài 12
function findProductByQualityEs6(listproduct) {
    var nameproduct = [];
    listproduct.forEach(temp => {
        if (temp.isDelete = true) {
            if (temp.qulity > 0) {
                nameproduct = temp;
            }
        }
    });

    return nameproduct;
}
console.log("Bai 12 es6", findProductByQualityEs6(product));

function findProductByQualityFor(listproduct) {
    var nameproduct = [];
    for (let index = 0; index < listproduct.length; index++) {
        if (listproduct[index].qulity > 0) {
            if (listproduct[index].isDelete = true) {
                nameproduct = listproduct[index]
            }
        }
    }

    return nameproduct;
}
console.log("Bai 12 for", findProductByQualityFor(product));
// Bài 13
function findProductByDateFor(listproduct) {
    var product = [];
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    for (let index = 0; index < listproduct.length; index++) {
        if (listproduct[index].saleDate == date) {
            if (listproduct[index].index = true) {
                product = listproduct[index]
            }
        }
    }

    return product;
}
console.log("Bai 13 for", findProductByDateFor(product));

function findProductByDateEs6(listproduct) {
    var nameproduct = [];
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    listproduct.forEach(temp => {
        if (temp.isDelete = true) {
            if (temp.saleDate == date) {
                nameproduct = temp;
            }
        }
    });

    return nameproduct;
}
console.log("Bai 13 es6", findProductByDateEs6(product));
// bài 14
var arrayProduct = [];

function getQuality(total, quality) {
    return total + quality;
}

function totalProductReduce(listProduct) {
    listProduct.forEach((temp) => {
        if (temp.isDelete) {
            arrayProduct.push(temp.qulity);
        }
    });

    return arrayProduct.reduce(getQuality, 0);
}

function totalProduct(listProduct) {
    var totalQuality = 0;
    listProduct.forEach((temp) => {
        if (temp.isDelete) {
            totalQuality += temp.qulity;
        }
    });

    return totalQuality;
}

//Kiem tra
console.log("Bai 14", totalProduct(product));

console.log("Bai 14", totalProductReduce(product));
// Bài 15
function isHaveProductInCategoryEs6(listproduct, categoryid) {
    var nameproduct = false;
    listproduct.forEach(temp => {
        if (temp.id == categoryid) {
            nameproduct = true;
        }
    });

    return nameproduct;
}
console.log("bai 15", isHaveProductInCategoryEs6(product, 6));

function isHaveProductInCategoryFor(listproduct, categoryid) {
    var nameproduct = false;
    for (let index = 0; index < listproduct.length; index++) {
        if (listproduct[index].id == categoryid) {
            nameproduct = true;
        }
    }

    return nameproduct;
}
console.log("Bai 15 For", isHaveProductInCategoryFor(product, 2));
// Bài 16
function findProductBySaleDate(listProduct) {
    var array = [];
    listProduct.forEach(temp => {
        if (Date.parse(temp.saleDate) > Date.parse(new Date()) && temp.qulity > 0) {
            array.push(temp.id + temp.name);
        }
    });

    return array;
}
console.log("Bài 16 es6", findProductBySaleDate(product));

function findProductBySaleDateFor(listProduct) {
    var array = [];
    for (var index = 0; index < listProduct.length; index++) {
        if (Date.parse(listProduct[index].saleDate) > Date.parse(new Date()) && listProduct[index].qulity > 0) {
            array.push(new Product({ id: listProduct[index].id, name: listProduct[index].name }));
        }
    }
    return array;
}
console.log("bài 16 ", findProductBySaleDateFor(product));