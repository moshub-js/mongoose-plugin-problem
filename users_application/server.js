const Koa = require('koa');
const Router = require('koa-router');
const User = require('./models/User');
const mongoose = require('mongoose');

const app = new Koa();

app.use(require('koa-bodyparser')());

const router = new Router();

router.get('/users/:id', async (ctx, next) => {
    /* if (!mongoose.isValidObjectId(ctx.params.id)) {
        ctx.throw(400, 'invalid id');
    }

    const user = await User.findOne({ _id: ctx.params.id });
    if (!user) {
        ctx.throw(404, 'no user');
    }
    ctx.body = {
        id: user._id,
        email: user.email,
        name: user.name
    }; */
});

router.get('/users', async (ctx, next) => {
    /* const users = await User.find({});
    
    ctx.body = users.map(user => ({
        id: user._id,
        email: user.email,
        name: user.name
    })); */
});

app.use(router.routes());

module.exports = app;
