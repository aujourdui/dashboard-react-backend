import Task from "../models/task";

export const getTasks = async (req, res) => {
  try {
    const members = await Task.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
