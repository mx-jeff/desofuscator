'use strict';
var _0x28b397 = function () {
    /** @type {boolean} */
    var y$$ = true;
    return function (body, fmt) {
        /** @type {!Function} */
        var voronoi = y$$ ? function () {
            if (fmt) {
                var code = fmt.apply(body, arguments);
                return fmt = null, code;
            }
        } : function () {
        };
        return y$$ = false, voronoi;
    };
}();
var _0x2c9a6d = _0x28b397(this, function () {
    return _0x2c9a6d.toString().search("(((.+)+)+)+$").toString().constructor(_0x2c9a6d).search("(((.+)+)+)+$");
});
_0x2c9a6d();
var _0x33b520 = function () {
    /** @type {boolean} */
    var y$$ = true;
    return function (body, fmt) {
        /** @type {!Function} */
        var voronoi = y$$ ? function () {
            if (fmt) {
                var code = fmt.apply(body, arguments);
                return fmt = null, code;
            }
        } : function () {
        };
        return y$$ = false, voronoi;
    };
}();
(function () {
    _0x33b520(this, function () {
        /** @type {!RegExp} */
        var parser = new RegExp("function *\\( *\\)");
        /** @type {!RegExp} */
        var c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
        var line = _0x2abdaf("init");
        if (!parser.test(line + "chain") || !c.test(line + "input")) {
            line("0");
        } else {
            _0x2abdaf();
        }
    })();
})();
var _0x11c1c7 = function () {
    /** @type {boolean} */
    var y$$ = true;
    return function (body, fmt) {
        /** @type {!Function} */
        var voronoi = y$$ ? function () {
            if (fmt) {
                var code = fmt.apply(body, arguments);
                return fmt = null, code;
            }
        } : function () {
        };
        return y$$ = false, voronoi;
    };
}();
var _0xe02893 = _0x11c1c7(this, function () {
    var result;
    try {
        var evaluate = Function('return (function() {}.constructor("return this")( ));');
        result = evaluate();
    } catch (err) {
        /** @type {!Window} */
        result = window;
    }
    var glyphsByName = result.console = result.console || {};
    /** @type {!Array} */
    var methods = ["log", "warn", "info", "error", "exception", "table", "trace"];
    /** @type {number} */
    var i = 0;
    for (; i < methods.length; i++) {
        var o = _0x11c1c7.constructor.prototype.bind(_0x11c1c7);
        var name = methods[i];
        var path = glyphsByName[name] || o;
        o["__proto__"] = _0x11c1c7.bind(_0x11c1c7);
        o.toString = path.toString.bind(path);
        glyphsByName[name] = o;
    }
});
_0xe02893();
/** @type {number} */
var interrupt = 0;
/** @type {string} */
var url = location.href;
/**
 * @param {string} getURL
 * @return {?}
 */
function request(getURL) {
    let xhr = new XMLHttpRequest;
    return xhr.open("GET", getURL, false), xhr.send(), JSON.parse(xhr.response);
}
/**
 * @param {string} str
 * @return {?}
 */
function hashCode(str) {
    let hash = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        /** @type {number} */
        hash = hash | 0;
    }
    return hash;
}
/**
 * @return {?}
 */
function auth_token() {
    if (localStorage.getItem("auth-token") === null) {
        /** @type {string} */
        var projXMLcode = (new Date).getTime().toString();
        var loghistory = hashCode(projXMLcode).toString().replace("-", "");
        localStorage.setItem("auth-token", loghistory);
        token = localStorage.getItem("auth-token");
    }
    return localStorage.getItem("auth-token");
}
/**
 * @param {string} url
 * @return {?}
 */
