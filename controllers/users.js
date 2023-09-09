const User = require('../models/user')

module.exports.renderRegister = (req, res) => {
    res.render('users/register')
}

module.exports.register = async (req, res, next) => {

    try {

    const {creditcard, expiration, cvc} = req.body

    if (/^\d+$/.test(creditcard) == false || /^\d+$/.test(expiration) == false || /^\d+$/.test(cvc) == false) {
        throw new Error('Credit card info must have valid characters!')
    }

    const { email, username, password } = req.body
    const user = new User({ email, username })
    const registeredUser = await User.register(user, password)
    
    req.login(registeredUser, err => {
        if (err) return next(err)
        req.flash('success', 'Welcome to Zorgon Ecommerce!')
        res.redirect('/electronics')
    })
    
    } catch(e) {
        req.flash('error', e.message)
        res.redirect('/register')
    }
    
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login')
}

module.exports.login = (req, res) => {
    req.flash('success', 'You have signed into the app!')
    const redirectUrl = res.locals.returnTo || '/electronics'
    res.redirect(redirectUrl)
}

module.exports.logout = (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err) }
      req.flash('error', "You have logged out of app!")
      res.redirect('/electronics')
    })
}