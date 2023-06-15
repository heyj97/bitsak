import { BadRequestError, MethodNotAllowedError, NotFoundError, DatabaseError, InternalServerError, CustomError } from '../error.js';

const errorMiddleware = (error, req, res, next) => {
  //터미널 출력
  console.log('\x1b[33m%s\x1b[0m', error);

  const { statusCode, message } = error;

  res.status(statusCode).send({ message });
}

export { errorMiddleware };