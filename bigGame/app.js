/**
 * Created by g on 2015/1/5.
 */
_.ready(function(){
    /**/
    var i=0;
    var dieCount=0;
    /*初始化2d游戏引擎*/
    _.engine.initCanvas("canvas_box",320,320);
    /*新建一个场景*/
    var screen=_.engine.create_screen();

    /*新建一个时间文本
     var time_text=_.engine.create_text("time",100,100);
     time_text.setText(0);
     time_text.setSize(50);
     time_text.setColor("#f00");
     time_text.setUpdate(function(){
     this.setText(this.getText()+1);
     })
     */
    /*向场景添加时间文本*/
    //screen.add(time_text);



    var ok_text=_.engine.create_text("life",220,20);
    ok_text.setColor("#f00");
    ok_text.setSize(20);
    ok_text.setText("ok:"+dieCount);
    screen.add(ok_text);

    /*新建一个玩家精灵*/
    var player=_.engine.create_sprite("player",160,280,50,50,"data:image/png;base64,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");
    player.setLife(3);//设置生命值
    player.setUpdate(function(){
        /*
         _.c.fillStyle = "#F00";
         _.c.beginPath();
         _.c.arc(this.x, this.y, 15, 0, Math.PI * 2, 1);
         _.c.closePath();
         _.c.fill();
         */
    }).setDie(function(){

    });
    /*添加玩家精灵到场景*/
    screen.add(player);

    var life_text=_.engine.create_text("life",10,20);
    life_text.setColor("#f00");
    life_text.setSize(20);
    life_text.setText("life:"+player.life);
    screen.add(life_text);

    /* 设置游戏逻辑 */
    _.engine.setGameLoop(function(){
        //game code here
        /* 显示玩家精灵生命值 */
        life_text.setText("life:"+player.life);
        /*添加敌人精灵到场景*/
        if(_.timer>=100){
            _.timer=0;
            screen.add(_.engine.create_sprite("blue",Math.floor(Math.random()* _.canvas_w),50,48,48,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAwAAAAMADO7oxXAAAKRklEQVRo3u2Ye1DU1xXHz0+eKhTdBbRKBWUQ1CSlKujUGKNpNB3diSQax1FKGh9paKpjTDJKNJ066FijE1FDjNLMiMRGRSNSnbikJRIJyMNJIQIJEVFiFGHl4bLLLrt8+oe//ZWXEtEx7Yxn5s78fvece+733HvOuedekYf0kB7S/zUp91MZ4C8iM0RkotPpHNPa2jpEURRH//79ryqKUi4ixSKSoyiK6X7N6X6fgI8UkTWlpaVzP/nkk8Dc3FypqakRi8UiiqKIj4+PBAcHy5QpU2TOnDm1QKaIbFEUpfJ+LmBfwf++rKysbsGCBXh4eCAid2weHh7MmzePc+fONQB/+qnBrz98+DCDBw/uFXjXNnDgQFJSUgC2/1TgYw8cOICiKJ2AuYmQKMI/RHhahPkiFImw7jaGJCUlAax+0OD9q6qqagcNGtQNkJcIl0RABKcIDvX7wG0M8PT0pLi4uEWNowdmwLLVq1ff1j2mi9CkAkeEH0QIuYM7LVy4EGDDAzPAZrNljB49+o4+PlndiUYRJvUSD3q9HpPJlN8XLH1Ko83Nzf51dXV3lMkXkWki4ici/+5dn5hMJj3gpiiK826w9PuxgkCI69vHx+emn59fr2OqfwR4EREvLy/x9fVtcYEHfn7fDABmm83mnC+++KIMOAQM8Pb2Tn/22WfvZqHuSDNnzpQhQ4acBBQg6dy5c+U3b948Dczus1JgksPhyEpNTWXMmDGICHFxcbS1tWUDL6alpd117r9dU1PpMiDtrbfeQkSIiIggNTUVh8ORBUy6G+BDgd1Go9EeHR3dbTKDwcD58+cJDw/vxtPpdBgMBt555x1OnjxJXl4e+fn5GI1GkpOTWbhwIUFBQd3GjRgxgu+++84ZHx/fjRcdHY3RaGwDPujVtYA/VFVVXY6Njb3jig0YMKDT/8iRI9m5cyfff/89vVFDQwNpaWlERkZ20tHTmdKxLV68mAsXLtQA8YDSFXi40+n8bMuWLZ0UjR07lg0bNpCTk2Ndt24d3t7e3RS/9NJLmEymXoF3JYvFwhtvvNEj2CVLlnDq1Cnn22+/TUREhNbv5+fH5s2bcTgc2cBYF/joioqKuunTp3dyk4yMDEdra2smsA6YAvyxqKjoelhYmCa3atWquwbeldavX6/pCwoK4tSpU83ABnXONVar9eTRo0eds2fP1uSeeOIJvv76axPwpABbn3nmGUSEGTNmkJeX1wTsAR4DXjtz5szVwsLCaqfT+SFQ6tr68ePHY7fb79kAh8NBVFSUtuPAt0BSZWVlaX5+/mV1AX8FpOTm5jbPmjXr1kE5eTLt7e0fCvD30NBQhg8fzo0bNyqBcHVnYo4cOUK/fv0QER599FGee+457X/v3r2dgBQUFJCQkMCOHTswm83dgN68eZPt27eTkJBAcXFxJ15ycnKnsuLxxx/X3DU1NRUgVsU02mw2l4SFheHv74/Vas0Um812Mjg4mMOHDzuBp1TBR8rKypr8/Px69FE3NzfKyso0AFlZWXh5eWn8mTNnYrFYNL7ZbObJJ5/slAROnz6t8QsLC7tVtR1li4qKLEC0K71nZWW1BgQEcOPGjc+kvr7+n4mJiQDvqwIDWlpazo0fP15TEhUVxcSJE7UU6OnpSU1NjQbAYDB0m7gjwKysrG78efPmafzz589rBuh0OsaNG9cpS0VERNDY2FgO+KkYNycmJnLp0qXTYrfb8xwORy0wSGXuXr58uTZ406ZNAPuBndevX7+u1+sREXJycjQAzz//fDeAubm5Gj87O/t2FSgAmZmZiAi+vr5UVlY2AR8Cae+++25X+Y9ci9zW1naxtbW1WIAM4HcqY+HBgwe1QWvXrgVIAWLNZvOxgoKCJp1Oh4iwcuVKDUBeXh4uw0SEBQsW4HA4NL7dbicmJkbjBwQEUFRUpPHj4uK0NFlYWGi22WzpwCJg58aNG7Vx6g3uZRXrXMAowM/UjqDq6urr/v7+iAiLFi0COABMyszMZMSIEbi5uXW6iBw7dkwDUVNTw549ezh69Cjt7e00NDQQGxtLXFwcTU1NOBwO0tPT2bt3L1euXNHG7d+/X0sMot6ZQ0NDOXjwIMBTwAcuj/D19aWsrKwJCFMxB7jOAsVmsx1w5dqpU6disVgKADeHw/HRhAkTbntCxsXFYTQaqaur65Z50tPTOXLkSLf+2tpaTpw4wQsvvHBbvaGhoVit1k9FROx2++eu9Dl16lRaWlpOAG4dT2Lv8vLyKyJCcHAwV65cqQGCgGGFhYVWl1J3d3diYmLIzs62paenWzpmKS8vLyIiIpg+fToGg4Fdu3axfv161q5dS0pKCnPmzGHatGmMHj0aT0/PTuOSkpLsRqPRYTAYcHd313hZWVntQATgX19ff8FVf+Xm5jZz6w1KM0Cpr68v9PDwYM2aNQCL1f6VK1as0BSq27oLCAWOLl26FBEhJCSEYcOG/ejqU6/XayXC3LlzAU4DY4H3jx8/rmUkNXD/omKZ7QrqioqKKsCraz20JzIykuPHj1uAX4iINDc35w8fPhwRYf78+QApquzL+/bts3t4eBAZGUltbW2N2Wz+V3l5eVV2dnbjxx9/3Pbee++xbds2tm7dyo4dO0hLS3MajcbmkpKSyyaT6YzVai0xGAy4ubmxe/fuNuA1Vfe2JUuWaEF99erVCsAD8D179uz1kJAQLBbLpz1VoitWrVrFxYsXC1ynXkZGhkNE8Pb2pqKiogHQAVFGo7Hd3d2dUaNGUV1dfR0Y53JFbpXjY4BoYKraJgOPAMOBAa4AbGho+NaV79VYeRoYcPny5R9c7rlv3z6AKBGR+vr6U/Hx8QCbejJgVmlpKTabbbf6/5or+l955RWA9Wq/ISkpCRHhxIkTNuBp6SMBE/Ly8prlv4VhvNr/akJCAiJCTEwMwF9FRJxO58aSkhLNxbsqG6kmiVgREbPZ/PnQoUPx8/Ojurr6MqBX5TxNJlOpTqcjPT3dToe7ch8M8M3Jyanz8vLiwoULVzscpgPr6uoqAgMD8fHxoa6u7iu1/zcqxmiXjo534ssickZEzgB+JSUlj127dk2mTZsmwcHB+10vyoqi2HU63Z/ffPNN+eabbzxEZGxfDRCRkeXl5bply5bJqFGjNiuK0qjO0eLv77/HYDCI2WyWgoKCcDUui0WkVEQudDNAfRGYL7ceE4Zfu3ZtsIhIU1OTiEj/LhMfW758eU5YWJiISNC9GKDX6/u9/vrr34pISheepzq3VFVVeYvIGEVRGkRkTq/P84B3Y2Pj2fDwcAIDA7HZbBk9yPy6tbWV9vb2xL6iB15Vq9b5PfD+Nm7cOPR6PTU1NZcA3d0q/2VxcXFLQEAAFy9e/Iqu99BbMke49dbfVwNSgIKeeA0NDVkBAQFkZGQA/LavE7x46NAhvvzyy0YgsAd+CLD0HgxYBkzsod+jrKysMjk5GeDPfdXvUpZotVoBJt+Torubc1RrayvAgful8H3U29oDMiAKSO9WLjykh/SQHtL/HP0HhLTJupBzRPoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTAtMDItMTFUMTE6MTI6MzUtMDY6MDCNZKBnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDA5LTEwLTIwVDExOjE0OjMwLTA1OjAwaJO3YwAAAABJRU5ErkJggg==").setUpdate(function(){
                //this.x++;
                this.y++;
                if(this.y>= _.canvas_h){
                    this.life=0;
                    //_.log("die")
                }
            }).setDie(function(){
                dieCount++;
                ok_text.setText("ok:"+dieCount);
            }));
        }
        /* 添加生命值精灵 */
        if(_.life_timer>=1000){
            _.life_timer=0;
            /*添加星星到场景*/
            screen.add(_.engine.create_sprite("blue",Math.floor(Math.random()* _.canvas_w),50,48,48,"data:image/png;base64,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").setUpdate(function(){
                //this.x++;
                this.y++;
                if(this.y>= _.canvas_h){
                    this.life=0;
                    _.log("die")
                }
            }).setType("life").setDie(function(){

            }));
        }
    })
    /*新建一个渲染器*/
    var render= _.engine.create_render();
    /*渲染场景，以1000/16秒一帧的速度。*/
    render.render(screen,5);
    document.onkeydown = function (e) {
        k = e.which;
        if ((k == 39) && (player.x < 300)) {
            player.x += 5;
        }
        if ((k == 37) && (20 < player.x)) {
            player.x -= 5;
        }
    }
});
