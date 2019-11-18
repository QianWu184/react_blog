'use strict';

const Controller = require('egg').Controller;

// restful接口风格  get获取 post新增 put修改 delete删除
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const heroList = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js';
    const result = await ctx.curl(heroList, {
      dataType: 'json',
    });
    result.data.hero.forEach(element => {
      const name = element.alias;
      const heroImg = 'https://game.gtimg.cn/images/lol/act/img/champion/' + name + '.png';
      element.heroImg = heroImg;
    });
    ctx.body = result;
  }
  async getHero() {
    const { ctx } = this;
    const id = ctx.params.id;
    // https://game.gtimg.cn/images/lol/act/img/champion/Alistar.png
    const requireUrl = `https://game.gtimg.cn/images/lol/act/img/js/hero/${id}.js`;
    const result = await ctx.curl(requireUrl);
    ctx.body = result;
  }
}

module.exports = HomeController;
