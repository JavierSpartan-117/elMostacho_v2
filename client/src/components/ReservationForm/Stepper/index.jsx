import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { UserIcon, Bars4Icon, CheckIcon } from "@heroicons/react/24/outline";
import DataClientForm from "../DataClientForm";
import DetailsReservationForm from "../DetailsReservationForm";

const Reservation = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    React.useEffect(() => {
        setIsLastStep(activeStep === 2);
        setIsFirstStep(activeStep === 0);
    }, [activeStep]);

    return (
        <div className="w-full px-4 py-4">
            <Stepper activeStep={activeStep}>
                <Step onClick={() => setActiveStep(0)}>
                    <UserIcon className="h-5 w-5" />
                    {activeStep === 0 && (
                        <div className="absolute -bottom-[4.5rem] w-max text-center">
                            <Typography variant="h6" color="blue-gray">
                                Paso 1
                            </Typography>
                            <Typography color="blue-gray" className="font-normal">
                                Datos del cliente
                            </Typography>
                        </div>
                    )}
                </Step>
                <Step onClick={() => setActiveStep(1)}>
                    <Bars4Icon className="h-5 w-5" />
                    {activeStep === 1 && (
                        <div className="absolute -bottom-[4.5rem] w-max text-center">
                            <Typography variant="h6" color="blue-gray">
                                Paso 2
                            </Typography>
                            <Typography color="blue-gray" className="font-normal">
                                Detalles de la reserva
                            </Typography>
                        </div>
                    )}
                </Step>
                <Step onClick={() => setActiveStep(2)}>
                    <CheckIcon className="h-5 w-5" />
                    {activeStep === 2 && (
                        <div className="absolute -bottom-[4.5rem] w-max text-center">
                            <Typography variant="h6" color="blue-gray">
                                Paso 3
                            </Typography>
                            <Typography color="blue-gray" className="font-normal">
                                Confirmación
                            </Typography>
                        </div>
                    )}
                </Step>
            </Stepper>
            <div className="mt-24">
                {activeStep === 0 && <DataClientForm />}
            </div>
            <div className="mt-24">
                {activeStep === 1 && <DetailsReservationForm />}
            </div>
            <div className="mt-8 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Anterior
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Siguiente
                </Button>
            </div>
        </div>
    );
};

export default Reservation;
