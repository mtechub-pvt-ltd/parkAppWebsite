import { Box } from '@mui/material'
import React from 'react'
import Group5748 from "../../parkwebAssets/Group5748.png"
import Group5738 from "../../parkwebAssets/Group5738.png"
import Group5739 from "../../parkwebAssets/Group5739.png"
import "../../styles/Sideshapes.css"

export default function Sideshapes() {
  return (
    <>
    <Box sx={{display:{xs:"none",sm:"none",md:"block"}}}>
        <img src={Group5748} alt="..." className='group_5748'/>
        <img src={Group5748} alt="..." className='group_5748_right'/>
        <img src={Group5739} alt="..." className='group_5739_left'/>
        <img src={Group5738} alt="..." className='group_5738_right'/>
        <img src={Group5748} alt="..." className='group_5748_right_1'/>
        <img src={Group5748} alt="..." className='group_5748_left'/>
        <img src={Group5738} alt="..." className='group_5738_right_2'/>
        <img src={Group5748} alt="..." className='group_5748_right_2'/>
        <img src={Group5739} alt="..." className='group_5739_left_1'/>
    </Box>
    </>
  )
}
