import ModelBox from "./widgest/ModelBox";
import ContainerGrid from "./widgest/ContainerGrid";
import { Box } from "@mui/material";

function Information_Product({}) {
  return (
    <Box>
      <ModelBox model={"کفش پاشنه دار زنانه"} />
      <ContainerGrid
        name={"کفش زنانه"}
        viewpost={"20"}
        price={"210,100"}
        model={"پاشنه دار"}
        AboutTitle={"این کفش مخصوص افراد خاص پسند و شیک پوش هست ."}
        alertTitle={"برای خرید این محصول فقد از پیج مربوطه اقدام کنید."}
      />
    </Box>
  );
}
export default Information_Product;
