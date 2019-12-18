const PRODUCT_INFORMATION = {
  "A": {
    "price": 50,
    "discount": 20,
    'productCountForDiscount': 3
  },
  "B": {
    "price": 30,
    "discount": 15,
    'productCountForDiscount': 2
  },
  "C": {
    "price": 20
  },
  "D": {
    "price": 15
  }
}

module.exports.checkout = function (skuCodes) {
  let result = skuCodes.length == 1 ? PRODUCT_INFORMATION[skuCodes]["price"] :
    skuCodes.reduce((a, b) => a + PRODUCT_INFORMATION[b]["price"], 0)
  return applyDiscount(result, skuCodes);
}

function applyDiscount(subtotal, skuCodes) {
  let discount = getDiscountForProduct('A', skuCodes) + getDiscountForProduct('B', skuCodes)

  return subtotal - discount;
}

const numberOfProduct = (productCode, productList) => {
  let productCount = 0
  productList.forEach(code => code == productCode ? productCount += 1 :
    productCount)
  return productCount;
}

function getDiscountForProduct(product, skuCodes) {
  return Math.floor(numberOfProduct(product, skuCodes) / PRODUCT_INFORMATION[product]['productCountForDiscount']) * PRODUCT_INFORMATION[product]['discount'];
}
