let store

const injectDB = async (cdc) => {
  if (store) {
    return
  }
  try {
    store = await cdc.db('products_test').collection('store')
  } catch (e) {
    console.error(`Unable to establish collection handles in userDAO: ${e}`)
  }
}

const getProducts = async () => {
  try {
    return await store.find().toArray();
  } catch (err) {
    console.error("Unable to get products");
    return { error: err };
  }
}

const putProduct = async (product) => {
  try {
    const productDoc = {
      name: product.name,
      price: product.price,
    }
    return await store.insertOne(productDoc)
  } catch (err) {
    console.error('Unable to post product')
    return { error: err }
  }
}

exports.getProducts = getProducts
exports.putProduct = putProduct
exports.injectDB = injectDB
