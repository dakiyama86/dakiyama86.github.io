// まいにち中国語　句子　表示、再生プログラム
// 句子リスト　Excelから値貼付で更新、いつかjsonファイルから作成したい
const juzilist = [
  {indexNumber:0, juzi:"现在点菜吗？", pinyin:"Xian4zai4 dian3cai4 ma?", ke:41, hao:1, check:0},
  {indexNumber:1, juzi:"我要半只烤鸭和一盘炒青菜。", pinyin:"Wo3yao4 ban4zhi1kao3ya1 he2 yi4pan2chao3qing1cai4.", ke:41, hao:2, check:1},
  {indexNumber:2, juzi:"喝的要什么？", pinyin:"He1de yao4shen2me?", ke:41, hao:3, check:0},
  {indexNumber:3, juzi:"要两瓶啤酒。先来这些。", pinyin:"Yao4 liang3ping2pi2jiu3. Xian1lai2 zhei4xie1.", ke:41, hao:4, check:0},
  {indexNumber:4, juzi:"这些都是你的吗？", pinyin:"Zhei4xie1 dou1shi4 ni3de ma?", ke:41, hao:5, check:0},
  {indexNumber:5, juzi:"我不喜欢那些歌儿。", pinyin:"Wo3bu4xi3huan nei4xie1 ger1.", ke:41, hao:6, check:1},
  {indexNumber:6, juzi:"我要两瓶啤酒。", pinyin:"Wo3yao4 liang3ping2pi2jiu3.", ke:41, hao:7, check:0},
  {indexNumber:7, juzi:"这个菜我们还要呢。", pinyin:"Zhei4gecai4 wo3men hai2yao4 ne.", ke:41, hao:8, check:0},
  {indexNumber:8, juzi:"这些都不要。", pinyin:"Zhei4xie1 dou1bu2yao4.", ke:41, hao:9, check:0},
  {indexNumber:9, juzi:"我要两个包子和一碗粥。", pinyin:"Wo3yao4 liang3gebao1zi he2 yi4wan3zhou1.", ke:41, hao:10, check:1},
  {indexNumber:10, juzi:"这个饭店有川菜、粤菜和东北菜。", pinyin:"Zhei4gefan4dian4you3 chuan1cai4、yue4cai4 he2 dong1bei3cai4.", ke:41, hao:11, check:1},
  {indexNumber:11, juzi:"你们要喝点儿什么？", pinyin:"Ni3men yao4 he1dianr3 shen2me?", ke:41, hao:12, check:0},
  {indexNumber:12, juzi:"我们要一杯咖啡和两杯奶茶。", pinyin:"Wo3menyao4 yi4bei1ka1fei1 he3 liang3bei1nai3cha2.", ke:41, hao:13, check:1},
  {indexNumber:13, juzi:"我们要一杯咖啡和两杯拿铁。", pinyin:"Wo3menyao4 yi4bei1ka1fei1 he3 liang3bei1na2tie3.", ke:41, hao:14, check:1},
  {indexNumber:14, juzi:"这些菜还要吗？", pinyin:"Zhei4xie1cai4 hai2yao4 ma?", ke:41, hao:15, check:0},
  {indexNumber:15, juzi:"不要了（还要）。", pinyin:"Bu2yao4 le.（Hai2yao4.）", ke:41, hao:16, check:0},
  {indexNumber:16, juzi:"师傅，到机场!", pinyin:"Shi1fu, dao4ji1chang3!", ke:42, hao:1, check:1},
  {indexNumber:17, juzi:"好嘞！", pinyin:"Hao3 lei！", ke:42, hao:2, check:1},
  {indexNumber:18, juzi:"请给我发票。", pinyin:"Qing3gei3wo3 fa1piao4.", ke:42, hao:3, check:0},
  {indexNumber:19, juzi:"好的，请稍等。", pinyin:"Hao3de，qing3shao1deng3.", ke:42, hao:4, check:1},
  {indexNumber:20, juzi:"我给他一张照片。", pinyin:"Wo3gei3ta1 yi4zhang1zhao4pian4.", ke:42, hao:5, check:1},
  {indexNumber:21, juzi:"你给我一把雨伞。", pinyin:"Ni3gei3wo3 yi4ba3yu3san3.", ke:42, hao:6, check:1},
  {indexNumber:22, juzi:"司机不给我发票！", pinyin:"Si1ji1 bu4gei3wo3 fa1piao4!", ke:42, hao:7, check:1},
  {indexNumber:23, juzi:"请在这儿停一下。", pinyin:"Qing3zai4zher4 ting2yi2xia4.", ke:42, hao:8, check:1},
  {indexNumber:24, juzi:"请慢点儿开。", pinyin:"Qing3man4dianr3kai1.", ke:42, hao:9, check:1},
  {indexNumber:25, juzi:"你慢点儿吃。", pinyin:"Ni3man4dianr3chi1.", ke:42, hao:10, check:0},
  {indexNumber:26, juzi:"请给我一个塑料袋儿。", pinyin:"Qing3gei3wo3 yi2ge su4liao4 dair4.", ke:42, hao:11, check:1},
  {indexNumber:27, juzi:"请给我一个纸袋儿。", pinyin:"Qing3gei3wo3 yi2ge zhi3 dair4.", ke:42, hao:12, check:1},
  {indexNumber:28, juzi:"一个两毛。", pinyin:"Yi2ge liang3mao2.", ke:42, hao:13, check:0},
  {indexNumber:29, juzi:"请给我打扫一下房间。", pinyin:"Qing3gei3wo3 da3sao3yi2xia4 fang2jian1.", ke:43, hao:1, check:1},
  {indexNumber:30, juzi:"好，我知道了。", pinyin:"Hao3, wo3zhi1dao4 le.", ke:43, hao:2, check:0},
  {indexNumber:31, juzi:"喂，请过来帮我看一下。", pinyin:"Wei2, qing3guo4lai bang1wo3kan4yi2xia4.", ke:43, hao:3, check:1},
  {indexNumber:32, juzi:"您怎么了？", pinyin:"Nin2zen3me le？", ke:43, hao:4, check:0},
  {indexNumber:33, juzi:"厕所堵了！", pinyin:"Ce4suo3 du3 le! ", ke:43, hao:5, check:1},
  {indexNumber:34, juzi:"我给你买点儿水果吧。", pinyin:"Wo3gei3ni3 mai3dianr3 shui3guo3 ba.", ke:43, hao:6, check:0},
  {indexNumber:35, juzi:"她正在给我洗衣服。", pinyin:"Ta1zheng4zai4 gei3wo3 xi3yi1fu.", ke:43, hao:7, check:0},
  {indexNumber:36, juzi:"妈妈每天给孩子讲故事。", pinyin:"Ma1ma mei3tian1 gei3hai2zi jiang2gu4shi.", ke:43, hao:8, check:1},
  {indexNumber:37, juzi:"老师，我帮您拿包儿吧。", pinyin:"Lao3shi1,  wo3bang1nin2 na2baor1 ba.", ke:43, hao:9, check:1},
  {indexNumber:38, juzi:"你帮我复印一下，好吗？", pinyin:"Ni2bang1wo3 fu4yin4 yi2xia4, hao3 ma？", ke:43, hao:10, check:1},
  {indexNumber:39, juzi:"请帮我拿一下。", pinyin:"Qing3bang1wo3 na2yi2xia4.", ke:43, hao:11, check:0},
  {indexNumber:40, juzi:"请帮我搬一下。", pinyin:"Qing3bang1wo3 ban1yi2xia4.", ke:43, hao:12, check:1},
  {indexNumber:41, juzi:"稍等一下。", pinyin:"Shao1deng3yi2xia4.", ke:43, hao:13, check:0},
  {indexNumber:42, juzi:"我给你介绍一下吧。", pinyin:"Wo3gei3ni3 jie4shao4 yi2xia4 ba.", ke:43, hao:14, check:0},
  {indexNumber:43, juzi:"我给你收拾一下吧。", pinyin:"Wo3gei3ni3 shou1shi yi2xia4 ba.", ke:43, hao:15, check:1},
  {indexNumber:44, juzi:"嗯，谢谢。", pinyin:"Ng4, xie4xie.", ke:43, hao:16, check:1},
];

