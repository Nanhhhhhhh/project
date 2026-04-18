import { Model } from 'mongoose';
import { PromotionDocument, PromotionProductDocument } from './schemas/promotion.schema';
export declare class PromotionService {
    private promotionModel;
    private promotionProductModel;
    constructor(promotionModel: Model<PromotionDocument>, promotionProductModel: Model<PromotionProductDocument>);
}
