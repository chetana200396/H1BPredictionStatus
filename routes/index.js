const visaApprovalRoutes = require('./visaApproval');
const startRoutes = require('./start');
const dashboardRoutes = require('./dashboard');


const constructorMethod = (app) => {
    app.get('/', dashboardRoutes);
    app.use('/start', startRoutes);
    app.use('/visaApproval', visaApprovalRoutes)
    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
    });
};

module.exports = constructorMethod;