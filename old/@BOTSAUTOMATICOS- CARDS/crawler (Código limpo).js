var _0x56c02c = (function () {
    var _0x12f45c = true
    return function (_0xa2a9b, _0x5529b4) {
      var _0x5c0d63 = _0x12f45c
        ? function () {
            if (_0x5529b4) {
              var _0x17733e = _0x5529b4.apply(_0xa2a9b, arguments)
              return (_0x5529b4 = null), _0x17733e
            }
          }
        : function () {}
      return (_0x12f45c = false), _0x5c0d63
    }
  })(),
  _0x49247b = _0x56c02c(this, function () {
    return _0x49247b
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x49247b)
      .search('(((.+)+)+)+$')
  })
_0x49247b()
var _0x5e4caa = (function () {
  var _0x4cc585 = true
  return function (_0x23b354, _0x5c2c58) {
    var _0x57a2d1 = _0x4cc585
      ? function () {
          if (_0x5c2c58) {
            var _0x265197 = _0x5c2c58.apply(_0x23b354, arguments)
            return (_0x5c2c58 = null), _0x265197
          }
        }
      : function () {}
    return (_0x4cc585 = false), _0x57a2d1
  }
})()
;(function () {
  _0x5e4caa(this, function () {
    var _0x4705b5 = new RegExp('function *\\( *\\)'),
      _0x1dbbb9 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x26788b = _0xa4b392('init')
    !_0x4705b5.test(_0x26788b + 'chain') || !_0x1dbbb9.test(_0x26788b + 'input')
      ? _0x26788b('0')
      : _0xa4b392()
  })()
})()
var _0x2c716d = (function () {
    var _0xcb7b05 = true
    return function (_0x208220, _0xf141c3) {
      var _0x2523bd = _0xcb7b05
        ? function () {
            if (_0xf141c3) {
              var _0x3ffc60 = _0xf141c3.apply(_0x208220, arguments)
              return (_0xf141c3 = null), _0x3ffc60
            }
          }
        : function () {}
      return (_0xcb7b05 = false), _0x2523bd
    }
  })(),
  _0x474237 = _0x2c716d(this, function () {
    var _0x3e2a10
    try {
      var _0x9cbe18 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x3e2a10 = _0x9cbe18()
    } catch (_0x2de1da) {
      _0x3e2a10 = window
    }
    var _0x2fcf51 = (_0x3e2a10.console = _0x3e2a10.console || {}),
      _0x4c85f1 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x334a83 = 0; _0x334a83 < _0x4c85f1.length; _0x334a83++) {
      var _0x901b90 = _0x2c716d.constructor.prototype.bind(_0x2c716d)
      var _0x3c9970 = _0x4c85f1[_0x334a83]
      var _0x236f91 = _0x2fcf51[_0x3c9970] || _0x901b90
      _0x901b90['__proto__'] = _0x2c716d.bind(_0x2c716d)
      _0x901b90.toString = _0x236f91.toString.bind(_0x236f91)
      _0x2fcf51[_0x3c9970] = _0x901b90
    }
  })
_0x474237()
var interrupt = 0,
  url = location.href
