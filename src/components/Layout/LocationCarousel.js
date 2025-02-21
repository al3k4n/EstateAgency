import React from 'react'
import { DummyLocation } from './dummy-data'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { Link } from 'react-router-dom';

function LocationCarousel() {
  return (
    <Box
    sx={{
      display: 'flex',
      gap: 1,
      py: 1,
      overflow: 'auto',
      width: 243,
      scrollSnapType: 'x mandatory',
      '& > *': {
        scrollSnapAlign: 'center',
      },
      '::-webkit-scrollbar': { display: 'none' },
    }}
  >
    {DummyLocation.map((item) => (
      <div>
        <Link to='/categories'>
      <Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
        <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
          <img
            src={`${item.src}?h=120&fit=crop&auto=format`}
            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
          />
        </AspectRatio>
        <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
          <Typography level="title-md">{item.title}</Typography>
          <Typography level="body-sm">{item.description}</Typography>
        </Box>
      </Card>
      </Link>
      </div>
    ))}
  </Box>
  )
}

export default LocationCarousel