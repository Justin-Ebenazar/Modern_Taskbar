const electron=require('electron');
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
const path=require('path');
const url=require('url');

let mainWindow;

function createWindow(){
    mainWindow=new BrowserWindow({minWidth:250,minHeight:100,maxHeight:500,maxWidth:150,transparent:true});
    mainWindow.loadURL(url.format({
        pathname :path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }));

    mainWindow.on('closed',()=>{
        mainWindow=null;
    })
}

app.on('ready',createWindow);