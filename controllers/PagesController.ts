export function home(req, res){
    res.render('home', {
        formMessage: req.flash('form'),
    });
};