// indexNumber初期値,最大値
let inN = 0;
const inNmax = juzilist.length - 1;

// juzilist から inNの句子を表示再生
function juzifn() { 
  let juzires0 = "第" + juzilist[inN].ke +  "课" + juzilist[inN].hao + "号";
  let juzires1 = juzilist[inN].juzi;
  let juzires2 = juzilist[inN].pinyin;
  let juzimp3 = juzilist[inN].ke + "_" +juzilist[inN].hao;
 //句子を表示
  document.getElementById("juzires0").innerText = `${juzires0}`;
  document.getElementById("juzires1").innerText = `${juzires1}`;
  document.getElementById("juzires2").innerText = `${juzires2}`;
// mp3を表示
  document.getElementById("juzimp3").innerHTML = `<audio autoplay src="./mp3/mtcn_${juzimp3}.mp3"></audio>`
};

// inNランダム化
function inNrand () {
  inN = Math.floor(Math.random() * (inNmax - 0) + 0);
};

// juzilist からランダムに句子を表示、再生
function juzirand () {
  inNrand();
  juzifn();
}

// juzilist からランダムに句子を選択し、checkが1である場合, ランダムに句子を表示、再生
function juziCheckfn(){
  do
   inNrand();
  while (juzilist[inN].check === 0);
  juzifn();
};

// 降順
function juzidescfn(){
  if (inN === 0) {
    inN = juzilist.length - 1;
  } else {
    inN = inN - 1;
  }; 
  juzifn();
};

// 昇順
function juziascfn(){
  if (inN === inNmax) {
    inN = 0;
  } else {
    inN = inN + 1;
  };
  juzifn();
};

// 表示リセット
function juzireset() {
  document.getElementById("juzires0").innerText = "------";
  document.getElementById("juzires1").innerText = "------";
  document.getElementById("juzires2").innerText = "------";
  document.getElementById("juzimp3").innerHTML = ``
};

// function juzimp3fn(x) {
//   let juzimp3 = document.getElementById("juzimp3");
//   juzimp3.innerHTML = `<audio controls src="./mp3/mtcn_${x}.mp3"></audio>`
// }

const shengcilist = [
  {id: 1, shengci: "营业员", pinyin: "ying2ye4yuan2"},
  {id: 2, shengci: "人名币", pinyin: "Ren2min2bi4"},
  {id: 3, shengci: "熊猫", pinyin: "xiong2mao1"},
  {id: 4, shengci: "船", pinyin: "chuan2"},
  {id: 5, shengci: "还是", pinyin: "hai2shi"},
  {id: 6, shengci: "照相", pinyin: "zhao4xiang4"},
  {id: 7, shengci: "挑", pinyin: "tiao1"},
  {id: 8, shengci: "哎呀", pinyin: "ai1ya1"},
  {id: 9, shengci: "卡", pinyin: "ka3"},
  {id: 10, shengci: "护士", pinyin: "hu4shi"}
];


function shengcifn(){
  let rand = Math.floor(Math.random() * (10-0) + 0);
  let shengcires = shengcilist[rand].shengci + shengcilist[rand].pinyin;
  document.getElementById("shengci").innerText = `${shengcires}`;
}

function reset() {
  document.getElementById("shengci").innerText = "------";
};

