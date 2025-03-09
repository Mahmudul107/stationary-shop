import express from 'express';
import { ProductController } from './product.controller';
import { upload } from '../../utils/sendImageToCloudinary';
import textToJson from '../../middleware/nextToJson';

const router = express.Router();

// Create a new product
router.post(
  '/api/products',
  upload.single('file'),
  textToJson(),
  ProductController.createNewProduct,
);

router.get('/api/products', ProductController.getAllProducts);

// Retrieve a single Product
router.get('/api/products/:productId', ProductController.getSingleProduct);

// Update Product Information
router.put('/api/products/:productId', ProductController.updateSingleProduct);

// Delete a Product from DB
router.delete('/api/products/:productId', ProductController.deleteProduct);

export const ProductRoutes = router;
