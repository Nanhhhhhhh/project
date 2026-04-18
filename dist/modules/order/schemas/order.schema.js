"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailSchema = exports.OrderDetail = exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = __importStar(require("mongoose"));
let Order = class Order {
    ma_gio_hang;
    ma_khach_hang;
    phuong_thuc_thanh_toan;
    trang_thai_thanh_toan;
    trang_thai_don_hang;
    dia_chi_nhan;
    ghi_chu;
    phi_van_chuyen;
    giam_gia;
    tong_tien_hang;
    thanh_tien;
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Order.prototype, "ma_gio_hang", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Order.prototype, "ma_khach_hang", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], Order.prototype, "phuong_thuc_thanh_toan", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], Order.prototype, "trang_thai_thanh_toan", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], Order.prototype, "trang_thai_don_hang", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "dia_chi_nhan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "ghi_chu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "phi_van_chuyen", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "giam_gia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "tong_tien_hang", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "thanh_tien", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'ngay_dat', updatedAt: false } })
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
let OrderDetail = class OrderDetail {
    ma_don_hang;
    ma_sp_chi_tiet;
    ma_khuyen_mai;
    so_luong;
    gia_goc;
    giam_gia;
    thanh_tien;
};
exports.OrderDetail = OrderDetail;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], OrderDetail.prototype, "ma_don_hang", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant', required: true }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], OrderDetail.prototype, "ma_sp_chi_tiet", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Promotion' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], OrderDetail.prototype, "ma_khuyen_mai", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "so_luong", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "gia_goc", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "giam_gia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "thanh_tien", void 0);
exports.OrderDetail = OrderDetail = __decorate([
    (0, mongoose_1.Schema)()
], OrderDetail);
exports.OrderDetailSchema = mongoose_1.SchemaFactory.createForClass(OrderDetail);
//# sourceMappingURL=order.schema.js.map