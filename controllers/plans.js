const PlanMessage = require( '../models/planMessage');
//working
exports.getPlanMessageById = (req,res,next,id)=>{
    PlanMessage.findById(id).exec((err,plan)=>{
           if(err ||  !plan){
               return res.status(400).json({
                   error : "Plan not present in database"
               })
           }
           req.planmessage = plan;
           next();
        })    
}
//working
exports.getPlanMessage = (req,res) => {
    return res.json(req.planmessage)
 }
 //working
 exports.getAllPlans = (req,res) => {
     PlanMessage.find({}).exec((err,plans)=>{
         if(err){
             return res.status(400).json({
                 error : "Unable to find plans in database"
             })
         }
          res.json(plans)
     })   
 }
//working
exports.createPlan = (req,res) => {
    const { plan, validity, data, SMS, cost} = req.body;
    const newPlanMessage = new PlanMessage({ plan, validity, data, SMS, cost})
    newPlanMessage.save((err,newplanmessage)=>{
        if(err){
            console.log(err)
            return res.status(400).json({
                error : "Unable to save plan to database"
            })}
        res.json({
            newplanmessage});
    })
}
// working
exports.updatePlan = (req,res) => {
    const planmessage = req.planmessage;
    planmessage.plan = req.body.plan;
    planmessage.validity = req.body.validity;
    planmessage.data = req.body.data;
    planmessage.SMS = req.body.SMS;
    planmessage.cost= req.body.cost;
    planmessage.save((err,updatedPlan)=>{
        if(err){
            console.log(err)
            return res.status(400).json({
                error : "Failed to update plan in database"
            })
        }
        res.json(updatedPlan)
    })
}

//working
exports.deletePlan = (req,res) => {
    const planmessage = req.planmessage;
    planmessage.remove((err,deletedPlan)=>{
        if(err){
            return res.status(400).json({
                error : "Unable to delete plan in database"
            })
        }
        else if(!deletedPlan){
            return res.status(404).json({
                error : "No such plan exists in database"
            })
        }
        res.json({
            message : `Successfully deleted ${deletedPlan.plan}`
        })
    })
}
