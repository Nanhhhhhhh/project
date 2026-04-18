import { Model } from 'mongoose';
import { AdminDocument } from './schemas/admin.schema';
export declare class AdminService {
    private adminModel;
    constructor(adminModel: Model<AdminDocument>);
}
