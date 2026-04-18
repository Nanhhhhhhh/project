# RESTful API Specification
**Base URL**: `http://localhost:3000`
**Content-Type**: `application/json`

> All secured routes require an `Authorization` header containing an active Bearer JWT token.

## 1. Authentication (`/auth`)
Multi-entry points to retrieve Bearer tokens.

### POST `/auth/customer/login`
**Payload**: `{"email": "...", "password": "..."}`
**Returns**: `201 Created`
```json
{
  "access_token": "eyJhb...",
  "user": { "_id": "...", "role": "customer", "email": "..." }
}
```

### POST `/auth/employee/login`
**Payload**: `{"email": "...", "password": "..."}`

### POST `/auth/admin/login`
**Payload**: `{"email": "...", "password": "..."}`

---

## 2. Customer Management (`/customers`)
Exposes logic for consumer profiles. Registration is assumed public.

### POST `/customers` (Register)
Registers a new consumer, hashing their `mat_khau`.
**Payload Required**:
- `ho_ten` (string)
- `email` (string)
- `mat_khau` (string)

**Optional**:
- `so_dien_thoai` (string)

### GET `/customers` (Admin/Employee Only)
Retrieves all consumer accounts.

### GET, PATCH, DELETE `/customers/:id`
Retrieves, updates, or soft-deletes a localized user block. `id` expects a valid MongoId string.

---

## 3. Product Catalog (`/products`)

### POST `/products` (Admin/Employee Only)
Creates a new Product tree containing its associated variants.
**Payload Required**:
- `ten_san_pham` (string)
- `bien_the` (array of objects):
  ```json
  [
    {
      "mau_sac": "Red",
      "kich_co": "L",
      "gia_ban": 100,
      "so_luong_ton": 50
    }
  ]
  ```

### GET `/products`
Fetches active inventory listings.

### GET, PATCH, DELETE `/products/:id`
Fetch or mutate an existing item globally.

---

## 4. Shopping Cart (`/carts`)

### POST `/carts`
Initializes a new cart for a user.
**Payload**:
- `ma_khach_hang` (string: MongoId)
- `items`: Array specifying `ma_sp_chi_tiet` (variant ID) and `so_luong` (quantity).

### GET, PATCH, DELETE `/carts/:id`
Syncs items into or removes a Cart completely depending on the order state.

---

## 5. Orders (`/orders`)
Aggregates cart data into resilient transactional states.

### POST `/orders`
Issues a new Order logic.
**Payload Required**:
- `ma_khach_hang` (string: MongoId)
- `chi_tiet_don_hang`: Snapshot of items purchased alongside their static `gia_goc` (base price) and `thanh_tien` (final price).

### GET `/orders`
Fetch order histories.

---

## 6. Management Resources
The system actively supports broad configurations managed primarily by Staff.

- **Employees**: `GET/POST/PATCH/DELETE /employees`
- **Admins**: `GET/POST/PATCH/DELETE /admins`
- **Invoices**: `GET/POST/PATCH/DELETE /invoices` (Embeds static `chi_tiet_hoa_don`)
- **Promotions**: `GET/POST/PATCH/DELETE /promotions`
- **Reviews**: `GET/POST/PATCH/DELETE /reviews`
- **Support Claims**: `GET/POST/PATCH/DELETE /support`

---

## 7. HTTP Status Code Conventions
- `200 OK`: Request succeeded.
- `201 Created`: Resource instantiated successfully.
- `400 Bad Request`: Validation failure globally intercepted via `class-validator` decorators.
- `401 Unauthorized`: Rejection caused by a missing, expired, or corrupted JWT token.
- `403 Forbidden`: Passed Authentication, but rejected by Custom `@Roles()` Guard.
- `404 Not Found`: Triggered actively by Service-level logic if an ID lookup fails.