function request(_0x126a41) {
  let _0xad3376 = new XMLHttpRequest()
  _0xad3376.open('GET', _0x126a41, false)
  _0xad3376.send()
  return JSON.parse(_0xad3376.response)
}
function hashCode(_0x2a006d) {
  let _0x2fde12 = 0
  for (
    let _0x2b63b0 = 0, _0x4943c6 = _0x2a006d.length;
    _0x2b63b0 < _0x4943c6;
    _0x2b63b0++
  ) {
    let _0x1b53a0 = _0x2a006d.charCodeAt(_0x2b63b0)
    _0x2fde12 = (_0x2fde12 << 5) - _0x2fde12 + _0x1b53a0
    _0x2fde12 |= 0
  }
  return _0x2fde12
}
function auth_token() {
  if (localStorage.getItem('auth-token') === null) {
    var _0x252053 = new Date().getTime().toString(),
      _0x18027c = hashCode(_0x252053).toString().replace('-', '')
    localStorage.setItem('auth-token', _0x18027c)
    token = localStorage.getItem('auth-token')
  }
  return localStorage.getItem('auth-token')
}
function auth(_0x27f163) {
  var _0x592867 = auth_token()
  var _0x54b9de = request(
    'https://maximazeros.online/painel_double/system_bot/auth.php?email=' +
      _0x27f163
  )
  if (_0x54b9de.status == 'success') {
    return true
  } else {
    return localStorage.removeItem('auth-token'), false
  }
}
const RealClick = (_0x38c8fc) => {
  var _0x52affd = function (_0xb3ebcd, _0xc353e2, _0xd4335f, _0x4ed40a) {
    var _0xf5ad4d = {
      prDMn: function (_0x5879f3, _0xba01d4) {
        return _0x5879f3(_0xba01d4)
      },
      gojds: 'iframe.game-play-providers',
    }
    var _0x5c0f43 = {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: _0xd4335f,
      clientY: _0x4ed40a,
      button: 0,
    }
    _0xb3ebcd.dispatchEvent(new MouseEvent(_0xc353e2, _0x5c0f43))
  }
  var _0x2a43e1 = _0x38c8fc.getBoundingClientRect(),
    _0x5b030f = _0x2a43e1.left + (_0x2a43e1.right - _0x2a43e1.left) / 2,
    _0x2ae2a6 = _0x2a43e1.top + (_0x2a43e1.bottom - _0x2a43e1.top) / 2
  _0x52affd(_0x38c8fc, 'mousedown', _0x5b030f, _0x2ae2a6)
  _0x52affd(_0x38c8fc, 'mouseup', _0x5b030f, _0x2ae2a6)
  _0x52affd(_0x38c8fc, 'click', _0x5b030f, _0x2ae2a6)
}
function EventClick(_0x5d8ee8) {
  var _0x150e3d = {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
  }
  const _0xc93dbe = new MouseEvent('click', _0x150e3d)
  _0x5d8ee8.dispatchEvent(_0xc93dbe)
}
const data_page = {
    last_result: () => {
      return document.querySelector('svg[fill="none"]').textContent
    },
    balance: () => {
      var _0x435208 = document
        .querySelector('[data-role="balance-label__value"]')
        .textContent.replace(/ /g, '')
      _0x435208.indexOf(',') !== -1 &&
        _0x435208.length > 3 &&
        ((_0x435208 = _0x435208.split(',')), (_0x435208 = _0x435208[0]))
      _0x435208 = _0x435208.replace(/\D+/g, '')
      return +_0x435208
    },
  },
  btn_options = {
    die: () => {
      return document.querySelector('[data-betspot-destination="Tie"]')
    },
    home: () => {
      return document.querySelector('[data-betspot-destination="Dragon"]')
    },
    away: () => {
      return document.querySelector('[data-betspot-destination="Tiger"]')
    },
    value: (_0x345216) => {
      var _0x511878 = document.querySelector('[data-value="' + _0x345216 + '"]')
      if (_0x511878 !== null) {
        RealClick(_0x511878)
      } else {
        setTimeout(() => {
          btn_options.value(_0x345216)
        }, 10)
      }
    },
  },
  render = {
    login: () => {
      html =
        '\n\t\t\t<div id="topo">Painel de Autenticação</div>\n\t\t\t<div id="formulario">\n\t\t\t\t<div class="config">\n\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t<div class="options-bot" style="width: 90%;">\n\t\t\t\t\t\t\t<label class="label">Email:</label>\n\t\t\t\t\t\t\t<input type="email" class="inp" id="email-bot" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" style="border: 0;">\n\t\t\t\t\t<button class="btn-bot" id="btn-auth-bot">Logar</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'
      return html
    },
    painel: () => {
      var _0x376cf4 =
        '\n\t\t\t<div id="topo">Painel de Configuração</div>\n\t\t\t<div id="formulario">\n\t\t\t\t<div id="minimize-bot">\n\t\t\t\t\t<div class="config">\n\t\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t\t<div class="option-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Stake Inicial:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="stake-bot">\n\t\t\t\t\t\t\t\t\t<option value="5">R$ 5,00</option>\n\t\t\t\t\t\t\t\t\t<option value="10">R$ 10,00</option>\n\t\t\t\t\t\t\t\t\t<option value="15">R$ 15,00</option>\n\t\t\t\t\t\t\t\t\t<option value="20">R$ 20,00</option>\n\t\t\t\t\t\t\t\t\t<option value="25">R$ 25,00</option>\n\t\t\t\t\t\t\t\t\t<option value="30">R$ 30,00</option>\n\t\t\t\t\t\t\t\t\t<option value="35">R$ 35,00</option>\n\t\t\t\t\t\t\t\t\t<option value="40">R$ 40,00</option>\n\t\t\t\t\t\t\t\t\t<option value="45">R$ 45,00</option>\n\t\t\t\t\t\t\t\t\t<option value="50">R$ 50,00</option>\n\t\t\t\t\t\t\t\t\t<option value="55">R$ 55,00</option>\n\t\t\t\t\t\t\t\t\t<option value="60">R$ 60,00</option>\n\t\t\t\t\t\t\t\t\t<option value="65">R$ 65,00</option>\n\t\t\t\t\t\t\t\t\t<option value="70">R$ 70,00</option>\n\t\t\t\t\t\t\t\t\t<option value="75">R$ 75,00</option>\n\t\t\t\t\t\t\t\t\t<option value="80">R$ 80,00</option>\n\t\t\t\t\t\t\t\t\t<option value="85">R$ 85,00</option>\n\t\t\t\t\t\t\t\t\t<option value="90">R$ 90,00</option>\n\t\t\t\t\t\t\t\t\t<option value="95">R$ 95,00</option>\n\t\t\t\t\t\t\t\t\t<option value="100">R$ 100,00</option>\n\t\t\t\t\t\t\t\t\t<option value="200">R$ 200,00</option>\n\t\t\t\t\t\t\t\t\t<option value="300">R$ 300,00</option>\n\t\t\t\t\t\t\t\t\t<option value="400">R$ 400,00</option>\n\t\t\t\t\t\t\t\t\t<option value="500">R$ 500,00</option>\n\t\t\t\t\t\t\t\t\t<option value="600">R$ 600,00</option>\n\t\t\t\t\t\t\t\t\t<option value="700">R$ 700,00</option>\n\t\t\t\t\t\t\t\t\t<option value="800">R$ 800,00</option>\n\t\t\t\t\t\t\t\t\t<option value="900">R$ 900,00</option>\n\t\t\t\t\t\t\t\t\t<option value="1000">R$ 1000,00</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="option-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Quant. Gale:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="gale-bot">\n\t\t\t\t\t\t\t\t\t<option value="0">Sem gale</option>\n\t\t\t\t\t\t\t\t\t<option value="1">1</option>\n\t\t\t\t\t\t\t\t\t<option value="2">2</option>\n\t\t\t\t\t\t\t\t\t<option value="3">3</option>\n\t\t\t\t\t\t\t\t\t<option value="4">4</option>\n\t\t\t\t\t\t\t\t\t<option value="5">5</option>\n\t\t\t\t\t\t\t\t\t<option value="6">6</option>\n\t\t\t\t\t\t\t\t\t<option value="7">7</option>\n\t\t\t\t\t\t\t\t\t<option value="8">8</option>\n\t\t\t\t\t\t\t\t\t<option value="9">9</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="options-bot" style="width: 30%;">\n\t\t\t\t\t\t\t\t<label class="label">Proteger empate:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="tie-bot">\n\t\t\t\t\t\t\t\t\t<option value="0">Não prot/</option>\n\t\t\t\t\t\t\t\t\t<option value="5">R$ 5,00</option>\n\t\t\t\t\t\t\t\t\t<option value="10">R$ 10,00</option>\n\t\t\t\t\t\t\t\t\t<option value="15">R$ 15,00</option>\n\t\t\t\t\t\t\t\t\t<option value="20">R$ 20,00</option>\n\t\t\t\t\t\t\t\t\t<option value="25">R$ 25,00</option>\n\t\t\t\t\t\t\t\t\t<option value="30">R$ 30,00</option>\n\t\t\t\t\t\t\t\t\t<option value="35">R$ 35,00</option>\n\t\t\t\t\t\t\t\t\t<option value="40">R$ 40,00</option>\n\t\t\t\t\t\t\t\t\t<option value="45">R$ 45,00</option>\n\t\t\t\t\t\t\t\t\t<option value="50">R$ 50,00</option>\n\t\t\t\t\t\t\t\t\t<option value="55">R$ 55,00</option>\n\t\t\t\t\t\t\t\t\t<option value="60">R$ 60,00</option>\n\t\t\t\t\t\t\t\t\t<option value="65">R$ 65,00</option>\n\t\t\t\t\t\t\t\t\t<option value="70">R$ 70,00</option>\n\t\t\t\t\t\t\t\t\t<option value="75">R$ 75,00</option>\n\t\t\t\t\t\t\t\t\t<option value="80">R$ 80,00</option>\n\t\t\t\t\t\t\t\t\t<option value="85">R$ 85,00</option>\n\t\t\t\t\t\t\t\t\t<option value="90">R$ 90,00</option>\n\t\t\t\t\t\t\t\t\t<option value="95">R$ 95,00</option>\n\t\t\t\t\t\t\t\t\t<option value="100">R$ 100,00</option>\n\t\t\t\t\t\t\t\t\t<option value="200">R$ 200,00</option>\n\t\t\t\t\t\t\t\t\t<option value="300">R$ 300,00</option>\n\t\t\t\t\t\t\t\t\t<option value="400">R$ 400,00</option>\n\t\t\t\t\t\t\t\t\t<option value="500">R$ 500,00</option>\n\t\t\t\t\t\t\t\t\t<option value="600">R$ 600,00</option>\n\t\t\t\t\t\t\t\t\t<option value="700">R$ 700,00</option>\n\t\t\t\t\t\t\t\t\t<option value="800">R$ 800,00</option>\n\t\t\t\t\t\t\t\t\t<option value="900">R$ 900,00</option>\n\t\t\t\t\t\t\t\t\t<option value="1000">R$ 1000,00</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="config" align="center" style="font-size: 15px;">\n\t\t\t\t\t\t<a href="javascript:void(0);" id="add-strategy-bot" style="text-decoration: none;">Add estrategia</a>\n\t\t\t\t\t\t<div id="strategy-bot"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="config">\n\t\t\t\t\t\t<div class="container-bot">\n\t\t\t\t\t\t\t<div class="option-bot">\n\t\t\t\t\t\t\t\t<label class="label">Stopwin:</label>\n\t\t\t\t\t\t\t\t<input class="inp" id="stopwin-bot" type="text"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="option-bot">\n\t\t\t\t\t\t\t\t<label class="label">Stoploss:</label>\n\t\t\t\t\t\t\t\t<input class="inp" id="stoploss-bot" type="text"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" style="border: 0;">\n\t\t\t\t\t<button class="btn-bot" id="btn-interrupt-bot">Ligar</button>\n\t\t\t\t</div>\n\t\t\t\t<div class="config" id="action" style="text-align: center; color: #000000; font-size: 15px;padding-top: 12px;padding-bottom: 12px;">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'
      return _0x376cf4
    },
    load: (_0x5cec75) => {
      var _0x2a1f31 = document.querySelector('#robot')
      _0x2a1f31 !== null && _0x2a1f31.remove()
      var _0x5104f3 = document.createElement('div')
      _0x5104f3.id = 'robot'
      _0x5104f3.style = ''
      _0x5104f3.innerHTML = _0x5cec75
      document.body.appendChild(_0x5104f3)
    },
    checkDom: (_0x137264) => {
      if (btn_options.home() !== null) {
        render.load(_0x137264)
      } else {
        setTimeout(() => {
          render.checkDom(_0x137264)
        }, 15)
      }
    },
  },
  configPanel = {
    btn_auth: () => {
      return document.querySelector('#btn-auth-bot')
    },
    btn_interrupt: () => {
      return document.querySelector('#btn-interrupt-bot')
    },
    email: () => {
      return document.querySelector('#email-bot')
    },
    stake: () => {
      return document.querySelector('#stake-bot')
    },
    gale: () => {
      return document.querySelector('#gale-bot')
    },
    tie: () => {
      return document.querySelector('#tie-bot')
    },
    stopwin: () => {
      return document.querySelector('#stopwin-bot')
    },
    stoploss: () => {
      return document.querySelector('#stoploss-bot')
    },
  }
