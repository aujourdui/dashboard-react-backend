import Member from "../models/burger";

export const getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
