import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";

function App() {
  return (
    <>
      <Typography
        variant="h3"
        color="#E4ECF1"
        margin="auto"
        width="max-content"
        fontWeight="500"
      >
        TODO APP
      </Typography>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: "40px",
          padding: "20px",
          bgcolor: "rgba(255, 255, 255, 0.75)",
          borderRadius: "12px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(3.7px)",
          WebkitBackdropFilter: "blur(3.7px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Stack spacing={1} direction={"row"} width="80%">
          <TextField
            aria-label="Input Field"
            label="Add Todo"
            size="small"
            fullWidth
          ></TextField>
          <IconButton
            size="medium"
            aria-label="Add"
            sx={{ bgcolor: "#a6d7cef4" }}
          >
            <AddIcon sx={{ color: "#315DAF" }} />
          </IconButton>
        </Stack>
        <Typography>Empty List</Typography>
        <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
          <Typography
            variant="body"
            id="todo-list"
            sx={{
              width: "100%",
              bgcolor: "#78CEC0",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            First Item
          </Typography>
          <IconButton
            aria-label="Update"
            size="large"
            sx={{ bgcolor: "#78CEC0" }}
          >
            <CreateTwoToneIcon sx={{ color: "#26695E" }} />
          </IconButton>
          <IconButton
            aria-label="Delete"
            size="large"
            sx={{ bgcolor: "#78CEC0" }}
          >
            <DeleteIcon sx={{ color: "#EF767A" }} />
          </IconButton>
        </Stack>
      </Container>
    </>
  );
}

export default App;
