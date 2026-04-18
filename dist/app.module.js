"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const customer_module_1 = require("./modules/customer/customer.module");
const employee_module_1 = require("./modules/employee/employee.module");
const product_module_1 = require("./modules/product/product.module");
const admin_module_1 = require("./modules/admin/admin.module");
const cart_module_1 = require("./modules/cart/cart.module");
const order_module_1 = require("./modules/order/order.module");
const promotion_module_1 = require("./modules/promotion/promotion.module");
const invoice_module_1 = require("./modules/invoice/invoice.module");
const support_module_1 = require("./modules/support/support.module");
const review_module_1 = require("./modules/review/review.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce'),
            customer_module_1.CustomerModule,
            employee_module_1.EmployeeModule,
            product_module_1.ProductModule,
            admin_module_1.AdminModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
            promotion_module_1.PromotionModule,
            invoice_module_1.InvoiceModule,
            support_module_1.SupportModule,
            review_module_1.ReviewModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map