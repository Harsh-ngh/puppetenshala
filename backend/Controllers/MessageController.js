import messageModel from "../Models/Message.model.js";
// import useParams from 'react-router-dom';

 export const addMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const newMessage = new messageModel({ message });
        await newMessage.save();
        res.status(201).json({ message: "Message added successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
 };

 export const saveMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const newMessage = new messageModel({ message });
        await newMessage.save();
        res.status(201).json({ message: "Message added successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};


export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMessage = await messageModel.findByIdAndDelete(id);
        if (!deletedMessage) {
            return res.status(404).json({ message: "Message not found", success: false });
        }
        res.status(200).json({ message: "Message deleted successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const updateMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const { message } = req.body;
        const updatedMessage = await messageModel.findByIdAndUpdate(id, { message }, { new: true });
        if (!updatedMessage) {
            return res.status(404).json({ message: "Message not found", success: false });
        }
        res.status(200).json({ message: "Message updated successfully", success: true, data: updatedMessage });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const getMessage = async (req, res) => {
    const messages = await messageModel.find();
  try {
    res.status(200).json({ message: "Messages retrieved successfully", success: true, data: messages });
  }catch(err){
    res.status(500).json({ message: `Error : ${err}`, success: false });
  }
};


