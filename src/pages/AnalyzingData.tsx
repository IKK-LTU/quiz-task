
import * as React from 'react';
import {Box, Typography} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const AnalyzingData = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
			<Typography>Analyzing your data...</Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
export default AnalyzingData