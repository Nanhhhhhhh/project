import { Model } from 'mongoose';
import { InvoiceDocument, InvoiceDetailDocument } from './schemas/invoice.schema';
export declare class InvoiceService {
    private invoiceModel;
    private invoiceDetailModel;
    constructor(invoiceModel: Model<InvoiceDocument>, invoiceDetailModel: Model<InvoiceDetailDocument>);
}
