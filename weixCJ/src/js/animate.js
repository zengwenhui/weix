function getStyle(dom,value){  //��ȡcss������ʽ
				if(window.getComputedStyle){  //��׼ģʽ
					return getComputedStyle(dom,null)[value];
				}else{                        //IEģʽ
					return dom.currentStyle[value];
				}
			}   //�˶�����  �β�Ϊ�ڵ����
			/*
			domΪҪ�����Ľڵ����
			dataobjΪҪ�˶������ԵĽ������˶�����Ҫ����ı߽�����Ϊ��ֵ�����ɵĶ���
			  {
			  	width:600,height:600,opacity:1,left:200
			  }
			time:��ʱ��ʱ��
			fn������������ִ�еĳ���  
			 * */
			function animate(dom,dataobj,time,fn){
			clearInterval(dom.termId);  //���ÿ���ڵ����Ķ�ʱ����ʶ
			dom.termId =setInterval(function(){  //������ʱ��  ͬʱ��ÿ���ڵ����һ�����еĶ�ʱ����ʶ
					//var temp = 10;    //����
					var flg = true;
                    for(var item in dataobj){   //ѭ������ÿ�����Ժ��伫��ֵ �����˶�
                    	//�Ƿ���͸��������
						if(item=="opacity"){  
					        var currentvalue = getStyle(dom,item)*100  //��ȡ͸�������Գ�100
				         }else{   //��ȡ��������  
					        var currentvalue = parseInt(getStyle(dom,item));
				        }
						var temp = (dataobj[item]-currentvalue)/10;
						if(temp>0){
						  temp = Math.ceil(temp);
						}else{
						  temp = Math.floor(temp);
						}
				        /*�ж��Ƿ�����ﵽĿ������*/
						if(currentvalue==dataobj[item]) {
						  
						  continue;//����������Ҫִ�еĳ���
						}
						flg = false; //��������һ������û�дﵽ�˶�����ʱ  �����ᱻִ��
						//�ı���ص���ʽ����
						if(item=="opacity"){  //͸���ȵĴ�����
							currentvalue = currentvalue + temp;
							dom.style["opacity"] = currentvalue/100;   //��׼�������д��
							dom.style["filter"] = "alpha(opacity=" + currentvalue  + ")"
						}else{                     //��͸���ȵĴ�����
							 currentvalue = currentvalue+temp;
							 dom.style[item] = currentvalue + "px";
						}
					}
                    if(flg){  //�ж��Ƿ�û��ִ��  �������Զ�û��ִ�д����������˶�Ҫ��  ������ʱ��
                    	clearInterval(dom.termId)
                    	if(fn){
                    		fn();
                    	}
                    }
					    },time)
				    
            }