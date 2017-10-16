import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './game.css';
class Game extends Component {

    constructor() {
        super()
        this.state = {
            num: 0,
            sX: 0,
            sY: 0,
            emitW: 0,
            emitH: 0,
            emitX: 0,
            emitY: 0,
            score: 0,
            isCollide: false,
            isPause: false
        }
        // 定时器
        this.enemyTime = null;
        this.CollideTime = null;
        this.bulletTime = null;
        // 元素数组
        this.lifes = [];
        // 获取元素
        this.emitEl;
        this.bulletEle;
        this.enemyEle;
        this.lifeEle;
        this.scoreEle;
    }
    componentDidMount() {
        let cX = document.documentElement.clientWidth;
        let cY = document.documentElement.clientHeight;
        this.emitEle = this.refs.emitEle;
        this.bulletEle = this.refs.bulletEle;
        this.enemyEle = this.refs.enemyEle;
        this.lifeEle = this.refs.lifeEle;
        this.scoreEle=this.refs.scoreEle ;
        this.setState({
            sX: cX,
            sY: cY,
            emitW: this.emitEle.getBoundingClientRect().width,
            emitH: this.emitEle.getBoundingClientRect().height
        })
        this.start(0, cX, cX);
    }
    // 开始游戏
    start(num, sX, sY) {
        this.EnemyDrop(num, sX, sY, this.refs.enemyEle);
        if (!this.lifes.length) {
            this.LifeCreate();
        }
        this.CollideTime = setInterval(this.Collide.bind(this), 10);
    }
    // 发射子弹枪移动
    EmitMove(e) {
        clearInterval(this.bulletTime);
        let _this = this;
        let disX = e.clientX - this.emitEle.getBoundingClientRect().left,
            disY = e.clientY - this.emitEle.getBoundingClientRect().top;
        this.CreateBullet(this.bulletEle);
        document.onmousemove = function (e) {
            _this.emitEle.style.left = e.clientX - disX + 'px';
            _this.emitEle.style.top = e.clientY - disY + 'px';
            _this.setState({
                emitX: _this.emitEle.getBoundingClientRect().left,
                emitY: _this.emitEle.getBoundingClientRect().top
            })
            _this.borderJudge();
        }
    }
    // 产生子弹
    CreateBullet(bulletEle) {
        this.bulletTime = setInterval(() => {
            new this.bulletFun(this.state.emitX + this.state.emitW/2 - 15, this.state.emitY, 'bullet.png', bulletEle);
        }, 300)
    }

    // 产生敌机
    EnemyDrop(num, sX, sY, enemyEle) {
        this.enemyTime = setInterval(() => {
            var randomX;
            if (num % 5 == 0) {
                randomX = Math.floor(Math.random() * (sX - 90));
                new this.EnemyFun(randomX, sY, 90, 90, `md${Math.ceil(Math.random() * 6)}.png`, enemyEle);
            } else if (num == 20) {
                randomX = Math.floor(Math.random() * (sX - 160));
                new this.EnemyFun(randomX, sY, 120, 120, `lg${Math.ceil(Math.random() * 2)}.png`, enemyEle);
                this.setState({
                    num: 0
                })
            } else {
                randomX = Math.floor(Math.random() * (sX - 60));
                new this.EnemyFun(randomX, sY, 60, 60, `sm${Math.ceil(Math.random() * 7)}.png`, enemyEle);
            }
            this.setState({
                num: this.state.num++
            })
        }, 500)
    }
    // 碰撞
    Collide() {

        let bullets = this.bulletEle.getElementsByTagName('img');
        let enemys = this.enemyEle.getElementsByTagName('img');
        this.lifes = this.lifeEle.getElementsByTagName('img');
        // 子弹和敌机相撞
        for (var j = 0; j < bullets.length; j++) {
            for (var i = 0; i < enemys.length; i++) {
                var bulletR = bullets[j].offsetLeft + bullets[j].offsetWidth,
                    bulletB = bullets[j].offsetTop + bullets[j].offsetHeight,
                    itemR = enemys[i].offsetLeft + enemys[i].offsetWidth,
                    itemB = enemys[i].offsetTop + enemys[i].offsetHeight;

                if (bulletR < enemys[i].offsetLeft || bulletB < enemys[i].offsetTop || bullets[j].offsetLeft > itemR || bullets[j].offsetTop > itemB) {
                    // M没有碰撞

                } else {
                    this.setState({
                        score: this.state.score + 10
                    })
                    this.scoreEle.innerHTML = this.state.score;
                    this.enemyEle.removeChild(enemys[i]);
                }
            }
        }
        // 敌机和本机相撞
        for (var i = 0; i < enemys.length; i++) {
            var moveR = this.emitEle.offsetLeft + this.emitEle.offsetWidth,
                moveB = this.emitEle.offsetTop + this.emitEle.offsetHeight,
                itemR = enemys[i].offsetLeft + enemys[i].offsetWidth,
                itemB = enemys[i].offsetTop + enemys[i].offsetHeight;
            if (itemR < this.emitEle.offsetLeft || enemys[i].offsetLeft > moveR || itemB < this.emitEle.offsetTop || enemys[i].offsetTop > moveB) {

            } else {
                this.enemyEle.removeChild(enemys[i]);
                this.setState({
                    isCollide: true
                })
                setTimeout(() => {
                    this.setState({
                        isCollide: false
                    })
                }, 400);
                if(this.lifes.length>1){
                    this.lifes[this.lifes.length - 1].src = require('../../assert/images/die.png');
                    setTimeout(() => {
                        this.lifeEle.removeChild(this.lifes[this.lifes.length - 1]);
                    
                }, 400)
                }else  if (this.lifes.length <= 1) {
                    this.GameOver();
                }

            }
        }
    }
    // 本方飞机边界判断
    borderJudge() {
        let mleft = this.state.emitX,
            mtop = this.state.emitY,
            mwidth = this.state.emitW,
            mheight = this.state.emitH,
            cX = this.state.sX,
            cY = this.state.sY;
        console.log(cY, mheight);
        // 左边
        if (mleft < 0) {
            this.emitEle.style.left = 0;
            this.setState({
                emitX: 0
            })
        } else if (mleft + mwidth > cX) {   // 右边
            this.emitEle.style.left = cX - mwidth + 'px';
            this.setState({
                emitX: cX - mwidth
            })
        } else if (mtop < 0) {
            this.emitEle.style.top = 0;
            this.setState({
                emitY: 0
            })
        } else if (mtop + mheight > cY) {
            this.emitEle.style.top = cY - mheight + 'px';
            this.setState({
                emitY: cY - mheight
            })
        }
    }
    // 游戏结束
    GameOver() {
        this.enemyEle.innerHTML = null;
        this.Stop();
        // this.Collide=null;
        this.props.history.push({ pathname: '/gameover', state: { score: this.state.score } });   // js 动态路由跳转 并传参

    }
    // 暂停游戏
    pauseFun() {
        this.setState({
            isPause: true
        })
        this.Stop();
    }
    // 继续游戏
    ContinueFun(e) {
        this.setState({
            isPause: false
        })
        this.start(this.state.num, this.state.sX, this.state.sY);

        this.emitEle.style.left = e.clientX - 62 + 'px';
        this.emitEle.style.top = e.clientY - 62 + 'px';
        this.EmitMove(e);
    }
    // 停止
    Stop() {
        clearInterval(this.enemyTime);
        clearInterval(this.CollideTime);
        clearInterval(this.bulletTime);
        document.onmousemove = null;
    }

