## **1\. Bảng sản phẩm (loai\_san\_pham)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_san\_pham | int | PK, Auto Increment |
| ten\_san\_pham | nvarchar(200) | Tên sản phẩm |
| mo\_ta | text | Mô tả sản phẩm |
| gioi\_tinh | tinyint | 1: Nam, 2: Nữ, 3: Unisex |
| danh\_muc | nvarchar(100) | Áo, Quần, Váy, Phụ kiện |
| trang\_thai | tinyint | 1: Còn kinh doanh, 0: Ngừng kinh doanh |

---

## **2\. Bảng biến thể sản phẩm (san\_pham\_chi\_tiet)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_sp\_chi\_tiet | int | PK, Auto Increment |
| ma\_san\_pham | int | FK → san\_pham(ma\_san\_pham) |
| mau\_sac | nvarchar(50) | Màu sắc |
| kich\_co | nvarchar(10) | S, M, L, XL, XXL |
| gia\_ban | decimal(18,0) | Giá bán hiện tại |
| so\_luong\_ton | int | Tồn kho |
| hinh\_anh | varchar(255) | URL ảnh biến thể |

---

## **3\. Bảng khách hàng (khach\_hang)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_khach\_hang | int | PK, Auto Increment |
| ho\_ten | nvarchar(100) | Họ và tên |
| email | varchar(100) | Email đăng nhập, unique |
| mat\_khau | varchar(255) | Mật khẩu  |
| so\_dien\_thoai | varchar(15) | Số điện thoại |
| ngay\_dang\_ky | datetime | Ngày đăng ký |
| trang\_thai | tinyint | 1: Hoạt động, 0: Khóa |

## **4\. Bảng nhân viên (nhan\_vien)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_nhan\_vien | int | PK, Auto Increment |
| ho\_ten | nvarchar(100) | Họ và tên |
| email | varchar(100) | Email, unique |
| mat\_khau | varchar(255) | Mật khẩu  |
| so\_dien\_thoai | varchar(15) | Số điện thoại |
| dia\_chi | varchar(200) | Địa chỉ nhà |
| ngay\_tao | date | Ngày vào làm |
| vai tro | varchar | Chức vụ  |
| trang\_thai | tinyint | 1: Đang làm, 0: Đã nghỉ |

## **5\. Bảng quản trị (quan\_tri)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_admin | int | PK |
| ho\_ten | nvarchar(100) | Họ và tên |
| email | varchar(100) | Email, unique |
| mat\_khau | varchar(255) | Mật khẩu  |
| ngay\_tao | datetime | Ngày tạo |

## **6\. Bảng `gio_hang` (thêm `ngay_tao`)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_gio\_hang | int | PK, Auto Increment |
| ma\_khach\_hang | int | FK → khach\_hang(ma\_khach\_hang), UNIQUE |
| ngay\_tao | datetime | Ngày tạo giỏ hàng, DEFAULT CURRENT\_TIMESTAMP |

## **7\. Bảng chi tiết giỏ hàng (gio\_hang\_chi\_tiet)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_chi\_tiet | int | PK |
| ma\_gio\_hang | int | FK  |
| ma\_sp\_chi\_tiet | int | FK  |
| so\_luong | int | Số lượng |

## **8\. Bảng đơn hàng (don\_hang\_chi\_tiet)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_chi\_tiet\_dh | int | PK |
| ma\_don\_hang | int | FK  |
| ma\_sp\_chi\_tiet | int |  |
| ma\_khuyen\_mai | int |  |
| so\_luong | int |  |
| gia\_goc | decimal |  |
| giam\_gia | decimal |  |
| thanh\_tien | decimal |  |

## **9\. Bảng chi tiết đơn hàng (Don\_hang)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_don\_hang | int | PK, Auto Increment |
| ma\_gio\_hang | int | FK → gio\_hang(ma\_gio\_hang) |
| ma\_khach\_hang | int | FK → khach\_hang(ma\_khach\_hang) \-  |
|  ngay\_dat | datetime | ngày đặt hàng  |

## 

| phuong\_thuc\_thanh\_toan | tinyint | 1: COD, 2: Chuyển khoản |
| :---- | :---- | :---- |
| trang\_thai\_thanh\_toan | tinyint | 1: Chưa TT, 2: Đã TT |
| trang\_thai\_don\_hang | tinyint | 1: Chờ XN, 2: Đã XN, 3: Đang giao, 4: Đã giao, 5: Đã hủy |
| dia\_chi\_nhan | text | Địa chỉ nhận hàng |
| ghi\_chu | text | Ghi chú |

