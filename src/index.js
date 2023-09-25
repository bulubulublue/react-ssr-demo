import express from 'express'
import renderer from './helpers/renderer'

const app = express()
app.use(express.static('public'));

//这里使用了jsx语法，node环境无法识别，所以需要babel进行编译
app.get('/', (req, res) => {
    res.send(renderer())
  });
  
  app.listen(3000, () => {
    console.log('listening');
  });