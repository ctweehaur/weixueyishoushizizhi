// ==========================================================================
// 📖 《为学一首示子侄》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>（第1段）</strong>" + U_TAG("四川") + "边远的地方有两个和尚：其中一个贫穷，一个富有。穷和尚对富和尚说道：“我想要到" + U_TAG("南海") + "（普陀山）去，怎么样？”富和尚说：“您凭借什么去呢？”" + OMISSION_TAG("主语", "穷和尚") + "回答说：“我只要一个水瓶和一个饭碗就足够了。”富和尚说：“我好几年来想要雇船顺江而下，尚且没能去成呢。您凭借什么去呢！”到了第二年，穷和尚从" + U_TAG("南海") + "回来了，把" + OMISSION_TAG("介词宾语", "这件事") + "告诉了富和尚，富和尚露出了羞愧的神色。<br>" +
        "<strong>（第2段）</strong>" + U_TAG("四川") + "距离" + U_TAG("南海") + "，不知道有几千里远啊，富有的和尚不能到达，可是贫穷的和尚却到达了那里。一个人立志求学，难道还比不上" + U_TAG("四川") + "边远地方的那个（穷）和尚吗？" +
        "</span><br><br>" +
        "<strong>【古代文化常识与阅读提示（课本第101页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《为学一首示子侄》选自" + U_TAG("清朝") + "文学家" + U_TAG("彭端淑") + "（与" + U_TAG("李调元") + "、" + U_TAG("张问陶") + "并称“清代四川三才子”）的《白鹤堂文集》。题中<strong>“为学”</strong>即求学、做学问；<strong>“示子侄”</strong>即写给自己的儿子和侄儿等晚辈看，用来勉励他们勤奋向学。本文节选部分采用<strong>“先叙后议、正反对比”</strong>的写法：第1段叙述“蜀鄙二僧去南海”的故事，第2段发表议论，借“贫者至而富者不能至”的强烈反差，阐明<strong>“事在人为，贵在立志笃行”</strong>的深刻哲理。</span>",

    paragraphs: {
        1: "<strong>【第1段（叙事论据）：蜀鄙二僧之南海——空谈与笃行的鲜明对比】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 第 1 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("蜀") + "之[鄙]有二僧：其一贫，其一富。贫者[语]于富者曰：“吾[欲][之]" + U_TAG("南海") + "，[何如]？”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("四川") + "[边远的地方]✓有两个和尚：其中一个贫穷，其中一个富裕。穷和尚[告诉]✓富和尚说：“我[想要]✓[到……去]✓" + U_TAG("南海") + "，[怎么样]✓？”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("鄙", "边远的地方、边境（名词）", "品质低下、粗俗（形容词）") +
                       ANCIENT_MODERN_TAG("语(yù)", "告诉、对……说（动词）", "语言、话语（名词，读 yǔ）") +
                       ANCIENT_MODERN_TAG("之（之南海）", "往、到……去（动词）", "的（结构助词）") +
                   "</div>" +
               "</div>" +

               // 第 2 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "富者曰：“[子][何恃]而往？”" + CARET + "曰：“吾一瓶一[钵][足]矣。”富者曰：“吾[数]年来欲[买舟]而下，[犹]未能也。子何恃而往！”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "富和尚说：“[您]✓[凭借什么]✓去呢？”" + OMISSION_TAG("主语", "穷和尚") + "说：“我只要一个水瓶和一个[饭碗]✓就[足够]✓了。”富和尚说：“我[好几]✓年来想要[雇船/租船]✓顺江而下，[尚且/还]✓没能去成呢。您凭借什么去呢！”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("买舟", "租船、雇船（买：租、雇）", "购买船只") +
                       GRAMMAR_TAG("宾语前置句", "子何恃而往 ＝ 子恃何而往（疑问代词“何”作“恃”的宾语前置）") +
                       GRAMMAR_TAG("标点传神对比", "“子何恃而往？”（初问诧异） vs “子何恃而往！”（再问讥讽轻蔑）") +
                   "</div>" +
               "</div>" +

               // 第 3 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[越][明年]，贫者[自]" + U_TAG("南海") + "[还]，[以]" + CARET + "告富者，富者有[惭色]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[到了]✓[第二年]✓，穷和尚[从]✓" + U_TAG("南海") + "[返回]✓，[把]✓" + OMISSION_TAG("介词宾语", "这件事") + "告诉了富和尚，富和尚露出了[羞愧的神色]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("越明年", "到了第二年（越：过了、到了）", "跨越明年") +
                       GRAMMAR_TAG("省略介词宾语", "以（之）告富者") +
                       GRAMMAR_TAG("破音字", "还(huán)＝返回、回来") +
                   "</div>" +
               "</div>" +

           "</div>",

        2: "<strong>【第2段（议论点睛）：由事入理——人之立志，顾不如蜀鄙之僧哉？】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 第 4 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("西蜀") + "之[去]" + U_TAG("南海") + "，不知几千里也，[僧富者]不能[至][而]贫者至[焉]。人之[立志]，[顾][不如]" + U_TAG("蜀") + "[鄙]之僧[哉]？" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("四川") + "[距离]✓" + U_TAG("南海") + "，不知道有几千里远啊，[富有的和尚]✓不能[到达]✓，[可是/却]✓穷和尚到达[了那里]✓。一个人[立下志向]✓，[难道/反而]✓还[比不上]✓" + U_TAG("四川") + "[边远地区]✓的和尚[吗]✓？" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("去", "距离、相距", "前往、到某处去") +
                       ANCIENT_MODERN_TAG("顾", "难道、反而（反问副词）", "照顾、回头看") +
                       GRAMMAR_TAG("定语后置句", "僧富者 ＝ 富僧（富有的和尚）") +
                       GRAMMAR_TAG("反问收束全篇", "顾……哉？＝难道……吗？（发人深省，勉励晚辈立志笃行）") +
                   "</div>" +
               "</div>" +

           "</div>"
    }
};
