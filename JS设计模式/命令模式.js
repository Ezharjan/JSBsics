const setCommand = function(button, command) {
    button.onClick = function() {
        command.excute();
    };
};

// --------------------  上面的界面逻辑由A完成，下面的由B完成

const menu = {
    updateMenu() {
        console.log('更新菜单');
    }
};

const updateCommand = function(receive) {
    return {
        excute: receive.updateMenu
    };
};

const updateCommandMenu = updateCommand(menu); // 创建命令

const button1 = document.getElementById('button1');
setCommand(button1, updateCommandMenu);