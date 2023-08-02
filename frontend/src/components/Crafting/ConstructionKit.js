import { Card, CardContent, CardHeader } from '@mui/material';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

const ConstructionKit = () => {
    const steps = [
        'Materialien auswählen',
        'Arbeitszeit festlegen',
        'Individualisierung',
        'Fertigstellung',
    ];

    return (
        <Card sx={{ width: '50%', margin: '10% 25% auto 25%' }} color="background.light" elevation={1}>
            <CardHeader
                title="Bausatz"
                subheader="Draft"
            />
            <CardContent>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ConstructionKit;