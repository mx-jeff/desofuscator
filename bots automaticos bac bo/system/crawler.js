var _0x28b397 = (function () {
    var _0x5e61d7 = true;
    return function (_0x19613a, _0x34b059) {
        var _0x1e5241 = _0x5e61d7
            ? function () {
                if (_0x34b059) {
                    var _0x1699c1 = _0x34b059.apply(_0x19613a, arguments);
                    return (_0x34b059 = null), _0x1699c1;
                }
            }
            : function () { };
        return (_0x5e61d7 = false), _0x1e5241;
    };
})(),
    _0x2c9a6d = _0x28b397(this, function () {
        return _0x2c9a6d
            .toString()
            .search("(((.+)+)+)+$")
            .toString()
            .constructor(_0x2c9a6d)
            .search("(((.+)+)+)+$");
    });
_0x2c9a6d();
var _0x33b520 = (function () {
    var _0x266b25 = true;
    return function (_0x4bf783, _0x4904a5) {
        var _0x155163 = _0x266b25
            ? function () {
                if (_0x4904a5) {
                    var _0x13fe8f = _0x4904a5.apply(_0x4bf783, arguments);
                    return (_0x4904a5 = null), _0x13fe8f;
                }
            }
            : function () { };
        return (_0x266b25 = false), _0x155163;
    };
})();
(function () {
    _0x33b520(this, function () {
        var _0x468575 = new RegExp("function *\\( *\\)"),
            _0x536fa3 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
            _0x263efe = _0x2abdaf("init");
        if (
            !_0x468575.test(_0x263efe + "chain") ||
            !_0x536fa3.test(_0x263efe + "input")
        ) {
            _0x263efe("0");
        } else {
            _0x2abdaf();
        }
    })();
})();
var _0x11c1c7 = (function () {
    var _0x15cc90 = true;
    return function (_0x2bcfd4, _0x8193cb) {
        var _0x59c810 = _0x15cc90
            ? function () {
                if (_0x8193cb) {
                    var _0x34ba8d = _0x8193cb.apply(_0x2bcfd4, arguments);
                    return (_0x8193cb = null), _0x34ba8d;
                }
            }
            : function () { };
        return (_0x15cc90 = false), _0x59c810;
    };
})(),
    _0xe02893 = _0x11c1c7(this, function () {
        var _0x3d87c5;
        try {
            var _0xfa56f8 = Function(
                'return (function() {}.constructor("return this")( ));'
            );
            _0x3d87c5 = _0xfa56f8();
        } catch (_0x73fbcc) {
            _0x3d87c5 = window;
        }
        var _0x53594c = (_0x3d87c5.console = _0x3d87c5.console || {});
        var _0xef1296 = [
            "log",
            "warn",
            "info",
            "error",
            "exception",
            "table",
            "trace",
        ];
        for (var _0x35858b = 0; _0x35858b < _0xef1296.length; _0x35858b++) {
            var _0x379a78 = _0x11c1c7.constructor.prototype.bind(_0x11c1c7);
            var _0x55dfc3 = _0xef1296[_0x35858b];
            var _0x5e9b12 = _0x53594c[_0x55dfc3] || _0x379a78;
            _0x379a78["__proto__"] = _0x11c1c7.bind(_0x11c1c7);
            _0x379a78.toString = _0x5e9b12.toString.bind(_0x5e9b12);
            _0x53594c[_0x55dfc3] = _0x379a78;
        }
    });
_0xe02893();
var interrupt = 0,
    url = location.href;