    // 创建敌机类
    EnemyFun(x, y, sizeW, sizeH, imgSrc, enemyEle) {
        this.enemyLeft = x + 'px';
        this.enemyWidth = sizeW + 'px';
        this.enemyHeight = sizeH + 'px';
        this.enemy = null;

        this.init = function () {
            this.enemy = document.createElement('img');
            this.enemy.src = require('../../assert/images/' + imgSrc);
            this.enemy.style.left = this.enemyLeft;
            this.enemy.style.width = this.enemyWidth;
            this.enemy.style.height = this.enemyHeight;
            enemyEle.appendChild(this.enemy);
            this.enemyMove();
        }

        this.enemyMove = function () {
            setInterval(() => {
                this.enemy.style.top = this.enemy.offsetTop + 16 + 'px';
                if (this.enemy.offsetTop > y) {

                    enemyEle.removeChild(this.enemy);
                }
            }, 100)
        }
        this.init();
    }
    //创建子弹类
    bulletFun(bulletX, bulletY, imgSrc, bulletEle) {
        this.bulletLeft = bulletX + 'px';
        this.bulletTop = bulletY + 'px';
        this.bullet = null;
        this.init = function () {
            this.bullet = document.createElement('img');
            this.bullet.src = require('../../assert/images/' + imgSrc);
            this.bullet.style.left = this.bulletLeft;
            this.bullet.style.top = this.bulletTop;
            bulletEle.appendChild(this.bullet);
            this.bulletMove();
        }
        this.bulletMove = function () {
            setInterval(() => {
                this.bullet.style.top = this.bullet.offsetTop - 24 + 'px';
                if (this.bullet.offsetTop < 0) {
                    bulletEle.removeChild(this.bullet);
                }
            }, 50)

        }
        this.init();
    }
    //创建生命
    LifeCreate() {
        let lifeEle = this.refs.lifeEle;
        for (var i = 0; i < 5; i++) {
            var createImg = document.createElement('img');
            createImg.src = require('../../assert/images/life.png');
            lifeEle.appendChild(createImg);
        }
    }


    render() {
        return (
            <div className="game-warp" style={{ height: this.props.screenY }}>
                <div id="enemy" ref="enemyEle"></div>
                <div id="bullet" ref="bulletEle"></div>
                <div id="emit" onClick={this.EmitMove.bind(this)} ref="emitEle">
                    <img src={require(`../../assert/images/${this.state.isCollide ? "info.png" : "img_item.png"}`)} />
                </div>
                <div className="top-left" ref="lifeEle"> </div>
                <div className="top-right clearfix">
                    <div className="score" ref="scoreEle">0</div>
                    <div className="pauseBtn" onClick={this.pauseFun.bind(this)}>
                        <img src={require('../../assert/images/pause.png')} />
                    </div>
                </div>
                {this.state.isPause ? <div className="shade pause" style={{ height: this.props.screenY }}>
                    <a href="javascript:;" onClick={this.ContinueFun.bind(this)}>继续游戏</a>
                    <Link to="/">退出游戏</Link>
                </div> : ''}

            </div>
        )
    }
}
export default Game;