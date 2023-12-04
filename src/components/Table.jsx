import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import photo from "../images/Avocado Hass.jpg"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { grey } from '@mui/material/colors';

//modal----
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    borderRadius: '6px',
    boxShadow: 24,
    p: 4,
    pl:5,
    pr:5,
    border: 'none !important'
  };



const Tablecomp = () => {

    const [open, setOpen] = React.useState(false);

    //modal------
    const handleOpen = (index) => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState([]);
    const [approved, setApproved] = useState(false);
    const [Missing, setMissing] = useState(false);
    const [urgentMissing, setUrgentMissing] = useState(false);
    

    //approve function
        const handleApprove = (index) => {
             setApproved(!approved);
             console.log(approved);
            // Create a copy of the data array
            const newData = [...data];
            // Toggle the approved state of the clicked item
            newData[index].approved = !newData[index].approved;
            // Update the state with the new data
            newData[index].Status = newData[index].approved ? 'Approved' : '';

            setData(newData);
         };

         //missing-urgent
         const handleUrgentMissing = (index)=>{
            setApproved(!approved);
            setUrgentMissing(!urgentMissing);
            const newData = [...data];
newData[index].urgentMissing = !newData[index].urgentMissing;

            newData[index].Status = newData[index].urgentMissing ? 'Missing Urgent': '';

         }
    

    useEffect(() => {
        axios.get('http://localhost:3000/products').then((res) => {
            console.log(res);
            setData(res.data);
        }).catch(err => console.log(err));
    }, []);


    return (
        <>
     
        <div className='table-box'>
          

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>img</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>last</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((d, ind) => (
                            <TableRow
                                key={d.ind}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                            <img style={{width: '50px'}} src={photo} alt="" />
                                </TableCell>
                                <TableCell align="left">{d.Product_name}</TableCell>
                                <TableCell align="left">{d.Brand}</TableCell>
                                <TableCell align="left">${d.Price}/6+1LB</TableCell>
                                <TableCell align="left">{d.Quantity}*6+1LB</TableCell>
                                <TableCell align="left">{d.Total}</TableCell>
                                <TableCell align="left" className='status'>
                                {/* {d.Status} */}
                                        {d.approved && (
                                            <span className='statuskagreentext' style={{ color: 'white',  borderRadius: "20px",  }}>Approved</span>
                                        )}
                                        {d.urgentMissing && (
<span className='statusUrgenttext'>Missing Urgent</span>
                                        )}
                                </TableCell>
                                <TableCell align="left" className='last-col'>
                                <CheckRoundedIcon
                                            onClick={() => handleApprove(ind)}
                                            className={d.approved ? 'greentick' : ''}
                                        />
                                    <CloseRoundedIcon onClick={()=>handleOpen(ind)}
                                    className={d.urgentMissing ? "redcross" : '' }
                                    />
                                    <span> Edit</span>
                                   </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

        {/* modal--------- */}
        <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="modal-head">
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 500 }}>
          Missing Product
          </Typography>
         <CloseRoundedIcon onClick={handleClose} sx={{color: grey}}/>
            </div>
          
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
        Is 'Chicken Breast Fillets,Boneless...' urgent?
          </Typography>
          <Typography sx={{mt: 4, display:'flex', justifyContent: 'flex-end', gap:4, }}>
          <button className='no'>No</button>
          <button onClick={()=>handleUrgentMissing()} className='yes'>Yes</button>
          </Typography>

        </Box>
      </Modal>
    </div>

        </>
    )
}

export default Tablecomp;