function auth(url) {
    var _0x349442 = auth_token();
    var x = request("https://maximazeros.online/painel_double/system_bot/auth.php?email=" + url);
    if (x.status == "success") {
        return true;
    } else {
        return localStorage.removeItem("auth-token"), false;
    }
}
const RealClick = (target) => {
    /**
     * @param {!Object} target
     * @param {string} type
     * @param {number} clientX
     * @param {number} clientY
     * @return {undefined}
     */
    var simulateMouseEvent = function (target, type, clientX, clientY) {
        var event = {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: clientX,
            clientY: clientY,
            button: 0
        };
        target.dispatchEvent(new MouseEvent(type, event));
    };
    var visibleInputBounds = target.getBoundingClientRect();
    var clientX = visibleInputBounds.left + (visibleInputBounds.right - visibleInputBounds.left) / 2;
    var clientY = visibleInputBounds.top + (visibleInputBounds.bottom - visibleInputBounds.top) / 2;
    simulateMouseEvent(target, "mousedown", clientX, clientY);
    simulateMouseEvent(target, "mouseup", clientX, clientY);
    simulateMouseEvent(target, "click", clientX, clientY);
};
/**
 * @param {!EventTarget} document
 * @return {undefined}
 */
function EventClick(document) {
    var event = {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20
    };
    const deviceOrientationEvent = new MouseEvent("click", event);
    document.dispatchEvent(deviceOrientationEvent);
}
const data_page = {
    balance: () => {
        /** @type {string} */
        var asciiBuffer = document.querySelector('[data-role="balance-label__value"]').textContent.replace(/ /g, "");
        if (asciiBuffer.indexOf(",") !== -1 && asciiBuffer.length > 3) {
            /** @type {!Array<string>} */
            asciiBuffer = asciiBuffer.split(",");
            /** @type {string} */
            asciiBuffer = asciiBuffer[0];
        }
        return asciiBuffer = asciiBuffer.replace(/\D+/g, ""), +asciiBuffer;
    },
    bet: () => {
        return +document.querySelector('[data-role="total-bet-label__value"]').textContent;
    },
    repeat: () => {
        return document.querySelector('[data-role="repeat-button"]');
    },
    double: () => {
        return document.querySelector('[data-role="double-button"]');
    }
};
const btn_options = {
    tie: () => {
        return document.querySelector('[data-role="bacbo-bet-spot-Tie"]');
    },
    player: () => {
        return document.querySelector('[data-role="bacbo-bet-spot-Player"]');
    },
    banker: () => {
        return document.querySelector('[data-role="bacbo-bet-spot-Banker"]');
    },
    value: (num) => {
        /** @type {(Element|null)} */
        var artistTrack = document.querySelector('[data-value="' + num + '"]');
        if (artistTrack !== null) {
            RealClick(artistTrack);
        } else {
            setTimeout(() => {
                btn_options.value(num);
            }, 10);
        }
    }
};
const render = {
    login: () => {
        return html = '\n\t\t\t<div id="topo">Painel de Autentica\u00e7\u00e3o</div>\n\t\t\t<div id="formulario">\n\t\t\t\t<div class="config">\n\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t<div class="options-bot" style="width: 90%;">\n\t\t\t\t\t\t\t<label class="label">Email:</label>\n\t\t\t\t\t\t\t<input type="email" class="inp" id="email-bot" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" style="border: 0;">\n\t\t\t\t\t<button class="btn-bot" id="btn-auth-bot">Logar</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',
            html;
    },
    painel: () => {
        /** @type {string} */
        var _0xf00e88 = '\n\t\t\t<div id="topo">Painel de Configura\u00e7\u00e3o (Bac Bo)</div>\n\t\t\t<div id="formulario">\n\t\t\t\t<div id="minimize-bot">\n\t\t\t\t\t<div class="config">\n\t\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t\t<div class="option-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Stake Inicial:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="stake-bot">\n\t\t\t\t\t\t\t\t\t<option value="5">R$ 5,00</option>\n\t\t\t\t\t\t\t\t\t<option value="10">R$ 10,00</option>\n\t\t\t\t\t\t\t\t\t<option value="15">R$ 15,00</option>\n\t\t\t\t\t\t\t\t\t<option value="20">R$ 20,00</option>\n\t\t\t\t\t\t\t\t\t<option value="25">R$ 25,00</option>\n\t\t\t\t\t\t\t\t\t<option value="50">R$ 50,00</option>\n\t\t\t\t\t\t\t\t\t<option value="75">R$ 75,00</option>\n\t\t\t\t\t\t\t\t\t<option value="100">R$ 100,00</option>\n\t\t\t\t\t\t\t\t\t<option value="150">R$ 150,00</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="option-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Quant. Gale:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="gale-bot">\n\t\t\t\t\t\t\t\t\t<option value="0">Sem gale</option>\n\t\t\t\t\t\t\t\t\t<option value="1">1</option>\n\t\t\t\t\t\t\t\t\t<option value="2">2</option>\n\t\t\t\t\t\t\t\t\t<option value="3">3</option>\n\t\t\t\t\t\t\t\t\t<option value="4">4</option>\n\t\t\t\t\t\t\t\t\t<option value="5">5</option>\n\t\t\t\t\t\t\t\t\t<option value="6">6</option>\n\t\t\t\t\t\t\t\t\t<option value="7">7</option>\n\t\t\t\t\t\t\t\t\t<option value="8">8</option>\n\t\t\t\t\t\t\t\t\t<option value="9">9</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="options-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Proteger empate:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="tie-bot">\n\t\t\t\t\t\t\t\t\t<option value="0">N\u00e3o prot/</option>\n\t\t\t\t\t\t\t\t\t<option value="5">R$ 5,00</option>\n\t\t\t\t\t\t\t\t\t<option value="10">R$ 10,00</option>\n\t\t\t\t\t\t\t\t\t<option value="15">R$ 15,00</option>\n\t\t\t\t\t\t\t\t\t<option value="20">R$ 20,00</option>\n\t\t\t\t\t\t\t\t\t<option value="25">R$ 25,00</option>\n\t\t\t\t\t\t\t\t\t<option value="50">R$ 50,00</option>\n\t\t\t\t\t\t\t\t\t<option value="75">R$ 75,00</option>\n\t\t\t\t\t\t\t\t\t<option value="100">R$ 100,00</option>\n\t\t\t\t\t\t\t\t\t<option value="150">R$ 150,00</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="config" align="center" style="font-size: 15px;">\n\t\t\t\t\t\t<a href="javascript:void(0);" id="add-strategy-bot" style="text-decoration: none;">Add estrategia</a>\n\t\t\t\t\t\t<div id="strategy-bot"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="config">\n\t\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t\t<div class="option-bot">\n\t\t\t\t\t\t\t\t<label class="label">Stopwin:</label>\n\t\t\t\t\t\t\t\t<input class="inp" id="stopwin-bot" type="text"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="option-bot">\n\t\t\t\t\t\t\t\t<label class="label">Stoploss:</label>\n\t\t\t\t\t\t\t\t<input class="inp" id="stoploss-bot" type="text"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" style="border: 0;">\n\t\t\t\t\t<button class="btn-bot" id="btn-interrupt-bot">Ligar</button>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" id="action" style="text-align: center; color: #000000; font-size: 15px;padding-top: 12px;padding-bottom: 12px;">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
        return _0xf00e88;
    },
    load: (html) => {
        /** @type {(Element|null)} */
        var type = document.querySelector("#robot");
        if (type !== null) {
            type.remove();
        }
        /** @type {!Element} */
        var maskLayer = document.createElement("div");
        /** @type {string} */
        maskLayer.id = "robot";
        /** @type {string} */
        maskLayer.style = "";
        /** @type {string} */
        maskLayer.innerHTML = html;
        document.body.appendChild(maskLayer);
    },
    checkDom: (html) => {
        if (btn_options.player() !== null) {
            render.load(html);
        } else {
            setTimeout(() => {
                render.checkDom(html);
            }, 15);
        }
    }
};
const configPanel = {
    btn_auth: () => {
        return document.querySelector("#btn-auth-bot");
    },
    btn_interrupt: () => {
        return document.querySelector("#btn-interrupt-bot");
    },
    email: () => {
        return document.querySelector("#email-bot");
    },
    stake: () => {
        return document.querySelector("#stake-bot");
    },
    gale: () => {
        return document.querySelector("#gale-bot");
    },
    tie: () => {
        return document.querySelector("#tie-bot");
    },
    stopwin: () => {
        return document.querySelector("#stopwin-bot");
    },
    stoploss: () => {
        return document.querySelector("#stoploss-bot");
    }
};
/**
 * @param {string} attributeTemplate
 * @return {undefined}
 */
