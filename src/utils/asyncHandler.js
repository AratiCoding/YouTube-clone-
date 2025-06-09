const asyncHandler=(requestHandler)=>{
    return  (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}

// const asyncHandler = (fun) => {()=>{}}  (for understanding it is as follows)
// const asyncHandler=(fun)=>async(req,res,next)=>{
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }   