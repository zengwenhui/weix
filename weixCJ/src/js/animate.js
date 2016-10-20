function getStyle(dom,value){  //获取css内联样式
				if(window.getComputedStyle){  //标准模式
					return getComputedStyle(dom,null)[value];
				}else{                        //IE模式
					return dom.currentStyle[value];
				}
			}   //运动函数  形参为节点对象
			/*
			dom为要操作的节点对象
			dataobj为要运动的属性的健和其运动所需要到达的边界条件为键值所构成的对象
			  {
			  	width:600,height:600,opacity:1,left:200
			  }
			time:定时的时间
			fn程序结束后进行执行的程序  
			 * */
			function animate(dom,dataobj,time,fn){
			clearInterval(dom.termId);  //清除每个节点对象的定时器标识
			dom.termId =setInterval(function(){  //启动定时器  同时给每个节点对象一个独有的定时器标识
					//var temp = 10;    //步长
					var flg = true;
                    for(var item in dataobj){   //循环遍历每个属性和其极限值 让其运动
                    	//是否是透明度属性
						if(item=="opacity"){  
					        var currentvalue = getStyle(dom,item)*100  //获取透明度属性乘100
				         }else{   //获取其他属性  
					        var currentvalue = parseInt(getStyle(dom,item));
				        }
						var temp = (dataobj[item]-currentvalue)/10;
						if(temp>0){
						  temp = Math.ceil(temp);
						}else{
						  temp = Math.floor(temp);
						}
				        /*判断是否满足达到目标条件*/
						if(currentvalue==dataobj[item]) {
						  
						  continue;//结束接下来要执行的程序
						}
						flg = false; //当有其中一个属性没有达到运动条件时  该语句会被执行
						//改变相关的样式属性
						if(item=="opacity"){  //透明度的处理方法
							currentvalue = currentvalue + temp;
							dom.style["opacity"] = currentvalue/100;   //标准浏览器的写法
							dom.style["filter"] = "alpha(opacity=" + currentvalue  + ")"
						}else{                     //非透明度的处理方法
							 currentvalue = currentvalue+temp;
							 dom.style[item] = currentvalue + "px";
						}
					}
                    if(flg){  //判断是否都没有执行  所有属性都没有执行代表其满足运动要求  结束定时器
                    	clearInterval(dom.termId)
                    	if(fn){
                    		fn();
                    	}
                    }
					    },time)
				    
            }