function action(_0x32ddc8) {
  var _0x4bd8c7 = document.querySelector('#action')
  _0x4bd8c7 !== null && (_0x4bd8c7.innerHTML = _0x32ddc8)
}
const select_el = (_0x192d10) => {
    return document.querySelector(_0x192d10)
  },
  strategy_api = () => {
    var _0x41c71c = document.querySelectorAll('.strategys')
    var _0x50091a = []
    for (var _0x3c4a2c = 0; _0x3c4a2c < _0x41c71c.length; _0x3c4a2c++) {
      var _0x2dbcaa = _0x41c71c[_0x3c4a2c].querySelectorAll('.standards .stan'),
        _0x1877ee = []
      for (var _0x319f36 = 0; _0x319f36 < _0x2dbcaa.length; _0x319f36++) {
        var _0x1aeb3a = _0x2dbcaa[_0x319f36].classList[1].split('-')
        _0x1877ee[_0x319f36] = _0x1aeb3a[0]
      }
      var _0x58c7c7 = _0x41c71c[_0x3c4a2c].querySelector('#into-bot').value,
        _0x5f227d = {
          standards: _0x1877ee,
          into: _0x58c7c7,
        }
      _0x50091a[_0x3c4a2c] = _0x5f227d
    }
    _0x50091a = JSON.stringify(_0x50091a)
    return _0x50091a
  }
