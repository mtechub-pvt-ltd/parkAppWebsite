import { Box, Container, Divider, Grid, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import footerlogo from "../../parkwebAssets/footerlogo.png"
import "../../styles/Footer.css"
import { Form, Input, Button } from 'antd';
import Resfooter from '../resfooter/Resfooter'

const { TextArea } = Input;

export default function Footer() {
  const navigate = useNavigate();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 320,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: " 10px",
    boxShadow: 0,
    p: 6,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }} className="footer">
        <Divider Color="#1A513B" sx={{ height: "0.1vh", marginBottom: "5%", marginTop: "5%", fontWeight: "bolder" }} />
        <Grid container spacing={2}>
          <Grid item md={6} lg={6}>
            <NavLink to="/"><img src={footerlogo} alt="..." /></NavLink>
          </Grid>
          <Grid item md={6} lg={6}>
            <Stack direction="row" spacing={3} mt="3.5%" sx={{ color: "#454F63", marginBottom: "5%", cursor: "pointer" }}>
              <Typography variant="paragraph" onClick={() => navigate("/privacypolicy")}>Privacy Policy</Typography>
              <Typography variant="paragraph" onClick={() => navigate("/termandcondition")}>Terms & Condition</Typography>
              {/* <Typography variant="paragraph" onClick={() => navigate("/helpandsupport")}>Help And Support</Typography> */}
              <Typography variant="paragraph" onClick={() => navigate("/aboutus")}>About Us</Typography>
              <Typography variant="paragraph" onClick={handleOpen}>Contact Us</Typography>
            </Stack>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Stack align="center">
                <Typography variant="h4" fontWeight="bold" color="#1A513B">
                  Contact Us
                </Typography>
              </Stack>

              <Box sx={{ marginTop: "2vh" }}>
                <Form className="footer">
                  <Form.Item >
                    <Input placeholder='Full Name' style={{ borderColor: "#1A513B" }} />
                  </Form.Item>

                  <Form.Item >
                    <Input placeholder='Email' style={{ borderColor: "#1A513B" }} />
                  </Form.Item>

                  <Form.Item >
                    <TextArea placeholder='Your Messege' rows={4} style={{ borderColor: "#1A513B" }} />
                  </Form.Item>

                  <Form.Item >
                    <Button style={{ width: "100%", backgroundColor: "#1A513B", color: "white" }}>Submit</Button>
                  </Form.Item>
                </Form>
              </Box>

            </Box>
          </Modal>
        </Grid>
      </Box>
      <Resfooter />
    </>
  )
}
