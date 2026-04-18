import { Model } from 'mongoose';
import { ReviewDocument } from './schemas/review.schema';
export declare class ReviewService {
    private reviewModel;
    constructor(reviewModel: Model<ReviewDocument>);
}