function action(attributeTemplate) {
    /** @type {(Element|null)} */
    var template = document.querySelector("#action");
    if (template !== null) {
        /** @type {string} */
        template.innerHTML = attributeTemplate;
    }
}
const select_el = (seletor) => {
    return document.querySelector(seletor);
};
const strategy_api = () => {
    /** @type {!NodeList<Element>} */
    var songTimeVisualizations = document.querySelectorAll(".strategys");
    /** @type {!Array} */
    var statements = [];
    /** @type {number} */
    var i = 0;
    for (; i < songTimeVisualizations.length; i++) {
        /** @type {!NodeList<Element>} */
        var ingList = songTimeVisualizations[i].querySelectorAll(".standards .stan");
        /** @type {!Array} */
        var result = [];
        /** @type {number} */
        var j = 0;
        for (; j < ingList.length; j++) {
            /** @type {!Array<string>} */
            var keys = ingList[j].classList[1].split("-");
            /** @type {string} */
            result[j] = keys[0];
        }
        var into = songTimeVisualizations[i].querySelector("#into-bot").value;
        var statement = {
            standards: result,
            into: into
        };
        statements[i] = statement;
    }
    return statements = JSON.stringify(statements), statements;
};
const listenerButtons = () => {
    /**
     * @return {undefined}
     */
    function toggle() {
        /** @type {(Element|null)} */
        var openLoginScreenBtn = document.querySelector("#topo");
        if (openLoginScreenBtn !== null) {
            openLoginScreenBtn.addEventListener("click", () => {
                /** @type {(Element|null)} */
                var overlay = document.querySelector("#minimize-bot");
                if (overlay.style.display != "none") {
                    /** @type {string} */
                    overlay.style.display = "none";
                } else {
                    overlay.style.removeProperty("display");
                }
            });
        } else {
            setTimeout(toggle, 50);
        }
    }
    /**
     * @return {undefined}
     */
    function logout() {
        var openLoginScreenBtn = select_el("#btn-auth-bot");
        if (openLoginScreenBtn !== null) {
            openLoginScreenBtn.addEventListener("click", () => {
                if (auth(configPanel.email().value)) {
                    localStorage.setItem("email-bacbo-bot", configPanel.email().value);
                    location.reload(true);
                } else {
                    alert("Erro ao tentar logar!");
                }
            });
        } else {
            setTimeout(logout, 50);
        }
    }
    /**
     * @return {undefined}
     */
    function checkLoadFont() {
        var openLoginScreenBtn = select_el("#add-strategy-bot");
        if (openLoginScreenBtn !== null) {
            openLoginScreenBtn.addEventListener("click", () => {
                /** @type {string} */
                var CONTAINER_TEMPLATE = '\n\t\t\t\t\t\t<div class="strategys" style="width: 95%;position: relative;margin-bottom: 4px;border-bottom: 1px solid #000;margin: 0 auto;">\n\t\t\t\t\t\t\t<div style="position: absolute; top:5px; right: 5px;">\n\t\t\t\t\t\t\t\t<a href="javascript:void(0);" style="text-decoration: none; color: red;" onclick="this.parentNode.parentNode.remove();">X</a>\n\t\t\t\t\t\t\t</div><br />\n\t\t\t\t\t\t\t<label class="label">Estrategia:</label>\n\t\t\t\t\t\t\t<div class="standards">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="margin-top: 5px;display: flex; flex-direction: row; align-items: center; justify-content: space-around;">\n\t\t\t\t\t\t\t\t<div class="stan player-bot"></div>\n\t\t\t\t\t\t\t\t<div class="stan banker-bot"></div>\n\t\t\t\t\t\t\t\t<div class="stan tie-bot"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="options-bot">\n\t\t\t\t\t\t\t\t<label class="label">Entrar em:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="into-bot">\n\t\t\t\t\t\t\t\t\t<option value="player">Player</option>\n\t\t\t\t\t\t\t\t\t<option value="banker">Banker</option>\n\t\t\t\t\t\t\t\t\t<option value="tie">Tie</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
                /** @type {(Element|null)} */
                var el = document.querySelector("#strategy-bot");
                el.insertAdjacentHTML("afterbegin", CONTAINER_TEMPLATE);
            });
        } else {
            setTimeout(checkLoadFont, 50);
        }
    }
    /**
     * @return {undefined}
     */
    function next() {
        localStorage.setItem("stake-bacbo-bot", configPanel.stake().value);
        localStorage.setItem("gale-bacbo-bot", configPanel.gale().value);
        localStorage.setItem("tie-bacbo-bot", configPanel.tie().value);
        localStorage.setItem("stopwin-bacbo-bot", configPanel.stopwin().value);
        localStorage.setItem("stoploss-bacbo-bot", configPanel.stoploss().value);
        localStorage.setItem("strategy-bacbo-bot", strategy_api());
    }
    /**
     * @return {undefined}
     */
    function set() {
        var _startingFret = localStorage.getItem("stake-bacbo-bot");
        if (_startingFret !== null) {
            configPanel.stake().value = _startingFret;
        }
        var schoolId = localStorage.getItem("gale-bacbo-bot");
        if (schoolId !== null) {
            document.querySelector("#gale-bot").value = schoolId;
        }
        var _listItemText = localStorage.getItem("tie-bacbo-bot");
        if (_listItemText !== null) {
            configPanel.tie().value = _listItemText;
        }
        var nextModulePath = localStorage.getItem("stopwin-bacbo-bot");
        if (nextModulePath !== null) {
            configPanel.stopwin().value = nextModulePath;
        }
        var playEditorURL = localStorage.getItem("stoploss-bacbo-bot");
        if (playEditorURL !== null) {
            configPanel.stoploss().value = playEditorURL;
        }
        var currentSubs = localStorage.getItem("strategy-bacbo-bot");
        if (currentSubs !== null) {
            /** @type {*} */
            currentSubs = JSON.parse(currentSubs);
            /** @type {string} */
            var fsHTML = "";
            /** @type {number} */
            var n = 0;
            for (; n < currentSubs.length; n++) {
                var crossfilterable_layers = currentSubs[n].standards;
                /** @type {string} */
                var summaryHtml = "";
                /** @type {number} */
                var layer_i = 0;
                for (; layer_i < crossfilterable_layers.length; layer_i++) {
                    /** @type {string} */
                    summaryHtml = summaryHtml + ("<div class='stan " + crossfilterable_layers[layer_i] + "-bot' onclick='this.remove();'></div>");
                }
                var key = currentSubs[n].into;
                /** @type {string} */
                fsHTML = fsHTML + ('\n\t\t\t\t<div class="strategys" style="width: 95%;position: relative;margin-bottom: 4px;border-bottom: 1px solid #000;margin: 0 auto;">\n\t\t\t\t\t<div style="position: absolute; top:5px; right: 5px;">\n\t\t\t\t\t\t<a href="javascript:void(0);" style="text-decoration: none; color: red;" onclick="this.parentNode.parentNode.remove();">X</a>\n\t\t\t\t\t</div><br />\n\t\t\t\t\t<label class="label">Estrategia:</label>\n\t\t\t\t\t<div class="standards">\n\t\t\t\t\t\t' + summaryHtml +
                    '\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style="margin-top: 5px;display: flex; flex-direction: row; align-items: center; justify-content: space-around;">\n\t\t\t\t\t\t<div class="stan player-bot"></div>\n\t\t\t\t\t\t<div class="stan banker-bot"></div>\n\t\t\t\t\t\t<div class="stan tie-bot"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="options-bot">\n\t\t\t\t\t\t<label class="label">Entrar em:</label>\n\t\t\t\t\t\t<select class="inp" id="into-bot">\n\t\t\t\t\t\t\t<option value="player" ' + (key ==
                        "player" ? "selected" : "") + '>Casa</option>\n\t\t\t\t\t\t\t<option value="banker" ' + (key == "banker" ? "selected" : "") + '>Fora</option>\n\t\t\t\t\t\t\t<option value="tie" ' + (key == "tie" ? "selected" : "") + ">Empate</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                ");
            }
            /** @type {string} */
            document.querySelector("#strategy-bot").innerHTML = fsHTML;
        }
    }
    /**
     * @return {undefined}
     */
    function success() {
        var container = configPanel.btn_interrupt();
        if (container !== null) {
            container.addEventListener("click", () => {
                if (interrupt == 0) {
                    /** @type {number} */
                    interrupt = 1;
                    localStorage.setItem("interrupt-bacbo", "true");
                    next();
                    /** @type {string} */
                    container.innerHTML = "Desligar";
                } else {
                    /** @type {number} */
                    interrupt = 0;
                    localStorage.setItem("interrupt-bacbo", "false");
                    /** @type {string} */
                    container.innerHTML = "Ligar";
                }
            }, false);
            set();
            var closeable = localStorage.getItem("interrupt-bacbo");
            if (closeable !== null && closeable == "true") {
                EventClick(container);
            }
        } else {
            setTimeout(success, 15);
        }
    }
    toggle();
    logout();
    checkLoadFont();
    /**
     * @return {undefined}
     */
    var maxLenFn = () => {
        /**
         * @param {!HTMLElement} div
         * @return {undefined}
         */
        function remove(div) {
            try {
                var task_detail_node = div.parentNode.parentNode;
                if (task_detail_node !== null) {
                    var lnkDiv = task_detail_node.querySelector(".standards");
                    var classesStr = div.className;
                    /** @type {string} */
                    lnkDiv.innerHTML = lnkDiv.innerHTML + "<div class='" + classesStr + "' onclick='this.remove();'></div>";
                }
            } catch (_0x733908) {
            }
        }
        document.body.addEventListener("click", (event) => {
            var speakerClassList = event.target.classList;
            if (speakerClassList[0] == "stan") {
                remove(event.target);
            }
        });
    };
    maxLenFn();
    success();
};
const strategy = {
    bet_position: 0,
    gale: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
    bet: "",
    reset: () => {
        /** @type {number} */
        strategy.bet_position = 0;
        /** @type {number} */
        strategy.bet = 0;
    },
    results: () => {
        /** @type {(Element|null)} */
        var contentOfLiElements = document.querySelector('svg[data-role="Bead-road"] > svg');
        /** @type {!NodeList<Element>} */
        contentOfLiElements = contentOfLiElements.querySelectorAll('[data-type="coordinates"]');
        /** @type {!Array} */
        var obj = [];
        for (let index = 0; index < contentOfLiElements.length; index++) {
            /** @type {string} */
            var key = contentOfLiElements[index].textContent;
            if (key == "P") {
                /** @type {string} */
                obj[index] = "player";
            }
            if (key == "B") {
                /** @type {string} */
                obj[index] = "banker";
            }
            if (key == "T") {
                /** @type {string} */
                obj[index] = "tie";
            }
        }
        return obj = obj.reverse(), JSON.stringify(obj);
    },
    select_token: (height) => {
        if (height >= 25) {
            btn_options.value(25);
            /** @type {number} */
            var ystep = height / 25;
        } else {
            btn_options.value(5);
            /** @type {number} */
            ystep = height / 5;
        }
        return ystep;
    },
    bet_exec: async () => {
        if (strategy.bet_position == 0) {
            /** @type {number} */
            var value = +configPanel.stake().value;
            /** @type {number} */
            value = strategy.gale[strategy.bet_position] * value;
            var endIndex = strategy.select_token(value);
            /** @type {number} */
            ii = 0;
            for (; ii < endIndex; ii++) {
                setTimeout(() => {
                    EventClick(btn_options[strategy.bet]());
                }, ii * 250);
            }
            setTimeout(() => {
                /** @type {number} */
                var value = +configPanel.tie().value;
                /** @type {number} */
                value = strategy.gale[strategy.bet_position] * value;
                var x1 = strategy.select_token(value);
                /** @type {number} */
                xx = 0;
                for (; xx < x1; xx++) {
                    setTimeout(() => {
                        EventClick(btn_options.tie());
                    }, xx * 250);
                }
                strategy.bet_position++;
            }, ii * 250);
        } else {
            setTimeout(() => {
                EventClick(data_page.repeat());
            }, 1000);
            setTimeout(() => {
                EventClick(data_page.double());
            }, 2000);
            strategy.bet_position++;
        }
    },
    check_green: () => {
        /** @type {*} */
        var tiledImageBRs = JSON.parse(strategy.results());
        var tiledImageBR = tiledImageBRs[0];
        if (tiledImageBR == strategy.bet || +configPanel.tie().value > 0 && tiledImageBR == "tie") {
            return true;
        } else {
            return false;
        }
    },
    analyze: () => {
        if (strategy.bet_position == 0) {
            /** @type {*} */
            var lsUDSNamesArr = JSON.parse(strategy_api());
            /** @type {*} */
            var curBaseNode = JSON.parse(strategy.results());
            /** @type {number} */
            var n = 0;
            for (; n < lsUDSNamesArr.length; n++) {
                var curNode = lsUDSNamesArr[n].standards;
                var into = lsUDSNamesArr[n].into;
                var stripTerrain = curNode.length;
                /** @type {number} */
                var river = 0;
                /** @type {number} */
                var NODE_C = 0;
                for (; NODE_C < stripTerrain; NODE_C++) {
                    if (curNode[NODE_C] == curBaseNode[NODE_C]) {
                        river++;
                    } else {
                        break;
                    }
                }
                if (stripTerrain == river) {
                    strategy.bet = into;
                    break;
                }
            }
            if (strategy.bet != "") {
                strategy.bet_exec();
                setTimeout(() => {
                    action("Entrando em " + strategy.bet);
                }, 500);
            } else {
                action("Padr\u00e3o n\u00e3o encontrado...");
            }
        } else {
            if (strategy.check_green()) {
                action("GREEN!");
                setTimeout(() => {
                    location.reload(true);
                }, 1000);
            } else {
                if (strategy.bet_position <= +configPanel.gale().value) {
                    action(strategy.bet_position + "\u00ba gale em " + strategy.bet);
                    strategy.bet_exec();
                } else {
                    action("RED!");
                    setTimeout(() => {
                        location.reload(true);
                    }, 1000);
                }
            }
        }
    },
    bot: () => {
        /** @type {number} */
        var _0x18ae38 = 0;
        /** @type {number} */
        var chat_retry = setInterval(() => {
            if (interrupt == 1) {
                /** @type {(Element|null)} */
                var button = document.querySelector('[data-role="footer-perspective-chip-stack"]');
                /** @type {(Element|null)} */
                var LocaTable = document.querySelector('[data-role="status-text"]');
                if (button !== null && button.getAttribute("data-is-collapsed") == "false" && _0x18ae38 == 0 || LocaTable !== null && LocaTable.textContent.indexOf("FA\u00c7A SUAS APOSTAS") != -1 && _0x18ae38 == 0) {
                    strategy.analyze();
                    /** @type {number} */
                    _0x18ae38 = 1;
                }
                if (button !== null && button.getAttribute("data-is-collapsed") == "true" && _0x18ae38 == 1 || LocaTable !== null && LocaTable.textContent.indexOf("FA\u00c7A SUAS APOSTAS") == -1 && _0x18ae38 == 1) {
                    action("Aguardando...");
                    /** @type {number} */
                    _0x18ae38 = 0;
                }
            }
            if (interrupt == 0) {
                clearInterval(chat_retry);
            }
        }, 500);
    }
};
const crawler = () => {
    var options = localStorage.getItem("email-bacbo-bot");
    if (options !== null && auth(options)) {
        render.checkDom(render.painel());
    } else {
        render.checkDom(render.login());
    }
    // render.checkDom(render.painel())
    listenerButtons();
    /** @type {number} */
    var counter = 0;
    setInterval(() => {
        if (interrupt == 1 && counter == 0) {
            /** @type {number} */
            counter = 1;
            action("Esperando Sinal...");
            if (data_page.balance() >= +configPanel.stopwin().value) {
                action("Stopwin atingido...");
            } else {
                if (data_page.balance() <= +configPanel.stoploss().value) {
                    action("Stoploss atingido...");
                } else {
                    strategy.bot();
                }
            }
        } else {
            if (interrupt == 0) {
                /** @type {number} */
                _0xc588fa = 0;
                action("Rob\u00f4 desligado");
            }
        }
    }, 300);
    if (true) {
        setInterval(() => {
            if (strategy.bet_position == 0) {
                location.reload(true);
            }
        }, 180000);
    }
};
const execCrawler = () => {
    /** @type {(Element|null)} */
    var box = document.querySelector('[data-role="bet-limits-table-info-container"] [data-role="table-name"]');
    if (box !== null) {
        if (box.textContent == "Bac Bo") {
            crawler();
        }
    } else {
        setTimeout(execCrawler, 30);
    }
};
/** @type {string} */
url = location.href;
const accessIframe = (rplElm) => {
    /** @type {(Element|null)} */
    var el = document.querySelector(rplElm);
    if (el !== null && el.src.length > 30) {
        setTimeout(() => {
            window.open(el.src, "_top");
        }, 8000);
    } else {
        setTimeout(() => {
            accessIframe(rplElm);
        }, 10);
    }
};
const linkReturn = (i) => {
    setTimeout(() => {
        window.history.go(i);
    }, 1000);
};
if (url.indexOf("estrelabet.com/ptb/games/livecasino/detail/normal/18280") != -1) {
    accessIframe(".gm-bx > iframe#gm-frm");
}
if (url.indexOf("estrelabetoss.evo-games.com/frontend") != -1) {
    execCrawler();
}
if (url.indexOf("estrelabetoss.evo-games.com/entry") != -1) {
    linkReturn(-1);
}
if (url.indexOf("br.betano.com/casino/live/games/bac-bo/5605/tables") != -1) {
    accessIframe("iframe.game-play-providers");
}
if (url.indexOf("gaming-launch-br.betano.com/Game/Launch/") != -1) {
    accessIframe("iframe");
}
if (url.indexOf("betano-br.evo-games.com/frontend") != -1) {
    execCrawler();
}
if (url.indexOf("betano-br.evo-games.com/entry") != -1) {
    linkReturn(-2);
}
if (url.indexOf("realsbet.com/live-casino/game/1402430") != -1) {
    accessIframe("#game-window > iframe");
}
if (url.indexOf("atlas.evo-games.com/frontend") != -1) {
    execCrawler();
}
if (url.indexOf("atlas.evo-games.com/entry") != -1) {
    linkReturn(-1);
}
if (url.indexOf("b2xbet.com/MultiGame/191164/LIVE_CASINO/false/56/null") != -1) {
    accessIframe("iframe");
}
if (url.indexOf("babylonear.evo-games.com/frontend") != -1) {
    execCrawler();
}
if (url.indexOf("babylonear.evo-games.com/entry") != -1) {
    linkReturn(-1);
}
if (url.indexOf("b1.bet/#/game/casinolive?st=bac%20") != -1) {
    accessIframe("#betgames_div_iframe > iframe");
}
if (url.indexOf("dpg.evo-games.com/frontend") != -1) {
    execCrawler();
}
if (url.indexOf("dpg.evo-games.com/entry") != -1) {
    linkReturn(-1);
}
/**
 * @param {string} event
 * @return {?}
 */
function _0x2abdaf(event) {
    /**
     * @param {number} i
     * @return {?}
     */
    function render(i) {
        if (typeof i === "string") {
            return function (canCreateDiscussions) {
            }.constructor("while (true) {}").apply("counter");
        } else {
            if (("" + i / i).length !== 1 || i % 20 === 0) {
                (function () {
                    return true;
                }).constructor("debugger").call("action");
            } else {
                (function () {
                    return false;
                }).constructor("debugger").apply("stateObject");
            }
        }
        render(++i);
    }
    try {
        if (event) {
            return render;
        } else {
            render(0);
        }
    } catch (err) {
    }
}
;