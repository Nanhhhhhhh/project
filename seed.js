const mongoose = require('mongoose');

async function seed() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect('mongodb://localhost:27017/ecommerce');
  console.log('Connected!');

  const db = mongoose.connection.db;
  console.log('Dropping old database to start fresh...');
  await db.dropDatabase();

  const OId = mongoose.Types.ObjectId;

  // CUSTOMERS
  const khach1 = new OId();
  const khach2 = new OId();
  await db.collection('customers').insertMany([
    { _id: khach1, ho_ten: 'Khach Hang 1', email: 'k1@gmail.com', mat_khau: 'v23r2', so_dien_thoai: '011111111', trang_thai: 1 },
    { _id: khach2, ho_ten: 'Khach Hang 2', email: 'k2@gmail.com', mat_khau: '12ef1', so_dien_thoai: '022222222', trang_thai: 1 }
  ]);

  // EMPLOYEES
  const nv1 = new OId();
  const nv2 = new OId();
  await db.collection('employees').insertMany([
    { _id: nv1, ho_ten: 'Nhan Vien 1', email: 'n1@test.com', mat_khau: '123', so_dien_thoai: '0333', vai_tro: 'Staff', trang_thai: 1 },
    { _id: nv2, ho_ten: 'Nhan Vien 2', email: 'n2@test.com', mat_khau: '123', so_dien_thoai: '0444', vai_tro: 'Manager', trang_thai: 1 }
  ]);

  // ADMINS
  const admin1 = new OId();
  const admin2 = new OId();
  await db.collection('admins').insertMany([
    { _id: admin1, ho_ten: 'Admin 1', email: 'a1@test.com', mat_khau: '123' },
    { _id: admin2, ho_ten: 'Admin 2', email: 'a2@test.com', mat_khau: '123' }
  ]);

  // PRODUCTS
  const sp1 = new OId();
  const sp2 = new OId();
  await db.collection('products').insertMany([
    { _id: sp1, ten_san_pham: 'Ao Thun Dien Tu', mo_ta: 'Ao thun LED', gioi_tinh: 3, danh_muc: 'Ao', trang_thai: 1 },
    { _id: sp2, ten_san_pham: 'Quan Jean Nhom', mo_ta: 'Quan Jean mem', gioi_tinh: 2, danh_muc: 'Quan', trang_thai: 1 }
  ]);

  // PRODUCT VARIANTS
  const var1 = new OId();
  const var2 = new OId();
  await db.collection('productvariants').insertMany([
    { _id: var1, ma_san_pham: sp1, mau_sac: 'Do', kich_co: 'M', gia_ban: 200000, so_luong_ton: 10, hinh_anh: 'red.png' },
    { _id: var2, ma_san_pham: sp2, mau_sac: 'Xanh', kich_co: 'L', gia_ban: 350000, so_luong_ton: 50, hinh_anh: 'blue.png' }
  ]);

  // CARTS
  const cart1 = new OId();
  const cart2 = new OId();
  await db.collection('carts').insertMany([
    { _id: cart1, ma_khach_hang: khach1 },
    { _id: cart2, ma_khach_hang: khach2 }
  ]);

  // CART DETAILS
  await db.collection('cartdetails').insertMany([
    { _id: new OId(), ma_gio_hang: cart1, ma_sp_chi_tiet: var1, so_luong: 2 },
    { _id: new OId(), ma_gio_hang: cart2, ma_sp_chi_tiet: var2, so_luong: 1 }
  ]);

  // ORDERS
  const order1 = new OId();
  const order2 = new OId();
  await db.collection('orders').insertMany([
    { _id: order1, ma_gio_hang: cart1, ma_khach_hang: khach1, phuong_thuc_thanh_toan: 1, trang_thai_thanh_toan: 1, trang_thai_don_hang: 1, dia_chi_nhan: 'HN', tong_tien_hang: 400000, thanh_tien: 400000 },
    { _id: order2, ma_gio_hang: cart2, ma_khach_hang: khach2, phuong_thuc_thanh_toan: 2, trang_thai_thanh_toan: 2, trang_thai_don_hang: 3, dia_chi_nhan: 'HCM', tong_tien_hang: 350000, thanh_tien: 350000 }
  ]);

  // ORDER DETAILS
  await db.collection('orderdetails').insertMany([
    { _id: new OId(), ma_don_hang: order1, ma_sp_chi_tiet: var1, so_luong: 2, gia_goc: 200000, giam_gia: 0, thanh_tien: 400000 },
    { _id: new OId(), ma_don_hang: order2, ma_sp_chi_tiet: var2, so_luong: 1, gia_goc: 350000, giam_gia: 0, thanh_tien: 350000 }
  ]);

  // PROMOTIONS
  const promo1 = new OId();
  const promo2 = new OId();
  await db.collection('promotions').insertMany([
    { _id: promo1, ten_chuong_trinh: 'Tet 2026', ma_giam_gia: 'TET26', mo_ta: 'Giam gia Tet', ngay_bat_dau: new Date(), ngay_ket_thuc: new Date(Date.now() + 86400000), trang_thai: 1 },
    { _id: promo2, ten_chuong_trinh: 'He 2026', ma_giam_gia: 'HE26', mo_ta: 'Giam gia He', ngay_bat_dau: new Date(), ngay_ket_thuc: new Date(Date.now() + 86400000), trang_thai: 1 }
  ]);

  // PROMOTION PRODUCTS
  await db.collection('promotionproducts').insertMany([
    { _id: new OId(), ma_khuyen_mai: promo1, ma_san_pham: sp1, loai_giam: 1, gia_tri_giam: 10, don_toi_thieu: 0, so_lan_dung_toi_da: 100, da_dung: 1 },
    { _id: new OId(), ma_khuyen_mai: promo2, ma_san_pham: sp2, loai_giam: 2, gia_tri_giam: 20000, don_toi_thieu: 50000, so_lan_dung_toi_da: 50, da_dung: 2 }
  ]);

  // INVOICES
  const inv1 = new OId();
  const inv2 = new OId();
  await db.collection('invoices').insertMany([
    { _id: inv1, ma_don_hang: order1, so_hoa_don: 'INV-100', tong_tien: 400000 },
    { _id: inv2, ma_don_hang: order2, so_hoa_don: 'INV-101', tong_tien: 350000 }
  ]);

  // INVOICE DETAILS
  await db.collection('invoicedetails').insertMany([
    { _id: new OId(), ma_hoa_don: inv1, ma_bien_the: var1, ten_san_pham: 'Ao Thun Dien Tu', mau_sac: 'Do', kich_co: 'M', so_luong: 2, don_gia: 200000 },
    { _id: new OId(), ma_hoa_don: inv2, ma_bien_the: var2, ten_san_pham: 'Quan Jean Nhom', mau_sac: 'Xanh', kich_co: 'L', so_luong: 1, don_gia: 350000 }
  ]);

  // REVIEWS
  await db.collection('reviews').insertMany([
    { _id: new OId(), ma_khach_hang: khach1, ma_sp_chi_tiet: var1, ma_don_hang: order1, so_sao: 5, binh_luan: 'Tuyet voi!', trang_thai: 1 },
    { _id: new OId(), ma_khach_hang: khach2, ma_sp_chi_tiet: var2, ma_don_hang: order2, so_sao: 4, binh_luan: 'Tot!', trang_thai: 1 }
  ]);

  // SUPPORTS
  await db.collection('supports').insertMany([
    { _id: new OId(), ma_khach_hang: khach1, ma_don_hang: order1, noi_dung: 'Giao thieu hang', ma_nhan_vien_xu_ly: nv1, trang_thai: 0 },
    { _id: new OId(), ma_khach_hang: khach2, ma_don_hang: order2, noi_dung: 'Hang bi loi', ma_admin_xu_ly: admin1, trang_thai: 1 }
  ]);

  console.log('Successfully inserted 2 records per collection (15 collections total)!');
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
