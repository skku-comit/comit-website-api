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

export const deleteStudy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const studyId = req.params.id;
        await Study.findOneAndDelete({ _id: studyId }, {});

        return res.status(200).json({ message: "Study is successfully deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
    
}