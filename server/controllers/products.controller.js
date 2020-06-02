const ProductsDAO = require('../dao/productsDAO')

const getProducts = async (req, res, next) => {
  try {
    const productsResponse = await ProductsDAO.getProducts()

    res.json({ status: "suc", products: productsResponse})
  } catch (err) {
    res.status(500).json({ message: "Fail to get from DB", err })
  }
}

const putProduct = async (req, res, next) => {
  try {

    const name = req.body.name
    const price = req.body.price

    const productResponse = await ProductsDAO.putProduct({
      name,
      price
    })

    const updatedProducts = await ProductsDAO.getProducts()

    res.json({ status: 'success', products: updatedProducts })
  } catch (err) {
    res.status(500).json({ message: "Fail to post", err });
  }
}

exports.getProducts = getProducts
exports.putProduct = putProduct