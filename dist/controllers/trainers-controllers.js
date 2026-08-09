import { ClassSession } from "../models/class-session-model.js";
import { Booking } from "../models/booking-model.js";
import Jwt from "jsonwebtoken";
const findClassSession = async (ID) => {
    try {
        const requiredcalssSession = await ClassSession.findOne({ _id: ID });
        if (!requiredcalssSession) {
            console.log("required class session not found");
            return null;
        }
        return requiredcalssSession;
    }
    catch (err) {
        console.error("There is an error in findClassSession function", err);
    }
};
export const createClassSession = async (req, res) => {
    const { token } = req.cookies;
    const { _id, title, timeSlot, status, capacity } = req.body;
    try {
        const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
        const trainer = decoded.fullName;
        const isExist = await findClassSession(_id);
        console.log(isExist);
        if (isExist !== null) {
            return res.status(400).send("There is a class session that match this requirements");
        }
        const newClassSession = await ClassSession.create({
            title: title,
            trainer: trainer,
            timeSlot: timeSlot,
            status: status,
            capacity: capacity
        });
        res.status(201).send({
            msg: "Class session created successfully",
            data: newClassSession
        });
    }
    catch (err) {
        console.error("There is an error in createClassSession function: ", err);
    }
};
export const modifyClassSession = async (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        res.status(400).send("There is no _id in the body");
        return;
    }
    const isExist = await findClassSession(_id);
    if (!isExist) {
        return res.status(404).send("Class session not found");
    }
    const { title, timeslot, status, capacity } = req.body;
    const { token } = req.cookies;
    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const { fullName } = decoded;
    try {
        const updatedClassSession = await ClassSession.updateOne({ _id: _id }, { $set: { title: title,
                trainer: fullName,
                timeslot: timeslot,
                status: status,
                capacity: capacity
            } });
        if (!updatedClassSession) {
            res.status(400).send("Class session not updated");
            return;
        }
        res.status(200).send({
            msg: "Class session updated successfully",
            data: updatedClassSession
        });
    }
    catch (err) {
        console.error("There is an error in modifyClassSession function", err);
    }
};
export const deleteClassSession = async (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        res.status(400).send("There is no _id in the body");
        return;
    }
    try {
        const isExist = await findClassSession(_id);
        if (!isExist) {
            return res.status(404).send("Class session not found");
        }
        const deletedClassSession = await ClassSession.deleteOne({ _id });
        res.status(204).send({
            msg: "Class session deleted successfully",
            data: deletedClassSession
        });
    }
    catch (err) {
        console.error("There is an error in deleteClassSession function", err);
    }
};
export const viewAllBookings = async (req, res) => {
    const { token } = req.cookies;
    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const { fullName } = decoded;
    if (!fullName) {
        return res.status(400).send("fullName not found");
    }
    try {
        //first we need to search for all session to take an ID for it
        const allSessions = await ClassSession.find({ trainer: fullName });
        console.log(allSessions);
        if (!allSessions) {
            return res.status(404).send("You need to make class sessions");
        }
        let allBookings = [];
        //second loop for each session and take the id and search for bookings that linked with that id
        for (const session of allSessions) {
            const oneBooking = await Booking.findOne({ session_refernce: session._id, status: "booked" });
            allBookings.push(oneBooking);
        }
        if (!allBookings) {
            return res.status(404).send("There are no bookings");
        }
        res.status(200).send({
            msg: "bookings found successfully",
            data: allBookings
        });
    }
    catch (err) {
        console.error("There is an error in viewAllBookings function", err);
    }
};
//# sourceMappingURL=trainers-controllers.js.map