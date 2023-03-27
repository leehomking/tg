class Menu {
    subMenus?:Menu[]
    desc:String = ""
    route:String = ""
    icon:String = ""
    id: String="0"
}

const menuTree:Menu[] = [
    {
        subMenus:[{
            id:"1-1",
            desc: "权限管理",
            route: "",
            icon:""
        },{
            id: "1-2",
            desc: "用户信息",
            route: "",
            icon:""
        }],
        id: "1",
        desc: "用户管理",
        route: "",
        icon:""
    },
    {
        subMenus:[{
            id: "2-1",
            desc: "数据管理",
            route: "",
            icon:""
        }],
        id: "2",
        desc: "数据管理",
        route: "",
        icon:""
    },
    {
        subMenus:[{
            id: "3-1",
            desc: "数据管理",
            route: "",
            icon:""
        }],
        id: "3",
        desc: "内容管理",
        route: "",
        icon:""
    },
    {
        subMenus:[{
            id: "4-1",
            desc: "数据管理",
            route: "",
            icon:""
        }],
        id: "4",
        desc: "消息通知",
        route: "",
        icon:""
    }
]

export default menuTree