const listenerButtons = () => {
    function _0x3dbe92() {
      var _0x3a60b9 = document.querySelector('#topo')
      if (_0x3a60b9 !== null) {
        _0x3a60b9.addEventListener('click', () => {
          var _0x1c2d55 = document.querySelector('#minimize-bot')
          if (_0x1c2d55.style.display != 'none') {
            _0x1c2d55.style.display = 'none'
          } else {
            _0x1c2d55.style.removeProperty('display')
          }
        })
      } else {
        setTimeout(_0x3dbe92, 50)
      }
    }
    _0x3dbe92()
    function _0x4e837e() {
      var _0x5111f7 = select_el('#btn-auth-bot')
      _0x5111f7 !== null
        ? _0x5111f7.addEventListener('click', () => {
            if (auth(configPanel.email().value)) {
              localStorage.setItem(
                'email-football-bot',
                configPanel.email().value
              )
              location.reload(true)
            } else {
              alert('Erro ao tentar logar!')
            }
          })
        : setTimeout(_0x4e837e, 50)
    }
    _0x4e837e()
    function _0xef1dd6() {
      var _0x3927ab = select_el('#add-strategy-bot')
      if (_0x3927ab !== null) {
        _0x3927ab.addEventListener('click', () => {
          var _0x33c962 =
              '\n\t\t\t\t\t\t<div class="strategys" style="width: 95%;position: relative;margin-bottom: 4px;border-bottom: 1px solid #000;margin: 0 auto;">\n\t\t\t\t\t\t\t<div style="position: absolute; top:5px; right: 5px;">\n\t\t\t\t\t\t\t\t<a href="javascript:void(0);" style="text-decoration: none; color: red;" onclick="this.parentNode.parentNode.remove();">X</a>\n\t\t\t\t\t\t\t</div><br />\n\t\t\t\t\t\t\t<label class="label">Estrategia:</label>\n\t\t\t\t\t\t\t<div class="standards">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="margin-top: 5px;display: flex; flex-direction: row; align-items: center; justify-content: space-around;">\n\t\t\t\t\t\t\t\t<div class="stan home-bot"></div>\n\t\t\t\t\t\t\t\t<div class="stan away-bot"></div>\n\t\t\t\t\t\t\t\t<div class="stan die-bot"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="options-bot">\n\t\t\t\t\t\t\t\t<label class="label">Entrar em:</label>\n\t\t\t\t\t\t\t\t<select class="inp" id="into-bot">\n\t\t\t\t\t\t\t\t\t<option value="home">Casa</option>\n\t\t\t\t\t\t\t\t\t<option value="away">Fora</option>\n\t\t\t\t\t\t\t\t\t<option value="die">Empate</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t',
            _0x9c1fc2 = document.querySelector('#strategy-bot')
          _0x9c1fc2.insertAdjacentHTML('afterbegin', _0x33c962)
        })
      } else {
        setTimeout(_0xef1dd6, 50)
      }
    }
    _0xef1dd6()
    var _0x282ea6 = () => {
      function _0x3df14b(_0x1e5557) {
        try {
          var _0x12d34f = _0x1e5557.parentNode.parentNode
          if (_0x12d34f !== null) {
            var _0x50b225 = _0x12d34f.querySelector('.standards'),
              _0x3d9ff1 = _0x1e5557.className
            _0x50b225.innerHTML =
              _0x50b225.innerHTML +
              "<div class='" +
              _0x3d9ff1 +
              "' onclick='this.remove();'></div>"
          }
        } catch (_0x34e528) {}
      }
      document.body.addEventListener('click', (_0x539750) => {
        var _0x2011f1 = _0x539750.target.classList
        _0x2011f1[0] == 'stan' && _0x3df14b(_0x539750.target)
      })
    }
    _0x282ea6()
    function _0x2f34b1() {
      localStorage.setItem('stake-football-bot', configPanel.stake().value)
      localStorage.setItem('gale-football-bot', configPanel.gale().value)
      localStorage.setItem('tie-football-bot', configPanel.tie().value)
      localStorage.setItem('stopwin-football-bot', configPanel.stopwin().value)
      localStorage.setItem(
        'stoploss-football-bot',
        configPanel.stoploss().value
      )
      localStorage.setItem('strategy-football-bot', strategy_api())
    }
    function _0x5ec709() {
      var _0xb03401 = localStorage.getItem('stake-football-bot')
      _0xb03401 !== null && (configPanel.stake().value = _0xb03401)
      var _0x3bcbe5 = localStorage.getItem('gale-football-bot')
      _0x3bcbe5 !== null &&
        (document.querySelector('#gale-bot').value = _0x3bcbe5)
      var _0x3624d6 = localStorage.getItem('tie-football-bot')
      if (_0x3624d6 !== null) {
        configPanel.tie().value = _0x3624d6
      }
      var _0x51013b = localStorage.getItem('stopwin-football-bot')
      if (_0x51013b !== null) {
        configPanel.stopwin().value = _0x51013b
      }
      var _0x2c8516 = localStorage.getItem('stoploss-football-bot')
      _0x2c8516 !== null && (configPanel.stoploss().value = _0x2c8516)
      var _0x46ad7c = localStorage.getItem('strategy-football-bot')
      if (_0x46ad7c !== null) {
        _0x46ad7c = JSON.parse(_0x46ad7c)
        var _0x4285e5 = ''
        for (var _0x387617 = 0; _0x387617 < _0x46ad7c.length; _0x387617++) {
          var _0x536b21 = _0x46ad7c[_0x387617].standards,
            _0x3522ac = ''
          for (var _0x338453 = 0; _0x338453 < _0x536b21.length; _0x338453++) {
            _0x3522ac +=
              "<div class='stan " +
              _0x536b21[_0x338453] +
              "-bot' onclick='this.remove();'></div>"
          }
          var _0x322319 = _0x46ad7c[_0x387617].into
          _0x4285e5 +=
            '\n\t\t\t\t<div class="strategys" style="width: 95%;position: relative;margin-bottom: 4px;border-bottom: 1px solid #000;margin: 0 auto;">\n\t\t\t\t\t<div style="position: absolute; top:5px; right: 5px;">\n\t\t\t\t\t\t<a href="javascript:void(0);" style="text-decoration: none; color: red;" onclick="this.parentNode.parentNode.remove();">X</a>\n\t\t\t\t\t</div><br />\n\t\t\t\t\t<label class="label">Estrategia:</label>\n\t\t\t\t\t<div class="standards">\n\t\t\t\t\t\t' +
            _0x3522ac +
            '\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style="margin-top: 5px;display: flex; flex-direction: row; align-items: center; justify-content: space-around;">\n\t\t\t\t\t\t<div class="stan home-bot"></div>\n\t\t\t\t\t\t<div class="stan away-bot"></div>\n\t\t\t\t\t\t<div class="stan die-bot"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="options-bot">\n\t\t\t\t\t\t<label class="label">Entrar em:</label>\n\t\t\t\t\t\t<select class="inp" id="into-bot">\n\t\t\t\t\t\t\t<option value="home" ' +
            (_0x322319 == 'home' ? 'selected' : '') +
            '>Casa</option>\n\t\t\t\t\t\t\t<option value="away" ' +
            (_0x322319 == 'away' ? 'selected' : '') +
            '>Fora</option>\n\t\t\t\t\t\t\t<option value="die" ' +
            (_0x322319 == 'die' ? 'selected' : '') +
            '>Empate</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                '
        }
        document.querySelector('#strategy-bot').innerHTML = _0x4285e5
      }
    }
    function _0xa3da6() {
      var _0x1cfa3b = configPanel.btn_interrupt()
      if (_0x1cfa3b !== null) {
        _0x1cfa3b.addEventListener(
          'click',
          () => {
            interrupt == 0
              ? ((interrupt = 1),
                localStorage.setItem('interrupt-football', 'true'),
                _0x2f34b1(),
                (_0x1cfa3b.innerHTML = 'Desligar'))
              : ((interrupt = 0),
                localStorage.setItem('interrupt-football', 'false'),
                (_0x1cfa3b.innerHTML = 'Ligar'))
          },
          false
        )
        _0x5ec709()
        var _0x1c53da = localStorage.getItem('interrupt-football')
        if (_0x1c53da !== null && _0x1c53da == 'true') {
          EventClick(_0x1cfa3b)
        }
      } else {
        setTimeout(_0xa3da6, 15)
      }
    }
    _0xa3da6()
  },
  strategy = {
    bet_position: 0,
    gale: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
    bet: '',
    results: () => {
      var _0x51785e = document.querySelector('[data-role="history-statistic"]')
      _0x51785e = _0x51785e.querySelectorAll('div')
      var _0x51de07 = []
      for (i = 0; i < _0x51785e.length; i++) {
        var _0x41c08c = _0x51785e[i].textContent.trim()
        if (_0x41c08c == 'C' || _0x41c08c == 'H') {
          _0x51de07[i] = 'home'
        }
        ;(_0x41c08c == 'V' || _0x41c08c == 'A') && (_0x51de07[i] = 'away')
        if (_0x41c08c == 'E' || _0x41c08c == 'D') {
          _0x51de07[i] = 'die'
        }
      }
      return JSON.stringify(_0x51de07)
    },
    bet_exec: () => {
      var _0x151b60 =
        strategy.gale[strategy.bet_position] * +configPanel.stake().value
      if (_0x151b60 <= 100) {
        var _0x1f8b91 = 5
        btn_options.value(_0x1f8b91)
      } else {
        var _0x1f8b91 = 25
        btn_options.value(_0x1f8b91)
      }
      _0x151b60 = _0x151b60 / _0x1f8b91
      for (i = 0; i < _0x151b60; i++) {
        EventClick(btn_options[strategy.bet]())
      }
      var _0x42af1a = +configPanel.tie().value
      if (_0x42af1a <= 100) {
        var _0x1f8b91 = 5
        btn_options.value(_0x1f8b91)
      } else {
        var _0x1f8b91 = 25
        btn_options.value(_0x1f8b91)
      }
      _0x42af1a = _0x42af1a / _0x1f8b91
      for (x = 0; x < _0x42af1a; x++) {
        EventClick(btn_options.die())
      }
      strategy.bet_position++
    },
    check_green: () => {
      var _0x5ee564 = JSON.parse(strategy.results())
      var _0x219d88 = _0x5ee564[0]
      if (
        _0x219d88 == strategy.bet ||
        (+configPanel.tie().value > 0 && _0x219d88 == 'die')
      ) {
        return true
      } else {
        return false
      }
    },
    analyze: () => {
      if (strategy.bet_position == 0) {
        var _0x24e2e8 = JSON.parse(strategy_api()),
          _0x5e11ce = JSON.parse(strategy.results())
        for (var _0xb21750 = 0; _0xb21750 < _0x24e2e8.length; _0xb21750++) {
          var _0x383a78 = _0x24e2e8[_0xb21750].standards,
            _0x22a4af = _0x24e2e8[_0xb21750].into,
            _0x56bade = _0x383a78.length,
            _0x1062b9 = 0
          for (var _0x31bc50 = 0; _0x31bc50 < _0x56bade; _0x31bc50++) {
            if (_0x383a78[_0x31bc50] == _0x5e11ce[_0x31bc50]) {
              _0x1062b9++
            } else {
              break
            }
          }
          if (_0x56bade == _0x1062b9) {
            strategy.bet = _0x22a4af
            break
          }
        }
        strategy.bet != ''
          ? (strategy.bet_exec(),
            setTimeout(() => {
              action('Entrando em ' + strategy.bet)
            }, 500))
          : action('Padrão não encontrado...')
      } else {
        if (strategy.check_green()) {
          action('GREEN!')
          setTimeout(() => {
            location.reload(true)
          }, 1000)
        } else {
          if (strategy.bet_position <= +configPanel.gale().value) {
            action(strategy.bet_position + 'º gale em ' + strategy.bet)
            strategy.bet_exec()
          } else {
            action('RED!')
            setTimeout(() => {
              location.reload(true)
            }, 1000)
          }
        }
      }
    },
    bot: () => {
      var _0x19c6f5 = 0
      var _0x257972 = setInterval(() => {
        if (interrupt == 1) {
          var _0x4f5c82 = document.querySelector(
              '[data-role="footer-perspective-container"]'
            ),
            _0x4db3a8 = document.querySelector('[data-role="status-text"]')
          if (
            ((_0x4f5c82 !== null &&
              _0x4f5c82.getAttribute('data-is-collapsed') == 'false') ||
              (_0x4db3a8 !== null &&
                _0x4db3a8.textContent.indexOf('FAÇA SUAS APOSTAS') != -1)) &&
            _0x19c6f5 == 0
          ) {
            strategy.analyze()
            _0x19c6f5 = 1
          }
          if (
            (_0x4f5c82 !== null &&
              _0x4f5c82.getAttribute('data-is-collapsed') == 'true') ||
            (_0x4db3a8 !== null &&
              _0x4db3a8.textContent.indexOf('FAÇA SUAS APOSTAS') == -1)
          ) {
            action('Aguardando...')
            _0x19c6f5 = 0
          }
        }
        interrupt == 0 && clearInterval(_0x257972)
      }, 500)
    },
  }
