
let menuList = [{
    menuName : "Dashboard1",
    menuId : 1,
    status : 1 
},{
    menuName : "Dashboard2",
    menuId : 2,
    status : 1
},{
    menuName : "Dashboard3",
    menuId : 3,
    status : 0 
},{
    menuName : "Dashboard4",
    menuId : 4,
    status : 0
     
     
}
];

let subMenuList = [
    {
        menuId : 1,
        subMenuName : "SubmenuName 1",
        order : 1 ,
        status : 1

    },
    {
        menuId : 1,
        subMenuName : "SubmenuNameA 1",
        order : 2 ,
        status : 1

    },
    {
        menuId : 1,
        subMenuName : "SubmenuNameB 1",
        order : 3,
        status : 0

    },
    {
        menuId : 2,
        subMenuName : "SubmenuNameA 2",
        order : 1

    },
    {
        menuId : 2,
        subMenuName : "SubmenuNameB 2",
        order : 2

    },
    {
        menuId : 3,
        subMenuName : "SubmenuNameC 3",
        order : 3

    }
];
let mainmenuList = [];
for ( let i = 0; i < menuList.length; i++)

{
    // if(menuList[i].status == 1) {

        let tempMenu = {
            menuName : menuList[i].menuName,
            menuId : menuList[i].menuId,
            subMenuList: [ ]
        }
        for( let j = 0; j < subMenuList.length; j++)
        {
            if( menuList[i].menuId == subMenuList[j].menuId )
            {
                tempMenu.subMenuList.push(subMenuList[j]);
            }
        }
        mainmenuList.push(tempMenu);
    // }

    
}
console.log(mainmenuList);
