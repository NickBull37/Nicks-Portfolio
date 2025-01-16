import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const SectionHeader = styled(Typography)(({ theme }) => ({
    fontSize: '3.75rem',
    fontWeight: '600',
    color: '#fff',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.5rem',
    }
}));

export default SectionHeader;