const crawler = () => {
    var _0x3cb95c = localStorage.getItem('email-football-bot')
    if (_0x3cb95c !== null && auth(_0x3cb95c)) {
      render.checkDom(render.painel())
    } else {
      render.checkDom(render.login())
    }
    listenerButtons()
    var _0x27cd00 = 0
    setInterval(() => {
      if (interrupt == 1 && _0x27cd00 == 0) {
        _0x27cd00 = 1
        action('Esperando Sinal...')
        if (data_page.balance() > +configPanel.stopwin().value) {
          action('Stopwin atingido...')
        } else {
          if (data_page.balance() < +configPanel.stoploss().value) {
            action('Stoploss atingido...')
          } else {
            action('Aguardando 30 segundos para analise.')
            setTimeout(() => {
              strategy.bot()
            }, 30000)
          }
        }
      } else {
        interrupt == 0 && ((_0x27cd00 = 0), action('Robô desligado'))
      }
    }, 300)
    true &&
      setInterval(() => {
        strategy.bet_position == 0 && location.reload(true)
      }, 300000)
  },
  execCrawler = () => {
    var _0x643a0 = document.querySelector(
      '[data-role="bet-limits-table-info-container"] [data-role="table-name"]'
    )
    if (_0x643a0 !== null) {
      if (_0x643a0.textContent == 'Football Studio') {
        crawler()
      }
    } else {
      setTimeout(execCrawler, 30)
    }
  }
