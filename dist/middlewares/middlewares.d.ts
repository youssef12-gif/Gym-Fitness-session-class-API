import type { Request, Response, NextFunction } from "express";
export declare const checkuserInfoSignUp: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare const checkuserInfoSignIn: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare const checkClassSessionInfo: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare const validateTrainerOnly: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
export declare const validateMemberOnly: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
export declare const compareTrainerNames: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare const validateToken: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
//# sourceMappingURL=middlewares.d.ts.map