import { List } from "@mui/material";
import { Box } from "@mui/system";
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {
  return (
    <div>
      <Box sx={{ pr: { xs: 0, md: 0, lg: 0 } }}>
        <List
          sx={{
            width: "100%",
            alignItems: "center",
            borderLeft: "1.5px solid #9999",
          }}
        >
          {props.data.map((item) => (
            <CategoryItem key={item.id} {...item} />
          ))}
        </List>
      </Box>
    </div>
  );
};

export default CategoryList;
