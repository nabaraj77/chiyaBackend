//TO TALK WITH DATABASE

// const asyncHandler = () => {};
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//YO HIGHER ORDER FUNCTION HO
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(rq, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
