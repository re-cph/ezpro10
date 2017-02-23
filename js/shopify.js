(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'ezypro10.myshopify.com',
      apiKey: '1678ed29c862abcacb72952f163bd3d0',
      appId: '6',
    });

    var userLanguage = navigator.language || navigator.userLanguageuage;
    if (userLanguage === 'da-DK' || userLanguage === 'da' || userLanguage === 'no' || userLanguage === 'sv' || userLanguage === 'sv-FI' ) {
        var pageLanguage = 'da';
    } else {
        var pageLanguage = 'en';
    }

    var buttonText = "BUY NOW";
    if (pageLanguage === 'da') { buttonText = "KØB NU"; }

    var options = {
      "product": {
      "variantId": "all",
      "width": "240px",
      "contents": {
        "img": false,
        "title": false,
        "variantTitle": false,
        "price": false,
        "description": false,
        "buttonWithQuantity": false,
        "quantity": false
      },
      "text": {
        "button": "BUY NOW"
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "button": {
          "background-color": "#3e89cc",
          "padding-left": "12px",
          "padding-right": "12px",
          "width": "100%",
          ":hover": {
            "background-color": "#387bb8"
          },
          ":focus": {
            "background-color": "#387bb8"
          }
        }
      }
    },
    "cart": {
      "contents": {
        "button": true
      },
      "styles": {
        "button": {
          "background-color": "#3e89cc",
          ":hover": {
            "background-color": "#387bb8"
          },
          ":focus": {
            "background-color": "#387bb8"
          }
        },
        "footer": {
          "background-color": "#ffffff"
        }
      }
    },
    "modalProduct": {
      "contents": {
        "variantTitle": false,
        "buttonWithQuantity": false,
        "quantity": false
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "background-color": "#3e89cc",
          "padding-left": "80px",
          "padding-right": "80px",
          ":hover": {
            "background-color": "#387bb8"
          },
          ":focus": {
            "background-color": "#387bb8"
          }
        }
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "background-color": "#3e89cc",
          ":hover": {
            "background-color": "#387bb8"
          },
          ":focus": {
            "background-color": "#387bb8"
          }
        }
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    }
  }

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [9762837319],
        node: document.getElementById('product-component-c69768b99ab'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: options
      });
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [9718377607],
        node: document.getElementById('product-component-32e80b34e9c'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: options
      });
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [9542061511],
        node: document.getElementById('product-component-ef1da729b1e'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: options
      });
    });    
    
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [9542082567],
        node: document.getElementById('product-component-a15233353a7'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: options
      });
    }); 
  }
})();