import { Model } from 'mongoose';
import { SupportDocument } from './schemas/support.schema';
export declare class SupportService {
    private supportModel;
    constructor(supportModel: Model<SupportDocument>);
}
