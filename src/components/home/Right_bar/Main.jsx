import CategoryList from "./CategoryList";

import { Cdate } from "./data";

const CategoryListMain = () => {
    return ( 
       
        <CategoryList  data={Cdate}/>
       
      
     );
}
 
export default CategoryListMain;




{/* <Grid sx={{mt:"15%", display: {  xs: "flex", md: "none" } }}>
<RightbarDrawer />
</Grid> 
<Grid sx={{ display: { md: "flex", xs: "none" } }}>
<CategoryListMain/>
</Grid> */}