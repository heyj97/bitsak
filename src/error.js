//커스텀 에러

//1. 요청이 잘 못 되었을 때 - BadRequest (400)
class BadRequestError extends Error {
  status = 400;
  constructor(message) {
    super(message);
    this.name = 'Bad Request';
  }
}

// 2. 속성을 찾을 수 없을 때 - NotFoundError (404)
class NotFoundError extends Error {
  constructor(message) {
    //const message = `${resource} not found.`;
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
    Error.captureStackTrace(this, this.constructor);
  }
}

//3. 메소드가 잘 못 되었을 때 -  MethodNotAllowed (405)
class MethodNotAllowedError extends Error {
  status = 405;
  constructor(message = '사용할 수 없는 메소드입니다.') {
    super(message);
    this.name = 'Method Not Allowed';
  }
}


// 4. 서버 내부에서 오류 - InternalServerError (500)
class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InternalServerError';
    this.statusCode = 500;
    //Error.captureStackTrace(this, this.constructor);
  }
}

// 5. DB 에러 - DatabaseError (503)
class DatabaseError extends Error {
  status = 503;
  constructor(message = '데이터가 올바르지 않습니다.') {
    super(message);
    this.name = 'Database Error';
    //Error.captureStackTrace(this, this.constructor);
  }
}


//6. 커스텀 에러 - CustomError
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    //Error.captureStackTrace(this, this.constructor);
  }
}


export { BadRequestError, MethodNotAllowedError, NotFoundError, DatabaseError, InternalServerError, CustomError }
