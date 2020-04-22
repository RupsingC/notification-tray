const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const shell = require('electron').shell

//const //iconPath = path.join(__dirname, 'img/icon.png');
const fbicon = path.join(__dirname, 'img/fbicon.png');
const twitter = path.join(__dirname, 'img/twitter.png');
const systematix = path.join(__dirname, 'img/systematix.png');
const greythr = path.join(__dirname, 'img/greythr.png');
const gmail = path.join(__dirname, 'img/gmail.png');
const srajansystematix = path.join(__dirname, 'img/srajan-systematix.png');
const ttms = path.join(__dirname, 'img/ttms.png');
const zoho = path.join(__dirname, 'img/zoho.png');
const logouticon = path.join(__dirname, 'img/logouticon.png');
const devtollbar = path.join(__dirname, 'img/devtollbar.png');


let appIcon = null;
let win = null;

app.on('ready', function(){
  win = new BrowserWindow({
    show: false,
    icon:systematix
  });
  appIcon = new Tray(systematix);
  var contextMenu = Menu.buildFromTemplate([
    {
      label:"SIPL Quick Links",
      // icon: systematix,
    },
    { 
      label: 'Systematix',
      click(){
        shell.openExternal('https://www.systematixinfotech.com/')
      },
      icon: systematix,
    },
    {type:"separator"},
    { 
      label: 'Greythr',
      click(){
        shell.openExternal('https://sipl.greythr.com/uas/portal/auth/login?login_challenge=85945a5a0aa04a4a84d24848cdff9f73')
      },
      icon: greythr,
    },
    {type:"separator"},
    { 
      label: 'Zoho',
      click(){
        shell.openExternal('https://projects.zoho.com/')
      },
      icon: zoho,
    },
    {type:"separator"},
    { 
      label: 'Srajan Systematix',
      click(){
        shell.openExternal('https://sites.google.com/a/systematixindia.com/systematix-intranet/home')
      },
      icon: srajansystematix,
    },
    {type:"separator"},
    { 
      label: 'TTMS',
      click(){
        shell.openExternal('http://ttms.siplstudio.com/TTMS/login.aspx')
      },
      icon: ttms,
    },
    {type:"separator"},
    { 
      label: 'Sipl Conference',
      click(){
        shell.openExternal('http://siplconference.systematixinfotech.com/accounts/login/?next=/dashboard/')
      },
      icon: systematix,
    },
    {type:"separator"},
    { 
      label: 'Gmail',
      click(){
        shell.openExternal('https://mail.google.com/')
      },
      icon: gmail,
  },    
    {type:"separator"},
    {
      label: 'Social Links',
      icon: systematix,
      submenu: [
        {
          label: 'Facebook',
          icon: fbicon,
          click(){
            shell.openExternal('https://www.facebook.com')
          },
        },
        {type:"separator"},    
        {
          label: 'Twitter',
          checked: true,    
          icon: twitter,
          click(){
            shell.openExternal('https://twitter.com/login?lang=en')
          },
        },
      ]
    },
    {type:"separator"},
    {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      icon: devtollbar,
      click: function() {
        win.show();
        win.toggleDevTools();
      }
    },
    { label: 'Quit',
      icon: logouticon,
      click(){
        app.quit()
      }
    }
  ]);
  appIcon.setToolTip('SIPL Quick Links');
  appIcon.setContextMenu(contextMenu);
});
