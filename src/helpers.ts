import { Request, Response, NextFunction } from 'express';

// !HELPERS //

/* Catch async errors when awaiting promises */

export function runAsync(callback: Function) {
	return (req: Request, res: Response, next: NextFunction) => {
		callback(req, res, next).catch(next);
	};
}
