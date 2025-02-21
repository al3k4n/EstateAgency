import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { HouseData } from './houselist-data';
import { Link } from 'react-router-dom';

export default function EstateList() {
  
  return (
    <div className='grid lg:grid-cols-3 gap-10'>
      {
     HouseData.map((items) => {
      return(
        <Card sx={{ minHeight: '280px', width: 320 }}>
        <CardCover>
          <img
           key={items.state}
            src={items.src}
            srcSet={items.srcset}
            loading="lazy"
            alt={items.state}
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography  level="title-lg" textColor="#fff" mb={15} >
           <button className=' bg-[red] text-sm p-1 rounded ' >{items.status}</button>
          </Typography>
          <Typography level="title-lg" textColor="#fff" mb={1}>
           <span>&#8358;</span> {items.price}
          </Typography>
          <Typography
            startDecorator={<LocationOnRoundedIcon />}
            textColor="neutral.300"
          >
            {items.state}
           
          </Typography>
          <Typography  level="title-lg" textColor="#fff" mt={1} >
            <Link to='/propertyinfo'>
           <button className=' bg-[red] p-2 rounded cursor-pointer' >Read more</button>
           </Link>
          </Typography>
        </CardContent>
       
      </Card>
      )
     })

      }
    </div>
   
  );
}