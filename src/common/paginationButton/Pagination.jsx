import React from 'react'

const Pagination = () => {
  return (
     <>
      <Grid
        container
        sx={{ mr: 8, mb: 2, display: { xs: "none", md: "flex" } }}
      >
        <Grid xs={12} md={6} sx={{ width: "100%" }}>
          <Fab
            onClick={props.NextClick}
            sx={{}}
            color="##e8eaf6"
            aria-label="add"
          >
            <ArrowBackOutlinedIcon />
          </Fab>
        </Grid>
        <Grid xs={12} md={6} sx={{ width: "100%" }}>
          <Fab
            onClick={props.prevClick}
            sx={{}}
            color="##e8eaf6"
            aria-label="edit"
          >
            <ArrowForwardOutlinedIcon />
          </Fab>
        </Grid>
      </Grid>
    </>
  )
}

export default Pagination