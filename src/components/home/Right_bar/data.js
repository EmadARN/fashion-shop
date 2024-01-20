import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import DiamondIcon from '@mui/icons-material/Diamond';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
export const Cdate =[
    {
        id : 1,
        title : "مردانه",
        type:"button",
        icon:<ManIcon className="iconhover" sx={{color:"#555"}}/>,
        content :[
            {
                text:"کفش مردانه",
                pushLink :"#/profile1"
            },

            {
                text:"ساعت مردانه",
                pushLink :"#/profile2"
            },

            {
                text:"ورزشی مردانه",
                pushLink :"#/profile3"
            },


        ]
    },
    {
        id:2,
        title:"زنانه",
        type : "button",
        icon:<WomanIcon className="iconhover" sx={{color:"#555"}}/>,
        content :[
            {
                text:"کفش زنانه",
                pushLink :"#/a2"
            },

            {
                text:"ساعت زنانه",
                pushLink :"#/a3"
            }

        ]
    },
    {
        id:3,
        title:"بچگانه",
        type : "text",
        icon:<ChildFriendlyIcon className="iconhover" sx={{color:"#555"}}/>,
        pushLink : "#/electronic"
    },
    {
        id:4,
        title:"کفش",
        type : "text",
        pushLink : "#/homestyle",
        icon:<RollerSkatingIcon className="iconhover" sx={{color:"#555"}}/>
    },
    {
        id:5,
        title:" اکسسوری",
        type : "text",
        pushLink : "#/medicine",
        icon:<DiamondIcon className="iconhover" sx={{color:"#555"}}/>
    },
    {
        id:6,
        title:"ورزشی",
        type : "text",
        pushLink : "#/sport",
        icon:<SportsSoccerIcon className="iconhover" sx={{color:"#555"}}/>
    }
    
]