function request(_0x3eeba9) {
    let _0x1381c8 = new XMLHttpRequest();
    return (
        _0x1381c8.open("GET", _0x3eeba9, false),
        _0x1381c8.send(),
        JSON.parse(_0x1381c8.response)
    );
}
function hashCode(_0x3ac6fa) {
    let _0x4b5e76 = 0;
    for (
        let _0x4099f6 = 0, _0x23d4ad = _0x3ac6fa.length;
        _0x4099f6 < _0x23d4ad;
        _0x4099f6++
    ) {
        let _0x201d09 = _0x3ac6fa.charCodeAt(_0x4099f6);
        _0x4b5e76 = (_0x4b5e76 << 5) - _0x4b5e76 + _0x201d09;
        _0x4b5e76 |= 0;
    }
    return _0x4b5e76;
}
function auth_token() {
    if (localStorage.getItem("auth-token") === null) {
        var _0x25d42f = new Date().getTime().toString(),
            _0x42fb61 = hashCode(_0x25d42f).toString().replace("-", "");
        localStorage.setItem("auth-token", _0x42fb61);
        token = localStorage.getItem("auth-token");
    }
    return localStorage.getItem("auth-token");
}
function auth(_0x17184e) {
    var _0x349442 = auth_token(),
        _0x29c86c = request(
            "https://maximazeros.online/painel_double/system_bot/auth.php?email=" +
            _0x17184e
        );
    if (_0x29c86c.status == "success") {
        return true;
    } else {
        return localStorage.removeItem("auth-token"), false;
    }
}
const RealClick = (_0x403984) => {
    var _0x356dc4 = function (_0x30d284, _0xf7b045, _0x347b43, _0x450432) {
        var _0x51a1d9 = {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: _0x347b43,
            clientY: _0x450432,
            button: 0,
        };
        _0x30d284.dispatchEvent(new MouseEvent(_0xf7b045, _0x51a1d9));
    };
    var _0x34961b = _0x403984.getBoundingClientRect(),
        _0x1471cf = _0x34961b.left + (_0x34961b.right - _0x34961b.left) / 2,
        _0x4199ca = _0x34961b.top + (_0x34961b.bottom - _0x34961b.top) / 2;
    _0x356dc4(_0x403984, "mousedown", _0x1471cf, _0x4199ca);
    _0x356dc4(_0x403984, "mouseup", _0x1471cf, _0x4199ca);
    _0x356dc4(_0x403984, "click", _0x1471cf, _0x4199ca);
};
function EventClick(_0x20d91a) {
    var _0x10eff1 = {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
    };
    const _0x473e1f = new MouseEvent("click", _0x10eff1);
    _0x20d91a.dispatchEvent(_0x473e1f);
}
const data_page = {
    balance: () => {
        var _0x501899 = document
            .querySelector('[data-role="balance-label__value"]')
            .textContent.replace(/ /g, "");
        _0x501899.indexOf(",") !== -1 &&
            _0x501899.length > 3 &&
            ((_0x501899 = _0x501899.split(",")),
                (_0x501899 = _0x501899[0]));
        return (_0x501899 = _0x501899.replace(/\D+/g, "")), +_0x501899;
    },
    bet: () => {
        return +document.querySelector(
            '[data-role="total-bet-label__value"]'
        ).textContent;
    },
    repeat: () => {
        return document.querySelector('[data-role="repeat-button"]');
    },
    double: () => {
        return document.querySelector('[data-role="double-button"]');
    },
},
    btn_options = {
        tie: () => {
            return document.querySelector('[data-role="bacbo-bet-spot-Tie"]');
        },
        player: () => {
            return document.querySelector(
                '[data-role="bacbo-bet-spot-Player"]'
            );
        },
        banker: () => {
            return document.querySelector(
                '[data-role="bacbo-bet-spot-Banker"]'
            );
        },
        value: (_0x567c33) => {
            var _0x315b75 = document.querySelector(
                '[data-value="' + _0x567c33 + '"]'
            );
            _0x315b75 !== null
                ? RealClick(_0x315b75)
                : setTimeout(() => {
                    btn_options.value(_0x567c33);
                }, 10);
        },
    },
    render = {
        login: () => {
            return (
                (html =
                    '\n\t\t\t<div id="topo">Painel de Autenticação</div>\n\t\t\t<div id="formulario">\n\t\t\t\t<div class="config">\n\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t<div class="options-bot" style="width: 90%;">\n\t\t\t\t\t\t\t<label class="label">Email:</label>\n\t\t\t\t\t\t\t<input type="email" class="inp" id="email-bot" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" style="border: 0;">\n\t\t\t\t\t<button class="btn-bot" id="btn-auth-bot">Logar</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'),
                html
            );
        },
        painel: () => {
            var _0xf00e88 =
                '\n\t\t\t<div id="topo">Painel de Configuração (Bac Bo)</div>\n\t\t\t<div id="formulario">\n\t\t\t\t<div id="minimize-bot">\n\t\t\t\t\t<div class="config">\n\t\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t\t<div class="option-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Stake Inicial:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="stake-bot">\n\t\t\t\t\t\t\t\t\t<option value="5">R$ 5,00</option>\n\t\t\t\t\t\t\t\t\t<option value="10">R$ 10,00</option>\n\t\t\t\t\t\t\t\t\t<option value="15">R$ 15,00</option>\n\t\t\t\t\t\t\t\t\t<option value="20">R$ 20,00</option>\n\t\t\t\t\t\t\t\t\t<option value="25">R$ 25,00</option>\n\t\t\t\t\t\t\t\t\t<option value="50">R$ 50,00</option>\n\t\t\t\t\t\t\t\t\t<option value="75">R$ 75,00</option>\n\t\t\t\t\t\t\t\t\t<option value="100">R$ 100,00</option>\n\t\t\t\t\t\t\t\t\t<option value="150">R$ 150,00</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="option-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Quant. Gale:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="gale-bot">\n\t\t\t\t\t\t\t\t\t<option value="0">Sem gale</option>\n\t\t\t\t\t\t\t\t\t<option value="1">1</option>\n\t\t\t\t\t\t\t\t\t<option value="2">2</option>\n\t\t\t\t\t\t\t\t\t<option value="3">3</option>\n\t\t\t\t\t\t\t\t\t<option value="4">4</option>\n\t\t\t\t\t\t\t\t\t<option value="5">5</option>\n\t\t\t\t\t\t\t\t\t<option value="6">6</option>\n\t\t\t\t\t\t\t\t\t<option value="7">7</option>\n\t\t\t\t\t\t\t\t\t<option value="8">8</option>\n\t\t\t\t\t\t\t\t\t<option value="9">9</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="options-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Proteger empate:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="tie-bot">\n\t\t\t\t\t\t\t\t\t<option value="0">Não prot/</option>\n\t\t\t\t\t\t\t\t\t<option value="5">R$ 5,00</option>\n\t\t\t\t\t\t\t\t\t<option value="10">R$ 10,00</option>\n\t\t\t\t\t\t\t\t\t<option value="15">R$ 15,00</option>\n\t\t\t\t\t\t\t\t\t<option value="20">R$ 20,00</option>\n\t\t\t\t\t\t\t\t\t<option value="25">R$ 25,00</option>\n\t\t\t\t\t\t\t\t\t<option value="50">R$ 50,00</option>\n\t\t\t\t\t\t\t\t\t<option value="75">R$ 75,00</option>\n\t\t\t\t\t\t\t\t\t<option value="100">R$ 100,00</option>\n\t\t\t\t\t\t\t\t\t<option value="150">R$ 150,00</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="config" align="center" style="font-size: 15px;">\n\t\t\t\t\t\t<a href="javascript:void(0);" id="add-strategy-bot" style="text-decoration: none;">Add estrategia</a>\n\t\t\t\t\t\t<div id="strategy-bot"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="config">\n\t\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t\t<div class="option-bot">\n\t\t\t\t\t\t\t\t<label class="label">Stopwin:</label>\n\t\t\t\t\t\t\t\t<input class="inp" id="stopwin-bot" type="text"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="option-bot">\n\t\t\t\t\t\t\t\t<label class="label">Stoploss:</label>\n\t\t\t\t\t\t\t\t<input class="inp" id="stoploss-bot" type="text"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" style="border: 0;">\n\t\t\t\t\t<button class="btn-bot" id="btn-interrupt-bot">Ligar</button>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" id="action" style="text-align: center; color: #000000; font-size: 15px;padding-top: 12px;padding-bottom: 12px;">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
            return _0xf00e88;
        },
        load: (_0x2713c5) => {
            var _0x20477b = document.querySelector("#robot");
            if (_0x20477b !== null) {
                _0x20477b.remove();
            }
            var _0x3130c8 = document.createElement("div");
            _0x3130c8.id = "robot";
            _0x3130c8.style = "";
            _0x3130c8.innerHTML = _0x2713c5;
            document.body.appendChild(_0x3130c8);
        },
        checkDom: (_0x533d31) => {
            if (btn_options.player() !== null) {
                render.load(_0x533d31);
            } else {
                setTimeout(() => {
                    render.checkDom(_0x533d31);
                }, 15);
            }
        },
    },
    configPanel = {
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
        },
    };
