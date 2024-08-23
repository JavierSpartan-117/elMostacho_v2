import React from "react";
import {
    Card,
    Input,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import Calendar from "../Calendar";

const DetailsReservationForm = () => {
    return (
        <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
                Selecciona los servicios que deseas reservar
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Selecciona una categoria
                    </Typography>
                    <Select size="lg" label="Categoria">
                        <Option value="1">Corte de cabello</Option>
                        <Option value="2">Manicura</Option>
                        <Option value="3">Pedicura</Option>
                    </Select>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Seleccina un servicio
                    </Typography>
                    <Select size="lg" label="Servicio">
                        <Option value="1">Corte de cabello</Option>
                        <Option value="2">Manicura</Option>
                        <Option value="3">Pedicura</Option>
                    </Select>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Seleccione una fecha
                    </Typography>
                    <Calendar/>
                </div>
            </form>
        </Card>
    );
}

export default DetailsReservationForm;