//dummy starter code for nodejs code modularization

var appRouter = function(app) {
 app.get("/mongodb", function(req, res) {
    res.send("Inside Mongo DB calls");
});
}
 
module.exports = appRouter;