function action(_0x12c672) {
    var _0x28ca42 = document.querySelector("#action");
    if (_0x28ca42 !== null) {
        _0x28ca42.innerHTML = _0x12c672;
    }
}
const select_el = (_0x506236) => {
    return document.querySelector(_0x506236);
},
    strategy_api = () => {
        var _0x11302c = document.querySelectorAll(".strategys"),
            _0x14055d = [];
        for (var _0x4471b7 = 0; _0x4471b7 < _0x11302c.length; _0x4471b7++) {
            var _0x1cdf84 =
                _0x11302c[_0x4471b7].querySelectorAll(".standards .stan"),
                _0x4db7d7 = [];
            for (var _0x1522d2 = 0; _0x1522d2 < _0x1cdf84.length; _0x1522d2++) {
                var _0xe1f5c1 = _0x1cdf84[_0x1522d2].classList[1].split("-");
                _0x4db7d7[_0x1522d2] = _0xe1f5c1[0];
            }
            var _0xd4fe4b =
                _0x11302c[_0x4471b7].querySelector("#into-bot").value,
                _0x43bb34 = {
                    standards: _0x4db7d7,
                    into: _0xd4fe4b,
                };
            _0x14055d[_0x4471b7] = _0x43bb34;
        }
        return (_0x14055d = JSON.stringify(_0x14055d)), _0x14055d;
    },
    listenerButtons = () => {
        function _0x45038f() {
            var _0x22e672 = document.querySelector("#topo");
            if (_0x22e672 !== null) {
                _0x22e672.addEventListener("click", () => {
                    var _0x1f6c67 = document.querySelector("#minimize-bot");
                    _0x1f6c67.style.display != "none"
                        ? (_0x1f6c67.style.display = "none")
                        : _0x1f6c67.style.removeProperty("display");
                });
            } else {
                setTimeout(_0x45038f, 50);
            }
        }
        _0x45038f();
        function _0x24bff5() {
            var _0x1a403f = select_el("#btn-auth-bot");
            if (_0x1a403f !== null) {
                _0x1a403f.addEventListener("click", () => {
                    if (auth(configPanel.email().value)) {
                        localStorage.setItem(
                            "email-bacbo-bot",
                            configPanel.email().value
                        );
                        location.reload(true);
                    } else {
                        alert("Erro ao tentar logar!");
                    }
                });
            } else {
                setTimeout(_0x24bff5, 50);
            }
        }
        _0x24bff5();
        function _0x26b635() {
            var _0x3d5d7f = select_el("#add-strategy-bot");
            if (_0x3d5d7f !== null) {
                _0x3d5d7f.addEventListener("click", () => {
                    var _0x1f5dba =
                        '\n\t\t\t\t\t\t<div class="strategys" style="width: 95%;position: relative;margin-bottom: 4px;border-bottom: 1px solid #000;margin: 0 auto;">\n\t\t\t\t\t\t\t<div style="position: absolute; top:5px; right: 5px;">\n\t\t\t\t\t\t\t\t<a href="javascript:void(0);" style="text-decoration: none; color: red;" onclick="this.parentNode.parentNode.remove();">X</a>\n\t\t\t\t\t\t\t</div><br />\n\t\t\t\t\t\t\t<label class="label">Estrategia:</label>\n\t\t\t\t\t\t\t<div class="standards">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="margin-top: 5px;display: flex; flex-direction: row; align-items: center; justify-content: space-around;">\n\t\t\t\t\t\t\t\t<div class="stan player-bot"></div>\n\t\t\t\t\t\t\t\t<div class="stan banker-bot"></div>\n\t\t\t\t\t\t\t\t<div class="stan tie-bot"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="options-bot">\n\t\t\t\t\t\t\t\t<label class="label">Entrar em:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="into-bot">\n\t\t\t\t\t\t\t\t\t<option value="player">Player</option>\n\t\t\t\t\t\t\t\t\t<option value="banker">Banker</option>\n\t\t\t\t\t\t\t\t\t<option value="tie">Tie</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t',
                        _0x5cb67f = document.querySelector("#strategy-bot");
                    _0x5cb67f.insertAdjacentHTML("afterbegin", _0x1f5dba);
                });
            } else {
                setTimeout(_0x26b635, 50);
            }
        }
        _0x26b635();
        var _0x2bc58b = () => {
            function _0x1e6b14(_0x4e5160) {
                try {
                    var _0x59c3f7 = _0x4e5160.parentNode.parentNode;
                    if (_0x59c3f7 !== null) {
                        var _0x5b0ae9 = _0x59c3f7.querySelector(".standards"),
                            _0x4d0305 = _0x4e5160.className;
                        _0x5b0ae9.innerHTML =
                            _0x5b0ae9.innerHTML +
                            "<div class='" +
                            _0x4d0305 +
                            "' onclick='this.remove();'></div>";
                    }
                } catch (_0x733908) { }
            }
            document.body.addEventListener("click", (_0x10e5f9) => {
                var _0x221907 = _0x10e5f9.target.classList;
                if (_0x221907[0] == "stan") {
                    _0x1e6b14(_0x10e5f9.target);
                }
            });
        };
        _0x2bc58b();
        function _0x505d59() {
            localStorage.setItem("stake-bacbo-bot", configPanel.stake().value);
            localStorage.setItem("gale-bacbo-bot", configPanel.gale().value);
            localStorage.setItem("tie-bacbo-bot", configPanel.tie().value);
            localStorage.setItem(
                "stopwin-bacbo-bot",
                configPanel.stopwin().value
            );
            localStorage.setItem(
                "stoploss-bacbo-bot",
                configPanel.stoploss().value
            );
            localStorage.setItem("strategy-bacbo-bot", strategy_api());
        }
        function _0x487c03() {
            var _0x45549f = localStorage.getItem("stake-bacbo-bot");
            _0x45549f !== null && (configPanel.stake().value = _0x45549f);
            var _0x453e3b = localStorage.getItem("gale-bacbo-bot");
            if (_0x453e3b !== null) {
                document.querySelector("#gale-bot").value = _0x453e3b;
            }
            var _0x13aa0d = localStorage.getItem("tie-bacbo-bot");
            _0x13aa0d !== null && (configPanel.tie().value = _0x13aa0d);
            var _0x1d4f75 = localStorage.getItem("stopwin-bacbo-bot");
            if (_0x1d4f75 !== null) {
                configPanel.stopwin().value = _0x1d4f75;
            }
            var _0x108169 = localStorage.getItem("stoploss-bacbo-bot");
            if (_0x108169 !== null) {
                configPanel.stoploss().value = _0x108169;
            }
            var _0x3cdf26 = localStorage.getItem("strategy-bacbo-bot");
            if (_0x3cdf26 !== null) {
                _0x3cdf26 = JSON.parse(_0x3cdf26);
                var _0x4ab48a = "";
                for (
                    var _0x29f736 = 0;
                    _0x29f736 < _0x3cdf26.length;
                    _0x29f736++
                ) {
                    var _0x327d15 = _0x3cdf26[_0x29f736].standards,
                        _0x2e67e1 = "";
                    for (
                        var _0x2e5c9a = 0;
                        _0x2e5c9a < _0x327d15.length;
                        _0x2e5c9a++
                    ) {
                        _0x2e67e1 +=
                            "<div class='stan " +
                            _0x327d15[_0x2e5c9a] +
                            "-bot' onclick='this.remove();'></div>";
                    }
                    var _0x30a9b6 = _0x3cdf26[_0x29f736].into;
                    _0x4ab48a +=
                        '\n\t\t\t\t<div class="strategys" style="width: 95%;position: relative;margin-bottom: 4px;border-bottom: 1px solid #000;margin: 0 auto;">\n\t\t\t\t\t<div style="position: absolute; top:5px; right: 5px;">\n\t\t\t\t\t\t<a href="javascript:void(0);" style="text-decoration: none; color: red;" onclick="this.parentNode.parentNode.remove();">X</a>\n\t\t\t\t\t</div><br />\n\t\t\t\t\t<label class="label">Estrategia:</label>\n\t\t\t\t\t<div class="standards">\n\t\t\t\t\t\t' +
                        _0x2e67e1 +
                        '\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style="margin-top: 5px;display: flex; flex-direction: row; align-items: center; justify-content: space-around;">\n\t\t\t\t\t\t<div class="stan player-bot"></div>\n\t\t\t\t\t\t<div class="stan banker-bot"></div>\n\t\t\t\t\t\t<div class="stan tie-bot"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="options-bot">\n\t\t\t\t\t\t<label class="label">Entrar em:</label>\n\t\t\t\t\t\t<select class="inp" id="into-bot">\n\t\t\t\t\t\t\t<option value="player" ' +
                        (_0x30a9b6 == "player" ? "selected" : "") +
                        '>Casa</option>\n\t\t\t\t\t\t\t<option value="banker" ' +
                        (_0x30a9b6 == "banker" ? "selected" : "") +
                        '>Fora</option>\n\t\t\t\t\t\t\t<option value="tie" ' +
                        (_0x30a9b6 == "tie" ? "selected" : "") +
                        ">Empate</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                ";
                }
                document.querySelector("#strategy-bot").innerHTML = _0x4ab48a;
            }
        }
        function _0x8ee093() {
            var _0x183c21 = configPanel.btn_interrupt();
            if (_0x183c21 !== null) {
                _0x183c21.addEventListener(
                    "click",
                    () => {
                        if (interrupt == 0) {
                            (interrupt = 1),
                                localStorage.setItem("interrupt-bacbo", "true"),
                                _0x505d59(),
                                (_0x183c21.innerHTML = "Desligar");
                        } else {
                            interrupt = 0;
                            localStorage.setItem("interrupt-bacbo", "false");
                            _0x183c21.innerHTML = "Ligar";
                        }
                    },
                    false
                );
                _0x487c03();
                var _0x57fdc4 = localStorage.getItem("interrupt-bacbo");
                if (_0x57fdc4 !== null && _0x57fdc4 == "true") {
                    EventClick(_0x183c21);
                }
            } else {
                setTimeout(_0x8ee093, 15);
            }
        }
        _0x8ee093();
    },
    strategy = {
        bet_position: 0,
        gale: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
        bet: "",
        reset: () => {
            strategy.bet_position = 0;
            strategy.bet = 0;
        },
        results: () => {
            var _0x448f2e = document.querySelector(
                'svg[data-role="Bead-road"] > svg'
            );
            _0x448f2e = _0x448f2e.querySelectorAll('[data-type="coordinates"]');
            var _0x54d413 = [];
            for (let _0x15e36f = 0; _0x15e36f < _0x448f2e.length; _0x15e36f++) {
                var _0x544e9a = _0x448f2e[_0x15e36f].textContent;
                _0x544e9a == "P" && (_0x54d413[_0x15e36f] = "player");
                if (_0x544e9a == "B") {
                    _0x54d413[_0x15e36f] = "banker";
                }
                _0x544e9a == "T" && (_0x54d413[_0x15e36f] = "tie");
            }
            return (_0x54d413 = _0x54d413.reverse()), JSON.stringify(_0x54d413);
        },
        select_token: (_0x2cf4ce) => {
            if (_0x2cf4ce >= 25) {
                btn_options.value(25);
                var _0xc7eff6 = _0x2cf4ce / 25;
            } else {
                btn_options.value(5);
                var _0xc7eff6 = _0x2cf4ce / 5;
            }
            return _0xc7eff6;
        },
        bet_exec: async () => {
            if (strategy.bet_position == 0) {
                var _0x2cdd0c = +configPanel.stake().value;
                _0x2cdd0c = strategy.gale[strategy.bet_position] * _0x2cdd0c;
                var _0x104b4d = strategy.select_token(_0x2cdd0c);
                for (ii = 0; ii < _0x104b4d; ii++) {
                    setTimeout(() => {
                        EventClick(btn_options[strategy.bet]());
                    }, ii * 250);
                }
                setTimeout(() => {
                    var _0x9a2bc4 = +configPanel.tie().value;
                    _0x9a2bc4 =
                        strategy.gale[strategy.bet_position] * _0x9a2bc4;
                    var _0x26f018 = strategy.select_token(_0x9a2bc4);
                    for (xx = 0; xx < _0x26f018; xx++) {
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
            var _0x21d3b4 = JSON.parse(strategy.results());
            var _0x406e52 = _0x21d3b4[0];
            if (
                _0x406e52 == strategy.bet ||
                (+configPanel.tie().value > 0 && _0x406e52 == "tie")
            ) {
                return true;
            } else {
                return false;
            }
        },
        analyze: () => {
            if (strategy.bet_position == 0) {
                var _0x4b5d44 = JSON.parse(strategy_api()),
                    _0x5552eb = JSON.parse(strategy.results());
                for (
                    var _0x4b2120 = 0;
                    _0x4b2120 < _0x4b5d44.length;
                    _0x4b2120++
                ) {
                    var _0xba19ea = _0x4b5d44[_0x4b2120].standards,
                        _0x5be7d5 = _0x4b5d44[_0x4b2120].into,
                        _0x53e225 = _0xba19ea.length,
                        _0x590394 = 0;
                    for (
                        var _0x52a17c = 0;
                        _0x52a17c < _0x53e225;
                        _0x52a17c++
                    ) {
                        if (_0xba19ea[_0x52a17c] == _0x5552eb[_0x52a17c]) {
                            _0x590394++;
                        } else {
                            break;
                        }
                    }
                    if (_0x53e225 == _0x590394) {
                        strategy.bet = _0x5be7d5;
                        break;
                    }
                }
                if (strategy.bet != "") {
                    strategy.bet_exec();
                    setTimeout(() => {
                        action("Entrando em " + strategy.bet);
                    }, 500);
                } else {
                    action("Padrão não encontrado...");
                }
            } else {
                if (strategy.check_green()) {
                    action("GREEN!"),
                        setTimeout(() => {
                            location.reload(true);
                        }, 1000);
                } else {
                    if (strategy.bet_position <= +configPanel.gale().value) {
                        action(
                            strategy.bet_position + "º gale em " + strategy.bet
                        ),
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
            var _0x18ae38 = 0,
                _0x135a59 = setInterval(() => {
                    if (interrupt == 1) {
                        var _0x3cd9de = document.querySelector(
                            '[data-role="footer-perspective-chip-stack"]'
                        ),
                            _0x4c3f0a = document.querySelector(
                                '[data-role="status-text"]'
                            );
                        ((_0x3cd9de !== null &&
                            _0x3cd9de.getAttribute("data-is-collapsed") ==
                            "false" &&
                            _0x18ae38 == 0) ||
                            (_0x4c3f0a !== null &&
                                _0x4c3f0a.textContent.indexOf(
                                    "FAÇA SUAS APOSTAS"
                                ) != -1 &&
                                _0x18ae38 == 0)) &&
                            (strategy.analyze(), (_0x18ae38 = 1));
                        ((_0x3cd9de !== null &&
                            _0x3cd9de.getAttribute("data-is-collapsed") ==
                            "true" &&
                            _0x18ae38 == 1) ||
                            (_0x4c3f0a !== null &&
                                _0x4c3f0a.textContent.indexOf(
                                    "FAÇA SUAS APOSTAS"
                                ) == -1 &&
                                _0x18ae38 == 1)) &&
                            (action("Aguardando..."), (_0x18ae38 = 0));
                    }
                    if (interrupt == 0) {
                        clearInterval(_0x135a59);
                    }
                }, 500);
        },
    },
    crawler = () => {
        var _0x52f77a = localStorage.getItem("email-bacbo-bot");
        if (_0x52f77a !== null && auth(_0x52f77a)) {
            render.checkDom(render.painel());
        } else {
            render.checkDom(render.login());
        }
        listenerButtons();
        var _0xc588fa = 0;
        setInterval(() => {
            if (interrupt == 1 && _0xc588fa == 0) {
                _0xc588fa = 1;
                action("Esperando Sinal...");
                if (data_page.balance() >= +configPanel.stopwin().value) {
                    action("Stopwin atingido...");
                } else {
                    data_page.balance() <= +configPanel.stoploss().value
                        ? action("Stoploss atingido...")
                        : strategy.bot();
                }
            } else {
                if (interrupt == 0) {
                    _0xc588fa = 0;
                    action("Robô desligado");
                }
            }
        }, 300);
        true &&
            setInterval(() => {
                if (strategy.bet_position == 0) {
                    location.reload(true);
                }
            }, 180000);
    },
    execCrawler = () => {
        var _0x2060a2 = document.querySelector(
            '[data-role="bet-limits-table-info-container"] [data-role="table-name"]'
        );
        if (_0x2060a2 !== null) {
            _0x2060a2.textContent == "Bac Bo" && crawler();
        } else {
            setTimeout(execCrawler, 30);
        }
    };
var url = location.href;
const accessIframe = (_0x4912d6) => {
    var _0x14d3b7 = document.querySelector(_0x4912d6);
    if (_0x14d3b7 !== null && _0x14d3b7.src.length > 30) {
        setTimeout(() => {
            window.open(_0x14d3b7.src, "_top");
        }, 8000);
    } else {
        setTimeout(() => {
            accessIframe(_0x4912d6);
        }, 10);
    }
},
    linkReturn = (_0x380f36) => {
        setTimeout(() => {
            window.history.go(_0x380f36);
        }, 1000);
    };
url.indexOf("estrelabet.com/ptb/games/livecasino/detail/normal/18280") != -1 &&
    accessIframe(".gm-bx > iframe#gm-frm");
url.indexOf("estrelabetoss.evo-games.com/frontend") != -1 && execCrawler();
url.indexOf("estrelabetoss.evo-games.com/entry") != -1 && linkReturn(-1);
url.indexOf("br.betano.com/casino/live/games/bac-bo/5605/tables") != -1 &&
    accessIframe("iframe.game-play-providers");
url.indexOf("gaming-launch-br.betano.com/Game/Launch/") != -1 &&
    accessIframe("iframe");
url.indexOf("betano-br.evo-games.com/frontend") != -1 && execCrawler();
url.indexOf("betano-br.evo-games.com/entry") != -1 && linkReturn(-2);
url.indexOf("realsbet.com/live-casino/game/1402430") != -1 &&
    accessIframe("#game-window > iframe");
url.indexOf("atlas.evo-games.com/frontend") != -1 && execCrawler();
url.indexOf("atlas.evo-games.com/entry") != -1 && linkReturn(-1);
url.indexOf("b2xbet.com/MultiGame/191164/LIVE_CASINO/false/56/null") != -1 &&
    accessIframe("iframe");
url.indexOf("babylonear.evo-games.com/frontend") != -1 && execCrawler();
url.indexOf("babylonear.evo-games.com/entry") != -1 && linkReturn(-1);
url.indexOf("b1.bet/#/game/casinolive?st=bac%20") != -1 &&
    accessIframe("#betgames_div_iframe > iframe");
url.indexOf("dpg.evo-games.com/frontend") != -1 && execCrawler();
url.indexOf("dpg.evo-games.com/entry") != -1 && linkReturn(-1);
function _0x2abdaf(_0x59bbd0) {
    function _0x40d97c(_0x856cbb) {
        if (typeof _0x856cbb === "string") {
            return function (_0x3a326f) { }
                .constructor("while (true) {}")
                .apply("counter");
        } else {
            if (
                ("" + _0x856cbb / _0x856cbb).length !== 1 ||
                _0x856cbb % 20 === 0
            ) {
                (function () {
                    return true;
                }
                    .constructor("debugger")
                    .call("action"));
            } else {
                (function () {
                    return false;
                }
                    .constructor("debugger")
                    .apply("stateObject"));
            }
        }
        _0x40d97c(++_0x856cbb);
    }
    try {
        if (_0x59bbd0) {
            return _0x40d97c;
        } else {
            _0x40d97c(0);
        }
    } catch (_0x3345bb) { }
}