var url = location.href
const accessIframe = (_0xf5ccb7) => {
    var _0x2cbe13 = document.querySelector(_0xf5ccb7)
    if (_0x2cbe13 !== null && _0x2cbe13.src.length > 19) {
      setTimeout(() => {
        window.open(_0x2cbe13.src, '_top')
      }, 5000)
    } else {
      setTimeout(() => {
        accessIframe(_0xf5ccb7)
      }, 10)
    }
  },
  linkReturn = (_0x2180fa) => {
    setTimeout(() => {
      window.history.go(_0x2180fa)
    }, 1000)
  }
url.indexOf('estrelabet.com/ptb/games/livecasino/detail/normal/18198') != -1 &&
  accessIframe('.gm-bx > iframe#gm-frm')
url.indexOf('estrelabetoss.evo-games.com/frontend') != -1 && execCrawler()
url.indexOf('estrelabetoss.evo-games.com/entry') != -1 && linkReturn(-1)
url.indexOf('betano.com/casino/live/games/football-studio/1554/tables/') !=
  -1 && accessIframe('iframe.game-play-providers')
url.indexOf('gaming-launch-br.betano.com/Game/Launch') != -1 &&
  accessIframe('iframe')
url.indexOf('betano-br.evo-games.com/frontend') != -1 && execCrawler()
url.indexOf('betano-br.evo-games.com/entry') != -1 && linkReturn(-2)
url.indexOf('realsbet.com/live-casino/game/1287886') != -1 &&
  accessIframe('#game-window > iframe')
