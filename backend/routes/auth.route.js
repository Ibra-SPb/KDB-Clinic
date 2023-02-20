const router = require('express').Router();
const bcrypt = require ('bcrypt');
const { User } = require('../db/models');

router.post('/sign-in', async (req, res) => {

    try {
      const { email, password } = req.body;
      if (email && password) {
        let user = await User.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.password))) {
          req.session.userId = user.id;
          res.status(201).json({user});
        } else {
          res.status(403).json({ error: 'Неверный email или пароль' });
        }
      } else {
        res.status(403).json({ error: 'Заполните все поля' });
      }
    } catch ({ message }) {
      res.status(500).json(message);
    }
  });


  router.post('/sign-up', async (req, res) => {
    const {
      email, phone, name, password, password2,
    } = req.body;
    try {            
                  if (email && phone && name && password ) {
        let user = await User.findOne({ where: { email } });
        if (password !== password2) {
          return res
          .status(400)
            .json({ message: 'Пароли не совпадают', status: false });
        }
        if (!user) {
          const hash = await bcrypt.hash(password, 10);
          const newUser = await User.create({
            name,
            phone,
            email,
            password: hash,
          });
          user = {
            id: newUser.id,
            name: newUser.name,
            phone: newUser.phone,
            email: newUser.email,
          };
          req.session.userId = user.id;
          res.status(201).json({ user });
        } else {
          res.status(403).json({ error: 'Такой email уже существует' });
        }
      } else {
        res.status(403).json({ error: 'Заполните все поля' });
      }
    } catch ({ message }) {
      res.json(message);
    }
  });

  router.delete('/logout', (req, res) => {
    req.session.destroy(() =>{
      res.clearCookie('user_sid').json({ error: 'Сессия удалена' })
    })
  });



  router.get('/session', async (req,res) =>{
    try{
    if (req.session.userId){
      const actualUser = await User.findOne({
        where: {id: req.session.userId}
      })
      const user ={
        id: actualUser.id,
        name: actualUser.name,
        email:actualUser.email,
        phone:actualUser.phone,
      };
      res.status(201).json({message:'ок', user});
        }
      } catch ({message}){
        res.json({message});
      }
    })
  
  module.exports = router;












