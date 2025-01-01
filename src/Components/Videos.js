import React from 'react'
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';


const Videos = ({videos,direction}) => {

  if(!videos?.length) return 'Loading...';
  return (
    <div>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start"
      gap={2}>
        {
            videos.map((item,idx)=>(
                <Box key={idx}>
                    {
                        item.id.videoId && <VideoCard
                            video={item}
                        />
                    }
                    {
                        item.id.channelId && <ChannelCard
                            channeldetail={item}
                        />
                    }
                </Box>
            ))
        }
      </Stack>
    </div>
  )
}

export default Videos
