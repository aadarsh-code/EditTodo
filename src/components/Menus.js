import { Box, Button, Container, Typography, TextField } from "@mui/material";

import React, { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountMenu from "./Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InputAdornment from "@mui/material/InputAdornment";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Menus = () => {
  const [input, setinput] = useState("");
  const [list, setlist] = useState([]);
  const [editItem, seteditItem] = useState(null);
  const [isEdit, setisEdit] = useState(true);
  // useEffect(() => {
  //   setlist([...list, input]);
  // }, []);
  let name, value;

  const handleChange = (event) => {
    // name = event.target.name;
    // value = event.target.value;
    setinput(event.target.value);
  };

  const handleAdd = () => {
    if (!input) {
    } else if (input && !isEdit) {
      setlist(
        list.map((elem) => {
          if (elem.id === editItem) {
            return { ...elem, todos: input };
          }
          return elem;
        })
      );
      setisEdit(true);
      setinput("");
      seteditItem("");
    } else {
      const allinput = { id: new Date().getTime().toString(), todos: input };
      setlist([...list, allinput]);

      setinput("");
    }
  };
  const handleDelete = (index) => {
    console.log("deletr");
    const del = list.filter((elem) => {
      return elem.id !== index;
    });
    console.log(del);
    setlist(del);
  };
  const handleEdit = (id) => {
    const edit = list.find((elem) => {
      return elem.id === id;
    });
    setisEdit(false);
    setinput(edit.todos);
    seteditItem(id);
  };
  return (
    <>
      {console.log(input)}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box mt={1}>
          <Typography
            variant="h5"
            sx={{ fontSize: "25px", fontWeight: "bold" }}
          >
            TODO LIST
          </Typography>
        </Box>
        <Box mt={2} sx={{ display: "inline-flex", alignItems: "center" }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <EventNoteIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
            value={input}
            name="todos"
          />
          <Box ml={2}>
            <AddCircleIcon onClick={handleAdd} sx={{ fontSize: "40px" }} />
          </Box>
        </Box>
        <Box mt={1}>
          {list.map((item) => {
            return (
              <Container
                key={item.id}
                sx={{
                  border: "1px solid grey ",
                  width: "240px",
                  height: "80px",
                  padding: "14px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "10px",
                  marginRight: "50px",
                }}
              >
                <Typography variant="body1">{item.todos}</Typography>
                <Box p={1}>
                  <EditIcon
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  />
                  <DeleteIcon
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  />
                </Box>
              </Container>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Menus;
