export class AppError extends Error {
  constructor(errorMessage, statusCode) {
    super(errorMessage);
    this.statusCode = statusCode;

    // To differentiate between operational and programming errors
    this.isOperational = true;
  }
}


const globalErrorHandler = (err, req, res, _next) => {
  console.log(`ERROR : ${req.method} : ${req.path}  `, err);
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default globalErrorHandler;



