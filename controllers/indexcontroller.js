exports.homepage =(req, res, next) =>{
    res.render('index', { title: 'Portfolio' });
  };
  
  exports.about =(req, res, next) =>{
    res.render('about', { title: 'About Me' });
  };

  exports.contact =(req, res, next) =>{
        res.render('contact', { title: 'Contact' });
      };

  exports.projects =(req, res, next) =>{
    res.render('projects', { title: 'Project Work' });
  };

  

  exports.service =(req, res, next) =>{
    res.render('service', { title: 'Services' });
  };