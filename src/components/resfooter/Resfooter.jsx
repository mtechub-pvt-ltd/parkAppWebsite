import { Box, Container, Divider, Modal, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate, NavLink } from "react-router-dom"
import footerlogo from "../../parkwebAssets/footerlogo.png"
import { Form, Input, Button } from 'antd';
import "../../styles/Resfooter.css"

const { TextArea } = Input;

export default function Resfooter() {
  const navigate = useNavigate();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
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
    <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }} className="res_footer">
      <Divider Color="#1A513B" sx={{ height: "0.1vh", marginBottom: "5%", marginTop: "5%", fontWeight: "bolder" }} />

      <Container>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{xs:0, sm:30}}>
          <NavLink to="/"><img src={footerlogo} alt="..." /></NavLink>
          <Box mt={{ xs: 0, sm: 0 }}>
            <Stack direction={{ xs: "column", sm: "column" }} spacing={{ xs: 1, sm: 1 }} sx={{ color: "#454F63", marginBottom: "5%", fontWeight: "medium" }}>
              <Typography variant="paragraph" onClick={() => navigate("/privacypolicy")}>Privacy Policy</Typography>
              <Typography variant="paragraph" onClick={() => navigate("/termandcondition")}>Terms & Condition</Typography>
              {/* <Typography variant="paragraph" onClick={() => navigate("/helpandsupport")}>Help And Support</Typography> */}
              <Typography variant="paragraph" onClick={() => navigate("/aboutus")}>About Us</Typography>
              <Typography variant="paragraph" onClick={handleOpen}>Contact Us</Typography>
            </Stack>
          </Box>
        </Stack>
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
      </Container>
    </Box>
  )
}
