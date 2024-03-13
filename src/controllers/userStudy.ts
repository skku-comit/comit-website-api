import express, { Request, Response, NextFunction } from "express";
import moment from "moment";
import Study from "../models/study";
import connectDB from "../mongodb/connectDB";

export const getStudies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await connectDB();
        const studies = await Study.find();
        return res.status(200).json(studies);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getStudy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await connectDB();
        const studyId = req.params.id;
        const study = await Study.findById(studyId);
        return res.status(200).json(study);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const addStudy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await connectDB();
        
        const { imageSrc, title, mentor, day, startTime, endTime, level, stack, campus, description } = req.body;
        const createDate = moment().format("YYYY-MM-DD HH:mm:ss");
        const newStudy = await Study.create({
            status: "reviewing",
            imageSrc,
            title,
            mentor,
            day,
            startTime,
            endTime,
            level,
            stack,
            campus,
            description,
            createDate,
        });
        
        return res.status(200).json({ id: newStudy._id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const editStudy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await connectDB();
        
        const { id, imageSrc, title, mentor, day, startTime, endTime, level, stack, campus, description } = req.body;
        const update = { imageSrc, title, mentor, day, startTime, endTime, level, stack, campus, description };
        const study = Study.findOneAndUpdate({ _id: id }, update, { new: true });
        
        return res.status(200).json(study);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}