# Product Requirements Document (PRD)
**Project Title**: E-commerce API Core
**Status**: Development
**Target Audience**: Retail Customers, Store Management (Admins & Employees)

## 1. Executive Summary
This document outlines the product requirements for a scalable E-commerce backend platform built using **NestJS** and **MongoDB**. The platform is designed to handle core e-commerce functionalities including multi-tier user authentication, product catalog management, order processing, and customer support. 

By leveraging a fully denormalized NoSQL data architecture and robust JWT-based authentication guards, the backend guarantees high-performance reads for large-scale transaction volumes without complex SQL JOIN delays.

## 2. Product Architecture & Technical Stack
- **Framework**: NestJS (TypeScript)
- **Database**: MongoDB (via Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens), Passport.js, Bcrypt
- **Infrastructure**: Containerized via Docker (`docker-compose`)
- **Data Philosophy**: Document-oriented. Parent collections (e.g., `Order`, `Cart`, `Product`) embed their detailed children (`OrderItem`, `CartItem`, `ProductVariant`) directly within arrays to preserve atomicity and solve N+1 query bottlenecks.

## 3. Core Features & Requirements

### 3.1. Authentication & Access Control (RBAC)
The system supports three completely isolated authentication roles to ensure secure boundaries between management and consumers.
- **Roles**: `Customer`, `Employee`, `Admin`.
- **Requirements**:
  - Secure login flow resulting in a signed `access_token`.
  - Passwords are encrypted on creation/update using Bcrypt (`10` salt rounds).
  - API Routes can be aggressively guarded using the custom `@Roles()` decorator.

### 3.2. User Management
- **Customers**: Can register, login, execute purchases, and manage their carts.
- **Employees**: Staff members capable of managing inventory, fulfilling orders, and processing support claims. 
- **Admins**: Root-level staff members capable of broad oversight.

### 3.3. Product Catalog
- Products support complex variations (e.g., Color, Size).
- A single `Product` inherently embeds its variants inside a `bien_the` array.
- **Requirements**: Standardized schemas to ingest variants, images, descriptions, categorization, and tracking for inventory levels (`so_luong_ton`).

### 3.4. Cart & Checkout Systems
- Users can instantiate Shopping Carts.
- Carts embed dynamic `items` holding references to specific product variants and reserved quantities.

### 3.5. Order Management & Invoices
- Customers finalize Carts into `Orders`. 
- Order schemas are highly resilient snapshots that embed `chi_tiet_don_hang`. This prevents historical orders from corrupting if the original product's prices vary later on.
- Paid/shipped orders can propagate to immutable `Invoice` documents embedding `chi_tiet_hoa_don`.

### 3.6. Promotions & Discounts
- Robust promotion engine capable of handling discount percentages or flat reductions on specific products.
- Promotions embed `danh_sach_san_pham` targeting specific products and managing active timeframes.

### 3.7. Reviews & Support Tickets
- **Reviews**: Verified purchasers can append a 1-5 star review coupled with a text comment on specific product variants.
- **Support**: Customers can log complaints or return requests which are flagged to `Employee` and `Admin` queues for resolution (`trang_thai`).

## 4. Future Considerations & Roadmap
1. **Third-party Provider Integration**: Embedding Stripe or PayPal integration blocks to automate `trang_thai_thanh_toan` (Payment Status).
2. **Mail Servers**: Integrate SendGrid or Nodemailer hooks for transactional emails on `OrderCreated` and `PasswordReset` events.
3. **Caching**: Implementing Redis overlays mapping active Carts for volatile speed jumps before hard-syncing to MongoDB.
