export const FirstmainGrid ={
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding:6,
    mr:{xs:0,md:4},
    ml:5 ,
     display:"flex",
     flexDirection:"column",
      justifyContent:"center",
     alignItems:"center"
}


export const FirstBox ={
    borderBottom:"1px solid #ddd",width:"100%",mb:2,p:2
}


export const ImgStyle={
    width:{xs:260,md:"100%"},height:320,
    marginLeft:{xs:0 ,md:10},
    textAlign:"center"
}


export const ButtonStyle={
    width:"100%",fontSize:"18px",backgroundColor:"#fff",color:"#111",'&:hover':{backgroundColor:'#ddd'}
}


export const SeccondMainGrid ={
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding:4,
    display:"flex",
     flexDirection:"column",
     mt:2
}

export const InputStyle={
       
    input: { color: "#111", direction: "rtl", pr: 2 },
    label: { color: "#111" ,fontSize:'17px'},
    "& label.Mui-focused": {
      color: "#DB4444",
      fontWeight: "bold",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#DB4444ff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#111",
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        borderColor: "#111",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#DB4444",
      },
    },
}