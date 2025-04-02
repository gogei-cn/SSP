var binft = function (r) {
    function randColor() {
        return color[Math.floor(Math.random() * color.length)];
    }
    function randChar() {
        return String.fromCharCode(94 * Math.random() + 33);
    }
    function randString(r) {
        for (var res = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            (l.textContent = randChar()), (l.style.color = randColor());
            res.appendChild(l);
        }
        return res;
    }
    function print() {
        var t = o[c.skillI];
        if (c.step) {
            c.step--;
        } else {
            c.step = g;
            if (c.prefixP < l.length) {
                if (c.prefixP >= 0) {
                    c.text += l[c.prefixP];
                }
                c.prefixP++;
            } else if (c.direction === "forward") {
                if (c.skillP < t.length) {
                    c.text += t[c.skillP];
                    c.skillP++;
                } else if (c.delay) {
                    c.delay--;
                } else {
                    c.direction = "backward";
                    c.delay = a;
                }
            } else if (c.skillP > 0) {
                c.text = c.text.slice(0, -1);
                c.skillP--;
            } else {
                c.history = c.history || [];
                var newIndex;
                if (o.length > c.history.length) {
                    do {
                        newIndex = Math.floor(Math.random() * o.length);
                    } while (c.history.indexOf(newIndex) !== -1);
                } else {
                    newIndex = Math.floor(Math.random() * o.length);
                }
                c.skillI = newIndex;
                c.history.push(newIndex);
                if (c.history.length > 3) {
                    c.history.shift();
                }
                c.direction = "forward";
            }
        }
        r.textContent = c.text;
        r.appendChild(
            randString(
                c.prefixP < l.length
                    ? Math.min(s, s + c.prefixP)
                    : Math.min(s, t.length - c.skillP)
            )
        );
        setTimeout(print, d);
    }

    var l = "",
        o = [
            "Superspecialpig!",
            "XXX",
            "9652",
            "水杯II号",
            "O2.5",
            "nor叔停更第~天",
            "530",
            "1230",
            "不要回答！！！",
            "404",
            "前进！前进！不择手段的前进！",
            "藏好自己，做好清理。",
            "失去人性失去很多，失去兽性失去一切",
            "这是计划的一部分。",
            "不会真的有人看到这条吧？",
            "邪乎到家必有鬼！",
            "你们都在看什么？",
            "当你在凝视深渊的时候，深渊也正在凝视着你",
            "要致富，先撸树",
            "神不会流血，但你会",
            "哈罗哈罗，大家好，我是nor叔！",
            "Why？",
            "外星人杨娜要来毁灭地球了！",
            "自己吓自己~",
            "急急如律令！",
            "Minecraft！",
            "Minecraft！Minecraft！",
            "罗坤又双叒叕换女友了！",
            "鸡你太美！",
            "你干嘛～～哎呦",
            "void",
            "SSP",
            "一条龙计划",
            "是RE！",
            "RE：随机效应",
            "Juicy~Juicy~",
            "别来无恙，我是图酱~",
        ].map(function (r) {
            return r + "";
        }),
        a = 10,
        g = 1,
        s = 5,
        d = 100,
        color = [
            "rgb(110,64,170)",
            "rgb(150,61,179)",
            "rgb(191,60,175)",
            "rgb(228,65,157)",
            "rgb(254,75,131)",
            "rgb(255,94,99)",
            "rgb(255,120,71)",
            "rgb(251,150,51)",
            "rgb(226,183,47)",
            "rgb(198,214,60)",
            "rgb(175,240,91)",
            "rgb(127,246,88)",
            "rgb(82,246,103)",
            "rgb(48,239,130)",
            "rgb(29,223,163)",
            "rgb(26,199,194)",
            "rgb(35,171,216)",
            "rgb(54,140,225)",
            "rgb(76,110,219)",
            "rgb(96,84,200)",
        ],
        c = {
            text: "",
            prefixP: -s,
            skillI: Math.floor(Math.random() * o.length),
            skillP: 0,
            direction: "forward",
            delay: a,
            step: g,
        };
    print();
};

binft(document.getElementById("binft"));
