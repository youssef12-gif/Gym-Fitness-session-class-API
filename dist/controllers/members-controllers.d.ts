import type { Request, Response } from 'express';
export declare const availableClassSessions: (req: Request, res: Response) => Promise<void>;
export declare const bookSpot: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const cancelBooking: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=members-controllers.d.ts.map