## 

| phi\_van\_chuyen | decimal(18,0) | Phí ship |
| :---- | :---- | :---- |
| giam\_gia | decimal(18,0) | Tiền giảm giá |
| tong\_tien\_hang | decimal |  |
| thanh\_tien | decimal |  |

## **10\. Bảng khuyến mãi (khuyen\_mai)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_khuyen\_mai | int | PK, Auto Increment |
| ten\_chuong\_trinh | nvarchar(200) | Tên chương trình |
| ma\_giam\_gia | varchar(50) | Mã giảm giá (VD: SALE20), UNIQUE |
| mo\_ta | nvarchar(500) | Mô tả |
| ngay\_bat\_dau | datetime | Ngày bắt đầu |
| ngay\_ket\_thuc | datetime | Ngày kết thúc |
| trang\_thai | tinyint | 1: Đang áp dụng, 0: Ngừng |

---

## **11\. Bảng chi tiết khuyến mãi (**khuyen\_mai\_san\_pham**)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_km\_chi\_tiet | int | PK, Auto Increment |
| ma\_khuyen\_mai | int | FK → khuyen\_mai(ma\_khuyen\_mai) |
| ma\_san\_pham | int | FK → san\_pham(ma\_san\_pham) \- Có thể NULL nếu áp dụng toàn bộ |
| loai\_giam | tinyint | 1: Giảm %, 2: Giảm tiền mặt |
| gia\_tri\_giam | decimal(18,0) | Giá trị giảm (20% hoặc 50,000đ) |
| don\_toi\_thieu | decimal(18,0) | Đơn hàng tối thiểu để áp dụng (0 nếu không yêu cầu) |
| so\_lan\_dung\_toi\_da | int | Số lượt sử dụng tối đa (0 nếu không giới hạn) |
| da\_dung | int | Số lượt đã sử dụng |

## **Bảng `hoa_don`** 

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_hoa\_don | int | PK, Auto Increment |
| ma\_don\_hang | int | FK → don\_hang(ma\_don\_hang) |
| so\_hoa\_don | varchar(50) | Số hóa đơn, UNIQUE |
| ngay\_xuat | datetime | Ngày xuất hóa đơn |
| tong\_tien | decimal(18,0) | Tổng tiền |

---

## **Bảng `chi_tiet_hoa_don`** 

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_chi\_tiet\_hd | int | PK, Auto Increment |
| ma\_hoa\_don | int | FK → hoa\_don(ma\_hoa\_don) |
| ma\_bien\_the | int | FK → bien\_the\_san\_pham(ma\_bien\_the) |
| ten\_san\_pham | nvarchar(200) | Tên sản phẩm (chốt) |
| mau\_sac | nvarchar(50) | Màu sắc (chốt) |
| kich\_co | nvarchar(10) | Kích thước (chốt) |
| so\_luong | int | Số lượng |
| don\_gia | decimal(18,0) | Đơn giá |

## **13\. Bảng hỗ trợ (ho\_tro)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_yeu\_cau | int | PK |
| ma\_khach\_hang | int | FK → khach\_hang(ma\_khach\_hang) \- Người gửi yêu cầu |
| ma\_don\_hang | int | FK → don\_hang(ma\_don\_hang) \- Đơn hàng liên quan (có thể NULL) |
| ngay\_gui\_yeu\_cau | datetime | Ngày gửi yêu cầu |
| noi\_dung | text | Nội dung yêu cầu |
| ma\_nhan\_vien\_xu\_ly | int | FK → nhan\_vien(ma\_nhan\_vien) \- Nhân viên xử lý (có thể NULL nếu chưa xử lý) |
| ma\_admin\_xu\_ly | int | FK → quan\_tri(ma\_admin) \- Quản trị xử lý (có thể NULL) |
| trang\_thai | tinyint | 1: Đã xử lý, 0: Chưa xử lý |

## **14\. Bảng đánh giá sản phẩm (danh\_gia\_san\_pham)**

| Tên cột | Kiểu dữ liệu | Mô tả |
| :---- | :---- | :---- |
| ma\_danh\_gia | int | PK, Auto Increment |
| ma\_khach\_hang | int | FK → khach\_hang |
| ma\_sp\_chi\_tiet | int | FK → bien\_the\_san\_pham(ma\_bien\_the) |
| ma\_don\_hang | int | FK → don\_hang(ma\_don\_hang) |
| so\_sao | int | 1-5 |
| binh\_luan | text | Nội dung đánh giá |
| ngay\_danh\_gia | datetime | Ngày đánh giá |
| trang\_thai | tinyint |  |

