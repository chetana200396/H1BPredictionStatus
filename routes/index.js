const visaApprovalRoutes = require('./visaApproval');
const startRoutes = require('./start');

const constructorMethod = (app) => {
    app.get('/', startRoutes);
    app.use('/visaApproval', visaApprovalRoutes)
    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
    });
};

module.exports = constructorMethod;