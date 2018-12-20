export function store(req, res){
  req.flash('form', req.body.first_name + ', you are true hero.');
  res.redirect('/');
}

export function normalizeData(req, res, next) {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');

    next();
}