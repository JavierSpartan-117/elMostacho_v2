import { connection } from "../db/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getRoles = (req, res) => {
    connection.query("SELECT * FROM roles", (err, rows) => {
        if (err) {
            res.status(500).send("Error al obtener los roles");
        } else {
        res.json(rows);
        }
    });
};

export const login = (req, res) => {
    const { nombre, contrasenia } = req.body;
    const verificarUsuario = `SELECT * FROM usuarios WHERE nombre = ?`;

    if (!nombre || !contrasenia) {
        res.status(400).send("Faltan datos");
    } else {
        connection.query(verificarUsuario, [nombre], async (err, rows) => {
            if (err) {
                res.status(500).send("Error al verificar el usuario");
            } else {
                if (rows.length > 0) {
                    const usuario = rows[0];
                    const contraseniaValida = await bcrypt.compare(
                        contrasenia,
                        usuario.contrasenia
                    );

                    if (contraseniaValida) {
                        const token = jwt.sign(
                            {
                                id: usuario.id,
                                nombre: usuario.nombre,
                                id_role: usuario.id_role,
                            },
                            "secretkey",
                            {
                                expiresIn: "1h",
                            }
                        );

                        res.json({ token });
                    } else {
                        res.status(401).send("Contraseña incorrecta");
                    }
                } else {
                    res.status(404).send("Usuario no encontrado");
                }
            }
        });
    }
};

export const register = (req, res) => {
    const { nombre, contrasenia, id_role } = req.body;
    const verificarUsuario = `SELECT * FROM usuarios WHERE nombre = ?`;

    if (!nombre || !contrasenia || !id_role) {
        res.status(400).send("Faltan datos");
    } else {
        connection.query(verificarUsuario, [nombre], async (err, rows) => {
            if (err) {
                res.status(500).send("Error al verificar el usuario");
            } else {
                if (rows.length > 0) {
                    res.status(400).send("El usuario ya existe");
                } else {
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(contrasenia, salt);

                    const nuevoUsuario = {
                        nombre,
                        contrasenia: hashedPassword,
                        id_role,
                    };

                    connection.query(
                        "INSERT INTO usuarios SET ?",
                        [nuevoUsuario],
                        (err) => {
                            if (err) {
                                res.status(500).send("Error al registrar el usuario");
                            } else {
                                res.status(201).send("Usuario registrado");
                            }
                        }
                    );
                }
            }
        });
    }
}