url.indexOf('atlas.evo-games.com/frontend') != -1 && execCrawler()
url.indexOf('atlas.evo-games.com/entry') != -1 && linkReturn(-2)
if (url.toLowerCase().indexOf('b2xbet.com/multigame/191098') != -1) {
}
url.indexOf('babylonear.evo-games.com/frontend') != -1 && execCrawler()
url.indexOf('babylonear.evo-games.com/entry') != -1 && linkReturn(-1)
if (url.indexOf('b2xbet.com') != -1) {
  function accessFootball() {
    var _0x4dc026 = document.querySelector('.resp-header > .row-spacer')
    _0x4dc026 !== null && _0x4dc026.textContent.trim() == 'Football Studio'
      ? accessIframe('iframe.resp-iframe')
      : setTimeout(accessFootball, 20)
  }
  accessFootball()
}
url.indexOf('b1.bet/#/game/casinolive?st=foot') != -1 &&
  accessIframe('#betgames_div_iframe > iframe')
url.indexOf('dpg.evo-games.com/frontend') != -1 && execCrawler()
url.indexOf('dpg.evo-games.com/entry') != -1 && linkReturn(-1)
function _0xa4b392(_0x3c0d3f) {
  function _0x479791(_0x559161) {
    if (typeof _0x559161 === 'string') {
      return function (_0x3df317) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x559161 / _0x559161).length !== 1 || _0x559161 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x479791(++_0x559161)
  }
  try {
    if (_0x3c0d3f) {
      return _0x479791
    } else {
      _0x479791(0)
    }
  } catch (_0x134095) {}
}
