import React from "react";
import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";

const DataClientForm = () => {
    return (
        <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
                Ingresa tus datos para continuar
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Tu Nombre
                    </Typography>
                    <Input
                        type="text"
                        size="lg"
                        label="Nombre"
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Tu Apellido
                    </Typography>
                    <Input
                        type="text"
                        size="lg"
                        label="Apellido"
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Número de teléfono
                    </Typography>
                    <Input
                        type="number"
                        size="lg"
                        label="Teléfono"
                    />
                </div>
            </form>
        </Card>
    );
}

export default DataClientForm;