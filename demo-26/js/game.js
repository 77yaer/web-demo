// JavaScript Document
$("div.nav li.txt").mouseover(function(){
	//������ƶ���ȥʱִ�е��¼�
	$(this).addClass("on").siblings().removeClass("on");//������ƶ���ȥʱ������ǰ��li�����ʽ���������liȥ����ʽ
	var le = $(this).position().left - 15;//this��ȡ��ǰ����ƶ���ȥ��.txt��position().left��ȡ.txt�������ĸ�Ԫ�ص���߾ࣻ-15ʹ.rad����.txt�����м�,���ı���
	var wid = $(this).width() + (60 - 28);//this��ȡ��ǰ����ƶ���ȥ��.txt��width()��ȡ��ǰ.txt�Ŀ��;+(60 - 28)ʹ��ȸ��������ֵĳ���
	$("div.nav li.rad").stop().animate({'left':le+'px','width':wid+'px'},500);//ʵ��.rad���ƶ�����,stop()ֹͣ��ǰ�����еĶ���
});
$("div.nav").mouseleave(function(){
	//������Ƴ�ʱ��.rad�ص����λ��
	$("div.nav li.txt").eq(0).addClass("on").siblings().removeClass("on");//������Ƴ�ʱ������һ��li�����ʽ��ȥ�������li��ʽ
	$("div.nav li.rad").stop().animate({'left':"-15px",'width':"60px"},500);//ʵ��.rad���ƶ�����,stop()ֹͣ��ǰ�����еĶ���
});
$(window).scroll(function(){
	//�����ڹ���ʱִ�е��¼�
	var dScr = $(document).scrollTop();//��ȡ�ĵ��������ĸ߶�
	var wHei = $(window).height();//��ȡ���ڹ������ĸ߶�
	var a =parseInt( dScr / wHei );
	//���ĵ��������ĸ߶ȳ��Դ��ڹ������ĸ߶ȵȵ���ǰ�ı��������;parseInt()ȥ��С������
	$("div.left ul li").eq(a).addClass("active").siblings().removeClass("active");//����ȡ������ŵ�li�����ʽ���������liȥ����ʽ
});